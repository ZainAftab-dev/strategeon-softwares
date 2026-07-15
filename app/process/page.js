import { CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { ProcessRollingList } from "@/components/ProcessRollingList";
import { SlideLeft, SlideRight } from "@/components/AnimateInView";

export const metadata = {
  title: "Our Development Process | Strategy to Launch",
  description:
    "See how Strategeon Softwares delivers software projects — from discovery and design through development, launch, and ongoing growth. Clear, structured, and reliable.",
  keywords: [
    "software development process",
    "agile software delivery",
    "software project management",
    "how software is built",
    "software development lifecycle",
  ],
  alternates: { canonical: "https://strategeonsoftwares.com/process" },
};

const processSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Strategeon Softwares Delivers Software Projects",
  description: "A proven 5-step process from strategy to launch and growth.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Discover", text: "We map business goals, users, risks, must-have features, and the launch path." },
    { "@type": "HowToStep", position: 2, name: "Design", text: "We create wireframes, flows, interface systems, and technical architecture." },
    { "@type": "HowToStep", position: 3, name: "Build", text: "We develop in focused sprints with demos, QA, reviews, and working increments." },
    { "@type": "HowToStep", position: 4, name: "Launch", text: "We prepare deployment, performance, analytics, documentation, and handoff." },
    { "@type": "HowToStep", position: 5, name: "Grow", text: "We keep improving conversion, reliability, features, and operational efficiency." },
  ],
};

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />
      <PageHero
        eyebrow="Process"
        title="A clear path from strategy to"
        highlight="launch"
        text="Our delivery process keeps strategy, design, engineering, and business outcomes connected from day one."
      />

      <section className="section">
        <div className="container">
          <ProcessRollingList />
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
