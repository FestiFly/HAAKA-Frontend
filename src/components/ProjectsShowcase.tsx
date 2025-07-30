import React from 'react';
import { useNavigate } from 'react-router-dom';
import hariharanImg from '../assets/pics/hariharan.png';
import ajaychakravarthyImg from '../assets/pics/ajaychakravarthy.png';
import akilImg from '../assets/pics/akil.png';
import akashImg from '../assets/pics/akash.png';
import kavinImg from '../assets/pics/kavin.png';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Calendar, Award, ArrowRight, Code, Globe, Star, Eye } from 'lucide-react';

// Helper to create a URL-friendly slug from a string
const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

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

const ProjectsShowcase = () => {
  const navigate = useNavigate();
  const now = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Date/Info top right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-8 right-8 text-sm font-light tracking-wider z-20"
        >
          <div>{now}</div>
          <div className="mt-1">COIMBATORE</div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-8">
            SELECTED
            <br />
            PROJECTS
          </h2>
          <p className="text-lg font-light max-w-2xl opacity-80">
            A curated collection of our most impactful work, showcasing innovation, technical excellence, and transformative digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => navigate(`/project/${slugify(project.title)}`)}
            >
              {/* Project Card */}
              <div className="border border-gray-800 hover:border-white transition-all duration-500 overflow-hidden group-hover:bg-white group-hover:text-black">
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-10 transition-all duration-700"></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="ml-4 w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-40 transition-all duration-300"
                      >
                        <ArrowRight size={20} />
                      </motion.button>
                      <p className="text-white font-medium mt-2">Full Details</p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-light tracking-widest opacity-60 group-hover:opacity-100">
                      {project.year} • {project.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Users size={14} className="opacity-60" />
                      <span className="text-xs opacity-60">{project.team.length}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 tracking-wider group-hover:text-black transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium mb-3 opacity-80 group-hover:opacity-100 group-hover:text-black transition-all duration-300">
                    {project.subtitle}
                  </p>

                  <p className="text-sm leading-relaxed font-light opacity-70 group-hover:opacity-90 group-hover:text-black transition-all duration-300 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-light border border-gray-600 group-hover:border-black rounded-full transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-light opacity-60">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
