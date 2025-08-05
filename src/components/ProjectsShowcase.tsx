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
    description: "FestiFly is an AI-powered festival companion platform that helps users discover, plan, and experience cultural and local festivals effortlessly. Designed for both festival-goers and event organizers.",
    fullDescription: "FestiFly is an AI-powered festival companion platform that helps users discover, plan, and experience cultural and local festivals effortlessly. Designed for both festival-goers and event organizers, it leverages real-time Reddit data, smart planning tools, and immersive voice/video AI interfaces to enhance how people explore festivals around them. The platform fetches real-time festival content using Reddit's API, generates AI-powered itineraries, and provides multilingual voice & video concierge services. It includes integrated maps, travel, and accommodation booking, social vibe scoring based on Reddit sentiment, and an organizer portal with optional blockchain ticketing.",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["Bolt.new", "21st.dev", "ElevenLabs", "Tavus", "Reddit API", "Google Maps API", "RevenueCat", "Algorand", "Lingo", "Sentry"],
    team: [
      { name: "Harlee", image: hariharanImg },
      { name: "Ajay", image: ajaychakravarthyImg },
      { name: "Kavin", image: kavinImg },
      { name: "Akash", image: akashImg },
      { name: "Akil", image: akilImg },
    ],
    github: "https://github.com/FestiFly/Bolt-Event-2025.git",
    website: "https://festifly.xyz",
    year: "2025",
    category: "AI Platform",
    status: "Live",
    features: [
      "Real-time festival discovery from Reddit",
      "AI-powered itinerary planner",
      "Voice & Video AI concierge in local languages",
      "Integrated maps, travel, and accommodation",
      "Social vibe score based on Reddit sentiment",
      "Organizer portal with blockchain ticketing",
      "Monetization via subscriptions and affiliate links"
    ],
    challenges: [
      "Seamless integration of multiple AI services",
      "Real-time Reddit data processing and sentiment analysis",
      "Multilingual voice and video AI implementation",
      "Scaling for large user bases during major events"
    ],
    impact: [
      "Simplified cultural exploration and festival planning",
      "Enhanced festival discovery through AI and community data",
      "Boosted cultural tourism and local event engagement",
      "Connected festival communities globally"
    ]
  },
  {
    id: 2,
    title: "LOVECONNECT",
    subtitle: "Private Relationship Companion Platform",
    description: "A private relationship companion platform for couples, blending real-time chat, shared notes, collaborative to-dos, reminders, and a unique gallery of memories.",
    fullDescription: "LoveConnect is a private relationship companion platform for couples, blending real-time chat, shared notes, collaborative to-dos, reminders, and a unique gallery of memories. Designed with privacy at its core, it leverages modern tech to help couples connect, communicate, and cherish special moments together. The platform features secure real-time chat powered by WebSockets, shared note-taking with favorites and edit history, collaborative gallery for photos, smart reminders with notifications, and a 'Love Jar' for surprise notes. All data is scoped to a unique couple code ensuring complete privacy.",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Django", "Django REST", "Daphne ASGI", "MongoDB", "WebSockets", "JWT", "Cloudflare R2"],
    team: [
      { name: "Hariharan", image: hariharanImg },
      { name: "AJAY CHAKRAVARTH", image: ajaychakravarthyImg },
      { name: "Akash", image: akashImg },
    ],
    github: "https://github.com/FestiFly/LoveConnect.git",
    website: "https://loveconnect.haaka.online",
    year: "2025",
    category: "Social Platform",
    status: "Live",
    features: [
      "Secure real-time chat powered by WebSockets",
      "Shared note-taking with favorites and colors",
      "Collaborative gallery for uploading and captioning photos",
      "Smart reminders with priority and recurrence",
      "Love Jar for surprise notes and shared to-do lists",
      "Privacy-first: All data scoped to unique couple code",
      "JWT authentication across API and chat",
      "Modern React TypeScript frontend with dark mode"
    ],
    challenges: [
      "Implementing secure real-time WebSocket communication",
      "Ensuring complete data privacy between couples",
      "Designing intuitive collaborative interfaces",
      "Managing real-time synchronization across multiple features"
    ],
    impact: [
      "Helped couples deepen connection and communication",
      "Seamlessly managed shared memories and conversations",
      "Provided secure digital space for relationship building",
      "Enhanced collaborative planning and task management"
    ]
  },
  {
    id: 3,
    title: "AGENTIC-AI",
    subtitle: "Revolutionary AI Platform",
    description: "An unprecedented AI platform that will redefine autonomous intelligence and revolutionize enterprise automation. Currently in stealth mode with breakthrough innovations.",
    fullDescription: "Coming Soon",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["AI/ML", "Neural Networks", "Autonomous Systems", "Enterprise Integration"],
    team: [
      { name: "Elite AI Team", image: null },
      { name: "Research Division", image: null },
      { name: "Innovation Lab", image: null },
    ],
    github: null,
    website: null,
    year: "2025",
    category: "AI Innovation",
    status: "Coming Soon",
    comingSoon: true,
    features: [
      "Next-generation autonomous intelligence",
      "Revolutionary decision-making algorithms",
      "Seamless enterprise integration",
      "Advanced learning capabilities",
      "Unprecedented automation potential",
      "Industry-leading AI innovations"
    ],
    challenges: [],
    impact: []
  },
];

