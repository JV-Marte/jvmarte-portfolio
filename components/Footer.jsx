import { site } from "@/lib/content";
import Logo from "@/components/Logo";

// Shared footer for the homepage and case-study pages. "/#section" hrefs
// work from both. The oversized wordmark bleeds to the viewport edges and
// is decorative; the Logo above it is the real link.
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__inner">
          <Logo href="/#top" />

          <nav className="footer__links" aria-label="Footer">
            <a href="/#services">Services</a>
            <a href="/#work">Work</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#contact">Contact</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </nav>

          <p className="footer__copy">
            © {year} {site.name}. Based in Aklan, PH.
          </p>
        </div>
      </div>

      <p className="footer__mark" aria-hidden="true">
        JV Marte
      </p>
    </footer>
  );
}
