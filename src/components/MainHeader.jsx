import Link from 'next/link';
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FaEnvelope />, href: "mailto:info@tdsenergies.com" },
    { icon: <FaWhatsapp />, href: "https://wa.me/27712345678" }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-[#2D2D2D]/80 backdrop-blur-xl shadow-lg border-b border-[#ffffff]/10"
        : "bg-[#2D2D2D]/60 backdrop-blur-lg"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link href="/" className="flex items-center cursor-pointer">
            <img 
              src="/logo2.svg" 
              alt="TDS Energies Logo" 
              className="h-14 w-auto"
              width={64}
              height={64}
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ name, href }) => (
            <motion.div key={name} whileHover={{ y: -2 }}>
              <Link href={href} className="px-4 py-2 text-[#BCBCBC] hover:text-white font-medium relative group">
                {name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#FFD700] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-6 pl-6 border-l border-[#ffffff]/20">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-[#ffffff]/10 hover:bg-[#ffffff]/20 text-[#BCBCBC] hover:text-[#FFD700] transition-all"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="ml-6 px-6 py-2.5 rounded-lg bg-[#FFD700]/90 hover:bg-[#FFD700] text-[#1a1a1a] font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all"
            >
              Request Quote
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Button */}
        <motion.button 
          className="md:hidden p-2 rounded-full bg-[#ffffff]/10 hover:bg-[#ffffff]/20 text-[#BCBCBC]"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 25 }}
            className="md:hidden bg-[#2D2D2D]/90 backdrop-blur-lg border-t border-[#ffffff]/10"
            style={{ marginTop: "68px" }}
          >
            <nav className="flex flex-col px-6 py-4">
              {navLinks.map(({ name, href }, i) => (
                <motion.div
                  key={name}
                  initial={{ x: -30 }}
                  animate={{ x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="py-4 block border-b border-[#ffffff]/10 text-lg text-[#BCBCBC] hover:text-white transition-colors"
                  >
                    {name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex justify-center gap-4 mt-6 mb-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-[#ffffff]/10 hover:bg-[#ffffff]/20 text-[#BCBCBC] hover:text-[#FFD700]"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full block py-3.5 mt-2 rounded-lg bg-[#FFD700]/90 hover:bg-[#FFD700] text-[#1a1a1a] font-semibold text-center"
                >
                  Request Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
