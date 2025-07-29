import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star, Award, Target, Zap, Shield, Globe, Code, Database, Smartphone, Monitor, Server, Cloud, Lock, Cpu, Layers, GitBranch, Play, Image as ImageIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    fullDescription: string;
    image: string;
    technologies: string[];
    team: { name: string; image: string | null }[];
    github: string;
    website: string;
    year: string;
    category: string;
    status: string;
    features: string[];
    challenges: string[];
    impact: string[];
    demoImages?: string[];
    detailedFeatures?: {
      title: string;
      description: string;
      icon: React.ReactNode;
    }[];
    architecture?: {
      frontend: string[];
      backend: string[];
      database: string[];
      deployment: string[];
    };
    metrics?: {
      label: string;
      value: string;
      icon: React.ReactNode;
    }[];
  };
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Demo images for the project (you can replace with actual project images)
  const demoImages = project.demoImages || [
    project.image,
    "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  ];

  const detailedFeatures = project.detailedFeatures || [
    {
      title: "Advanced AI Integration",
      description: "Cutting-edge artificial intelligence algorithms that provide intelligent recommendations and automated decision-making capabilities.",
      icon: <Cpu size={24} />
    },
    {
      title: "Real-time Data Processing",
      description: "Lightning-fast data processing and synchronization across multiple platforms with real-time updates and notifications.",
      icon: <Zap size={24} />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security protocols with end-to-end encryption, secure authentication, and comprehensive data protection.",
      icon: <Shield size={24} />
    },
    {
      title: "Scalable Architecture",
      description: "Cloud-native architecture designed to scale seamlessly from thousands to millions of users without performance degradation.",
      icon: <Cloud size={24} />
    },
    {
      title: "Cross-Platform Compatibility",
      description: "Responsive design that works flawlessly across all devices and platforms, providing consistent user experience.",
      icon: <Monitor size={24} />
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive analytics dashboard with real-time insights, custom reports, and predictive analytics capabilities.",
      icon: <Target size={24} />
    }
  ];

  const architecture = project.architecture || {
    frontend: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express.js", "Python", "Django"],
    database: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    deployment: ["AWS", "Docker", "Kubernetes", "Vercel"]
  };

  const metrics = project.metrics || [
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
      className="fixed inset-0 z-50 bg-black overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black border-b border-gray-800 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Projects</span>
            </motion.button>

            <div className="flex items-center space-x-4">
              <motion.a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
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
                className="flex items-center space-x-2 px-4 py-2 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
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
              className="w-full h-96 md:h-[600px] object-cover rounded-2xl cursor-pointer  transition-all duration-700"
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

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black mb-8 text-white tracking-tighter">
                CHALLENGES SOLVED
              </h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-2 border-2 border-black bg-white transition-all duration-300"
                    >
                      <span className="block w-2 h-2 rounded-full bg-black" />
                    </motion.div>
                    <p className="text-white leading-relaxed">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black mb-8 text-white tracking-tighter">
                PROJECT IMPACT
              </h2>
              <div className="space-y-6">
                {project.impact.map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ x: -5 }}
                    className="flex items-start space-x-4 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-2 border-2 border-black bg-white transition-all duration-300"
                    >
                      <span className="block w-2 h-2 rounded-full bg-black" />
                    </motion.div>
                    <p className="text-white
                     leading-relaxed">{impact}</p>
                  </motion.div>
                ))}
              </div>
            </div>
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
              onClick={onClose}
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