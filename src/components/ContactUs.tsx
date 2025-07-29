import {useState} from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
 
const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:8000/api/send-contact-email/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setResponse(data.message || "Message sent successfully.");
    } catch (err) {
      setResponse("Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };
  
  return (
    <section className="py-14 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Contact Us Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-3">CONTACT US</h2>
          <p className="text-xl font-light opacity-80">
            Let's create something extraordinary together
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mb-8 lg:mb-0 space-y-6"
          >
            {[
              {
                icon: <Mail size={22} />,
                title: "EMAIL",
                description: "For general inquiries and support, feel free to email us.",
                contact: "contact@haaka.org"
              },
              {
                icon: <Phone size={22} />,
                title: "PHONE",
                description: "Call us to speak to a member of our team.",
                contact: "+1 (123) 456-7890"
              },
              {
                icon: <MapPin size={22} />,
                title: "ADDRESS",
                description: "Visit our office or send us mail.",
                contact: "123 Innovation Drive, Coimbatore"
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="p-5 border border-gray-800 hover:bg-white hover:text-black transition-colors duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="text-gray-400 mt-1">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{contact.title}</h4>
                    <p className="text-sm font-light opacity-80 mb-2 group-hover:opacity-100">
                      {contact.description}
                    </p>
                    <p className="text-md font-medium">{contact.contact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="p-5 border border-gray-800 h-full flex flex-col">
              <h3 className="text-lg font-bold mb-4">SEND US A MESSAGE</h3>
              <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    className="w-full p-3 bg-black border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-white hover:bg-white hover:text-black transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    className="w-full p-3 bg-black border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-white hover:bg-white hover:text-black transition-colors duration-300"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <input
                    id="message"
                    name="message"
                    onChange={handleChange}
                    className="w-full p-3 bg-black border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-white hover:bg-white hover:text-black transition-colors duration-300 h-full"
                    required
                  ></input>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-white text-black font-bold py-3 px-6 rounded hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  SEND MESSAGE
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
