import { motion } from "framer-motion";
import { FaAward, FaUserTie, FaHandshake, FaChartLine } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaAward className="text-3xl text-[#FFD700]" />,
      title: "Proven Excellence",
      description: "Level 1 B-BBEE contributor with 135% procurement recognition"
    },
    {
      icon: <FaUserTie className="text-3xl text-[#FFD700]" />,
      title: "Transformation Leader",
      description: "100% Black-owned with 51% Black women ownership"
    },
    {
      icon: <FaHandshake className="text-3xl text-[#FFD700]" />,
      title: "Integrated Solutions",
      description: "Turnkey capabilities across water, energy and drilling"
    },
    {
      icon: <FaChartLine className="text-3xl text-[#FFD700]" />,
      title: "Future-Focused",
      description: "Pioneering hydrogen and renewable energy innovations"
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-20 px-4">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/images/why-choose-us/grid-pattern.jpg')] bg-cover opacity-10" />
      
      {/* Glass container */}
      <motion.div 
        className="relative max-w-7xl mx-auto glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="p-8 md:p-12">
          {/* Section header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Why <span className="text-[#FFD700]">Choose</span> TDS Energies?
            </motion.h2>
            <motion.p
              className="text-[#BCBCBC] max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We combine technical expertise with transformative impact to deliver sustainable infrastructure solutions.
            </motion.p>
          </motion.div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-feature hover:glass-feature-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 20px rgba(255,215,0,0.1)"
                }}
              >
                <div className="flex flex-col h-full p-6">
                  <div className="mb-4">
                    <motion.div 
                      className="inline-block p-3 rounded-lg bg-[#FFD700]/10 mb-3"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-[#BCBCBC]">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mt-12 glass-stats"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Project Completion Rate" },
              { value: "3", label: "SDGs Supported" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <p className="text-3xl font-bold text-[#FFD700] mb-2">{stat.value}</p>
                <p className="text-[#BCBCBC]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
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
        .glass-feature {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .glass-feature-hover {
          background: rgba(45, 45, 45, 0.8);
          border-color: rgba(255, 215, 0, 0.3);
        }
        .glass-stats {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}