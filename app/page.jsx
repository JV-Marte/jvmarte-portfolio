import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { services, tools, projects, reasons } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <span id="top" />

      <main>
        {/* ============== HERO ============== */}
        <section className="hero">
          <div className="wrap hero__inner">
            <p className="eyebrow">Virtual Assistant</p>

            <h1 className="hero__title">
              I handle the day-to-day, so you can <em>focus on growth.</em>
            </h1>

            <p className="hero__lede">
              A dependable virtual assistant for busy business owners — managing
              your CRM, website, automations, and bookkeeping so operations keep
              running, with or without you in the room.
            </p>

            <div className="hero__actions">
              <a href="#contact" className="btn btn--solid">
                Start a project
              </a>
              <a href="#work" className="btn btn--ghost">
                View my work →
              </a>
            </div>
          </div>

          <div className="hero__rule wrap">
            <span>Available for freelance work</span>
            <span>Remote · Worldwide</span>
          </div>
        </section>

        {/* ============== ABOUT ============== */}
        <section className="section about" id="about">
          <div className="wrap about__grid">
            <Reveal className="about__photo">
              <Image
                src="/assets/images/jv-photo.png"
                alt="JV — Virtual Assistant"
                width={520}
                height={640}
                className="about__img"
                priority
              />
              <span className="about__caption">JV — Virtual Assistant</span>
            </Reveal>

            <div className="about__body">
              <p className="eyebrow">About</p>
              <Reveal as="h2" className="section__title">
                A virtual assistant who <em>thinks like an owner.</em>
              </Reveal>
              <Reveal className="prose" delay={80}>
                <p>
                  I&rsquo;m a virtual assistant for business owners who would
                  rather grow their business than get buried in back-office
                  work. My background started in business — operations, finances,
                  and how companies actually run — before I moved into tech to
                  solve those problems directly.
                </p>
                <p>
                  Today I pair reliable day-to-day support with <strong>CRM
                  systems, automation, web development, and bookkeeping</strong>
                  &nbsp;to lighten your workload and keep things running. I
                  don&rsquo;t just complete tasks — I take ownership of the
                  outcome and look for ways to make the whole system work better.
                </p>
              </Reveal>
              <a href="#contact" className="link-arrow">
                Work with me →
              </a>
            </div>
          </div>
        </section>

        {/* ============== SERVICES ============== */}
        <section className="section services" id="services">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">What I do</p>
              <h2 className="section__title">
                Services built to <em>drive results.</em>
              </h2>
            </header>

            <ul className="services__list">
              {services.map((s, i) => (
                <Reveal as="li" key={s.n} className="service" delay={i * 60}>
                  <div className="service__main">
                    <h3>{s.title}</h3>
                    <p>{s.blurb}</p>
                  </div>
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
        <section className="section work" id="work">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Selected work</p>
              <h2 className="section__title">
                Systems &amp; projects <em>I&rsquo;ve built.</em>
              </h2>
            </header>

            <div className="work__grid">
              {projects.map((p, i) => (
                <Reveal as="article" key={p.title} className="card" delay={(i % 2) * 80}>
                  <span className="card__tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul className="card__stack">
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="link-arrow link-arrow--sm"
                    >
                      Visit site →
                    </a>
                  ) : (
                    <a href="#contact" className="link-arrow link-arrow--sm">
                      Inquire about this →
                    </a>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============== TOOLS ============== */}
        <section className="section tools" id="tools">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Tools I use</p>
              <h2 className="section__title">
                The stack behind <em>the systems.</em>
              </h2>
            </header>

            <ul className="tools__grid">
              {tools.map((t) => (
                <li key={t.name} className="tool">
                  <img src={t.img} alt={t.name} loading="lazy" />
                  <span>{t.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============== WHY ME ============== */}
        <section className="section why">
          <div className="wrap why__grid">
            <div className="why__intro">
              <p className="eyebrow">Why work with me</p>
              <h2 className="section__title">
                The difference is in <em>how I think.</em>
              </h2>
            </div>
            <ul className="why__list">
              {reasons.map((r, i) => (
                <Reveal as="li" key={r.title} className="why__item" delay={i * 60}>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============== CTA + CONTACT ============== */}
        <section className="section contact" id="contact">
          <div className="wrap contact__grid">
            <div className="contact__left">
              <p className="eyebrow">Get in touch</p>
              <h2 className="contact__title">
                Let&rsquo;s take this <em>off your plate.</em>
              </h2>
              <p className="prose">
                Available for freelance work, ongoing support, and long-term
                projects. Tell me what&rsquo;s taking up your time, and I&rsquo;ll
                show you how I can help — usually with a reply within 24 hours.
              </p>

              <ul className="contact__meta">
                <li>
                  <span>Email</span>
                  <a href="mailto:martejohnvincent13@gmail.com">
                    martejohnvincent13@gmail.com
                  </a>
                </li>
                <li>
                  <span>Book a call</span>
                  <a
                    href="https://calendly.com/martejohnvincent13/30min"
                    target="_blank"
                    rel="noreferrer"
                  >
                    calendly.com/…/30min
                  </a>
                </li>
                <li>
                  <span>Status</span>
                  <em>Available for new projects</em>
                </li>
              </ul>

              <div className="socials">
                <a href="https://www.instagram.com/jvmarte_" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href="https://www.facebook.com/JVincent51" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/in/john-vincent-marte-6b1530330/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="contact__right">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* ============== FOOTER ============== */}
      <footer className="footer">
        <div className="wrap footer__inner">
          <a href="#top" className="nav__logo">
            JV<span>.</span>
          </a>
          <p>© {new Date().getFullYear()} JV — Built to perform.</p>
          <a href="#contact" className="link-arrow link-arrow--sm">
            Start a project →
          </a>
        </div>
      </footer>
    </>
  );
}
