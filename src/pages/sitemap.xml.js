import { absoluteUrl, sitemapPages } from "@/lib/site";

function buildSitemap() {
  const lastModified = new Date().toISOString();
  const urls = sitemapPages
    .map(
      (page) => `<url>
  <loc>${absoluteUrl(page.path)}</loc>
  <lastmod>${lastModified}</lastmod>
  <changefreq>${page.changeFrequency}</changefreq>
  <priority>${page.priority}</priority>
</url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export default function SiteMap() {
  return null;
}

export function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "application/xml");
  res.write(buildSitemap());
  res.end();

  return {
    props: {},
  };
}
