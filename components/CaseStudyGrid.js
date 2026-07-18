"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/data/site";
import { ProjectCard } from "@/components/ProjectCard";

export function CaseStudyGrid() {
  const [filter, setFilter] = useState("All");
  const categories = useMemo(
    () => ["All", ...new Set(caseStudies.map((item) => item.category))],
    []
  );
  const filtered =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.category === filter);

  return (
    <>
      {/* Filter tabs with sliding pill indicator */}
      <div className="tabs" role="tablist" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-button${filter === category ? " active" : ""}`}
            type="button"
            role="tab"
            aria-selected={filter === category}
            onClick={() => setFilter(category)}
          >
            {filter === category && (
              <motion.span
                className="tab-indicator"
                layoutId="tabIndicator"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            {category}
          </button>
        ))}
      </div>

      <div className="project-list">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <ProjectCard item={item} index={index} key={item.title} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
