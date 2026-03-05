import { motion } from "framer-motion";
import {
  FaAtom,
  FaChartLine,
  FaHardHat,
  FaSolarPanel,
  FaTools,
  FaWater,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHardHat className="text-4xl text-[#BCBCBC]" />,
    title: "Drilling Services",
    description:
      "Horizontal and directional drilling for energy and mining sectors.",
    highlights: [
      "Supply of drill rigs",
      "Rebuild, service, and maintenance",
      "Drilling consumables",
      "Drilling fluids",
      "Imdex-Devico survey equipment",
      "ITH consumables and drilling rods",
    ],
  },
  {
    icon: <FaSolarPanel className="text-4xl text-[#FFD700]" />,
    title: "Renewable Energy",
    description:
      "End-to-end solar solutions for residential, commercial, and industrial applications.",
    highlights: [
      "Grid-tied and off-grid systems",
      "Battery storage",
      "Energy efficiency audits",
    ],
  },
  {
    icon: <FaWater className="text-4xl text-[#00B4D8]" />,
    title: "Water Solutions",
    description:
      "Borehole drilling, water treatment, and sustainable water infrastructure development.",
    highlights: [
      "SDG 6 compliance",
      "Solar-powered pumps",
      "Community water projects",
    ],
  },
  {
    icon: <FaAtom className="text-4xl text-[#70E000]" />,
    title: "Hydrogen",
    description: "Pioneering hydrogen exploration and future-fuel solutions.",
    highlights: [
      "Resource mapping",
      "Extraction technology",
      "Clean energy transition",
    ],
  },
];

const sdgPoints = [
  "Clean Water and Sanitation",
  "Affordable and Clean Energy",
  "Climate Action",
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-10 md:py-12 px-4">
      <div className="absolute inset-0 bg-[url('/images/services/grid-pattern.jpg')] bg-cover opacity-10" />

      <motion.div
        className="relative max-w-7xl mx-auto glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="p-8 md:p-12 border-b border-[#ffffff]/10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FFD700]">Integrated</span> Services
          </motion.h2>
          <motion.p
            className="text-[#BCBCBC] max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Combining decades of drilling expertise with cutting-edge renewable
            energy solutions to deliver turnkey infrastructure projects.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[#ffffff]/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-service hover:glass-service-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(255,215,0,0.1)",
              }}
            >
              <div className="flex flex-col h-full p-6">
                <div className="mb-4">
                  <div className="inline-block p-3 rounded-lg bg-[#ffffff]/10 mb-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#BCBCBC] mb-4">{service.description}</p>
                </div>
                <ul className="mt-auto space-y-2">
                  {service.highlights.map((highlight, highlightIndex) => (
                    <motion.li
                      key={highlight}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.3 + index * 0.1 + highlightIndex * 0.05,
                      }}
                    >
                      <span className="text-[#FFD700] mr-2">&bull;</span>
                      <span className="text-sm text-[#BCBCBC]">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="p-8 md:p-12 glass-footer border-t border-[#ffffff]/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <FaTools className="text-[#FFD700] mr-2" />
                <span>Our Approach</span>
              </h3>
              <p className="text-[#BCBCBC]">
                From feasibility studies to commissioning, we deliver end-to-end
                solutions with technical excellence and sustainable practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <FaChartLine className="text-[#FFD700] mr-2" />
                <span>SDG Alignment</span>
              </h3>
              <ul className="text-[#BCBCBC] space-y-2">
                {sdgPoints.map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="text-[#FFD700] mr-2">&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <FaHardHat className="text-[#FFD700] mr-2" />
                <span>Technical Edge</span>
              </h3>
              <p className="text-[#BCBCBC]">
                Level 1 B-BBEE rated with Black women-led leadership.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .glass-panel {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(12px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .glass-service {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .glass-service-hover {
          background: rgba(45, 45, 45, 0.9);
          border: 1px solid rgba(255, 215, 0, 0.2);
        }
        .glass-footer {
          background: rgba(45, 45, 45, 0.8);
          backdrop-filter: blur(8px);
        }
      `}</style>
    </section>
  );
}
