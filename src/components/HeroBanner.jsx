import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center px-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      {/* Transparent Glass Content */}
      <motion.div
        className="relative p-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl max-w-4xl w-full mx-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-[#FFD700]">Drilling</span> Into The Future
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#E0E0E0] mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Mining, Water, Energy, Hydrogen <br /> Building Resilient Infrastructure for South Africa
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* <motion.a
            href="#services"
            className="px-8 py-3.5 rounded-lg bg-[#FFD700]/90 hover:bg-[#FFD700] text-[#1a1a1a] font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.a> */}
          {/* <motion.a
            href="#contact"
            className="px-8 py-3.5 rounded-lg border-2 border-[#FFD700]/50 hover:border-[#FFD700] text-[#FFD700] font-semibold hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a> */}
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.a
        href="#services"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-[#2D2D2D]/50 backdrop-blur-sm border border-white/20 cursor-pointer z-10"
        animate={{
          y: [0, 10, 0],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
        aria-label="Scroll to Services"
      >
        <FaArrowDown className="text-[#FFD700] text-xl" />
      </motion.a>
    </section>
  );
}
