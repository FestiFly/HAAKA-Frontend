import { motion } from 'framer-motion';
import { Linkedin, portfolio, Mail, Globe } from 'lucide-react';
import akashImg from '../assets/pics/bg/akash1.png';
import hariharanImg from '../assets/pics/bg/harlee2.png';
import kavinImg from '../assets/pics/bg/kavin.png';
import ajayImg from '../assets/pics/bg/ajay.png';
import akilImg from '../assets/pics/bg/akil.png';
import { FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: "AKASH",
    bgname: "AKASH",
    role: "Full Stack Developer",
    oneline: "The UI Wizard Who Turns Pixels into Magic",
    bio: "Akash doesn’t just build frontends—he breathes life into them. Whether it’s a landing page, dashboard, or a complex animation, he crafts it with flair and finesse. Known for his obsession with external components and colorful UI tricks, he makes every page a vibe. Ask him to build something and watch it become art—with a dash of humor too!",
    bio2: "When he’s not styling divs or optimizing layouts, you’ll find Akash browsing the latest UI libraries just for fun. He’s the type who gets excited by micro-interactions and somehow manages to make loading screens feel like an experience.",
    image: akashImg,
    social: {
      linkedin: "https://www.linkedin.com/in/akash-s-/",
      portfolio: "https://www.akashsivakumar.tech/",
      github: "https://github.com/Akash-Developer-hub",
      email: "akashsivakumar485@gmail.com"
    }
  },
  {
    name: "HARLEE",
    role: "Full Stack Developer",
    bgname: "HARI",
    oneline: "The Backbone Who Keeps It All Together",
    bio: "Hariharan is the calm force that connects front and back like a pro conductor. He turns ideas into APIs and chaos into consistency. Every feature flows smoothly because he makes sure the engine underneath is solid. Whether you need performance or partnership, he’s the bridge that makes the system—and the team—click.",
    bio2: "Hariharan thrives when the team needs structure and systems. He’s the unsung hero behind those ‘it just works’ moments and always knows where things are breaking—even before they do. A true engineer in spirit and execution.",
    image: hariharanImg,
    social: {
      linkedin: "https://www.linkedin.com/in/hari-haran-z/",
      portfolio: "https://www.harlee.pro/",
      github:"https://github.com/Hariharanpugazh",
      email: "hariharanpugazh@gmail.com"
    }
  },
  {
    name: "AJAY CHAKRAVARTHI",
    role: "Full Stack Developer",
    bgname: "AJAY",
    oneline: "The Powerhouse of Ideas and Execution",
    bio: "Ajay is the team’s brain engine and solution generator. Got a crazy requirement? He’s already 5 steps ahead. His energy, logic, and bold approach mean no task feels too big. He’s the one who starts with “What if…” and ends with “It’s done.” When speed meets brainpower—you get Ajay.",
    bio2: "From brainstorming features to writing solid logic, Ajay brings unmatched energy to every sprint. He doesn’t just finish tasks—he elevates them. The team often wonders if he has a secret clone working in parallel.",
    image: ajayImg,
    social: {
      linkedin: "https://www.linkedin.com/in/ajay-chakravarthi/",
      portfolio: "https://www.ajaychakravarthi.tech/",
      github:"https://github.com/Ajaychaki2004",
      email: "sajaychakravarthi2004@gmail.com"
    }
  },
  {
    name: "KAVIN",
    role: "Full Stack Developer",
    bgname: "KAVIN",
    oneline: "The Silent Force of Our Backend World",
    bio: "Kavin might be quiet in the room, but his code speaks volumes. He dives into backend problems like puzzles and returns with elegant, working logic. No complaints, no noise—just clean, dependable solutions with a touch of shy wit. He’s our go-to when backend logic needs some serious love (and zero bugs).",
    bio2: "He doesn’t speak much in meetings, but his commits do. Kavin enjoys crafting elegant backend solutions, usually late at night, and somehow manages to ship features that no one even realized were broken yet.",
    image: kavinImg,
    social: {
      linkedin: "https://www.linkedin.com/in/kavin-b-/",
      portfolio: "https://kavinbox.vercel.app/",
      github:"https://github.com/Kavin-Bakyaraj",
      email: "kavinbakyaraj47@gmail.com"
    }
  },
  {
    name: "AKIL",
    role: "Full Stack Developer",
    bgname: "AKIL",
    oneline: "The Explorer Who Knows It All",
    bio: "Akil is the guy who discovers a new tool before it trends. His curiosity knows no bounds—from AI APIs to obscure CLI tools, he’s already on it. A confident debugger and natural builder, he takes backend tasks and solves them with flair, leaving the rest of us wondering, “How did he do that so fast?” Always exploring, always surprising.",
    bio2: "If there’s a dev tool that exists, Akil’s probably tried it before lunch. He’s the team’s scout—always learning, always experimenting. His GitHub activity graph looks like it’s training for a marathon.",
    image: akilImg,
    social: {
      linkedin: "https://www.linkedin.com/in/akil-a-/",
      portfolio: "https://www.akilalbs.me",
      github:"https://github.com/AkilLabs",
      email: "akilaskarali@gmail.com"
    }
  }
];


