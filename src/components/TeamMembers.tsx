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
    role: "Frontend Developer & Joke Specialist",
    oneline: "The UI Wizard Who Codes with Comedy",
    bio: "Akash doesn't just craft clean, responsive, and user-friendly interfaces he does it while cracking jokes that make the whole team laugh. His code is as polished as his punchlines, and somehow he manages to debug both CSS and bad moods simultaneously. Every pixel is perfectly placed, every component perfectly timed (like his jokes).",
    bio2: "When he's not making divs dance or animations sing, you'll find Akash testing his latest dad jokes on the team. He believes good UI should be like good comedy timing is everything, and the user should never see the setup coming.",
    image: akashImg,
    social: {
      linkedin: "https://www.linkedin.com/in/akash-s-/",
      portfolio: "https://www.akashsivakumar.tech/",
      github: "https://github.com/Akash-Developer-hub",
      email: "akash@haaka.online"
    }
  },
  {
    name: "HARLEE",
    role: "AI Engineer & Naughty Fellow",
    bgname: "HARI",
    oneline: "The AI Whisperer with a Mischievous Streak",
    bio: "Harlee is our resident expert in AI tools (especially ChatGPT), and he's got a naughty side that keeps everyone on their toes. He can make any AI model do tricks you didn't know were possible, all while plotting his next harmless prank on the team. His prompts are as clever as his schemes.",
    bio2: "Don't let his innocent face fool you behind those AI conversations, he's probably planning to automate everyone's coffee orders or teach the chatbot to roast the team. He's the guy who makes AI both productive and entertaining.",
    image: hariharanImg,
    social: {
      linkedin: "https://www.linkedin.com/in/hari-haran-z/",
      portfolio: "https://www.harlee.pro/",
      github: "https://github.com/Hariharanpugazh",
      email: "harlee@haaka.online"
    }
  },
  {
    name: "AJAY CHAKRAVARTHI",
    role: "GenAI Developer & Brainstormer",
    bgname: "AJAY",
    oneline: "The Innovation Engine Powered by GenAI",
    bio: "Ajay is the guy who brains the innovation with GenAI themes (yes, he invented that verb). His mind works like a supercharged neural network feed him a problem and watch him generate solutions faster than GPT-4. He doesn't just think outside the box; he redesigns the entire box using generative AI.",
    bio2: "His brainstorming sessions are legendary. He'll start with 'What if we use AI to...' and end up with three revolutionary ideas, two working prototypes, and one existential question about whether AI dreams of electric sheep.",
    image: ajayImg,
    social: {
      linkedin: "https://www.linkedin.com/in/ajay-chakravarthi/",
      portfolio: "https://www.ajaychakravarthi.tech/",
      github: "https://github.com/Ajaychaki2004",
      email: " ajaychakravarthi@haaka.online"
    }
  },
  {
    name: "KAVIN",
    role: "Full Stack Developer & Mr. Extrovert",
    bgname: "KAVIN",
    oneline: "The Silent Contributor Who Works Magic Behind Scenes",
    bio: "Kavin has mastered the art of being an introvert in meetings but an extrovert in code. He doesn't involve himself in team drama, but he works harder for the team than anyone else. His commits speak louder than his voice ever will, and his solutions are always elegantly simple.",
    bio2: "He's the team's secret weapon while everyone else is talking, he's already building. His motto: 'Less meetings, more features.' Somehow, he delivers exactly what the project needs before anyone even realizes they needed it.",
    image: kavinImg,
    social: {
      linkedin: "https://www.linkedin.com/in/kavin-b-/",
      portfolio: "https://kavinbox.vercel.app/",
      github: "https://github.com/Kavin-Bakyaraj",
      email: "kavin@haaka.online"
    }
  },
  {
    name: "AKIL",
    role: "Tech Explorer & Research Guru",
    bgname: "AKIL",
    oneline: "The Fearless Pioneer Who Explores Everything",
    bio: "Akil brings new ideas by exploring all new fields, and honestly, he doesn't care about conventional wisdom which is exactly why he discovers the coolest stuff. While others stick to familiar tools, he's already three frameworks ahead, testing something that was released five minutes ago.",
    bio2: "His 'don't care' attitude is actually his superpower. He's not afraid to break things, try weird APIs, or dive into documentation that makes other developers cry. His exploration adventures usually end with 'Hey guys, check out this amazing thing I found!'",
    image: akilImg,
    social: {
      linkedin: "https://www.linkedin.com/in/akil-a-/",
      portfolio: "https://www.akilalbs.me",
      github: "https://github.com/AkilLabs",
      email: "akil@haaka.online"
    }
  }
];

const now = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();
const TeamMembers = () => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
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
              transition={{ duration: 2, delay: index * 0.1 }}
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