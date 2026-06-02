"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/data/site";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

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

      {/* Cards grid — staggered reveal */}
      <motion.div
        className="grid grid-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } }
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.article
              className="card case-card"
              key={item.title}
              variants={cardVariants}
              layout
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="case-visual">
                <img src={item.image} alt="" loading="lazy" decoding="async" />
                <span>{item.title}</span>
              </div>
              <div className="case-body">
                <div className="case-meta">
                  <span className="pill">{item.category}</span>
                  {item.badge && (
                    <span className="pill pill-live">
                      <span className="live-dot" />
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p className="case-result"><strong>↗ {item.result}</strong></p>
                <div className="project-actions single-action">
                  <motion.a
                    className="btn btn-primary btn-shimmer"
                    href={item.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Project <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
