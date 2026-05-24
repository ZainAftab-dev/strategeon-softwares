import { CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { AnimateInView, StaggerContainer, FadeItem, SlideLeft, SlideRight } from "@/components/AnimateInView";
import { processSteps } from "@/data/site";

export const metadata = {
  title: "Process | Strategeon Softwares",
  description: "Our proven five-step delivery process connects strategy, design, engineering, and business outcomes from day one."
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A clear path from strategy to"
        highlight="launch"
        text="Our delivery process keeps strategy, design, engineering, and business outcomes connected from day one."
      />

      <section className="section">
        <div className="container">
          <StaggerContainer className="grid grid-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeItem key={step.title}>
                  <article className="card card-hover">
                    <span className="pill">Step {index + 1}</span>
                    <Icon size={38} className="card-icon" />
                    <h3>{step.title}</h3>
                    <p>{step.summary}</p>
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
            <span className="eyebrow">Quality system</span>
            <h2>Every build includes the professional controls expected from a serious agency.</h2>
          </SlideLeft>
          <SlideRight>
            <div className="card">
              <ul className="check-list">
                {[
                  "Sprint planning and weekly demos",
                  "Code review and QA checks",
                  "Performance and accessibility passes",
                  "Deployment support and launch monitoring",
                  "Documentation for handoff and maintenance"
                ].map((item) => (
                  <li key={item}><CheckCircle2 size={20} /> {item}</li>
                ))}
              </ul>
            </div>
          </SlideRight>
        </div>
      </section>

      <CTA />
    </>
  );
}
