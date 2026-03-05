import { siteConfig } from "@/lib/site";

function buildRobots() {
  return `User-agent: *
Allow: /
Disallow: /api/
Host: ${siteConfig.siteUrl}

Sitemap: ${siteConfig.siteUrl}/sitemap.xml
`;
}

export default function Robots() {
  return null;
}

export function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/plain");
  res.write(buildRobots());
  res.end();

  return {
    props: {},
  };
}
