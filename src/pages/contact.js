import Head from "next/head";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | TDS Energies</title>
        <meta
          name="description"
          content="Get in touch with TDS Energies for inquiries, quotes, or collaboration opportunities."
        />
        <style>{`
          html {
            scroll-behavior: smooth;
            background-color: #1a1a1a;
            color: #ffffff;
            overflow-x: hidden;
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
          }
          .map-container {
            height: 500px;
            width: 100%;
          }
          .map-iframe {
            height: 100%;
            width: 100%;
            border: none;
            filter: grayscale(20%) contrast(90%) brightness(85%);
          }
        `}</style>
      </Head>

      <main className="bg-[#1a1a1a]">
        {/* Main Header */}
        <MainHeader />

        {/* Top Hero Section - Matches Services Page Exactly */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-[url('/images/about/about-hero.jpg')] bg-cover bg-center"
              style={{ backgroundPosition: 'center 30%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/90 via-[#2D2D2D]/70 to-[#2D2D2D]/30 backdrop-blur-[1px]" />
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              <span className="text-[#FFD700]">Contact</span> Us
            </h1>
            <p className="mt-4 text-[#BCBCBC] max-w-xl mx-auto">
              We're here to answer your questions and support your energy journey.
            </p>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="py-20 px-4">
          <motion.div
            className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 glass-panel p-8 md:p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Contact Info Column */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">
                <span className="text-[#FFD700]">Get</span> In Touch
              </h2>

              <div className="space-y-6">
                {[
                  { icon: <FaEnvelope className="text-[#FFD700] text-2xl" />, 
                    title: "Email", 
                    content: "info@tdsenergies.com" },
                  { icon: <FaPhoneAlt className="text-[#FFD700] text-2xl" />, 
                    title: "Phone", 
                    content: "+27 12 345 6789" },
                  { icon: <FaMapMarkerAlt className="text-[#FFD700] text-2xl" />, 
                    title: "Address", 
                    content: "123 Energy Street, Johannesburg, South Africa" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2">{item.icon}</div>
                    <div>
                      <p className="text-[#BCBCBC] font-semibold">{item.title}</p>
                      <p className="text-white">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: <FaLinkedin />, href: "https://linkedin.com" },
                  { icon: <FaWhatsapp />, href: "https://wa.me/27712345678" },
                  { icon: <FaEnvelope />, href: "mailto:info@tdsenergies.com" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full border border-[#ffffff]/20 hover:border-[#FFD700] text-[#BCBCBC] hover:text-white transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form Column */}
            <form className="space-y-6">
              <div>
                <label className="block text-[#BCBCBC] mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-[#2D2D2D] border border-[#ffffff]/20 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-[#BCBCBC] mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-[#2D2D2D] border border-[#ffffff]/20 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-[#BCBCBC] mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full bg-[#2D2D2D] border border-[#ffffff]/20 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all"
                  placeholder="Type your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#e6c800] text-[#1a1a1a] font-semibold px-6 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </section>

        {/* Full-width Google Maps Section */}
        <section className="w-full relative">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.634037697072!2d28.04785631502834!3d-26.1824629834495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1b6e3d3e1d%3A0x9f0b7a7b7b7b7b7b!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              className="map-iframe"
              allowFullScreen
              loading="lazy"
              title="TDS Energies Location"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none" />
        </section>

        {/* Footer */}
        <Footer />
      </main>

      <style jsx global>{`
        .glass-panel {
          background: rgba(45, 45, 45, 0.7);
          backdrop-filter: blur(12px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  );
}