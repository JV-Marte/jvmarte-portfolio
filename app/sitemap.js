// Generates /sitemap.xml at build time (works with output: "export").
import { projects } from "@/lib/content";

export const dynamic = "force-static";

const SITE_URL = "https://jvmarteportfolio.com";

export default function sitemap() {
  const now = new Date();
  const caseStudies = projects
    .filter((p) => p.outcomes?.length > 0)
    .map((p) => ({
      url: `${SITE_URL}/work/${p.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies,
  ];
}
