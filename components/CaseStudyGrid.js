"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/site";

export function CaseStudyGrid() {
  const [filter, setFilter] = useState("All");
  const categories = useMemo(() => ["All", ...new Set(caseStudies.map((item) => item.category))], []);
  const filtered = filter === "All" ? caseStudies : caseStudies.filter((item) => item.category === filter);

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-button ${filter === category ? "active" : ""}`}
            type="button"
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-3">
        {filtered.map((item) => (
          <article className="card case-card" key={item.title}>
            <div className="case-visual" aria-hidden="true">
              <img src={item.image} alt="" />
              <span>{item.title}</span>
            </div>
            <div className="case-body">
              <span className="pill">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <p><strong>{item.result}</strong></p>
              <div className="project-actions single-action">
                <a className="btn btn-primary" href={item.demoUrl} target="_blank" rel="noreferrer">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
