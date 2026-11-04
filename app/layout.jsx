import { Archivo } from "next/font/google";
import "./globals.css";

// Archivo provides the UI voice; editorial emphasis uses a system serif.
const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://jvmarteportfolio.com";
const TITLE = "JV Marte | Virtual Assistant & Business Support";
const DESCRIPTION =
  "Virtual assistance and business support for small business owners: admin, CRM, spreadsheets, and bookkeeping support, with website development and automation. Based in the Philippines, working worldwide.";

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
        url: "/assets/images/jv-portrait-editorial.webp",
        width: 1000,
        height: 1250,
        alt: "John Vincent Marte, Virtual Assistant & Business Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/images/jv-portrait-editorial.webp"],
  },
};

export const viewport = {
  themeColor: "#faf8f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        {/* Structured data — describes JV as a person offering a
            professional service, for richer search results. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "JV Marte · Virtual Assistance & Business Support",
              description: DESCRIPTION,
              url: SITE_URL,
              image: `${SITE_URL}/assets/images/jv-portrait-editorial.webp`,
              areaServed: "Worldwide",
              email: "martejohnvincent13@gmail.com",
              founder: {
                "@type": "Person",
                name: "John Vincent Marte",
                jobTitle: "Virtual Assistant & Business Support",
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
