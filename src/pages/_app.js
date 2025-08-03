import Head from "next/head";
import "../styles/globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <title>TDS Energies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TDS Energies – Powering Africa with water, solar, and hydrogen solutions." />
      </Head>

      {/* Global Wrapper */}
      <div className="relative">
        <Component {...pageProps} />
        <ScrollToTop />
      </div>
    </>
  );
}
