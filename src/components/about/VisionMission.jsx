import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaHandsHelping, FaLeaf } from "react-icons/fa";

export default function VisionMission() {
  const values = [
    {
      icon: <FaLightbulb className="text-2xl text-[#FFD700]" />,
      title: "Innovation",
      description: "Pioneering sustainable solutions"
    },
    {
      icon: <FaHandsHelping className="text-2xl text-[#FFD700]" />,
      title: "Empowerment",
      description: "Developing local talent and communities"
    },
    {
      icon: <FaLeaf className="text-2xl text-[#FFD700]" />,
      title: "Sustainability",
      description: "Environmental stewardship in all projects"
    }
  ];

  return (
    <section className="relative py-20 px-4">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/images/vision/grid-pattern.jpg')] bg-cover opacity-10" />
      
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
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-4 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="p-3 rounded-full bg-[#FFD700]/10"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <FaBullseye className="text-3xl text-[#FFD700]" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our <span className="text-[#FFD700]">Purpose</span>
              </h2>
            </motion.div>
            <motion.p
              className="text-[#BCBCBC] max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Driving South Africa's sustainable future through innovative infrastructure solutions
            </motion.p>
          </motion.div>

          {/* Vision & Mission cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vision card */}
            <motion.div
              className="glass-card hover:glass-card-hover"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="p-3 rounded-full bg-[#FFD700]/10"
                  whileHover={{ rotate: 5 }}
                >
                  <FaLightbulb className="text-2xl text-[#FFD700]" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
              </div>
              <p className="text-[#BCBCBC] leading-relaxed">
                To be <span className="text-[#FFD700] font-medium">South Africa's premier youth-led infrastructure company</span>, transforming energy, water and fuel security through sustainable, innovative solutions that drive economic growth and community resilience.
              </p>
            </motion.div>

            {/* Mission card */}
            <motion.div
              className="glass-card hover:glass-card-hover"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="p-3 rounded-full bg-[#FFD700]/10"
                  whileHover={{ rotate: 5 }}
                >
                  <FaHandsHelping className="text-2xl text-[#FFD700]" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
              </div>
              <p className="text-[#BCBCBC] leading-relaxed mb-6">
                To deliver <span className="text-[#FFD700] font-medium">integrated, innovative and inclusive solutions</span> in drilling, water and renewable energy that:
              </p>
              <ul className="space-y-4 text-[#BCBCBC]">
                {[
                  "Uplift underserved communities through accessible infrastructure",
                  "Support industries with reliable, sustainable systems",
                  "Pioneer future fuel technologies like hydrogen",
                  "Empower youth and women in the energy sector"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="text-[#FFD700] mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Core values */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-12">
              Our <span className="text-[#FFD700]">Core Values</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="glass-value hover:glass-value-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFD700]/10 mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-[#BCBCBC]">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-[#BCBCBC] mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Our vision and mission guide every project we undertake, ensuring alignment with South Africa's sustainable development goals.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#e6c800] text-[#1a1a1a] font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.a>
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
        .glass-card {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem;
          transition: all 0.3s ease;
        }
        .glass-card-hover {
          background: rgba(45, 45, 45, 0.8);
          border-color: rgba(255, 215, 0, 0.3);
          box-shadow: 0 10px 25px rgba(255,215,0,0.1);
        }
        .glass-value {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        .glass-value-hover {
          background: rgba(45, 45, 45, 0.8);
          border-color: rgba(255, 215, 0, 0.3);
        }
      `}</style>
    </section>
  );
}