import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { AnimateInView, StaggerContainer, FadeItem, SlideLeft, SlideRight } from "@/components/AnimateInView";
import { industries } from "@/data/site";

export const metadata = {
  title: "Industries | Strategeon Softwares",
  description: "Software solutions for healthcare, SaaS, ecommerce, finance, real estate, and manufacturing teams that need reliable digital systems."
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Software solutions for teams that"
        highlight="move fast"
        text="We design business systems for companies where reliability, clarity, automation, and measurable growth matter."
      />

      <section className="section">
        <div className="container">
          <StaggerContainer className="grid grid-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <FadeItem key={industry.title}>
                  <article className="card card-hover">
                    <Icon size={38} className="card-icon" />
                    <h3>{industry.title}</h3>
                    <p>{industry.summary}</p>
                    <Link className="btn btn-light" href={`/contact?industry=${encodeURIComponent(industry.title)}`}>
                      Build for {industry.title} <ArrowRight size={16} />
                    </Link>
                  </article>
                </FadeItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split">
          <SlideLeft className="copy">
            <span className="eyebrow">Why industry context matters</span>
            <h2>Professional software should match the way your team actually works.</h2>
          </SlideLeft>
          <SlideRight>
            <div className="card">
              <ul className="check-list">
                <li>Workflow mapping before interface design</li>
                <li>Secure data structures for operational reporting</li>
                <li>Integrations with the tools your team already uses</li>
                <li>Role-based experiences for customers, staff, and leadership</li>
              </ul>
            </div>
          </SlideRight>
        </div>
      </section>

      <CTA />
    </>
  );
}
