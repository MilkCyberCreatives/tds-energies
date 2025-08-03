import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function AboutHero() {
  return (
    <section className="relative mt-16 h-[50vh] min-h-[400px] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image with Glass Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/images/about/about-hero.jpg')] bg-cover bg-center"
          style={{ backgroundPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/90 via-[#2D2D2D]/70 to-[#2D2D2D]/30 backdrop-blur-[1px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[#FFD700]">Our</span> Legacy
        </motion.h1>
        
        <motion.p
          className="text-xl text-[#BCBCBC] max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transforming South Africa's energy landscape through innovation
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#history"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#e6c800] text-[#1a1a1a] font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Journey
            <FaArrowDown className="ml-3 animate-bounce" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}