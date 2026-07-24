import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import ProjectPreview from "@/components/ProjectPreview";
import Gallery from "@/components/Gallery";
import { site, projects, projectBySlug, badgeKey } from "@/lib/content";

// Only projects with structured case-study content (outcomes) get a page.
const caseStudies = projects.filter((p) => p.outcomes?.length > 0);

// Static export: enumerate every case-study route at build time.
export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

// Per-project metadata (title, description, canonical, OG) for Phase 12 SEO.
export function generateMetadata({ params }) {
  const p = projectBySlug(params.slug);
  if (!p) return {};
  const url = `https://jvmarteportfolio.com/work/${p.slug}/`;
  const title = `${p.title} · Case study | JV Marte`;
  const description = p.problem;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: p.image ? [{ url: p.image, alt: `${p.title} preview` }] : undefined,
    },
  };
}

export default function CaseStudy({ params }) {
  const p = projectBySlug(params.slug);
  if (!p || !p.outcomes?.length) notFound();

  return (
    <>
      <Nav />
      <span id="top" />

      <main className="case">
        <article className="wrap case__inner">
          <a href="/#work" className="link-arrow link-arrow--sm case__back">
            ← Back to work
          </a>

          <header className="case__head">
            <div className="case__tags">
              <span className={`badge badge--${badgeKey(p.type)}`}>{p.type}</span>
              {p.status && <span className="case__status">{p.status}</span>}
            </div>
            <h1 className="case__title">{p.title}</h1>
            <p className="case__lede">{p.problem}</p>

            <div className="case__actions">
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--solid"
                >
                  Visit live website →
                </a>
              )}
              <a href="/#contact" className="btn btn--ghost">
                Discuss a build like this →
              </a>
            </div>
          </header>

          <ProjectPreview
            src={p.image}
            alt={`${p.title} preview`}
            objectPosition={p.imagePosition}
          />

          <div className="case__body">
            <section className="case__section">
              <h2>Overview</h2>
              <p>{p.built}</p>
            </section>

            {p.role?.length > 0 && (
              <section className="case__section">
                <h2>My role</h2>
                <ul className="case__list">
                  {p.role.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="case__section">
              <h2>The problem</h2>
              <p>{p.problem}</p>
            </section>

            {p.features?.length > 0 && (
              <section className="case__section">
                <h2>What I built</h2>
                <ul className="case__list">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="case__section">
              <h2>Tools used</h2>
              <ul className="card__stack case__stack" aria-label="Tools used">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            {p.challenges?.length > 0 && (
              <section className="case__section">
                <h2>Challenges</h2>
                <ul className="case__list">
                  {p.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="case__section">
              <h2>Outcome</h2>
              <ul className="case__list">
                {p.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </section>

            {p.gallery?.length > 0 && (
              <section className="case__section">
                <h2>Gallery</h2>
                <Gallery screens={p.gallery} title={p.title} />
              </section>
            )}

            <section className="case__section">
              <h2>Project links</h2>
              {p.url ? (
                <p>
                  <a href={p.url} target="_blank" rel="noreferrer" className="link-arrow">
                    {p.url.replace(/^https?:\/\//, "")} →
                  </a>
                </p>
              ) : (
                <p className="case__private">
                  Private build. Ask me for a walkthrough.
                </p>
              )}
              <p>
                <a href={`mailto:${site.email}`} className="link-arrow link-arrow--sm">
                  {site.email} →
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <a href="/#top" className="nav__logo">
            JV<span>.</span>Marte
          </a>
          <p>© {new Date().getFullYear()} {site.name}</p>
          <a href="/#contact" className="link-arrow link-arrow--sm">
            Contact me →
          </a>
        </div>
      </footer>
    </>
  );
}
