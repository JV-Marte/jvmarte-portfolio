import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { badgeKey } from "@/lib/content";

// Splits "Azure Sands · Condotel Booking" into a name and a kind so cards
// can set them at different weights instead of printing the middle dot.
function splitTitle(title) {
  const [name, ...rest] = title.split(" · ");
  return { name, kind: rest.join(" · ") };
}

// Zero-padded figure number, e.g. 3 -> "03". Decorative print labels only.
const fig = (n) => String(n).padStart(2, "0");

function Badge({ type }) {
  return <span className={`badge badge--${badgeKey(type)}`}>{type}</span>;
}

// Mono metadata row above every project title: type badge + status.
function Meta({ p }) {
  return (
    <div className="pmeta">
      <Badge type={p.type} />
      <span className="pmeta__status">{p.status}</span>
    </div>
  );
}

function Links({ p }) {
  return (
    <div className="plinks">
      {p.url && (
        <a href={p.url} target="_blank" rel="noreferrer" className="plink">
          Live site <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
        </a>
      )}
      {p.outcomes?.length > 0 && (
        <a href={`/work/${p.slug}/`} className="plink">
          Case study <ArrowRight size={15} weight="bold" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function Stack({ items }) {
  return (
    <ul className="stack" aria-label="Tools used">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

// Screenshot in a ruled frame with a "FIG. 03" print label in the corner.
function Media({ p, n, eager = false }) {
  return (
    <div className="pmedia">
      {p.image ? (
        <img
          src={p.image}
          alt={`${p.title} screenshot`}
          loading={eager ? "eager" : "lazy"}
          style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined}
        />
      ) : (
        <span className="pmedia__empty">Screenshot coming soon</span>
      )}
      <span className="pmedia__fig" aria-hidden="true">
        Fig. {fig(n)}
      </span>
    </div>
  );
}

// The work section, in three layouts so it never reads as one long grid:
//   1. client engagements lead as a full-width ruled split row
//   2. web builds sit in an asymmetric 7/5 then 5/7 grid (1px ink gaps)
//   3. automations collapse into a dense tabular index
export default function WorkGrid({ projects = [] }) {
  const lead = projects.filter((p) => badgeKey(p.type) === "client");
  const web = projects.filter(
    (p) => p.category === "web" && badgeKey(p.type) !== "client"
  );
  const automations = projects.filter(
    (p) => p.category === "automation" && badgeKey(p.type) !== "client"
  );

  return (
    <>
      {lead.map((p, i) => {
        const { name, kind } = splitTitle(p.title);
        return (
          <Reveal as="article" key={p.slug} className="lead">
            <Media p={p} n={i + 1} eager />
            <div className="lead__body">
              <Meta p={p} />
              <h3 className="ptitle ptitle--lg">
                {name}
                {kind && <span>{kind}</span>}
              </h3>
              <p className="lead__copy">{p.blurb}</p>
              <Stack items={p.stack} />
              <Links p={p} />
            </div>
          </Reveal>
        );
      })}

      {web.length > 0 && (
        <div className="webgrid">
          {web.map((p, i) => {
            const { name, kind } = splitTitle(p.title);
            return (
              <Reveal
                as="article"
                key={p.slug}
                className="pcard"
                delay={(i % 2) * 80}
              >
                <Media p={p} n={lead.length + i + 1} eager={i < 2} />
                <div className="pcard__body">
                  <Meta p={p} />
                  <h3 className="ptitle">
                    {name}
                    {kind && <span>{kind}</span>}
                  </h3>
                  <p>{p.blurb}</p>
                  <Links p={p} />
                </div>
              </Reveal>
            );
          })}
        </div>
      )}

      {automations.length > 0 && (
        <div className="autos">
          <div className="autos__head">
            <h3>Automations</h3>
            <p>
              n8n workflows built against real small-business problems, each
              with the setup and the failure cases written up.
            </p>
          </div>

          {/* Column headings for the index; decorative, each row link
              carries its own full text */}
          <div className="autos__cols" aria-hidden="true">
            <span>Ref</span>
            <span>Workflow</span>
            <span>Stack</span>
          </div>

          <ul className="autos__list">
            {automations.map((p, i) => {
              const { name, kind } = splitTitle(p.title);
              return (
                <Reveal as="li" key={p.slug} className="auto" delay={(i % 2) * 70}>
                  <a href={`/work/${p.slug}/`} className="auto__link">
                    <span className="auto__ref" aria-hidden="true">
                      A/{fig(i + 1)}
                    </span>
                    <span className="auto__thumb">
                      {p.image && <img src={p.image} alt="" loading="lazy" />}
                    </span>
                    <span className="auto__text">
                      <span className="auto__name">{kind || name}</span>
                      <span className="auto__client">{name}</span>
                      <span className="auto__blurb">{p.blurb}</span>
                    </span>
                    <span className="auto__stack">
                      {p.stack.slice(0, 3).join(" / ")}
                    </span>
                    <ArrowRight
                      size={20}
                      weight="bold"
                      className="auto__arrow"
                      aria-hidden="true"
                    />
                  </a>
                </Reveal>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
