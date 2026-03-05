import Head from "next/head";

export default function StructuredData({ data }) {
  const entries = Array.isArray(data) ? data : [data];

  if (!data || entries.length === 0) {
    return null;
  }

  return (
    <Head>
      {entries.map((entry, index) => (
        <script
          key={`json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </Head>
  );
}
