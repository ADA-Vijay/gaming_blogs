import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Script from "next/script";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GameTech",
  description:
    "Discover guides and news on esports, gaming, entertainment, and tech at GameTechAnime. We provide timely coverage to keep you informed on the latest industry developments",
  openGraph: {
    images: [
      {
        url: "https://fama.b-cdn.net/gw/gwlogo.png",
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
    title: "GameTech",
    description:
      "Welcome to Gamewitted! Dive into immersive gaming and anime content with the latest updates, reviews, and insights. Where pixels meet passion!",
    images: {
      url: "https://fama.b-cdn.net/gw/gamewittedlogo.jpg",
      alt: "GameWitted ",
    },
  },
};
const GoogleAnalyticsScript = () => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-BD61L86XQG"
    />
    <Script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BD61L86XQG');
      `}
    </Script>
  </>
);

const RichResultsScript = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "GameTech",
        url: "https://gamewitted.com/",
        description:
          "Welcome to Gamewitted! Dive into immersive gaming and anime content with the latest updates, reviews, and insights. Where pixels meet passion!",
        publisher: {
          "@type": "Organization",
          name: "GameTech",
          logo: {
            "@type": "ImageObject",
            url: "https://fama.b-cdn.net/gw/gwlogo.png",
          },
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://gamewitted.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        inLanguage: "en-US",
      }),
    }}
  />
);
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:site_name" content="GameWitted" />
        <meta
          property="og:description"
          content="Welcome to Gamewitted! Dive into immersive gaming and anime content with the latest updates, reviews, and insights. Where pixels meet passion!"
        />
        <meta
          name="google-site-verification"
          content="RdxkhXckn9g6Sc2nHYDSF5_Y2fQ3VwWBpEq4ZS_Z2bg"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="194x194"
          href="/favicon/favicon-194x194.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.webmanifest" />
        <link rel="manifest" href="/favicon/browserconfig.xml" />

        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>

      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
          <GoogleAnalyticsScript />
        </div>

      </body>
    </html>
  );
}
