import { motion } from "framer-motion";
import { FaWater, FaSolarPanel, FaOilCan, FaLeaf } from "react-icons/fa";

export default function AboutSection() {
  const services = [
    {
      icon: <FaWater className="text-3xl text-[#00B4D8]" />,
      title: "Water Solutions",
      description: "Sustainable borehole development and water infrastructure",
    },
    {
      icon: <FaSolarPanel className="text-3xl text-[#FFD700]" />,
      title: "Solar Energy",
      description: "Commercial and residential solar PV installations",
    },
    {
      icon: <FaOilCan className="text-3xl text-[#BCBCBC]" />,
      title: "Drilling Expertise",
      description: "Precision drilling for energy and mining sectors",
    },
    {
      icon: <FaLeaf className="text-3xl text-[#70E000]" />,
      title: "Hydrogen Future",
      description: "Pioneering natural hydrogen exploration",
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/images/about/grid-pattern.jpg')] bg-cover opacity-10" />
      
      <motion.div
        className="relative max-w-7xl mx-auto glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Left Text Column */}
          <div className="flex flex-col justify-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-[#FFD700]">Our</span> Story
            </motion.h2>

            <motion.p
              className="text-[#BCBCBC] mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Founded in 2014 as Technique Drilling Services, we've evolved into{" "}
              <span className="text-[#FFD700]">TDS Energies</span>, a 100% Black-owned,
              woman-led infrastructure company driving South Africa's energy transition
              through innovative water, energy, and hydrogen solutions.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="glass-card hover:glass-card-hover p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {service.icon}
                    <h3 className="font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-sm text-[#BCBCBC]">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="relative h-80 md:h-auto min-h-[400px]">
            <motion.div
              className="absolute inset-0 bg-[url('/images/about1.jpg')] bg-cover bg-center rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            <motion.div
              className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-[url('/images/about2.jpg')] bg-cover bg-center rounded-lg border-2 border-[#FFD700]/50 shadow-lg z-10"
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 2, scale: 1.03 }}
            />

            <motion.div
              className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-[url('/images/about3.jpg')] bg-cover bg-center rounded-lg border-2 border-white/30 shadow-lg z-10"
              initial={{ opacity: 0, x: -50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ rotate: -1, scale: 1.03 }}
            />
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-stats-bar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            { value: "100%", label: "Black-Owned" },
            { value: "L1", label: "B-BBEE" },
            { value: "10+", label: "Years Experience" },
            { value: "SDG", label: "Aligned" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#BCBCBC]">{stat.label}</p>
            </motion.div>
          ))}
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
        .glass-card {
          background: rgba(45, 45, 45, 0.5);
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .glass-card-hover {
          background: rgba(45, 45, 45, 0.7);
          border-color: rgba(255, 215, 0, 0.2);
          box-shadow: 0 8px 24px rgba(255, 215, 0, 0.1);
        }
        .glass-stats-bar {
          background: rgba(45, 45, 45, 0.8);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}