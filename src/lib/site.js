const defaultSiteUrl = "https://tdsenergies.com";

export const siteConfig = {
  name: "TDS Energies",
  legalName: "TDS Energies (Pty) Ltd",
  defaultTitle:
    "TDS Energies | Drilling, Boreholes, Solar and Water Infrastructure",
  description:
    "TDS Energies delivers drilling, borehole, water infrastructure, solar energy, and hydrogen-ready solutions across South Africa.",
  slogan:
    "Integrated drilling, water, renewable energy and infrastructure delivery.",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, ""),
  locale: "en_ZA",
  language: "en-ZA",
  themeColor: "#1a1a1a",
  email: "info@tdsenergies.com",
  phone: "+27 17 634 1922",
  ogImage: "/images/hero.jpg",
  foundingDate: "2014",
  address: {
    streetAddress: "34 Albatros",
    locality: "Secunda",
    region: "Mpumalanga",
    regionCode: "ZA-MP",
    postalCode: "2302",
    country: "ZA",
    countryName: "South Africa",
  },
  serviceAreas: ["Secunda", "Mpumalanga", "South Africa"],
};

const brandKeywords = [
  "TDS Energies",
  "TDS Energies South Africa",
  "TDS Energies Secunda",
  "Technique Drilling Services",
  "Technique Drilling Services South Africa",
  "TDS Energies Pty Ltd",
];

const locationKeywords = [
  "Secunda drilling company",
  "Secunda solar company",
  "Secunda water infrastructure",
  "Mpumalanga drilling contractor",
  "Mpumalanga renewable energy company",
  "Mpumalanga infrastructure company",
  "South Africa drilling services",
  "South Africa energy infrastructure",
  "South Africa water solutions",
];

const drillingKeywords = [
  "drilling services",
  "drilling company",
  "drilling contractors",
  "borehole drilling",
  "borehole company",
  "directional drilling",
  "horizontal drilling",
  "mining drilling contractor",
  "drilling consumables",
  "drilling equipment",
  "drilling fluids",
  "drilling rods",
  "core drilling",
  "exploration drilling",
  "industrial drilling services",
];

const waterKeywords = [
  "water infrastructure",
  "water solutions",
  "water treatment",
  "water supply systems",
  "community water projects",
  "borehole pumps",
  "solar water pumps",
  "water access projects",
  "municipal water infrastructure",
  "water engineering company",
];

const solarKeywords = [
  "solar energy",
  "solar company",
  "solar contractor",
  "solar installation",
  "solar EPC",
  "commercial solar",
  "industrial solar",
  "off-grid solar",
  "grid-tied solar",
  "battery storage",
  "renewable energy systems",
  "clean energy solutions",
];

const hydrogenKeywords = [
  "hydrogen solutions",
  "hydrogen projects",
  "hydrogen infrastructure",
  "green hydrogen",
  "future fuels",
  "clean fuel innovation",
  "energy transition",
  "decarbonisation projects",
];

const infrastructureKeywords = [
  "infrastructure development",
  "energy infrastructure",
  "industrial infrastructure",
  "turnkey infrastructure projects",
  "engineering services",
  "industrial services company",
  "operations support",
  "maintenance services",
  "project delivery partner",
  "sustainable infrastructure company",
];

const adjacentIntentKeywords = [
  "civil engineering contractor",
  "industrial contractor",
  "mining infrastructure contractor",
  "utility contractor",
  "municipal infrastructure contractor",
  "project management company",
  "renewable energy developer",
  "power solutions company",
  "ESG infrastructure partner",
  "waste to energy projects",
];

export const serviceCatalog = [
  {
    name: "Drilling and Borehole Services",
    description:
      "Drilling support for mining, boreholes, energy infrastructure, consumables, equipment and maintenance.",
    keywords: mergeKeywords(drillingKeywords, [
      "borehole drilling contractor",
      "drill rig support",
      "drilling maintenance",
    ]),
  },
  {
    name: "Water Infrastructure Development",
    description:
      "Water access, boreholes, pumps, treatment systems and resilient supply infrastructure.",
    keywords: mergeKeywords(waterKeywords, [
      "water supply contractor",
      "water access infrastructure",
      "borehole water systems",
    ]),
  },
  {
    name: "Renewable Energy Solutions",
    description:
      "Commercial and industrial solar systems, energy resilience and battery-backed power solutions.",
    keywords: mergeKeywords(solarKeywords, [
      "solar EPC contractor",
      "industrial energy solutions",
      "commercial solar systems",
    ]),
  },
  {
    name: "Hydrogen and Future Fuels",
    description:
      "Hydrogen-ready project support aligned to cleaner industrial energy pathways.",
    keywords: mergeKeywords(hydrogenKeywords, [
      "hydrogen energy company",
      "future fuel projects",
      "clean energy transition support",
    ]),
  },
  {
    name: "Maintenance and Operations Support",
    description:
      "Operational support, technical maintenance and lifecycle care for infrastructure assets.",
    keywords: mergeKeywords(infrastructureKeywords, [
      "operations and maintenance",
      "infrastructure maintenance partner",
      "technical support services",
    ]),
  },
];

