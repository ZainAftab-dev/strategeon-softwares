export const metadata = {
  title: "Custom Software Development Company",
  description:
    "Strategeon Softwares builds custom web apps, mobile apps, SaaS platforms, and cloud systems for growing US businesses. Full-stack team. Free consultation.",
  keywords: [
    "custom software development company",
    "web app development",
    "mobile app development company",
    "SaaS development",
    "full stack software agency",
    "hire software developers USA",
    "custom web application",
    "software development services",
  ],
  alternates: { canonical: "https://strategeonsoftwares.com" },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Strategeon Softwares",
  url: "https://strategeonsoftwares.com",
  description:
    "Full-stack software development agency building custom web apps, mobile apps, and SaaS platforms for growing US businesses.",
  telephone: "+1-640-227-4748",
  email: "info@strategeonsoftwares.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7901 4th St N # 21548",
    addressLocality: "Saint Petersburg",
    addressRegion: "FL",
    postalCode: "33702",
    addressCountry: "US",
  },
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web Applications" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Deployment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "End-to-End Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Modernization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Growth Technology" } },
    ],
  },
};

import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { AnimatedStats } from "@/components/AnimatedStats";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { ProcessRollingList } from "@/components/ProcessRollingList";
import { AnimateInView, SlideLeft, SlideRight } from "@/components/AnimateInView";
import { CTA } from "@/components/CTA";
import { services, stats, technologyLogos, caseStudies } from "@/data/site";

const HOME_BENTO_SIZE = {
  "Hotel Booking Platform": "bento-large",
  "Restaurant Ordering Platform": "bento-wide",
  "E-Commerce Platform": "bento-small",
  "Healthcare Appointment System": "bento-small",
  "Finance Dashboard": "bento-wide",
  "Strategeon LLC — Networking Store": "bento-wide",
};
const homeProjects = caseStudies.filter((item) => item.title in HOME_BENTO_SIZE);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── What we build (hairline icon grid) ── */}
      <section className="section-compact">
        <div className="container">
          <p className="strip-label">What we build</p>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div className="service-tile" key={service.title}>
                  <Icon size={20} />
                  <span>{service.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Selected Work (bento) ── */}
      <section className="section">
        <div className="container">
          <AnimateInView className="section-head">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2>Real client projects, live and in production.</h2>
            </div>
            <Link className="btn btn-light" href="/work">
              View All Work <ArrowRight size={16} />
            </Link>
          </AnimateInView>
          <div className="bento-grid">
            {homeProjects.map((item) => (
              <article className={`case-card ${HOME_BENTO_SIZE[item.title]}`} key={item.title}>
                <div className="case-visual">
                  <img src={item.image} alt="" loading="lazy" decoding="async" />
                  <span>{item.title}</span>
                </div>
                <div className="case-body">
                  <div className="case-meta">
                    <span className="pill">{item.category}</span>
                    {item.badge && (
                      <span className="pill pill-live">
                        <span className="live-dot" />
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <p className="case-result"><strong>↗ {item.result}</strong></p>
                  <div className="project-actions single-action">
                    <a className="btn btn-primary btn-shimmer" href={item.demoUrl} target="_blank" rel="noreferrer">
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section">
        <div className="container">
          <AnimateInView className="section-head">
            <div>
              <span className="eyebrow">Our process</span>
              <h2>A clear path from strategy to launch.</h2>
            </div>
          </AnimateInView>
          <ProcessRollingList />
        </div>
      </section>

      {/* ── Tech stack marquee ── */}
      <section className="section-compact section-soft">
        <div className="container">
          <p className="strip-label">Modern technologies. Proven results.</p>
        </div>
        <div style={{ padding: "20px 0" }}>
          <InfiniteMarquee speed={26} direction="left" pauseOnHover>
            {technologyLogos.map((tech) => (
              <span className="tech-logo tech-logo-marquee" key={tech.name}>
                <img src={tech.icon} alt={tech.name} width={30} height={30} />
                {tech.name}
              </span>
            ))}
          </InfiniteMarquee>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section proof-section">
        <div className="container">
          <AnimateInView className="proof-copy">
            <div>
              <span className="eyebrow">Proof points</span>
              <h2>Built for practical business outcomes.</h2>
            </div>
            <p>Delivered work, satisfied clients, supported launches, and experience across multiple industries.</p>
          </AnimateInView>
          <AnimatedStats stats={stats} className="stats proof-stats" />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section section-soft">
        <div className="container split">
          <SlideLeft className="copy">
            <span className="eyebrow">Client feedback</span>
            <h2>Trusted by founders and growing service teams.</h2>
            <div className="rating-box" style={{ marginTop: "20px" }}>
              <strong>5.0</strong>
              <span>average project rating</span>
            </div>
            <p>Clear planning, reliable communication, and support before and after launch.</p>
          </SlideLeft>
          <SlideRight>
            <ReviewsCarousel />
          </SlideRight>
        </div>
      </section>

      <CTA />
    </>
  );
}
