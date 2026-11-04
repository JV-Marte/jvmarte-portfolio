import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectPreview from "@/components/ProjectPreview";
import Gallery from "@/components/Gallery";
import { site, projects, projectBySlug, badgeKey } from "@/lib/content";

// Only projects with structured case-study content (outcomes) get a page.
const caseStudies = projects.filter((p) => p.outcomes?.length > 0);

// Static export: enumerate every case-study route at build time.
export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

// Per-project metadata (title, description, canonical, OG).
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projectBySlug(slug);
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

// A titled block of the case-study body, headed by a mono section code
// (decorative). `items` render as a ruled list; children render as-is.
function Block({ code, title, items, children }) {
  if (items && items.length === 0) return null;
  return (
    <section className="case__block">
      <h2>
        <span className="case__code" aria-hidden="true">
          {code}
        </span>
        {title}
      </h2>
      {items ? (
        <ul className="case__list">
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      ) : (
        children
      )}
    </section>
  );
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p || !p.outcomes?.length) notFound();

  const [name, ...rest] = p.title.split(" · ");
  const kind = rest.join(" · ");

  return (
    <>
      <Nav />
      <span id="top" />

      <main className="case">
        <article className="wrap">
          <a href="/#work" className="plink case__back">
            <ArrowLeft size={15} weight="bold" aria-hidden="true" /> Back to work
          </a>

          <div className="bar" aria-hidden="true">
            <span className="bar__code">[ Case ]</span>
            <span className="bar__label">
              {p.category === "automation" ? "Automation" : "Web build"}
            </span>
            <span className="bar__fill" />
            <span className="bar__count">{p.status}</span>
          </div>

          <header className="case__head">
            <div className="pmeta">
              <span className={`badge badge--${badgeKey(p.type)}`}>{p.type}</span>
              <span className="pmeta__status">{p.status}</span>
            </div>
            <h1 className="case__title">
              {name}
              {kind && <span>{kind}</span>}
            </h1>
            <p className="case__lede">{p.problem}</p>

            <div className="case__actions">
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--solid"
                >
                  Visit live site <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                </a>
              )}
              <a
                href={site.calendly}
                target="_blank"
                rel="noreferrer"
                className={`btn ${p.url ? "btn--ghost" : "btn--solid"}`}
              >
                Book a call
              </a>
            </div>
          </header>

          <ProjectPreview
            src={p.image}
            alt={`${p.title} preview`}
            objectPosition={p.imagePosition}
          />

          <div className="case__grid">
            {/* Quick facts stay pinned beside the long-form copy on desktop */}
            <aside className="case__aside">
              {p.role?.length > 0 && (
                <div className="case__fact">
                  <h2>My role</h2>
                  <ul>
                    {p.role.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="case__fact">
                <h2>Tools used</h2>
                <ul className="stack" aria-label="Tools used">
                  {p.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div className="case__fact">
                <h2>Links</h2>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noreferrer" className="plink">
                    {p.url.replace(/^https?:\/\//, "")}
                    <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="case__private">
                    Private build. Ask me for a walkthrough.
                  </p>
                )}
                <a href={`mailto:${site.email}`} className="plink">
                  <EnvelopeSimple size={15} weight="bold" aria-hidden="true" />
                  Email me
                </a>
              </div>
            </aside>

            <div className="case__body">
              <Block code="//" title="Overview">
                <p>{p.built}</p>
              </Block>
              <Block code="//" title="What I built" items={p.features ?? []} />
              <Block code="//" title="Challenges" items={p.challenges ?? []} />
              <Block code="//" title="Outcome" items={p.outcomes} />
              {p.gallery?.length > 0 && (
                <Block code="//" title="Gallery">
                  <Gallery screens={p.gallery} title={p.title} />
                </Block>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
