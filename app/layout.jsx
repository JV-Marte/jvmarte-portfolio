import { Inter } from "next/font/google";
import "./globals.css";

// One typeface, weight-driven hierarchy: Inter for everything.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://jvmarteportfolio.com";
const TITLE = "JV Marte | Web Developer, Designer & Automation Specialist";
const DESCRIPTION =
  "I design and build websites, set up automations, and handle the business support behind them. Live projects, honest tooling, based in the Philippines and working worldwide.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "web developer",
    "web design",
    "Next.js developer",
    "workflow automation",
    "Zapier",
    "n8n",
    "GoHighLevel",
    "virtual assistant",
    "business support",
    "bookkeeping support",
    "small business websites",
  ],
  alternates: { canonical: SITE_URL },
  authors: [{ name: "John Vincent Marte" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "JV Marte · Portfolio",
    type: "website",
    images: [
      {
        url: "/assets/images/jv-photo.png",
        width: 520,
        height: 640,
        alt: "John Vincent Marte, Web Developer, Designer & Automation Specialist",
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
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* Structured data — describes JV as a person offering a
            professional service, for richer search results. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "JV Marte · Web Development, Design & Automation",
              description: DESCRIPTION,
              url: SITE_URL,
              image: `${SITE_URL}/assets/images/jv-photo.png`,
              areaServed: "Worldwide",
              email: "martejohnvincent13@gmail.com",
              founder: {
                "@type": "Person",
                name: "John Vincent Marte",
                jobTitle: "Web Developer, Designer & Automation Specialist",
                url: SITE_URL,
                sameAs: [
                  "https://www.linkedin.com/in/john-vincent-marte-6b1530330/",
                  "https://www.instagram.com/jvmarte_",
                  "https://www.facebook.com/JVincent51",
                ],
              },
              knowsAbout: [
                "Web development",
                "Web design",
                "Next.js",
                "Workflow automation",
                "GoHighLevel",
                "Business operations",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
