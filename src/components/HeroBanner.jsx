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
        {/* Slightly darker overlay to improve text visibility */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content - No Glass */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-[#FFD700]">Drilling</span> Into The Future
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Mining, Water, Energy, Hydrogen <br /> Building Resilient Infrastructure for South Africa
        </motion.p>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.a
        href="#services"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-[#2D2D2D]/60 border border-white/20 cursor-pointer z-10"
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
