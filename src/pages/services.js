import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import SeoHead from "@/components/SeoHead";
import StructuredData from "@/components/StructuredData";
import ServicesSection from "@/components/services/ServicesSection";
import {
  breadcrumbSchema,
  itemListSchema,
  organizationSchema,
  pageKeywords,
  professionalServiceSchema,
  serviceCatalogSchema,
  webpageSchema,
} from "@/lib/site";

const servicesDescription =
  "Explore TDS Energies services including drilling equipment and consumables, water infrastructure, renewable energy systems, and future-fuels support.";

const servicesStructuredData = [
  organizationSchema(),
  professionalServiceSchema(),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]),
  webpageSchema({
    path: "/services",
    name: "Services",
    description: servicesDescription,
    type: "CollectionPage",
    keywords: pageKeywords.services,
  }),
  serviceCatalogSchema(),
  itemListSchema({
    name: "TDS Energies Services",
    itemType: "Service",
    items: [
      "Drilling Services",
      "Renewable Energy",
      "Water Solutions",
      "Hydrogen",
    ],
  }),
];

export default function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Services"
        description={servicesDescription}
        path="/services"
        keywords={pageKeywords.services}
      />
      <StructuredData data={servicesStructuredData} />

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
              <span className="text-[#FFD700]">Our</span> Services
            </h1>
            <p className="mt-4 text-[#BCBCBC] max-w-xl mx-auto">
              Delivering energy, water, and drilling solutions with purpose and
              innovation.
            </p>
          </div>
        </section>

        <ServicesSection />
        <Footer />
      </main>
    </>
  );
}