const ProjectsShowcase = () => {
  const navigate = useNavigate();
  const now = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();

  const handleProjectClick = (project: any) => {
    if (project.comingSoon) {
      // Don't navigate for coming soon projects
      return;
    }
    navigate(`/project/${slugify(project.title)}`);
  };

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Date/Info top right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-8 right-8 text-sm font-light tracking-wider z-10"
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
              className={`group h-full ${project.comingSoon ? 'cursor-default' : 'cursor-pointer'}`}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Card */}
              <div className={`border border-gray-800 transition-all duration-500 overflow-hidden h-full flex flex-col ${
                project.comingSoon 
                  ? 'bg-gray-900/50 border-gray-700' 
                  : 'hover:border-white group-hover:bg-white group-hover:text-black'
              }`}>
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden relative flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      project.comingSoon 
                        ? 'grayscale opacity-40' 
                        : 'grayscale group-hover:grayscale-0 group-hover:scale-105'
                    }`}
                  />
                  <div className={`absolute inset-0 transition-all duration-700 ${
                    project.comingSoon 
                      ? 'bg-black bg-opacity-70' 
                      : 'bg-black bg-opacity-40 group-hover:bg-opacity-10'
                  }`}></div>

                  {/* Coming Soon Badge */}
                  {project.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
                          <Star size={16} className="mr-2 text-yellow-400" />
                          <span className="text-white font-medium text-sm tracking-wider">COMING SOON</span>
                        </div>
                        <p className="text-white/80 text-sm">Revolutionary AI Platform</p>
                      </div>
                    </div>
                  )}

                  {/* Regular Hover Overlay */}
                  {!project.comingSoon && (
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
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-light tracking-widest ${
                      project.comingSoon 
                        ? 'opacity-40' 
                        : 'opacity-60 group-hover:opacity-100'
                    }`}>
                      {project.year} • {project.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Users size={14} className={project.comingSoon ? 'opacity-40' : 'opacity-60'} />
                      <span className={`text-xs ${project.comingSoon ? 'opacity-40' : 'opacity-60'}`}>
                        {project.team.length}
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 tracking-wider transition-colors duration-300 ${
                    project.comingSoon 
                      ? 'text-gray-400' 
                      : 'group-hover:text-black'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-sm font-medium mb-3 transition-all duration-300 ${
                    project.comingSoon 
                      ? 'opacity-50' 
                      : 'opacity-80 group-hover:opacity-100 group-hover:text-black'
                  }`}>
                    {project.subtitle}
                  </p>

                  <p className={`text-sm leading-relaxed font-light mb-4 flex-grow line-clamp-3 transition-all duration-300 ${
                    project.comingSoon 
                      ? 'opacity-40' 
                      : 'opacity-70 group-hover:opacity-90 group-hover:text-black'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs font-light border rounded-full transition-colors duration-300 ${
                          project.comingSoon 
                            ? 'border-gray-700 text-gray-500' 
                            : 'border-gray-600 group-hover:border-black'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`px-2 py-1 text-xs font-light ${
                        project.comingSoon ? 'opacity-30' : 'opacity-60'
                      }`}>
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