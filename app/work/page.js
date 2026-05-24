import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Portfolio & Case Studies | Real Software Projects",
  description:
    "Browse real projects built by Strategeon Softwares — SaaS platforms, e-commerce stores, healthcare systems, finance dashboards, and logistics tools with live demos.",
  keywords: [
    "software development portfolio",
    "web app case studies",
    "SaaS platform examples",
    "software agency portfolio",
    "custom software projects",
    "web development examples",
  ],
  alternates: { canonical: "https://strategeonsoftwares.com/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Real projects with"
        highlight="live links"
        text="Browse project examples and professional product references with working links clients can inspect directly."
      />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Project references</span>
              <h2>Every card links to a real project, live site, or product reference.</h2>
            </div>
          </div>
          <CaseStudyGrid />
        </div>
      </section>
      <CTA />
    </>
  );
}
