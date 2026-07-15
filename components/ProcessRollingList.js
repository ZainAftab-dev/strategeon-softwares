"use client";

import { AnimateInView } from "@/components/AnimateInView";
import { processSteps } from "@/data/site";

const LABELS = {
  Discover: "Strategy",
  Design: "Experience",
  Build: "Engineering",
  Launch: "Deployment",
  Grow: "Growth",
};

export function ProcessRollingList() {
  return (
    <div className="rolling-list">
      {processSteps.map((step, index) => (
        <AnimateInView key={step.title} className="rolling-row" delay={index * 0.06}>
          <span className="rolling-title">
            <span className="rolling-index">0{index + 1}</span>
            {step.title}
          </span>
          <p className="rolling-summary">{step.summary}</p>
          <span className="rolling-label">{LABELS[step.title] || step.title}</span>
        </AnimateInView>
      ))}
    </div>
  );
}
