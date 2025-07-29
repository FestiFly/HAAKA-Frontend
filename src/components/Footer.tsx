"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "./UI/button"
import { Input } from "./UI/input"
import { Instagram, Linkedin, Send } from "lucide-react"

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white pt-16"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-0"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="mb-6 text-gray-400">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative group">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 bg-black border-gray-700 text-white hover:bg-white hover:text-black"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8  bg-transparent text-white transition-transform hover:scale-105 group-hover:text-gray-500"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 ">Quick Links</h3>
            <nav className="space-y-2">
              {["Home", "About Us", "Services", "Products", "Contact"].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="space-y-2 not-italic text-gray-400">
              <p>Sathy Main Road, Kurumbapalayam</p>
              <p>Coimbatore, 641107</p>
              <p>Phone: +91 9876543210</p>
              <p>Email: info@haaka.online</p>
            </address>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram className="h-4 w-4" />, label: "Instagram" },
                { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn" },
                { icon: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 13 21.13V25"/>
                  </svg>
                ), label: "GitHub" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="p-2 rounded-full bg-black hover:bg-white border border-gray-800 hover:text-black transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} H A A K A | All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
