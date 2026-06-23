// Generates /robots.txt at build time (works with output: "export").
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://jvmarteportfolio.com/sitemap.xml",
  };
}
