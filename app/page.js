import Link from "next/link";
import { ArrowRight, MonitorSmartphone, Rocket } from "lucide-react";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { CTA } from "@/components/CTA";
import { reviews, services, stats, technologyLogos, values } from "@/data/site";

export default function HomePage() {
  const strip = services.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Full Stack Development Solutions</span>
            <h1>
              We Build. You <span>Grow.</span>
            </h1>
            <p className="hero-lede">
              Full stack development solutions that drive real business results.
              OZ Software Agency is your partner for modern, scalable, and
              high-performing web and mobile applications.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                Schedule a Free Consultation <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-secondary" href="/work">
                See Our Work
              </Link>
            </div>
            <div className="hero-proof">
              {stats.slice(0, 3).map((item) => (
                <span key={item.label}><strong>{item.value}</strong>{item.label}</span>
              ))}
            </div>
          </div>
          <div className="workstation" aria-label="Software development workstation illustration">
            <div className="monitor">
              <div className="monitor-top"><i /><i /><i /></div>
              <div className="code-lines">
                {Array.from({ length: 10 }).map((_, index) => <span key={index} />)}
              </div>
              <div className="floating-card">
                <Rocket size={34} className="card-icon" />
                <h3>From Idea to Launch</h3>
                <p>We turn your vision into powerful digital products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-strip">
        <div className="container strip-grid">
          {strip.map((service) => {
            const Icon = service.icon;
            return (
              <Link className="strip-card" href="/services" key={service.title}>
                <Icon size={42} />
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Full Stack. Full Service. Full Commitment.</span>
              <h2>We handle everything so you can focus on growing your business.</h2>
            </div>
            <Link className="btn btn-light" href="/process">Our Process</Link>
          </div>
          <div className="grid grid-3">
            {values.map((value) => (
              <article className="card" key={value.title}>
                <MonitorSmartphone size={34} className="card-icon" />
                <h3>{value.title}</h3>
                <p>{value.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Modern technologies. Proven results.</span>
              <h2>Built with reliable tools that scale from first launch to serious growth.</h2>
            </div>
          </div>
          <div className="tech-row logo-tech-row">
            {technologyLogos.map((tech) => (
              <span className="tech-logo" key={tech.name}>
                <img src={tech.icon} alt="" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What we build</span>
              <h2>Digital products, cloud systems, and growth platforms with real business use.</h2>
            </div>
            <Link className="btn btn-primary" href="/services">View Services</Link>
          </div>
          <div className="grid grid-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="card" key={service.title}>
                  <Icon size={36} className="card-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="container">
          <div className="proof-copy">
            <div>
              <span className="eyebrow">Proof points</span>
              <h2>Built for practical business outcomes.</h2>
            </div>
            <p>Delivered work, satisfied clients, supported launches, and experience across multiple industries.</p>
          </div>
          <div className="stats proof-stats">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Selected projects</span>
              <h2>Real projects and product references clients can actually inspect.</h2>
            </div>
            <Link className="btn btn-light" href="/work">Open Work Page</Link>
          </div>
          <CaseStudyGrid />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="feedback-layout">
            <aside className="feedback-summary">
              <span className="eyebrow">Client feedback</span>
              <h2>Trusted by founders and growing service teams.</h2>
              <div className="rating-box">
                <strong>4.9</strong>
                <span>average project rating</span>
              </div>
              <p>Clear planning, reliable communication, and support before and after launch.</p>
            </aside>
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-top">
                    <span className="avatar">{review.initials}</span>
                    <div>
                      <h3>{review.name}</h3>
                      <span>{review.location}</span>
                    </div>
                    <strong className="score">{review.rating}</strong>
                  </div>
                  <p className="verified">✓ {review.order}</p>
                  <h4>{review.headline}</h4>
                  <p>{review.quote}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
