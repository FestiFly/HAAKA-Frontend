import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star, Award, Target, Zap, Shield, Globe, Code, Database, Smartphone, Monitor, Server, Cloud, Lock, Cpu, Layers, GitBranch, Play, Image as ImageIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';
import hariharanImg from '../assets/pics/hariharan.png';
import ajaychakravarthyImg from '../assets/pics/ajaychakravarthy.png';
import akilImg from '../assets/pics/akil.png';
import akashImg from '../assets/pics/akash.png';
import kavinImg from '../assets/pics/kavin.png';

const ProjectDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  // Project type definition
  interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    fullDescription: string;
    image: string;
    technologies: string[];
    team: { name: string; image: string }[];
    github: string;
    website: string;
    year: string;
    category: string;
    status: string;
    features: string[];
    challenges: string[];
    impact: string[];
    demoImages?: string[];
  }

  // Define state at the top level, unconditionally
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Fetch project data based on the title
  // Helper to create a URL-friendly slug from a string
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

  useEffect(() => {
    const fetchProject = async () => {
      const projects = [
  {
    id: 1,
    title: "FESTIFLY",
    subtitle: "AI-Powered Festival Discovery Platform",
    description: "FestiFly is an AI-powered festival companion platform that helps users discover, plan, and experience cultural and local festivals effortlessly.",
    fullDescription: "FestiFly represents the future of festival discovery and planning. This comprehensive platform leverages cutting-edge AI technology to transform how people discover, plan, and experience cultural events. Built with a sophisticated React-Vite frontend and robust Django backend, FestiFly integrates real-time Reddit data analysis, intelligent planning algorithms, and immersive voice/video AI interfaces to create an unparalleled festival experience. The platform serves both festival-goers seeking authentic cultural experiences and event organizers looking to reach engaged audiences through data-driven insights and community engagement tools.",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["React-Vite", "Django", "MongoDB", "Tavus", "Lingo", "ElevenLabs", "Google OAuth", "Razorpay", "Reddit API"],
    team: [
      { name: "Hariharan", image: hariharanImg },
      { name: "AJAY CHAKRAVARTH", image: ajaychakravarthyImg },
      { name: "Akil", image: akilImg },
      { name: "Akash", image: akashImg },
      { name: "Kavin", image: kavinImg },
    ],
    github: "https://github.com/FestiFly/Bolt-Event-2025.git",
    website: "https://festifly.xyz",
    year: "2025",
    category: "AI Platform",
    status: "Live",
    features: [
      "AI-powered festival recommendations",
      "Real-time Reddit data integration",
      "Voice and video AI interfaces",
      "Smart planning and scheduling tools",
      "Community engagement features",
      "Payment integration with Razorpay",
      "Social authentication system"
    ],
    challenges: [
      "Seamless integration of multiple AI services",
      "Handling and processing real-time social data",
      "Designing intuitive voice and video interfaces",
      "Scaling for large user bases during major events"
    ],
    impact: [
      "Revolutionized festival discovery",
      "Boosted user engagement and retention",
      "Simplified event planning for users",
      "Connected diverse festival communities"
    ]
  },
  {
    id: 2,
    title: "LOVECONNECT",
    subtitle: "Relationship Companion Application",
    description: "A mobile-first app for couples to stay connected, organized, and emotionally in sync.",
    fullDescription: "LoveConnect is designed to help couples nurture their relationships through seamless communication and shared experiences. The app offers real-time messaging, collaborative notes, shared galleries, and a relationship timeline, all within a secure and private environment. Its romantic and intuitive interface ensures couples can easily organize their lives and strengthen their emotional bonds.",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["React-Vite", "Django", "MongoDB", "WebSockets", "JWT Authentication", "Cloud Storage"],
    team: [
      { name: "Hariharan", image: hariharanImg },
      { name: "AJAY CHAKRAVARTH", image: ajaychakravarthyImg },
      { name: "Akash", image: akashImg },
    ],
    github: "https://github.com/FestiFly/LoveConnect.git",
    website: "https://loveconnect.festifly.xyz",
    year: "2025",
    category: "Social Platform",
    status: "Live",
    features: [
      "Real-time messaging for couples",
      "Shared photo and video galleries",
      "Collaborative notes and planning",
      "Relationship timeline tracking",
      "Smart reminders for important dates",
      "Private and secure communication",
      "Romantic and user-friendly design"
    ],
    challenges: [
      "Ensuring real-time data sync",
      "Maintaining privacy and security",
      "Designing for emotional engagement",
      "Optimizing for mobile devices"
    ],
    impact: [
      "Improved communication between couples",
      "Enhanced relationship organization",
      "Strengthened emotional connections",
      "Simplified shared planning and memories"
    ]
  },
  {
    id: 3,
    title: "AGENTIC-AI",
    subtitle: "Advanced Autonomous Intelligence Player",
    description: "A next-gen AI platform for autonomous decision-making and intelligent automation.",
    fullDescription: "Agentic AI is an advanced platform focused on autonomous intelligence and decision-making. It utilizes state-of-the-art machine learning and AI models to automate complex tasks, analyze large datasets, and provide actionable insights. Designed for enterprise environments, Agentic AI integrates seamlessly with existing systems, offering scalable solutions for automation, analytics, and intelligent process management.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    team: [
      { name: "Hariharan", image: hariharanImg },
      { name: "Security Team", image: null },
      { name: "ML Engineers", image: null },
    ],
    github: "https://github.com/nexus/deepsecure-ai",
    website: "https://deepsecure.nexuscreative.com",
    year: "2024",
    category: "AI Security",
    status: "Enterprise",
    features: [
      "Real-time threat detection",
      "Machine learning-based analysis",
      "Automated incident response",
      "Comprehensive security dashboards",
      "Integration with existing tools",
      "Scalable microservices architecture",
      "Advanced reporting and analytics"
    ],
    challenges: [
      "Processing high-volume security data",
      "Minimizing false positive rates",
      "Ensuring real-time response times",
      "Integrating with diverse security tools"
    ],
    impact: [
      "Reduced security incident response time by 75%",
      "Improved threat detection accuracy",
      "Enhanced security team productivity",
      "Strengthened organizational security posture"
    ]
  },
];

      const foundProject = projects.find(p => slugify(p.title) === String(title).toLowerCase()) || null;
      setProject(foundProject);
    };

    fetchProject();
  }, [title]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const demoImages = project.demoImages || [
    project.image,
    "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  ];

  const detailedFeatures = [
    {
      title: "Advanced AI Integration",
      description: "Cutting-edge artificial intelligence algorithms that provide intelligent recommendations and automated decision-making capabilities.",
      icon: <Cpu size={24} />
    },
    // Add other detailed features here
  ];

  const architecture = {
    frontend: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express.js", "Python", "Django"],
    database: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    deployment: ["AWS", "Docker", "Kubernetes", "Vercel"]
  };

  const metrics = [
    { label: "Active Users", value: "50K+", icon: <Users size={20} /> },
    { label: "Performance Score", value: "98/100", icon: <Zap size={20} /> },
    { label: "Uptime", value: "99.9%", icon: <Server size={20} /> },
    { label: "Security Rating", value: "A+", icon: <Shield size={20} /> }
  ];

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % demoImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black text-white min-h-screen"
    >
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black border-b border-gray-800 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/projects')}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="font-medium hidden sm:inline">Back to Projects</span>
            </motion.button>
            <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
              <motion.a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base"
              >
                <Github size={16} />
                <span>View Code</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-6 text-white"
          >
            {project.title.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl md:text-3xl font-light tracking-wider mb-8 text-gray-300"
          >
            {project.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center space-x-8 text-sm text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={16} />
              <span>{project.team.length} Team Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code size={16} />
              <span>{project.category}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-black mb-12 text-white tracking-tighter">
            PROJECT SHOWCASE
          </h2>

          {/* Main Image */}
          <div className="relative mb-8">
            <motion.img
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              src={demoImages[selectedImageIndex]}
              alt={`${project.title} Demo ${selectedImageIndex + 1}`}
              className="w-full h-96 md:h-[600px] object-cover rounded-2xl cursor-pointer transition-all duration-700"
              onClick={() => setIsImageModalOpen(true)}
            />

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm"
            >
              {selectedImageIndex + 1} / {demoImages.length}
            </motion.div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-6 gap-4">
            {demoImages.map((image, index) => (
              <motion.img
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                src={image}
                alt={`${project.title} Thumbnail ${index + 1}`}
                className={`aspect-video object-cover rounded-lg cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 ${
                  index === selectedImageIndex
                    ? 'ring-2 ring-white opacity-100 grayscale-0'
                    : 'opacity-60 hover:opacity-100'
                }`}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-8 text-white tracking-tighter"
          >
            PROJECT OVERVIEW
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl leading-relaxed text-gray-300 max-w-7xl text-justify"
          >
            {project.fullDescription.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.02 }}
                viewport={{ once: true }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-black mb-12 text-white tracking-tighter">
            KEY METRICS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-20 group-hover:shadow-lg group-hover:shadow-white/20 transition-all duration-500"
                >
                  {metric.icon}
                </motion.div>
                <div className="text-3xl font-black text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400 font-light">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Features */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-black mb-12 text-white tracking-tighter">
            DETAILED FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="border border-gray-800 p-6 rounded-lg hover:border-white hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 text-white group-hover:text-black transition-colors duration-300"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-black transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-black transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-black mb-12 text-white tracking-tighter">
            TECHNICAL ARCHITECTURE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(architecture).map(([category, technologies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40, rotateY: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="border border-gray-800 p-6 rounded-lg hover:border-white hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-white group-hover:text-black mr-3 transition-colors duration-300"
                  >
                    {category === 'frontend' && <Monitor size={24} />}
                    {category === 'backend' && <Server size={24} />}
                    {category === 'database' && <Database size={24} />}
                    {category === 'deployment' && <Cloud size={24} />}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-black capitalize transition-colors duration-300">
                    {category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {technologies.map((tech) => (
                    <div key={tech} className="text-gray-400 group-hover:text-black text-sm transition-colors duration-300">
                      • {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-8 text-white tracking-tighter"
          >
            PROJECT TEAM
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40, rotateY: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-center border border-gray-800 rounded-lg p-6 bg-black hover:bg-white hover:text-black hover:border-white hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 group cursor-pointer relative"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 relative mr-8"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center shadow-lg ring-4 ring-white/10 group-hover:ring-white/40 transition-all duration-300 overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling!.classList.remove('hidden');
                        }}
                      />
                    ) : (
                      <Users size={32} className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </div>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold mb-1 text-white group-hover:text-black transition-colors duration-300 truncate">
                    {member.name}
                  </h3>
                  <div className="text-gray-400 group-hover:text-black text-sm transition-colors duration-300 mb-1">
                    Team Member
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center border-t border-gray-800 pt-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-black mb-8 text-white tracking-tighter"
          >
            INTERESTED IN SIMILAR WORK?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how we can bring your vision to life with the same level of excellence and innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-6 mb-16"
          >
            <motion.a
              href="mailto:hari@harlee.pro"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              Start a Project
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="px-8 py-4 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              View More Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-black bg-opacity-95 flex items-center justify-center p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={demoImages[selectedImageIndex]}
                alt={`${project.title} Full Size`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all duration-300"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectDetail;
