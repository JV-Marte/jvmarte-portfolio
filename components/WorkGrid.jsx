import Reveal from "@/components/Reveal";
import { badgeKey } from "@/lib/content";

// Two-column grid of featured project cards: screenshot on top, then a
// type badge, one-line blurb, stack chips, and links. Long-form detail
// (role, problem, outcomes) lives on the /work/[slug] case-study page.
export default function WorkGrid({ projects = [] }) {
  return (
    <div className="work__grid">
      {projects.map((p, i) => (
        <Reveal as="article" key={p.slug} className="pcard" delay={(i % 2) * 80}>
          <div
            className={`pcard__media ${p.image ? "" : "pcard__media--empty"}`}
          >
            {p.image ? (
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                loading={i < 2 ? "eager" : "lazy"}
                style={
                  p.imagePosition
                    ? { objectPosition: p.imagePosition }
                    : undefined
                }
              />
            ) : (
              <span>Screenshot coming soon</span>
            )}
          </div>

          <div className="pcard__body">
            <div className="pcard__meta">
              <span className={`badge badge--${badgeKey(p.type)}`}>
                {p.type}
              </span>
              {p.status === "Live" && <span className="live-dot">Live</span>}
            </div>

            <h3>{p.title}</h3>
            <p>{p.blurb}</p>

            <ul className="pcard__stack" aria-label="Tools used">
              {p.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="pcard__actions">
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-arrow link-arrow--sm"
                >
                  Visit live site →
                </a>
              )}
              {p.outcomes?.length > 0 && (
                <a
                  href={`/work/${p.slug}/`}
                  className="link-arrow link-arrow--sm"
                >
                  Case study →
                </a>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