export function mergeKeywords(...groups) {
  const seen = new Set();

  return groups
    .flat()
    .filter(Boolean)
    .map((keyword) => keyword.trim())
    .filter((keyword) => {
      const normalized = keyword.toLowerCase();

      if (seen.has(normalized)) {
        return false;
      }

      seen.add(normalized);
      return true;
    });
}

export const pageKeywords = {
  home: mergeKeywords(
    brandKeywords,
    locationKeywords,
    drillingKeywords,
    waterKeywords,
    solarKeywords,
    hydrogenKeywords,
    infrastructureKeywords,
    adjacentIntentKeywords
  ),
  about: mergeKeywords(brandKeywords, locationKeywords, [
    "about TDS Energies",
    "about Technique Drilling Services",
    "South Africa infrastructure company",
    "Black-owned infrastructure company",
    "Black women-owned business South Africa",
    "B-BBEE level 1 company",
    "youth-led infrastructure company",
    "energy company profile",
    "drilling company history",
    "renewable energy company profile",
  ]),
  services: mergeKeywords(
    brandKeywords,
    locationKeywords,
    drillingKeywords,
    waterKeywords,
    solarKeywords,
    hydrogenKeywords,
    infrastructureKeywords,
    adjacentIntentKeywords,
    [
      "drilling consumables supplier",
      "borehole services South Africa",
      "solar power contractor",
      "water infrastructure contractor",
      "renewable energy contractor",
      "industrial maintenance support",
    ]
  ),
  projects: mergeKeywords(
    brandKeywords,
    locationKeywords,
    waterKeywords,
    solarKeywords,
    hydrogenKeywords,
    infrastructureKeywords,
    [
      "project portfolio",
      "infrastructure case studies",
      "water project portfolio",
      "solar project portfolio",
      "drilling project portfolio",
      "renewable energy projects South Africa",
      "community infrastructure projects",
      "industrial infrastructure projects",
    ]
  ),
  contact: mergeKeywords(
    brandKeywords,
    locationKeywords,
    drillingKeywords,
    waterKeywords,
    solarKeywords,
    infrastructureKeywords,
    [
      "contact TDS Energies",
      "request drilling quote",
      "request solar quote",
      "request borehole quote",
      "contact infrastructure contractor",
      "contact renewable energy company",
      "Secunda contractor contact details",
      "Mpumalanga infrastructure enquiries",
    ]
  ),
};

export const sitemapPages = [
  { path: "/", priority: "1.0", changeFrequency: "weekly" },
  { path: "/about", priority: "0.9", changeFrequency: "monthly" },
  { path: "/services", priority: "0.9", changeFrequency: "monthly" },
  { path: "/projects", priority: "0.8", changeFrequency: "monthly" },
  { path: "/contact", priority: "0.8", changeFrequency: "monthly" },
];

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedPath === "/") {
    return siteConfig.siteUrl;
  }

  return `${siteConfig.siteUrl}${normalizedPath}`;
}

function serviceAreaNodes() {
  return siteConfig.serviceAreas.map((area) => ({
    "@type": "Place",
    name: area,
  }));
}

function serviceCatalogNode() {
  return {
    "@type": "OfferCatalog",
    name: "TDS Energies Services",
    itemListElement: serviceCatalog.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        serviceType: service.name,
        description: service.description,
        keywords: service.keywords.join(", "),
        areaServed: serviceAreaNodes(),
        provider: {
          "@type": "Organization",
          name: siteConfig.legalName,
          url: siteConfig.siteUrl,
        },
      },
    })),
  };
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    slogan: siteConfig.slogan,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: siteConfig.foundingDate,
    keywords: pageKeywords.home.join(", "),
    areaServed: serviceAreaNodes(),
    address: postalAddress(),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: "ZA",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: "ZA",
        availableLanguage: ["en"],
      },
    ],
    knowsAbout: mergeKeywords(
      drillingKeywords,
      waterKeywords,
      solarKeywords,
      hydrogenKeywords,
      infrastructureKeywords
    ),
    hasOfferCatalog: serviceCatalogNode(),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    keywords: pageKeywords.home.join(", "),
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.siteUrl,
    },
  };
}

export function webpageSchema({
  path,
  name,
  description,
  type = "WebPage",
  keywords = [],
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: siteConfig.language,
    keywords: mergeKeywords(keywords).join(", "),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    about: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.siteUrl,
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListSchema({ name, items, itemType = "Thing" }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": itemType,
        name: item,
      },
    })),
  };
}

export function serviceCatalogSchema() {
  return {
    "@context": "https://schema.org",
    ...serviceCatalogNode(),
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    image: absoluteUrl(siteConfig.ogImage),
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    slogan: siteConfig.slogan,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    keywords: pageKeywords.services.join(", "),
    areaServed: serviceAreaNodes(),
    serviceArea: serviceAreaNodes(),
    address: postalAddress(),
    hasOfferCatalog: serviceCatalogNode(),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
  };
}
