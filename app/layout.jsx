import { Caveat, Patrick_Hand, Kalam } from "next/font/google";
import "./globals.css";

// Loose handwriting for big display headlines (the "marker" voice)
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Neat printed handwriting for body copy — very legible
const patrick = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
  display: "swap",
});

// Slightly scratchier hand for labels / tags
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://jvmarteportfolio.com";
const TITLE = "JV Marte | CRM & Automation Virtual Assistant";
const DESCRIPTION =
  "CRM, automation, web, and operations support for service businesses. Explore practical systems, workflow projects, websites, and business tools built by JV Marte.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "virtual assistant",
    "CRM virtual assistant",
    "GoHighLevel",
    "CRM setup",
    "workflow automation",
    "Zapier",
    "n8n",
    "lead follow-up",
    "web development",
    "business operations",
    "service businesses",
  ],
  alternates: { canonical: SITE_URL },
  authors: [{ name: "John Vincent Marte" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "JV Marte — Portfolio",
    type: "website",
    images: [
      {
        url: "/assets/images/jv-photo.png",
        width: 520,
        height: 640,
        alt: "John Vincent Marte — CRM & Automation Virtual Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/images/jv-photo.png"],
  },
};

export const viewport = {
  themeColor: "#f7f4ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${patrick.variable} ${kalam.variable}`}
    >
      <body>
        {/* Structured data — describes JV as a person offering a
            professional service, for richer search results. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "JV Marte — CRM & Automation Virtual Assistant",
              description: DESCRIPTION,
              url: SITE_URL,
              image: `${SITE_URL}/assets/images/jv-photo.png`,
              areaServed: "Worldwide",
              email: "martejohnvincent13@gmail.com",
              founder: {
                "@type": "Person",
                name: "John Vincent Marte",
                jobTitle: "CRM & Automation Virtual Assistant",
                url: SITE_URL,
                sameAs: [
                  "https://www.linkedin.com/in/john-vincent-marte-6b1530330/",
                  "https://www.instagram.com/jvmarte_",
                  "https://www.facebook.com/JVincent51",
                ],
              },
              knowsAbout: [
                "CRM setup",
                "GoHighLevel",
                "Workflow automation",
                "Lead follow-up systems",
                "Web development",
                "Business operations",
              ],
            }),
          }}
        />

        {/* Hand-drawn wobble filters — applied to box borders so edges look
            sketched while the text inside stays perfectly crisp. */}
        <svg
          aria-hidden="true"
          focusable="false"
          style={{ position: "absolute", width: 0, height: 0 }}
        >
          <filter id="wobble">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="wobble-strong">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
