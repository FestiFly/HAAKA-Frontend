import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Zap, Globe, TrendingUp, Shield, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const now = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();
const OrganizationIntro = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <Hero />
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

        {/* Organization Name Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-8">
            H A A K A
            <br />
            ORGANIZATION
          </h2>
          <p className="text-2xl md:text-3xl font-light tracking-wider opacity-80 mb-8">
            WHERE INNOVATION MEETS EXCELLENCE
          </p>
          <p className="text-lg font-light opacity-60 max-w-3xl">
            We are architects of digital transformation, crafting intelligent solutions that bridge the gap between human creativity and technological innovation. Our collective represents the pinnacle of modern design thinking and technical excellence.
          </p>
        </motion.div>

        {/* Mission Statement - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-black leading-none tracking-tighter mb-12">
            OUR MISSION
          </h3>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed font-light mb-8">
              To revolutionize the digital landscape by creating transformative experiences that seamlessly blend cutting-edge artificial intelligence, sophisticated design principles, and human-centered innovation. We believe that the future belongs to those who can harmonize technology with creativity, delivering solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
            </p>
            <p className="text-lg leading-relaxed font-light opacity-80">
              Founded on the principles of excellence, integrity, and innovation, H A A K A  has emerged as a beacon of creative and technical prowess in an increasingly complex digital world. Our multidisciplinary approach ensures that every project we undertake becomes a testament to what's possible when visionary thinking meets flawless execution.
            </p>
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-3xl md:text-5xl font-black leading-none tracking-tighter mb-16">
            CORE VALUES
            <br />
            & PRINCIPLES
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: <Target size={32} />,
                title: "PRECISION IN EXECUTION",
                description: "Every pixel, every line of code, every user interaction is meticulously crafted to perfection. We believe that excellence lies in the details, and our commitment to precision ensures that our solutions not only function flawlessly but exceed expectations in every aspect of their implementation."
              },
              {
                icon: <Zap size={32} />,
                title: "INNOVATION THROUGH COLLABORATION",
                description: "Our collective strength emerges from the synergy of diverse perspectives and specialized expertise. We foster an environment where creative minds converge, challenging conventional thinking and pushing the boundaries of what's possible in digital design and development."
              },
              {
                icon: <Shield size={32} />,
                title: "INTEGRITY & TRANSPARENCY",
                description: "Trust forms the foundation of every relationship we build. We maintain unwavering transparency in our processes, communications, and deliverables, ensuring that our clients are not just informed but actively engaged as partners in the creative journey."
              },
              {
                icon: <Globe size={32} />,
                title: "GLOBAL IMPACT, LOCAL TOUCH",
                description: "While our solutions are designed to scale globally and impact millions, we never lose sight of the human element. Every project is approached with a deep understanding of local contexts, cultural nuances, and individual user needs."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group border border-gray-800 hover:border-white transition-all duration-500 p-8 hover:bg-white hover:text-black"
              >
                <div className="mb-6 group-hover:text-black transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-wider">
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed font-light opacity-80 group-hover:opacity-100">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-3xl md:text-5xl font-black leading-none tracking-tighter mb-16">
            OUR APPROACH
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="text-lg leading-relaxed font-light space-y-6">
              <p>
                At H A A K A , we don't just create digital products we architect experiences that resonate on both emotional and functional levels. Our methodology is rooted in deep research, strategic thinking, and an unwavering commitment to user-centered design principles.
              </p>
              <p>
                We begin every project with comprehensive discovery sessions, diving deep into your business objectives, target audience psychology, and competitive landscape. This foundation allows us to craft solutions that are not only visually stunning but strategically sound and commercially viable.
              </p>
              <p>
                Our iterative design process ensures continuous refinement and optimization, while our agile development methodology guarantees timely delivery without compromising quality. We believe in building partnerships, not just completing projects.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { phase: "01", title: "DISCOVERY & STRATEGY", desc: "Comprehensive research and strategic planning phase" },
                { phase: "02", title: "DESIGN & PROTOTYPING", desc: "Creative conceptualization and interactive prototyping" },
                { phase: "03", title: "DEVELOPMENT & TESTING", desc: "Technical implementation with rigorous quality assurance" },
                { phase: "04", title: "LAUNCH & OPTIMIZATION", desc: "Deployment and continuous performance enhancement" }
              ].map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-4xl font-black opacity-20">
                    {step.phase}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2 tracking-wider">
                      {step.title}
                    </h4>
                    <p className="text-sm font-light opacity-80">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Impact & Recognition */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-3xl md:text-5xl font-black leading-none tracking-tighter mb-16">
            IMPACT &
            <br />
            RECOGNITION
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: <Award size={32} />, value: "10+", label: "PROJECTS DELIVERED" },
              { icon: <Users size={32} />, value: "5+", label: "SATISFIED CLIENTS" },
              { icon: <TrendingUp size={32} />, value: "200%", label: "AVERAGE ROI INCREASE" },
              { icon: <Clock size={32} />, value: "99.9%", label: "ON-TIME DELIVERY" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-light tracking-widest opacity-60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed font-light opacity-80 mb-8">
              Our work has been recognized by industry leaders and has consistently delivered measurable results for our clients. From startup MVPs that secured millions in funding to enterprise solutions that transformed entire business operations, our portfolio speaks to our ability to create meaningful impact across diverse industries and scales.
            </p>
            <p className="text-sm font-light opacity-60">
              Featured in leading design publications and winner of multiple industry awards for innovation and excellence in digital design.
            </p>
          </div>
        </motion.div>

        {/* Industries We Transform */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-3xl md:text-5xl font-black leading-none tracking-tighter mb-16">
            INDUSTRIES WE
            <br />
            TRANSFORM
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "TECHNOLOGY & STARTUPS",
                description: "Empowering the next generation of tech innovators with cutting-edge digital solutions that scale from MVP to market leader."
              },
              {
                title: "EDUCATION & E-LEARNING",
                description: "Revolutionizing learning experiences through intelligent platforms that make education more accessible, engaging, and effective."
              },
              {
                title: "HEALTHCARE & WELLNESS",
                description: "Creating digital health solutions that improve patient outcomes while streamlining healthcare delivery and management."
              },
              {
                title: "FINANCIAL SERVICES",
                description: "Building secure, intuitive fintech solutions that democratize financial services and enhance user financial literacy."
              },
              {
                title: "RETAIL & E-COMMERCE",
                description: "Crafting immersive shopping experiences that drive conversion and build lasting customer relationships in the digital marketplace."
              },
              {
                title: "CREATIVE & MEDIA",
                description: "Developing platforms that amplify creative expression and enable content creators to reach and engage their audiences effectively."
              }
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="border border-gray-800 hover:border-white p-6 hover:bg-white hover:text-black transition-all duration-500 group"
              >
                <h4 className="text-lg font-bold mb-3 tracking-wider">
                  {industry.title}
                </h4>
                <p className="text-sm leading-relaxed font-light opacity-80 group-hover:opacity-100">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-5xl font-black leading-none tracking-tighter mb-12">
            OUR PHILOSOPHY
          </h3>
          <blockquote className="text-xl md:text-2xl leading-relaxed font-light italic mb-8 border-l-4 border-white pl-8 text-left">
            "True innovation emerges not from following trends, but from understanding fundamental human needs and crafting solutions that feel both revolutionary and inevitable. We don't just build products we create experiences that become integral to people's lives."
          </blockquote>
          <p className="text-sm font-light tracking-widest opacity-60">
              H A A K A  
          </p>
        </motion.div>
        <ContactUs />
        <Footer />
      </div>
    </section>
  );
};

export default OrganizationIntro;