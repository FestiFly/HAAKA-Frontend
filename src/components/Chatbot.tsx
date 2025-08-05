import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('HAAKA-chatbot-messages');
    if (savedMessages) {
      const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
      setMessages(parsedMessages);
    } else {
      // Set initial welcome message if no saved messages
      const welcomeMessage: Message = {
        id: '1',
        text: 'Hello! I\'m your HAAKA Creative assistant. How can I help you today? 👋',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      localStorage.setItem('HAAKA-chatbot-messages', JSON.stringify([welcomeMessage]));
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('HAAKA-chatbot-messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-close when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target as Node) && isOpen && window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle proper positioning on mobile and keyboard
  useEffect(() => {
    const handleResize = () => {
      // Force a reflow to ensure proper positioning
      if (chatbotRef.current && isOpen) {
        chatbotRef.current.style.transform = 'translateZ(0)';
      }
    };

    const handleViewportChange = () => {
      // Handle mobile keyboard by adjusting viewport units
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('orientationchange', handleViewportChange);
    
    // Call on mount
    handleResize();
    handleViewportChange();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('orientationchange', handleViewportChange);
    };
  }, [isOpen]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 50;
      setShowScrollButton(!isNearBottom);
    }
  };

  useEffect(() => {
    // Only auto-scroll if user is near the bottom
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      if (isNearBottom) {
        scrollToBottom();
      }
    }
  }, [messages]);

  const quickReplies = [
    "Tell me about your services",
    "What projects have you worked on?",
    "Do you have any open-source projects?",
    "Do you provide agentic AI solutions?",
  ];
  
  const handleSendMessage = async (messageText?: string) => {
  const textToSend = messageText || inputValue;
  if (!textToSend.trim()) return;

  const userMessage: Message = {
    id: Date.now().toString(),
    text: textToSend,
    sender: 'user',
    timestamp: new Date()
  };

  setMessages(prev => [...prev, userMessage]);
  setInputValue('');
  setIsTyping(true);

  try {
    const res = await fetch('https://ajaychaki-chatbot-haaka.hf.space/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: textToSend })
    });

    const data = await res.json();

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: data.response?.result || data.response || "⚠️ Sorry, I couldn't understand that.",
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
  } catch (error) {
    const errorMessage: Message = {
      id: (Date.now() + 2).toString(),
      text: "❌ Failed to connect to the chatbot server. Please try again later.",
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, errorMessage]);
  } finally {
    setIsTyping(false);
  }
};


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputFocus = () => {
    // Scroll to bottom when input is focused (mobile keyboard)
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const clearChatHistory = () => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: 'Hello! I\'m your HAAKA Creative assistant. How can I help you today? 👋',
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
    localStorage.setItem('HAAKA-chatbot-messages', JSON.stringify([welcomeMessage]));
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-[99999] bg-black/20 backdrop-blur-3xl text-white rounded-2xl shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 border border-white/20 ${isOpen ? 'hidden' : 'flex'} md:flex`}
        style={{
          width: window.innerWidth < 768 ? '48px' : '56px',
          height: window.innerWidth < 768 ? '48px' : '56px',
          minWidth: window.innerWidth < 768 ? '48px' : '56px',
          minHeight: window.innerWidth < 768 ? '48px' : '56px',
          padding: 0
        }}
      >
        <img src="/haaka.png" alt="HAAKA Logo" className="h-full w-full object-contain opacity-80" style={{maxWidth:'80%',maxHeight:'80%'}} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatbotRef}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 1,
              y: 0
            }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed md:bottom-8 md:right-8 ${isMinimized ? 'bottom-0 right-0 left-0 md:left-auto' : 'bottom-0 right-0 left-0 top-0 md:left-auto md:top-auto'} z-[99999] w-screen ${isMinimized ? 'h-20 md:h-auto' : 'md:h-auto'} md:w-96 bg-white/10 backdrop-blur-3xl md:rounded-3xl rounded-none md:shadow-2xl overflow-hidden md:border border-white/20 border-none`}
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              transform: 'translateZ(0)', // Force hardware acceleration for consistent positioning
              WebkitBackfaceVisibility: 'hidden', // Prevent rendering issues on mobile
              backfaceVisibility: 'hidden',
              height: window.innerWidth >= 768 ? 'auto' : (isMinimized ? '80px' : 'calc(var(--vh, 1vh) * 100)')
            }}
          >
            {/* Header */}
            <div className="bg-black/30 backdrop-blur-xl text-white p-4 md:rounded-t-3xl rounded-t-none border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 overflow-hidden">
                      <img src="/haaka.png" alt="HAAKA Logo" className="w-7 h-7 object-contain" />
                    </div>                  </div>
                  <div>
                    <h3 className="font-bold text-sm">HAAKA Assistant</h3>
                    
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={clearChatHistory}
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/10"
                    title="Clear Chat"
                  >
                    <Sparkles size={14} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/10"
                  >
                    {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/10"
                  >
                    <X size={16} />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full md:h-[480px] relative"
                >
                  {/* Messages - Scrollable Area */}
                  <div 
                    ref={messagesContainerRef}
                    onScroll={handleScroll}
                    className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent scroll-smooth custom-scrollbar" 
                    style={{
                      scrollBehavior: 'smooth',
                      maxHeight: window.innerWidth >= 768 ? '380px' : 'calc(var(--vh, 1vh) * 100 - 240px)'
                    }}
                  >
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`flex w-full ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex flex-col w-full max-w-[95vw] md:max-w-[420px] ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                          {/* Icon on top */}
                          <div className="mb-1 flex items-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                message.sender === 'user'
                                  ? 'bg-black/20 backdrop-blur-xl text-white border border-white/20'
                                  : 'bg-white/20 backdrop-blur-xl text-black border border-white/30'
                              }`}
                            >
                              {message.sender === 'user' ? <User size={14} /> : <img src="/haaka.png" alt="HAAKA Logo" className="w-5 h-5 object-contain" />}
                            </motion.div>
                          </div>
                          {/* Message bubble below icon, full width, with extra horizontal padding */}
                          <div className={`rounded-2xl px-6 md:px-8 py-3 ${
                            message.sender === 'user'
                              ? 'bg-black/20 backdrop-blur-xl text-white rounded-tr-md border border-white/20 self-end text-right'
                              : 'bg-white/10 backdrop-blur-xl text-white border border-white/20 rounded-tl-md shadow-sm self-start text-left'
                          }`} style={{maxWidth: '80%'}}>
                            <p className="text-sm leading-relaxed break-words">{message.text}</p>
                          </div>
                          {/* Time below the bubble, outside the container */}
                          <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70 self-end pr-2' : 'text-white/60 self-start pl-2'}`} style={{maxWidth: '80%'}}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    {/* Quick Replies - Only show if it's the first bot message */}
                    {messages.length === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap gap-2 px-2"
                      >
                        {quickReplies.map((reply, index) => (
                          <motion.button
                            key={reply}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleSendMessage(reply)}
                            className="px-3 py-2 text-xs bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:text-white transition-all duration-200 shadow-sm"
                          >
                            {reply}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}

                    <AnimatePresence>
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex justify-start"
                        >
                          <div className="flex items-end space-x-2">
                            <div className="w-8 h-8 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center overflow-hidden">
                              <img src="/haaka.png" alt="HAAKA Logo" className="w-5 h-5 object-contain" />
                            </div>
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                              <div className="flex space-x-1">
                                <motion.div
                                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                                  className="w-2 h-2 bg-white/60 rounded-full"
                                />
                                <motion.div
                                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                                  className="w-2 h-2 bg-white/60 rounded-full"
                                />
                                <motion.div
                                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                                  className="w-2 h-2 bg-white/60 rounded-full"
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Scroll to Bottom Button */}
                    <AnimatePresence>
                      {showScrollButton && (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={scrollToBottom}
                          className="absolute bottom-20 right-6 w-10 h-10 bg-black/20 backdrop-blur-xl text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black/30 transition-colors z-50 border border-white/20"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 14L12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 7L12 12L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.button>
                      )}
                    </AnimatePresence>

                    <div ref={messagesEndRef} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input Area - Fixed at bottom on mobile */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="fixed md:relative bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-auto p-4 bg-black/10 backdrop-blur-xl border-t border-white/10 z-50"
                  style={{
                    paddingBottom: window.innerWidth >= 768 ? '16px' : 'calc(16px + env(safe-area-inset-bottom))'
                  }}
                >
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20 focus-within:border-white/40 transition-colors duration-200">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      onFocus={handleInputFocus}
                      placeholder="Type your message..."
                      className="flex-1 bg-transparent text-white px-3 py-2 text-sm focus:outline-none placeholder-white/50"
                      style={{ fontSize: '16px' }} // Prevent zoom on iOS
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim()}
                      className="w-10 h-10 bg-black/20 backdrop-blur-xl text-white rounded-xl flex items-center justify-center hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 border border-white/20"
                    >
                      <Send size={16} />
                    </motion.button>
                  </div>
                  <p className="text-xs text-white/50 mt-2 text-center">
                    Powered by HAAKA Creative AI
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;