const TeamMembers = () => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-8">
            OUR TEAM
          </h2>
          <p className="text-lg font-light max-w-2xl">
            Five exceptional individuals, one unified vision. Meet the creative minds behind Nexus Creative Collective.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="space-y-32">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration:2, delay: index * 0.1 }}
              className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >
              {/* Background Name Typography */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="text-[10rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-black leading-none tracking-tighter text-white opacity-10 select-none whitespace-nowrap">
                  {member.bgname.split(' ')[0]}
                </h3>
              </div>

              {/* Main Content Grid */}
              <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                {/* Left Bio Text */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="lg:col-span-1 text-sm leading-relaxed font-light"
                >
                  <p className="mb-4">
                    {member.bio.split('.')[0]}.
                  </p>
                  <p className="opacity-80">
                    {member.bio.split('.').slice(1).join('.').trim()}
                  </p>

                  {/* Role */}
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Position</p>
                    <p className="text-lg font-medium">{member.role}</p>
                  </div>
                </motion.div>

                {/* Center Image */}
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-1 flex justify-center"
                >
                  <div className="relative">
                    <div className="w-80 h-96 md:w-96 md:h-[28rem] relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-700"
                      />
                      <div className="absolute inset-0 transition-all duration-700"></div>
                    </div>

                    {/* Name Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="text-2xl md:text-3xl font-black leading-none tracking-tighter text-gray-600/90">
                        {member.name}
                        </h4>
                    </div>
                  </div>
                </motion.div>

                {/* Right Bio Text & Social */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="lg:col-span-1 text-sm leading-relaxed font-light"
                >
                  <p className="mb-6 opacity-80">
                    {member.bio2}.
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                      <a href={`mailto:${member.social.email}`} className="hover:text-gray-300 transition-colors duration-300">
                        {member.social.email}
                      </a>
                    </div>

                    {/* Social Links */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Connect</p>
                      <div className="flex space-x-3">
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 border border-gray-600 hover:border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                        >
                          <Linkedin size={14} />
                        </a>
                        <a
                          href={member.social.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 border border-gray-600 hover:border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                        >
                          <Globe size={14} />
                        </a>
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 border border-gray-600 hover:border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                        >
                          <FaGithub size={14} />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="w-8 h-8 border border-gray-600 hover:border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                        >
                          <Mail size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Date/Info top right */}
              {/* <div className="absolute top-8 right-8 text-xs font-light tracking-wider opacity-60">
                <div>DECEMBER / 2025</div>
                <div className="mt-1">MEMBER {String(index + 1).padStart(2, '0')}</div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;