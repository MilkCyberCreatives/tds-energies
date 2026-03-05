import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import MainHeader from "@/components/MainHeader";
import ProjectsSection from "@/components/ProjectsSection";
import SeoHead from "@/components/SeoHead";
import ServicesSection from "@/components/ServicesSection";
import StructuredData from "@/components/StructuredData";
import WhyChooseUs from "@/components/WhyChooseUs";
import {
  itemListSchema,
  organizationSchema,
  pageKeywords,
  professionalServiceSchema,
  serviceCatalogSchema,
  webpageSchema,
  websiteSchema,
} from "@/lib/site";

const homeDescription =
  "TDS Energies delivers drilling, borehole, water infrastructure, solar energy, and hydrogen-ready solutions across South Africa.";

const homeStructuredData = [
  organizationSchema(),
  professionalServiceSchema(),
  websiteSchema(),
  webpageSchema({
    path: "/",
    name: "TDS Energies",
    description: homeDescription,
    keywords: pageKeywords.home,
  }),
  serviceCatalogSchema(),
  itemListSchema({
    name: "TDS Energies Core Services",
    itemType: "Service",
    items: [
      "Drilling Services",
      "Water Infrastructure",
      "Solar Energy Systems",
      "Hydrogen Solutions",
    ],
  }),
];

export default function Home() {
  return (
    <>
      <SeoHead
        description={homeDescription}
        path="/"
        keywords={pageKeywords.home}
      />
      <StructuredData data={homeStructuredData} />
      <MainHeader />
      <main>
        <HeroBanner />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
