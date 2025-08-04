import { motion } from "framer-motion";
import { FaArrowRight, FaSearchPlus } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Solar Farm Installation",
      category: "Renewable Energy",
      image: "/images/projects/solar-farm.jpg",
      tags: ["Solar", "Commercial", "Grid-tied"]
    },
    {
      id: 2,
      title: "Community Boreholes",
      category: "Water Solutions",
      image: "/images/projects/borehole.jpg",
      tags: ["Water Access", "SDG 6", "Solar Pumps"]
    },
    {
      id: 3,
      title: "Hydrogen Exploration",
      category: "Future Fuels",
      image: "/images/projects/hydrogen.jpg",
      tags: ["Research", "Clean Energy", "Innovation"]
    },
    {
      id: 4,
      title: "Mining Drilling Contract",
      category: "Drilling Services",
      image: "/images/projects/mining-drill.jpg",
      tags: ["Mining", "Precision", "Safety"]
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-4">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/images/projects/grid-pattern.jpg')] bg-cover opacity-10" />
      
      <motion.div 
        className="relative max-w-7xl mx-auto glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <div className="p-8 md:p-12 border-b border-[#ffffff]/10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FFD700]">Impactful</span> Projects
          </motion.h2>
          <motion.p
            className="text-[#BCBCBC] max-w-3xl mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our portfolio demonstrates sustainable infrastructure solutions across South Africa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-2">
              {['All', 'Energy', 'Water', 'Drilling', 'Hydrogen'].map((filter, index) => (
                <motion.button
                  key={filter}
                  className="px-4 py-2 rounded-full glass-filter-button hover:glass-filter-button-active text-[#BCBCBC] hover:text-[#FFD700] text-sm font-medium transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-0.5 bg-[#ffffff]/10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden glass-project-card hover:glass-project-card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Project image */}
              <div className="h-64 md:h-80 overflow-hidden relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/90 via-transparent to-transparent" />
              </div>

              {/* Project info */}
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <motion.span 
                    className="inline-block px-3 py-1 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-xs font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.span>
                  <motion.button
                    className="p-2 rounded-full glass-icon-button hover:bg-[#FFD700] text-[#BCBCBC] hover:text-[#1a1a1a]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaSearchPlus />
                  </motion.button>
                </div>

                <motion.h3 
                  className="text-xl font-semibold text-white mb-2 group-hover:text-[#FFD700] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-[#BCBCBC] mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tag} 
                      className="px-2 py-1 rounded glass-tag text-[#BCBCBC] text-xs"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + tagIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* <motion.a
                  href="#"
                  className="inline-flex items-center text-[#FFD700] font-medium group"
                  whileHover={{ x: 5 }}
                >
                  View Case Study 
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </motion.a> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div 
          className="p-8 md:p-12 text-center border-t border-[#ffffff]/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Ready to start your project?
          </h3>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#e6c800] text-[#1a1a1a] font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
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
        .glass-project-card {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .glass-project-card-hover {
          background: rgba(45, 45, 45, 0.9);
          box-shadow: 0 8px 32px rgba(255, 215, 0, 0.1);
        }
        .glass-filter-button {
          background: rgba(45, 45, 45, 0.5);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-filter-button-active {
          background: rgba(255, 215, 0, 0.1);
          border-color: rgba(255, 215, 0, 0.3);
        }
        .glass-icon-button {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
        }
        .glass-tag {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(4px);
        }
      `}</style>
    </section>
  );
}