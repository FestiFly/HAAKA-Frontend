import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code, Brain, GraduationCap, Cloud, CheckCircle, Mail, Star, ArrowRight, FileText } from 'lucide-react';
import { BentoGrid, BentoGridItem } from "../components/UI/bento-grid";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
const services = [
  {
    icon: Bot,
    title: "AI CHATBOT DEVELOPMENT",
    description: "Custom smart bots for sales, support, or tasks.",
    technologies: "Python · LangChain · Gemini · Firebase"
  },
  {
    icon: Code,
    title: "FULL-STACK WEB DEVELOPMENT",
    description: "End-to-end scalable and secure web apps.",
    technologies: "Django · React · MongoDB"
  },
  {
    icon: Brain,
    title: "GENAI INTEGRATION",
    description: "Add intelligence to your apps.",
    technologies: "Gemini · Streamlit · Vertex AI"
  },
  {
    icon: GraduationCap,
    title: "STUDENT/TEACHER PLATFORMS",
    description: "Custom LMS & dashboards for educators.",
    technologies: "React · Django · MongoDB"
  },
  {
    icon: Cloud,
    title: "CLOUD & DEVOPS",
    description: "Smooth deployment and CI/CD workflows.",
    technologies: "Vercel · Docker · GitHub · Render"
  },
  {
  icon: FileText, 
  title: "AI RESUME & ATS TOOLS",
  description: "Smart resume analyzers and student assessments with AI.",
  technologies: "Python · ML · PDF Parsing · Streamlit"
  }
];

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

import aiExpertiseImg from "../assets/images/ai-expertise.jpg";
import scalableiarchitecturesImg from "../assets/images/scalable-architectures.jpg";
import fullstackGenaiImg from "../assets/images/fullstack-genai.jpg";
import reliableDeliveryImg from "../assets/images/reliable-delivery.jpg";
import trustedInnovatorsImg from "../assets/images/trusted-innovators.jpg";

