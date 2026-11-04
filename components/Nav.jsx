"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";
import Logo from "@/components/Logo";

// "/#section" hrefs work from the homepage AND from /work/[slug] pages.
// `external` links open in a new tab and never match the scroll-spy.
const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#tools", label: "Toolbox" },
  { href: "/#contact", label: "Contact" },
  { href: site.resumeUrl, label: "Résumé", external: true },
];

// section ids tracked for the active-link underline (in document order)
const sectionIds = ["home", "work", "services", "pricing", "tools", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const firstLinkRef = useRef(null);

  // Solid nav once the page has moved: watch the 24px #top sentinel instead
  // of listening to every scroll frame.
  useEffect(() => {
    const sentinel = document.getElementById("top");
    if (!sentinel || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting)
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  // Scroll-spy: mark the section nearest the top of the viewport active.
  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (els.length === 0 || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // When the off-canvas menu opens, move focus into it for keyboard users.
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <Logo href="/#top" onClick={() => setOpen(false)} />

        <nav
          id="primary-nav"
          className={`nav__links ${open ? "is-open" : ""}`}
          aria-label="Primary"
        >
          {links.map((l, i) => {
            const id = l.href.split("#")[1];
            const isActive = active === id;
            return (
              <a
                key={l.href}
                href={l.href}
                ref={i === 0 ? firstLinkRef : null}
                className={isActive ? "is-active" : ""}
                aria-current={isActive ? "true" : undefined}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href={site.calendly}
            className="nav__cta"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Book a call
          </a>
        </nav>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
