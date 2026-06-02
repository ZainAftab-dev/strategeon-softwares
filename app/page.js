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
import Script from "next/script";
import { MonitorSmartphone } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { AnimatedStats } from "@/components/AnimatedStats";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { AnimateInView, StaggerContainer, FadeItem, SlideLeft, SlideRight } from "@/components/AnimateInView";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { CTA } from "@/components/CTA";
import { services, stats, technologyLogos, values } from "@/data/site";

const CLIENTS = [
  "Clearline Ventures",
  "BrightPath Operations",
  "Northline Dental Group",
  "Summit Retail Systems",
  "HarborCare Services",
  "Clearline Ventures",
  "BrightPath Operations",
  "Northline Dental Group",
];

export default function HomePage() {
  const strip = services.slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Service strip ── */}
      <section className="service-strip">
        <AnimateInView className="container strip-grid">
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
        </AnimateInView>
      </section>

      {/* ── Clients marquee ── */}
      <section className="clients-strip">
        <div className="container">
          <p className="clients-label">Trusted by</p>
        </div>
        <InfiniteMarquee speed={32} pauseOnHover>
          {CLIENTS.map((name, i) => (
            <span className="client-name" key={`${name}-${i}`}>{name}</span>
          ))}
        </InfiniteMarquee>
      </section>

      {/* ── Full Stack / Full Service / Full Commitment ── */}
      <section className="section">
        <div className="container">
          <AnimateInView className="section-head">
            <div>
              <span className="eyebrow">Full Stack. Full Service. Full Commitment.</span>
              <h2>We handle everything so you can focus on growing your business.</h2>
            </div>
            <Link className="btn btn-light" href="/process">Our Process</Link>
          </AnimateInView>
          <StaggerContainer className="grid grid-3">
            {values.map((value) => (
              <FadeItem key={value.title}>
                <article className="card card-hover">
                  <MonitorSmartphone size={34} className="card-icon" />
                  <h3>{value.title}</h3>
                  <p>{value.summary}</p>
                </article>
              </FadeItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Tech stack marquee ── */}
      <section className="section section-soft">
        <div className="container">
          <AnimateInView className="section-head">
            <div>
              <span className="eyebrow">Modern technologies. Proven results.</span>
              <h2>Built with reliable tools that scale from first launch to serious growth.</h2>
            </div>
          </AnimateInView>
        </div>
        <div style={{ padding: "24px 0" }}>
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

      {/* ── Portfolio ── */}
      <section className="section">
        <div className="container">
          <AnimateInView className="section-head">
            <div>
              <span className="eyebrow">Selected projects</span>
              <h2>Real projects and product references clients can actually inspect.</h2>
            </div>
            <Link className="btn btn-light" href="/work">Open Work Page</Link>
          </AnimateInView>
          <CaseStudyGrid />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section section-soft">
        <Script src="https://widget.clutch.co/static/js/widget.js" strategy="lazyOnload" />
        <div className="container split">
          <SlideLeft className="copy">
            <span className="eyebrow">Client feedback</span>
            <h2>Trusted by founders and growing service teams.</h2>
            <div className="rating-box" style={{ marginTop: "20px" }}>
              <strong>5.0</strong>
              <span>average project rating</span>
            </div>
            <p>Clear planning, reliable communication, and support before and after launch.</p>
            <div className="clutch-badge-wrap">
              <div
                className="clutch-widget"
                data-url="https://widget.clutch.co"
                data-widget-type="2"
                data-height="50"
                data-nofollow="true"
                data-expandifr="true"
                data-scale="100"
                data-clutchcompany-id="2663263"
              />
            </div>
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