const whyChooseItems = [
    {
        title: "Battle-Tested AI Expertise",
        description: "Built real-world GenAI solutions like DeepSecure & FestiFly used in production.",
        header: (
            <div className="aspect-square w-full flex items-center justify-center bg-neutral-900 rounded-xl overflow-hidden">
                <img src={aiExpertiseImg} alt="AI Expertise" className="object-cover w-full h-full rounded-xl" />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Scalable Architectures",
        description: "Every project is optimized for performance, scalability & maintainability.",
        header: (
            <div className="aspect-square w-full flex items-center justify-center bg-neutral-900 rounded-xl overflow-hidden">
                <img src={scalableiarchitecturesImg} alt="Scalable Architectures" className="object-cover w-full h-full rounded-xl" />
            </div>
        ),
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Full-Stack + GenAI Combo",
        description: "No need to hire two people   I handle both core dev & AI with finesse.",
        header: (
            <div className="aspect-square w-full flex items-center justify-center bg-neutral-900 rounded-xl overflow-hidden">
                <img src={fullstackGenaiImg} alt="Full-Stack GenAI" className="object-cover w-full h-full rounded-xl" />
            </div>
        ),
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Reliable Delivery",
        description: "Transparent communication, regular updates, and on-time completion guaranteed.",
        header: (
            <div className="aspect-square w-full flex items-center justify-center bg-neutral-900 rounded-xl overflow-hidden">
                <img src={reliableDeliveryImg} alt="Reliable Delivery" className="object-cover w-full h-full rounded-xl" />
            </div>
        ),
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Trusted by Innovators",
        description: "Recognized contributor in Google Cloud Hackathons & emerging AI communities.",
        header: (
            <div className="aspect-square w-full flex items-center justify-center bg-neutral-900 rounded-xl overflow-hidden">
                <img src={trustedInnovatorsImg} alt="Trusted by Innovators" className="object-cover w-full h-full rounded-xl" />
            </div>
        ),
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
];


const pricingPlans = [
  {
    type: "MONTHLY",
    name: "STARTER",
    price: "₹2,500",
    period: "/month",
    description: "Perfect for small projects and startups",
    features: [
      "1 AI Chatbot Development",
      "Basic Web Application",
      "Email Support",
      "2 Revisions Included",
      "1 Month Support"
    ],
    popular: false
  },
  {
    type: "MONTHLY",
    name: "PROFESSIONAL",
    price: "₹5,000",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "3 AI Chatbot Developments",
      "Full-Stack Web Application",
      "GenAI Integration",
      "Priority Support",
      "Unlimited Revisions",
      "3 Months Support",
      "Cloud Deployment"
    ],
    popular: true
  },
  {
    type: "ANNUAL",
    name: "ENTERPRISE",
    price: "₹45,000",
    period: "/year",
    description: "Complete solution for large organizations",
    features: [
      "Unlimited AI Solutions",
      "Custom LMS Platform",
      "Advanced GenAI Integration",
      "24/7 Priority Support",
      "Dedicated Account Manager",
      "12 Months Support",
      "Full DevOps Setup",
      "Performance Monitoring"
    ],
    popular: false
  }
];

const serviceBasedPricing = [
  {
    service: "AI CHATBOT DEVELOPMENT",
    price: "₹1,500 - ₹3,000",
    timeline: "2-4 weeks",
    description: "Custom intelligent chatbots tailored to your needs"
  },
  {
    service: "FULL-STACK WEB APP",
    price: "₹3,000 - ₹8,000",
    timeline: "4-8 weeks",
    description: "Complete web applications from concept to deployment"
  },
  {
    service: "GENAI INTEGRATION",
    price: "₹2,000 - ₹5,000",
    timeline: "3-6 weeks",
    description: "Add AI intelligence to your existing applications"
  },
  {
    service: "LMS PLATFORM",
    price: "₹5,000 - ₹12,000",
    timeline: "6-12 weeks",
    description: "Custom learning management systems for education"
  },
  {
    service: "CLOUD & DEVOPS SETUP",
    price: "₹1,000 - ₹3,000",
    timeline: "1-3 weeks",
    description: "Professional deployment and CI/CD workflows"
  },
  {
    service: "AI RESUME & ATS TOOL DEVELOPMENT",
    price: "₹1,000 - ₹2,500",
    timeline: "1-2 weeks",
    description: "Build AI-powered resume analyzers and assessment systems for students and job seekers"
  }
];

import{
    BiLogoPython,
    BiLogoTailwindCss,
} from "react-icons/bi";
import {
    FaReact,
    FaDocker,
    FaGithub,
    FaGit,
    FaMicrosoft,
} from "react-icons/fa";
import{
    SiDjango,
    SiMongodb,
    SiFirebase,
    SiVercel,
    SiLangchain,
    SiGooglecloud,
    SiStreamlit,
    SiPostman,
    SiJavascript,
    SiTypescript,
    SiOpenai,
} from "react-icons/si";
import {
  SiHtml5,
  SiCss3,
  SiExpress,
  SiFramer,
  SiFigma,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiCplusplus,
  SiNextdotjs,
  SiRedux,
  SiHuggingface,
} from "react-icons/si";

const skills = [
    {
        name: "Azure",
        label: "Azure",
        icon: <FaMicrosoft size={40} className="text-black dark:text-white" />,
    },
    {
        name: "CSS3",
        label: "CSS3",
        icon: <SiCss3 size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Django",
        label: "Django",
        icon: <SiDjango size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Docker",
        label: "Docker",
        icon: <FaDocker size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Express.js",
        label: "Express.js",
        icon: <SiExpress size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Figma",
        label: "Figma",
        icon: <SiFigma size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Firebase",
        label: "Firebase",
        icon: <SiFirebase size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Framer Motion",
        label: "Framer Motion",
        icon: <SiFramer size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Gemini",
        label: "Gemini",
        icon: <SiGooglecloud size={40} className="text-black dark:text-white" />, // Substitute for Gemini
    },
    {
        name: "Git",
        label: "Git",
        icon: <FaGit size={40} className="text-black dark:text-white" />,
    },
    {
        name: "GitHub",
        label: "GitHub",
        icon: <FaGithub size={40} className="text-black dark:text-white rounded-full" />,
    },
    {
        name: "Hugging Face",
        label: "Hugging Face",
        icon: <SiHuggingface size={40} className="text-black dark:text-white" />,
    },
    {
        name: "HTML5",
        label: "HTML5",
        icon: <SiHtml5 size={40} className="text-black dark:text-white" />,
    },
    {
        name: "JavaScript",
        label: "JavaScript",
        icon: <SiJavascript size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Jupyter",
        label: "Jupyter",
        icon: <SiJupyter size={40} className="text-black dark:text-white" />,
    },
    {
        name: "LangChain",
        label: "LangChain",
        icon: <SiLangchain size={40} className="text-black dark:text-white" />,
    },
    {
        name: "MongoDB",
        label: "MongoDB",
        icon: <SiMongodb size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Next.js",
        label: "Next.js",
        icon: <SiNextdotjs size={40} className="text-black dark:text-white" />,
    },
    {
        name: "NumPy",
        label: "NumPy",
        icon: <SiNumpy size={40} className="text-black dark:text-white" />,
    },
    {
        name: "OpenAI",
        label: "OpenAI",
        icon: <SiOpenai size={40} className="text-black dark:text-white rounded-full" />,
    },
    {
        name: "Pandas",
        label: "Pandas",
        icon: <SiPandas size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Postman",
        label: "Postman",
        icon: <SiPostman size={40} className="text-black dark:text-white rounded-full" />,
    },
    {
        name: "Python",
        label: "Python",
        icon: <BiLogoPython size={40} className="text-black dark:text-white" />,
    },
    {
        name: "React",
        label: "React",
        icon: <FaReact size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Redux",
        label: "Redux",
        icon: <SiRedux size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Streamlit",
        label: "Streamlit",
        icon: <SiStreamlit size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Tailwind CSS",
        label: "Tailwind CSS",
        icon: <BiLogoTailwindCss size={40} className="text-black dark:text-white rounded-full" />,
    },
    {
        name: "TypeScript",
        label: "TypeScript",
        icon: <SiTypescript size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Vercel",
        label: "Vercel",
        icon: <SiVercel size={40} className="text-black dark:text-white" />,
    },
    {
        name: "Vertex AI",
        label: "Vertex AI",
        icon: <SiGooglecloud size={40} className="text-black dark:text-white" />,
    },
];


const now = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();

const Services = () => {
  const handleEmailClick = (
  type: string,
  name: string,
  description: string,
  technologies?: string,
  price?: string,
  timeline?: string
) => {
  const subject = `${type} Inquiry - ${name}`;
  const body = `Hi H A A K A Team,\n\nI'm interested in the following ${type.toLowerCase()}:\n\n` +
               `Name: ${name}\n` +
               `Description: ${description}\n` +
               (technologies ? `Technologies: ${technologies}\n` : '') +
               (price ? `Price Range: ${price}\n` : '') +
               (timeline ? `Timeline: ${timeline}\n` : '') +
               `\nLooking forward to your response.\n\nThanks.`;

  const mailtoLink = `mailto: info@haaka.online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
};

  return (
    <section className="py-32 bg-black text-white">
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

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-8">
            EMPOWERING
            <br />
            YOUR IDEAS
          </h1>
          <p className="text-2xl md:text-3xl font-light tracking-wider mb-8 opacity-80">
            AI & FULL-STACK EXCELLENCE
          </p>
          <p className="text-lg font-light mb-12 opacity-60">
            Scalable. Smart. Secure.
          </p>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-2 border-white px-8 py-4 text-sm font-medium tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            GET IN TOUCH
          </motion.a>
        </motion.div>

        {/* Services Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-5xl font-black leading-none tracking-tighter mb-16">
            SERVICES
            <br />
            WE OFFER
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  onClick={() => handleEmailClick('Service Offering', service.title, service.description, service.technologies)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer border border-gray-800 hover:border-white transition-all duration-500 p-8 hover:bg-white hover:text-black"
                >
                  <IconComponent 
                    size={48} 
                    className="mb-6 group-hover:text-black transition-colors duration-300" 
                  />
                  <h3 className="text-xl font-bold mb-4 tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light mb-4 opacity-80 group-hover:opacity-100">
                    {service.description}
                  </p>
                  <p className="text-xs font-light opacity-60 group-hover:opacity-80 tracking-wider">
                    {service.technologies}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Tech Stack Icons - 6x3 B/W Grid with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black leading-none tracking-tighter mb-16">
            TECH SKILL
            <br />
            WE USE
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-items-center items-center">
            {skills.map((skill, idx) => (
              <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
              >
            <span className="w-10 h-10 grayscale flex items-center justify-center">
              {skill.icon}
            </span>
            <span className="mt-2 text-xs uppercase tracking-widest opacity-70">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-5xl font-black leading-none tracking-tighter mb-16">
            WHY CHOOSE 
            <br />
            OUR TEAM?
          </h2>
          
          <BentoGrid className="max-w-4xl mx-auto">
            {whyChooseItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 3 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Contact CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-5xl font-black leading-none tracking-tighter mb-16">
            PRICING
            <br />
            PLANS
          </h2>
          
          {/* Subscription Plans */}
          <div className="mb-20">
            <h3 className="text-2xl font-medium mb-8 tracking-wider">SUBSCRIPTION PLANS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative border-2 p-8 hover:bg-white hover:text-black transition-all duration-500 group ${
                    plan.popular 
                      ? 'border-white bg-white text-black' 
                      : 'border-gray-600 hover:border-white'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-white text-black px-4 py-1 text-xs font-bold tracking-widest flex items-center">
                        <Star size={12} className="mr-1" />
                        POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs font-light tracking-widest mb-2 opacity-60">
                    {plan.type}
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4 tracking-wider">
                    {plan.name}
                  </h4>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-lg font-light opacity-60">{plan.period}</span>
                  </div>
                  
                  <p className="text-sm font-light mb-6 opacity-80">
                    {plan.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm font-light">
                        <CheckCircle 
                          size={16} 
                          className={`mr-3 mt-0.5 flex-shrink-0 ${
                            plan.popular ? 'text-black' : 'text-white group-hover:text-black'
                          }`} 
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    onClick={() => handleEmailClick('Subscription Plan', plan.name, plan.description)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 text-sm font-medium tracking-widest transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'border-2 border-white hover:bg-white hover:text-black group-hover:border-black group-hover:bg-black group-hover:text-white'
                    }`}
                  >
                    GET STARTED
                    <ArrowRight size={16} className="ml-2" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Service-Based Pricing */}
          <div>
            <h3 className="text-2xl font-medium mb-8 tracking-wider">SERVICE-BASED PRICING</h3>
            <div className="space-y-6">
              {serviceBasedPricing.map((service, index) => (
                <motion.div
                  key={service.service}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-gray-600 hover:border-white p-6 hover:bg-white hover:text-black transition-all duration-500 group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h4 className="text-lg font-bold tracking-wider mb-1">
                        {service.service}
                      </h4>
                      <p className="text-sm font-light opacity-80 group-hover:opacity-100">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-black">
                        {service.price}
                      </div>
                      <div className="text-xs font-light opacity-60 group-hover:opacity-80">
                        PROJECT COST
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-lg font-medium">
                        {service.timeline}
                      </div>
                      <div className="text-xs font-light opacity-60 group-hover:opacity-80">
                        TIMELINE
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <motion.button
                        onClick={() => handleEmailClick('Service', service.service, service.description, undefined, service.price, service.timeline)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white px-6 py-2 text-sm font-medium tracking-widest hover:bg-white hover:text-black group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300"
                      >
                        DISCUSS
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center border-t border-gray-800 pt-16"
        >
          <h2 className="text-3xl md:text-5xl font-black leading-none tracking-tighter mb-8">
            LET'S BUILD
            <br />
            SOMETHING AMAZING
          </h2>
          <p className="text-lg font-light mb-8 opacity-80">
            Reach out via{' '}
            <a 
              href="mailto: info@haaka.online" 
              className="underline hover:text-gray-300 transition-colors duration-300"
            >
              haaka.online
            </a>
            {' '}or drop a message on LinkedIn.
          </p>
          <motion.a 
            href="mailto:info@haaka.online"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 border-2 border-white px-8 py-4 text-sm font-medium tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            <Mail size={16} />
            <span>SEND AN EMAIL</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;