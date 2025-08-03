// pages/services.js
import Head from "next/head";
import MainHeader from "@/components/MainHeader";
import ServicesSection from "@/components/services/ServicesSection";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | TDS Energies</title>
        <meta name="description" content="Explore the full range of services offered by TDS Energies including drilling, water infrastructure, renewables, and future fuels." />
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

      <main className="bg-[#1a1a1a]">
        {/* Main Header */}
        <MainHeader />

        {/* Top Hero Section with breadcrumb-style appearance */}
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
              <span className="text-[#FFD700]">Our</span> Services
            </h1>
            <p className="mt-4 text-[#BCBCBC] max-w-xl mx-auto">
              Delivering energy, water, and drilling solutions with purpose and innovation.
            </p>
          </div>
        </section>

        {/* Services Listing */}
        <ServicesSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
