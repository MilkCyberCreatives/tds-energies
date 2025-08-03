import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-4">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/images/contact/grid-pattern.jpg')] bg-cover opacity-10" />
      
      <motion.div 
        className="relative max-w-7xl mx-auto glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          
          {/* Contact Form */}
          <div className="p-8 md:p-12 glass-contact-form">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-[#FFD700]">Get</span> In Touch
            </motion.h2>

            <motion.form
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-[#BCBCBC] mb-2">Name</label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg glass-input focus:glass-input-active"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-[#BCBCBC] mb-2">Email</label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg glass-input focus:glass-input-active"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-[#BCBCBC] mb-2">Subject</label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg glass-input focus:glass-input-active"
                  placeholder="How can we help?"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-[#BCBCBC] mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg glass-input focus:glass-input-active"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#e6c800] text-[#1a1a1a] font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <FaPaperPlane className="ml-1 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.form>
          </div>

          {/* Contact Info */}
          <div className="p-8 md:p-12 glass-contact-info">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact <span className="text-[#FFD700]">Information</span>
            </motion.h3>

            <div className="space-y-8">
              {/* Location */}
              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="p-3 rounded-full bg-[#FFD700]/10 text-[#FFD700] mt-1 group-hover:bg-[#FFD700]/20 transition-all">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Our Location</h4>
                  <p className="text-[#BCBCBC] leading-snug">34 Albatros, Secunda<br />Mpumalanga, South Africa</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-3 rounded-full bg-[#FFD700]/10 text-[#FFD700] mt-1 group-hover:bg-[#FFD700]/20 transition-all">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                  <p className="text-[#BCBCBC]">
                    <a href="tel:+27176341922" className="hover:text-[#FFD700] transition">+27 17 634 1922</a>
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-3 rounded-full bg-[#FFD700]/10 text-[#FFD700] mt-1 group-hover:bg-[#FFD700]/20 transition-all">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <p className="text-[#BCBCBC]">
                    <a href="mailto:admin@techniquedrillingservices.co.za" className="hover:text-[#FFD700] transition">admin@techniquedrillingservices.co.za</a>
                  </p>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div 
                className="pt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
                <div className="space-y-2 text-[#BCBCBC]">
                  <p className="flex justify-between"><span>Monday - Friday</span> <span>8:00 - 17:00</span></p>
                  <p className="flex justify-between"><span>Saturday</span> <span>9:00 - 13:00</span></p>
                  <p className="flex justify-between"><span>Sunday</span> <span>Closed</span></p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Global Styles */}
      <style jsx>{`
        .glass-panel {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(12px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .glass-contact-form {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(8px);
        }
        .glass-contact-info {
          background: rgba(45, 45, 45, 0.5);
          backdrop-filter: blur(8px);
        }
        .glass-input {
          background: rgba(45, 45, 45, 0.5);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .glass-input-active {
          border-color: rgba(255, 215, 0, 0.5);
          box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.2);
        }
      `}</style>
    </section>
  );
}