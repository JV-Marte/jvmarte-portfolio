// Generates /sitemap.xml at build time (works with output: "export").
export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://jvmarteportfolio.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
