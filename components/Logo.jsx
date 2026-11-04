// Wordmark: the favicon's square "JV" tile plus the name in mono caps.
// Used by Nav and Footer.
export default function Logo({ href = "#top", onClick }) {
  return (
    <a href={href} className="logo" onClick={onClick}>
      <span className="logo__mark" aria-hidden="true">
        JV
      </span>
      <span className="logo__name">JV Marte</span>
    </a>
  );
}
