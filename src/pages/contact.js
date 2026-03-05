import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import SeoHead from "@/components/SeoHead";
import StructuredData from "@/components/StructuredData";
import {
  breadcrumbSchema,
  organizationSchema,
  pageKeywords,
  professionalServiceSchema,
  webpageSchema,
} from "@/lib/site";

const contactDescription =
  "Contact TDS Energies in Secunda, Mpumalanga for drilling, water, solar, and infrastructure project enquiries.";

const contactStructuredData = [
  organizationSchema(),
  professionalServiceSchema(),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
  webpageSchema({
    path: "/contact",
    name: "Contact",
    description: contactDescription,
    type: "ContactPage",
    keywords: pageKeywords.contact,
  }),
];

const contactItems = [
  {
    icon: <FaEnvelope className="text-[#FFD700] text-2xl" />,
    title: "Email",
    content: "info@tdsenergies.com",
  },
  {
    icon: <FaPhoneAlt className="text-[#FFD700] text-2xl" />,
    title: "Phone",
    content: "+27 17 634 1922",
  },
  {
    icon: <FaMapMarkerAlt className="text-[#FFD700] text-2xl" />,
    title: "Address",
    content: "34 Albatros, Secunda, Mpumalanga, South Africa",
  },
];

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact"
        description={contactDescription}
        path="/contact"
        keywords={pageKeywords.contact}
      />
      <StructuredData data={contactStructuredData} />

      <main className="bg-[#1a1a1a]">
        <MainHeader />

        <section className="relative h-[42vh] min-h-[340px] flex items-center justify-center px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-[url('/images/about/about-hero.jpg')] bg-cover bg-center"
              style={{ backgroundPosition: "center 30%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/90 via-[#2D2D2D]/70 to-[#2D2D2D]/30 backdrop-blur-[1px]" />
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              <span className="text-[#FFD700]">Contact</span> Us
            </h1>
            <p className="mt-4 text-[#BCBCBC] max-w-xl mx-auto">
              We are here to answer your questions and support your energy
              journey.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-12 px-4">
          <motion.div
            className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 glass-panel p-8 md:p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">
                <span className="text-[#FFD700]">Get</span> In Touch
              </h2>

              <div className="space-y-6">
                {contactItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="p-2">{item.icon}</div>
                    <div>
                      <p className="text-[#BCBCBC] font-semibold">
                        {item.title}
                      </p>
                      <p className="text-white">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: <FaLinkedin />, href: "https://linkedin.com" },
                  { icon: <FaWhatsapp />, href: "https://wa.me/27712345678" },
                  { icon: <FaEnvelope />, href: "mailto:info@tdsenergies.com" },
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
                <label className="block text-[#BCBCBC] mb-2">
                  Email Address
                </label>
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

        <section className="w-full relative">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.9916542639626!2d29.174321675425887!3d-26.520392876883115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeb1305b7f9407d%3A0x75151f2b6002b5f7!2sAlbatross%20St%2C%20Secunda%2C%202302!5e0!3m2!1sen!2sza!4v1754314708387!5m2!1sen!2sza"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
              title="TDS Energies Location"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none" />
        </section>

        <Footer />
      </main>

      <style jsx global>{`
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
