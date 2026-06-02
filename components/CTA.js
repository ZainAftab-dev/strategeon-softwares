import Link from "next/link";
import { CalendarCheck, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="section section-dark">
      <div className="container split">
        <div className="copy">
          <span className="eyebrow">Let us build something amazing together</span>
          <h2>From idea to launch, Strategeon turns vision into powerful digital products.</h2>
          <p>
            Bring the business goal. We will help shape the strategy, design the
            experience, engineer the product, and support the launch.
          </p>
        </div>
        <div className="card">
          <CalendarCheck size={38} className="card-icon" />
          <h3>Schedule a free consultation</h3>
          <p>
            Share your goals, timeline, and what is blocking growth. You will
            leave with a practical next step.
          </p>
          <div className="price-hint">
            <span className="price-tag">From $500</span>
            Every project is scoped to your budget — no fixed packages, no padded quotes. Just what you actually need.
          </div>
          <div className="cta-actions">
            <Link className="btn btn-primary btn-shimmer btn-pulse" href="/contact">
              Book Consultation <ArrowRight size={18} />
            </Link>
            <Link className="btn btn-secondary" href="/services">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
