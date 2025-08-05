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

  // Auto-close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target as Node) && isOpen) {
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
        className={`fixed bottom-8 right-8 z-[9999] w-16 h-16 bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 border border-gray-700 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle size={24} />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatbotRef}
            initial={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              x: 0,
              height: isMinimized ? '80px' : '520px'
            }}
            exit={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-8 right-8 z-[9999] w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-black text-white p-4 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <Bot size={18} className="text-black" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">HAAKA Assistant</h3>
                    <p className="text-xs text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Online now
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={clearChatHistory}
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
                    title="Clear Chat"
                  >
                    <Sparkles size={14} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
                  >
                    {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
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
                  className="flex flex-col h-96 relative"
                >
                  {/* Messages - Scrollable Area */}
                  <div 
                    ref={messagesContainerRef}
                    onScroll={handleScroll}
                    className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scroll-smooth custom-scrollbar" 
                    style={{
                      scrollBehavior: 'smooth',
                      maxHeight: '300px'
                    }}
                  >
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-end space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.sender === 'user' 
                                ? 'bg-gradient-to-r from-gray-800 to-black text-white' 
                                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                            }`}
                          >
                            {message.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                          </motion.div>
                          <div className={`rounded-2xl px-4 py-3 max-w-xs ${
                            message.sender === 'user' 
                              ? 'bg-gradient-to-r from-gray-800 to-black text-white rounded-br-md' 
                              : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md shadow-sm'
                          }`}>
                            <p className="text-sm leading-relaxed">{message.text}</p>
                            <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'}`}>
                              {formatTime(message.timestamp)}
                            </p>
                          </div>
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
                            whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleSendMessage(reply)}
                            className="px-3 py-2 text-xs bg-white border border-gray-200 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-200 shadow-sm"
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
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center">
                              <Bot size={14} />
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                              <div className="flex space-x-1">
                                <motion.div
                                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                                  className="w-2 h-2 bg-gray-400 rounded-full"
                                />
                                <motion.div
                                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                                  className="w-2 h-2 bg-gray-400 rounded-full"
                                />
                                <motion.div
                                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                                  className="w-2 h-2 bg-gray-400 rounded-full"
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
                          className="absolute bottom-20 right-6 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors z-10"
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

                  {/* Input Area */}
                  <div className="p-4 bg-white border-t border-gray-100">
                    <div className="flex items-center space-x-3 bg-gray-50 rounded-2xl p-2 border border-gray-200 focus-within:border-gray-400 transition-colors duration-200">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 bg-transparent text-gray-800 px-3 py-2 text-sm focus:outline-none placeholder-gray-500"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSendMessage()}
                        disabled={!inputValue.trim()}
                        className="w-10 h-10 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl flex items-center justify-center hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <Send size={16} />
                      </motion.button>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 text-center">
                      Powered by HAAKA Creative AI
                    </p>
                  </div>
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