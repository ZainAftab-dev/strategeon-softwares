import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Work | Strategeon Softwares",
  description: "Browse real projects, live demos, and product references built by Strategeon Softwares for clients across multiple industries."
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
