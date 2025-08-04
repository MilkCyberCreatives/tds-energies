import { motion } from "framer-motion";
import { FaSearch, FaWater, FaSolarPanel, FaHardHat, FaLeaf, FaArrowRight } from "react-icons/fa";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Mpumalanga Water Initiative",
      category: "Water Solutions",
      image: "/images/projects/borehole.jpg",
      tags: ["SDG 6", "Community", "Solar Pumps"]
    },
    {
      id: 2,
      title: "Industrial Solar Farm",
      category: "Renewable Energy",
      image: "/images/projects/solar-farm.jpg",
      tags: ["Commercial", "Grid-tied", "Battery Storage"]
    },
    {
      id: 3,
      title: "Hydrogen",
      category: "Future Fuels",
      image: "/images/projects/hydrogen.jpg",
      tags: ["Research", "Clean Energy", "Innovation"]
    },
    {
      id: 4,
      title: "Mining Infrastructure",
      category: "Drilling Services",
      image: "/images/projects/mining-drill.jpg",
      tags: ["Precision", "Safety", "Core Sampling"]
    }
  ];

  const categories = [
    { name: "All", icon: <FaSearch /> },
    { name: "Drilling", icon: <FaHardHat /> },
    { name: "Water", icon: <FaWater /> },
    { name: "Energy", icon: <FaSolarPanel /> },
    { name: "Hydrogen", icon: <FaLeaf /> }
  ];

  return (
    <>
      <MainHeader />

      {/* Hero Section */}
      <section className="relative mt-16 h-[50vh] min-h-[400px] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-[url('/images/about/about-hero.jpg')] bg-cover bg-center"
            style={{ backgroundPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/90 via-[#2D2D2D]/70 to-[#2D2D2D]/30 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="text-[#FFD700]">Projects</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-[#BCBCBC] max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Delivering sustainable infrastructure solutions across South Africa
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[url('/images/projects/grid-pattern.jpg')] bg-cover opacity-10" />
        
        <motion.div 
          className="relative max-w-7xl mx-auto glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Filter Bar */}
          <motion.div
            className="p-6 border-b border-[#ffffff]/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-filter hover:glass-filter-active"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-[#FFD700]">{category.icon}</span>
                  <span className="text-[#BCBCBC]">{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-0.5 bg-[#ffffff]/10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-project hover:glass-project-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
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

                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <motion.span 
                      className="inline-block px-3 py-1 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-xs font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.span>
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
                        key={tagIndex}
                        className="px-2 py-1 rounded glass-tag text-[#BCBCBC] text-xs"
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + tagIndex * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* <motion.a
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-[#FFD700] font-medium group"
                    whileHover={{ x: 5 }}
                  >
                    View Project Details
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.a> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            className="p-8 md:p-12 text-center border-t border-[#ffffff]/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Have a project in mind?
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
      </section>

      <Footer />

      <style jsx>{`
        .glass-panel {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(12px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .glass-project {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .glass-project-hover {
          background: rgba(45, 45, 45, 0.9);
          box-shadow: 0 10px 30px rgba(255,215,0,0.1);
        }
        .glass-filter {
          background: rgba(45, 45, 45, 0.5);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .glass-filter-active {
          background: rgba(255, 215, 0, 0.1);
          border-color: rgba(255, 215, 0, 0.3);
        }
        .glass-tag {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(4px);
        }
      `}</style>
    </>
  );
}
