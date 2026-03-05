import Head from "next/head";
import { absoluteUrl, mergeKeywords, siteConfig } from "@/lib/site";

const defaultRobots =
  "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

export default function SeoHead({
  title,
  description,
  path = "/",
  image,
  keywords,
  type = "website",
  noindex = false,
}) {
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.defaultTitle;
  const resolvedDescription = description || siteConfig.description;
  const resolvedImage = absoluteUrl(image || siteConfig.ogImage);
  const canonicalUrl = absoluteUrl(path);
  const robots = noindex
    ? defaultRobots.replace("index,follow", "noindex,nofollow")
    : defaultRobots;
  const keywordContent = Array.isArray(keywords)
    ? mergeKeywords(keywords).join(", ")
    : keywords;
  const locationLabel = `${siteConfig.address.locality}, ${siteConfig.address.region}, ${siteConfig.address.countryName}`;

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="author" content={siteConfig.legalName} />
      <meta name="application-name" content={siteConfig.name} />
      <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
      <meta name="geo.region" content={siteConfig.address.regionCode} />
      <meta name="geo.placename" content={locationLabel} />
      <meta name="coverage" content={siteConfig.serviceAreas.join(", ")} />
      <meta name="category" content="Drilling, Water Infrastructure, Renewable Energy, Hydrogen" />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:secure_url" content={resolvedImage} />
      <meta property="og:image:alt" content={resolvedTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedImage} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-ZA" href={canonicalUrl} />
      {keywordContent ? <meta name="keywords" content={keywordContent} /> : null}
      {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? (
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
      ) : null}
    </Head>
  );
}
