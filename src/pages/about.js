import Head from "next/head";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaArrowDown, FaHistory, FaBullseye, FaLightbulb, FaHandsHelping, FaLeaf } from "react-icons/fa";

export default function AboutPage() {
  const milestones = [
    { year: "2014", title: "Company Founded", description: "Established as Technique Drilling Services" },
    { year: "2018", title: "B-BBEE Level 1", description: "Achieved top empowerment rating" },
    { year: "2021", title: "Renewables Launch", description: "Expanded into solar energy solutions" },
    { year: "2023", title: "Women Ownership", description: "Became 51% Black women-owned" },
    { year: "2025", title: "TDS Energies", description: "Rebranded to reflect energy transition focus" }
  ];

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
    <>
      <Head>
        <title>About Us | TDS Energies</title>
        <meta name="description" content="Learn about TDS Energies' history, vision, mission, and transformation journey." />
        <style>{`
          html {
            scroll-behavior: smooth;
            background-color: #1a1a1a;
            color: #ffffff;
            overflow-x: hidden;
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
          }
        `}</style>
      </Head>

      <main className="bg-[#1a1a1a] text-white">
        <MainHeader />

        {/* AboutHero */}
        <section className="relative mt-16 h-[50vh] min-h-[400px] flex items-center justify-center px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/about/about-hero.jpg')] bg-cover bg-center" style={{ backgroundPosition: 'center 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/90 via-[#2D2D2D]/70 to-[#2D2D2D]/30 backdrop-blur-[1px]" />
          </div>
          <div className="relative z-10 text-center max-w-4xl px-4">
            <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="text-[#FFD700]">Our</span> Legacy
            </motion.h1>
            <motion.p className="text-xl text-[#BCBCBC] max-w-2xl mx-auto mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Transforming South Africa's energy landscape through innovation
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <motion.a href="#history" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#e6c800] text-[#1a1a1a] font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Explore Our Journey <FaArrowDown className="ml-3 animate-bounce" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* CompanyHistory */}
        <section id="history" className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[url('/images/history/grid-pattern.jpg')] bg-cover opacity-10" />
          <motion.div className="relative max-w-7xl mx-auto glass-panel" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, margin: "-100px" }}>
            <div className="p-8 md:p-12">
              <motion.div className="flex items-center gap-4 mb-12" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <motion.div className="p-3 rounded-full bg-[#FFD700]/10" whileHover={{ rotate: 5, scale: 1.05 }}>
                  <FaHistory className="text-3xl text-[#FFD700]" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Our <span className="text-[#FFD700]">Journey</span></h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">From <span className="text-[#FFD700]">Technique Drilling</span> to <span className="text-[#FFD700]">TDS Energies</span></h3>
                  <p className="text-[#BCBCBC] leading-relaxed">
                    What began as a specialized drilling service in 2014 has transformed into a comprehensive infrastructure solutions provider. Our evolution mirrors South Africa's energy transition, expanding from traditional drilling to integrated water, renewable energy, and future fuel systems.
                  </p>
                  <motion.div className="glass-highlight" whileHover={{ y: -3 }}>
                    <h4 className="text-lg font-semibold text-[#FFD700] mb-3">Why We Changed</h4>
                    <p className="text-[#BCBCBC]">
                      The 2025 rebranding to TDS Energies reflects our commitment to being at the forefront of sustainable infrastructure development while maintaining our drilling expertise as a core competency.
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
                  {milestones.map((milestone, index) => (
                    <motion.div key={index} className="relative pl-8 border-l-2 border-[#FFD700]/30" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }} whileHover={{ x: 5 }}>
                      <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center text-[10px] font-bold text-[#1a1a1a]">
                        {milestone.year}
                      </div>
                      <motion.div className="glass-milestone hover:glass-milestone-hover" whileHover={{ y: -3 }}>
                        <h4 className="text-lg font-semibold text-white mb-1">{milestone.title}</h4>
                        <p className="text-[#BCBCBC] text-sm">{milestone.description}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Vision & Mission */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[url('/images/vision/grid-pattern.jpg')] bg-cover opacity-10" />
          <motion.div className="relative max-w-7xl mx-auto glass-panel" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, margin: "-100px" }}>
            <div className="p-8 md:p-12">
              <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <motion.div className="inline-flex items-center gap-4 mb-6" whileHover={{ scale: 1.02 }}>
                  <motion.div className="p-3 rounded-full bg-[#FFD700]/10" whileHover={{ rotate: 5, scale: 1.1 }}>
                    <FaBullseye className="text-3xl text-[#FFD700]" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Our <span className="text-[#FFD700]">Purpose</span></h2>
                </motion.div>
                <motion.p className="text-[#BCBCBC] max-w-3xl mx-auto">Driving South Africa's sustainable future through innovative infrastructure solutions</motion.p>
              </motion.div>

              {/* Cards */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div className="glass-card hover:glass-card-hover" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-[#FFD700]/10"><FaLightbulb className="text-2xl text-[#FFD700]" /></div>
                    <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
                  </div>
                  <p className="text-[#BCBCBC]">To be <span className="text-[#FFD700] font-medium">South Africa's premier youth-led infrastructure company</span>...</p>
                </motion.div>
                <motion.div className="glass-card hover:glass-card-hover" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-[#FFD700]/10"><FaHandsHelping className="text-2xl text-[#FFD700]" /></div>
                    <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
                  </div>
                  <p className="text-[#BCBCBC] mb-6">To deliver <span className="text-[#FFD700] font-medium">integrated, innovative and inclusive solutions</span>...</p>
                  <ul className="space-y-4 text-[#BCBCBC]">
                    {[
                      "Uplift underserved communities",
                      "Support industries",
                      "Pioneer hydrogen fuels",
                      "Empower youth and women"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start"><span className="text-[#FFD700] mr-3 mt-1">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div className="text-center mt-16">
                <p className="text-[#BCBCBC] mb-6 max-w-2xl mx-auto">Our vision and mission guide every project...</p>
                <a href="/contact" className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#e6c800] text-[#1a1a1a] font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all">Partner With Us</a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
