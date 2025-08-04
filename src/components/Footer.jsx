import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] pt-20 pb-10 px-4 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/images/footer/grid-pattern.jpg')] bg-cover opacity-10" />
      
      {/* Glass footer panel */}
      <motion.div 
        className="relative max-w-7xl mx-auto glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid md:grid-cols-4 gap-8 p-8 md:p-12">
          {/* Column 1: Logo & About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="TDS Energies" className="h-10 w-auto" />
            </div>
            <p className="text-[#BCBCBC] mb-6 text-sm leading-relaxed">
              Pioneering sustainable energy, water, and drilling solutions for South Africa's future.
            </p>
            <div className="flex gap-4">
  {[
    { icon: <FaLinkedin />, color: "#0077B5", href: "https://linkedin.com" },
    { icon: <FaWhatsapp />, color: "#25D366", href: "https://wa.me/27712345678" },
    { icon: <FaEnvelope />, color: "#D44638", href: "mailto:info@tdsenergies.com" }
  ].map((social, index) => (
    <motion.a
      key={index}
      href={social.href}
      target="_blank"
      rel="noreferrer"
      className="p-3 rounded-full hover:bg-[#FFD700] text-[#BCBCBC] hover:text-[#1a1a1a] transition-all"
      whileHover={{ y: -3, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {social.icon}
    </motion.a>
  ))}
</div>

          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <motion.span 
                className="absolute bottom-0 left-0 h-px bg-[#FFD700]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Projects", "Contact"].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-[#BCBCBC] hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Our Services
              <motion.span 
                className="absolute bottom-0 left-0 h-px bg-[#FFD700]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </h3>
            <ul className="space-y-3">
              {[
                "Drilling Services",
                "Solar Energy",
                "Water Solutions",
                "Hydrogen",
                "Infrastructure Development"
              ].map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href="#services" 
                    className="text-[#BCBCBC] hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Contact Us
              <motion.span 
                className="absolute bottom-0 left-0 h-px bg-[#FFD700]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </h3>
            <ul className="space-y-4">
              {[
                { icon: <FaMapMarkerAlt className="text-[#FFD700] flex-shrink-0" />, 
                  text: "34 Albatros, Secunda, Mpumalanga" },
                { icon: <FaPhoneAlt className="text-[#FFD700] flex-shrink-0" />, 
                  text: "+27 17 634 1922", 
                  link: "tel:+27176341922" },
                { icon: <FaClock className="text-[#FFD700] flex-shrink-0" />, 
                  text: "Mon-Fri: 8AM - 5PM" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mt-1">{item.icon}</div>
                  {item.link ? (
                    <a href={item.link} className="text-[#BCBCBC] hover:text-[#FFD700] transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-[#BCBCBC]">{item.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright bar */}
        <motion.div 
          className="p-6 text-center border-t border-[#ffffff]/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[#BCBCBC] text-sm">
            © {new Date().getFullYear()} TDS Energies (Pty) Ltd. All rights reserved. | 
            <a href="#" className="hover:text-[#FFD700] ml-2 transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-[#FFD700] ml-2 transition-colors">Terms of Service</a>
          </p>
        </motion.div>
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
      `}</style>
    </footer>
  );
}