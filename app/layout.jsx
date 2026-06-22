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

export const metadata = {
  metadataBase: new URL("https://jvmarteportfolio.com"),
  title: "JV — Virtual Assistant",
  description:
    "JV is a virtual assistant for business owners — handling CRM, websites, automation, and bookkeeping so the day-to-day runs without you.",
  keywords: [
    "virtual assistant",
    "VA",
    "GoHighLevel",
    "CRM setup",
    "automation",
    "web development",
    "bookkeeping",
    "freelance",
  ],
  openGraph: {
    title: "JV — Virtual Assistant",
    description:
      "A virtual assistant who handles your CRM, website, automations, and books so you can focus on growth.",
    url: "https://jvmarteportfolio.com",
    siteName: "JV Portfolio",
    type: "website",
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
