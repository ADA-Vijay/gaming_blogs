import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Script from "next/script";
import Head from "next/head";
import Ramp from "@/components/ramp/ramp"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GameTechAnime",
  description:
    "Discover guides and news on esports, gaming, entertainment, and tech at GameTechAnime. We provide timely coverage to keep you informed.",
  openGraph: {
    images: [
      {
        url: "https://fama.b-cdn.net/GameTech/gtlogo.png",
        height: 1200,
        width: 600,
        alt: "Alt",
      },
    ],
    icons: {
      icon: ["/favicon/favicon.ico"],
      shortcut: ["/favicon/favicon.ico"],
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "GameTechAnime",
    description:
      "Discover guides and news on esports, gaming, entertainment, and tech at GameTechAnime. We provide timely coverage to keep you informed.",
    images: {
      url: "https://fama.b-cdn.net/GameTech/gtlogo.png",
      alt: "GameTechAnime",
    },
  },
};
// const GoogleAnalyticsScript = () => (
//   <>
//     <Script
//       async
//       src="https://www.googletagmanager.com/gtag/js?id=G-BD61L86XQG"
//     />
//     <Script>
//       {`
//         window.dataLayer = window.dataLayer || [];
//         function gtag(){dataLayer.push(arguments);}
//         gtag('js', new Date());
//         gtag('config', 'G-BD61L86XQG');
//       `}
//     </Script>
//   </>
// );

const RichResultsScript = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "GameTechAnime",
        url: "https://gametechanime.com/",
        description:
          "Discover guides and news on esports, gaming, entertainment, and tech at GameTechAnime. We provide timely coverage to keep you informed.",
        publisher: {
          "@type": "Organization",
          name: "GameTechAnime",
          logo: {
            "@type": "ImageObject",
            url: "https://fama.b-cdn.net/GameTech/gtlogo.png",
          },
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://gametechanime.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        inLanguage: "en-US",
      }),
    }}
  />
);
const GoogleTag = () => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-Z0408C5S92"
    />
    <Script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Z0408C5S92');
      `}
    </Script>
  </>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:site_name" content="GameTechAnime" />
        <meta
          property="og:description"
          content="Discover guides and news on esports, gaming, entertainment, and tech at GameTechAnime. We provide timely coverage to keep you informed."
        />
        <meta
          name="google-site-verification"
          content="HLfBbPEKrKWae2uncUl4GAGH4qUO3tu1rKxZ2w6ELgM"
        />
        <meta property="og:title" content="GameTechAnime" />
        <meta property="og:url" content="https://gametechanime.com/" />
        <meta property="og:type" content="website" />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
          rel="stylesheet"
        /> */}

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />

        {/* gametchanime */}

        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        {/* gametchanime */}
        {/* <link
          rel="icon"
          type="image/png"
          sizes="194x194"
          href="/favicon/favicon-194x194.png"
        /> */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        /> */}

        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        /> */}
        {/* <link rel="manifest" href="/site.webmanifest" />

        <link rel="manifest" href="/favicon/manifest.webmanifest" /> */}
        <link rel="manifest" href="/favicon/browserconfig.xml" />

        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        {/* <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" as="style" /> */}
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GameTechAnime",
              alternateName: [
                "GameTechAnime",
                "GameTechAnime",
                "GameTechAnime",
              ],
              url: "https://gametechanime.com",
            }),
          }}
        ></script>
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GameTechAnime",
              url: "https://gametechanime.com",
            }),
          }}
        /> */}
      </head>

      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <aside className="sidebar">
            <div id="sidebarAd"></div>
          </aside>
          <div id="bottomAds"></div>
          <div id="leftAds"></div>
          <div id="rightAds"></div>
          <Footer />
          {/* <GoogleAnalyticsScript /> */}
          <GoogleTag />
        </div>
        <Ramp />
      </body>
    </html>
  );
}
