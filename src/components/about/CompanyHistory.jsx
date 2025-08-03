import { motion } from "framer-motion";
import { FaHistory } from "react-icons/fa";

export default function CompanyHistory() {
  const milestones = [
    { year: "2014", title: "Company Founded", description: "Established as Technique Drilling Services" },
    { year: "2018", title: "B-BBEE Level 1", description: "Achieved top empowerment rating" },
    { year: "2021", title: "Renewables Launch", description: "Expanded into solar energy solutions" },
    { year: "2023", title: "Women Ownership", description: "Became 51% Black women-owned" },
    { year: "2025", title: "TDS Energies", description: "Rebranded to reflect energy transition focus" }
  ];

  return (
    <section id="history" className="relative py-20 px-4">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/images/history/grid-pattern.jpg')] bg-cover opacity-10" />
      
      <motion.div 
        className="relative max-w-7xl mx-auto glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="p-8 md:p-12">
          {/* Section Header */}
          <motion.div 
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="p-3 rounded-full bg-[#FFD700]/10"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <FaHistory className="text-3xl text-[#FFD700]" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our <span className="text-[#FFD700]">Journey</span>
            </h2>
          </motion.div>

          {/* Two-column Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Description */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white">
                From <span className="text-[#FFD700]">Technique Drilling</span> to <span className="text-[#FFD700]">TDS Energies</span>
              </h3>

              <p className="text-[#BCBCBC] leading-relaxed">
                What began as a specialized drilling service in 2014 has transformed into a comprehensive infrastructure solutions provider. Our evolution mirrors South Africa's energy transition, expanding from traditional drilling to integrated water, renewable energy, and future fuel systems.
              </p>

              <motion.div
                className="glass-highlight"
                whileHover={{ y: -3 }}
              >
                <h4 className="text-lg font-semibold text-[#FFD700] mb-3">Why We Changed</h4>
                <p className="text-[#BCBCBC]">
                  The 2025 rebranding to TDS Energies reflects our commitment to being at the forefront of sustainable infrastructure development while maintaining our drilling expertise as a core competency.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column: Timeline Items */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-[#FFD700]/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center text-[10px] font-bold text-[#1a1a1a]">
                    {milestone.year}
                  </div>
                  <motion.div
                    className="glass-milestone hover:glass-milestone-hover"
                    whileHover={{ y: -3 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-1">{milestone.title}</h4>
                    <p className="text-[#BCBCBC] text-sm">{milestone.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
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
        .glass-highlight {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        .glass-milestone {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem;
          transition: all 0.3s ease;
        }
        .glass-milestone-hover {
          background: rgba(45, 45, 45, 0.8);
          border-color: rgba(255, 215, 0, 0.3);
          box-shadow: 0 5px 15px rgba(255,215,0,0.1);
        }
      `}</style>
    </section>
  );
}