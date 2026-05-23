import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageHero({ eyebrow, title, highlight, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>
          {title} {highlight && <span>{highlight}</span>}
        </h1>
        <p>{text}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/contact">
            Start a Project <ArrowRight size={18} />
          </Link>
          <Link className="btn btn-secondary" href="/work">
            View Work
          </Link>
        </div>
      </div>
    </section>
  );
}
