import Link from "next/link";

export function ClutchBadge() {
  return (
    <a
      href="https://clutch.co/profile/strategeon-softwares"
      target="_blank"
      rel="noreferrer"
      className="clutch-badge-static"
      aria-label="View Strategeon Softwares reviews on Clutch"
    >
      <span className="clutch-badge-logo">
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="16" fill="#EF4335"/>
          <text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial">c</text>
        </svg>
        <strong>Clutch</strong>
      </span>
      <span className="clutch-badge-divider" />
      <span className="clutch-badge-info">
        <span className="clutch-badge-stars">★★★★★</span>
        <span className="clutch-badge-label">5.0 · Verified Reviews</span>
      </span>
    </a>
  );
}
