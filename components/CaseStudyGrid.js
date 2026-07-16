"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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

// Bento tile sizing per case study — keeps the grid visually asymmetric
// rather than a uniform 3-column layout.
const BENTO_SIZE = {
  "Hotel Booking Platform": "bento-large",
  "Restaurant Ordering Platform": "bento-wide",
  "E-Commerce Platform": "bento-small",
  "Healthcare Appointment System": "bento-small",
  "Finance Dashboard": "bento-wide",
  "Strategeon LLC — Networking Store": "bento-wide",
  "Job Board Platform": "bento-small",
  "Property Rental Platform": "bento-wide",
  "Logistics Dashboard": "bento-small",
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

      {/* Bento grid — staggered reveal, mixed tile sizes */}
      <motion.div
        className="bento-grid"
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
              className={`case-card ${BENTO_SIZE[item.title] || "bento-small"}`}
              key={item.title}
              variants={cardVariants}
              layout
            >
              <div className="case-visual">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
                />
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
                  <a
                    className="btn btn-primary btn-shimmer"
                    href={item.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
