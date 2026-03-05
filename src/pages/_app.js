import Head from "next/head";
import ScrollToTop from "@/components/ScrollToTop";
import { siteConfig } from "@/lib/site";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={siteConfig.themeColor} />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="relative">
        <Component {...pageProps} />
        <ScrollToTop />
      </div>
    </>
  );
}
