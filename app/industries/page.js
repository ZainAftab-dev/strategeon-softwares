import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { industries } from "@/data/site";

export const metadata = {
  title: "Industries | OZ Software Agency"
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
        <div className="container grid grid-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article className="card" key={industry.title}>
                <Icon size={38} className="card-icon" />
                <h3>{industry.title}</h3>
                <p>{industry.summary}</p>
                <Link className="btn btn-light" href={`/contact?industry=${encodeURIComponent(industry.title)}`}>
                  Build for {industry.title} <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section section-soft">
        <div className="container split">
          <div className="copy">
            <span className="eyebrow">Why industry context matters</span>
            <h2>Professional software should match the way your team actually works.</h2>
          </div>
          <div className="card">
            <ul className="check-list">
              <li>Workflow mapping before interface design</li>
              <li>Secure data structures for operational reporting</li>
              <li>Integrations with the tools your team already uses</li>
              <li>Role-based experiences for customers, staff, and leadership</li>
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
