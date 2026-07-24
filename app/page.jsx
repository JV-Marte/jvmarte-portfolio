import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import WorkGrid from "@/components/WorkGrid";
import CopyEmail from "@/components/CopyEmail";
import { site, services, toolLevels, projects, badgeKey } from "@/lib/content";

const featuredProjects = projects.filter((p) => p.featured);
const moreBuilds = projects.filter((p) => !p.featured);

export default function Home() {
  return (
    <>
      <Nav />
      <span id="top" />

      <main>
        {/* ============== HERO ============== */}
        <section className="hero" id="home">
          <div className="wrap hero__inner">
            <div className="hero__copy">
              <p className="hero__badge">
                <span className="hero__badge-dot" aria-hidden="true" />
                Available for new projects
              </p>

              <h1 className="hero__title">
                Hi, I&rsquo;m JV. I build websites and{" "}
                <em>keep your business running.</em>
              </h1>

              <p className="hero__lede">
                I design and build fast, credible sites for small businesses. I
                also set up automations that handle the repetitive work, and I
                look after the admin behind the scenes, from CRM records to
                clean books.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--solid">
                  Get in touch
                </a>
                <a href="#work" className="btn btn--ghost">
                  See my work ↓
                </a>
              </div>

              <p className="hero__trust">
                Next.js · GoHighLevel · Zapier · Supabase · Google Sheets
              </p>
            </div>

            <div className="hero__photo">
              <Image
                src="/assets/images/jv-photo.png"
                alt="John Vincent Marte"
                width={520}
                height={640}
                priority
                className="hero__img"
              />
            </div>
          </div>
        </section>

        {/* ============== SERVICES ============== */}
        <section className="section section--alt" id="services">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Services</p>
              <h2 className="section__title">
                What I can take <em>off your plate.</em>
              </h2>
              <p className="section__intro">
                Four areas, set up properly and documented, so anyone on your
                team can run them after handover.
              </p>
            </header>

            <ul className="services__grid">
              {services.map((s, i) => (
                <Reveal as="li" key={s.n} className="service" delay={i * 60}>
                  <span className="service__num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <ul className="service__items">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============== WORK ============== */}
        <section className="section" id="work">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Selected work</p>
              <h2 className="section__title">
                Real projects, <em>live right now.</em>
              </h2>
              <p className="section__intro">
                Storefronts, booking systems, dashboards, and CRM automations.
                Every card links to a breakdown of the problem, the build, and
                the outcome.
              </p>
            </header>

            <WorkGrid projects={featuredProjects} />

            {moreBuilds.length > 0 && (
              <div className="more">
                <h3 className="more__title">More builds</h3>
                <ul className="more__list">
                  {moreBuilds.map((p, i) => (
                    <Reveal as="li" key={p.slug} className="more__item" delay={i * 60}>
                      <span className={`badge badge--${badgeKey(p.type)}`}>
                        {p.type}
                      </span>
                      <h4>{p.title}</h4>
                      <p>{p.blurb}</p>
                      {p.outcomes?.length > 0 && (
                        <a
                          href={`/work/${p.slug}/`}
                          className="link-arrow link-arrow--sm"
                        >
                          Case study →
                        </a>
                      )}
                    </Reveal>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ============== TOOLBOX ============== */}
        <section className="section section--alt" id="tools">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Toolbox</p>
              <h2 className="section__title">Tools I reach for.</h2>
            </header>

            <div className="toolbox__groups">
              {toolLevels.map((group, i) => (
                <Reveal as="div" key={group.label} delay={i * 60}>
                  <h3 className="toolbox__label">{group.label}</h3>
                  <ul className="toolbox__chips">
                    {group.tools.map((t) => (
                      <li
                        key={t.name}
                        className={`chip ${i === 0 ? "chip--primary" : ""}`}
                      >
                        {t.name}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <p className="toolbox__note">
              No skill bars or percentages, just an honest split by how often I
              use them.
            </p>
          </div>
        </section>

        {/* ============== CONTACT ============== */}
        <section className="section" id="contact">
          <div className="wrap">
            <div className="contact__panel">
              <div className="contact__left">
                <p className="eyebrow">Get in touch</p>
                <h2 className="contact__title">
                  Tell me what&rsquo;s <em>eating your week.</em>
                </h2>
                <p className="prose">
                  Whether it&rsquo;s a website that needs building or busywork
                  that should run itself, send me a note. I read everything and
                  usually reply within a day.
                </p>

                <div className="contact__cta-row">
                  <a
                    href={site.calendly}
                    className="btn btn--solid"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book a 30 min call
                  </a>
                  <CopyEmail email={site.email} />
                </div>

                <ul className="contact__meta">
                  <li>
                    <span>Email</span>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                  {site.onlineJobs && (
                    <li>
                      <span>OnlineJobs.ph</span>
                      <a href={site.onlineJobs} target="_blank" rel="noreferrer">
                        View profile
                      </a>
                    </li>
                  )}
                  <li>
                    <span>Status</span>
                    <em>Open to remote roles &amp; projects</em>
                  </li>
                </ul>

                <div className="socials">
                  <a href={site.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a href={site.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a href={site.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </div>
              </div>

              <div className="contact__right">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============== FOOTER ============== */}
      <footer className="footer">
        <div className="wrap footer__inner">
          <a href="#top" className="nav__logo">
            JV<span>.</span>Marte
          </a>
          <p>© {new Date().getFullYear()} John Vincent Marte · Aklan, PH</p>
          <a href="#contact" className="link-arrow link-arrow--sm">
            Contact me →
          </a>
        </div>
      </footer>
    </>
  );
}
