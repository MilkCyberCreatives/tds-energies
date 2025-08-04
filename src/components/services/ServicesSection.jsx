import { motion } from "framer-motion";
import { FaTools, FaSolarPanel, FaWater, FaHardHat, FaLeaf, FaRecycle } from "react-icons/fa";

const services = [
  {
    icon: <FaHardHat className="text-[#FFD700] text-3xl" />,
    title: "Drilling & Borehole Services",
    description: "Advanced drilling solutions for mining, construction, and water access, ensuring efficiency and safety.",
  },
  {
    icon: <FaWater className="text-[#FFD700] text-3xl" />,
    title: "Water Infrastructure Development",
    description: "Design and implementation of sustainable water supply and purification systems for communities and industries.",
  },
  {
    icon: <FaSolarPanel className="text-[#FFD700] text-3xl" />,
    title: "Renewable Energy Solutions",
    description: "Solar, wind, and hybrid energy systems tailored for both rural and urban energy needs.",
  },
  {
    icon: <FaRecycle className="text-[#FFD700] text-3xl" />,
    title: "Waste-to-Energy Projects",
    description: "Innovative waste conversion technologies transforming organic waste into usable energy and resources.",
  },
  {
    icon: <FaLeaf className="text-[#FFD700] text-3xl" />,
    title: "Hydrogen",
    description: "Pioneering hydrogen energy and other clean fuel innovations aligned with global net-zero targets.",
  },
  {
    icon: <FaTools className="text-[#FFD700] text-3xl" />,
    title: "Maintenance & Operations Support",
    description: "Ongoing technical support, maintenance, and upgrades to ensure optimal system performance and uptime.",
  }
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 px-4 bg-[#1a1a1a] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/images/services/grid-pattern.jpg')] bg-cover opacity-10" />
      
      <motion.div 
        className="relative max-w-7xl mx-auto glass-panel p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            What We <span className="text-[#FFD700]">Offer</span>
          </motion.h2>
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent w-1/3 mx-auto my-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-[#BCBCBC] mt-4 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Empowering infrastructure through innovation, sustainability, and reliable execution.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card hover:glass-card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-[#BCBCBC] text-sm mb-4 flex-grow">{service.description}</p>
                <div className="mt-auto pt-2">
                  <div className="w-8 h-px bg-[#FFD700] transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Global Styles */}
      <style jsx>{`
        .glass-panel {
          background: rgba(45, 45, 45, 0.6);
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
      `}</style>
    </section>
  );
}