"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const wordVariant = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export function PageHero({ eyebrow, title, highlight, text }) {
  const titleWords = title.split(" ");
  const highlightWords = highlight ? highlight.split(" ") : [];

  return (
    <section className="page-hero">
      <div className="container">
        <motion.div
          className="breadcrumbs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </motion.div>

        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
          }}
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              className="word-anim"
              variants={wordVariant}
              style={{ color: "inherit" }}
            >
              {word}
            </motion.span>
          ))}
          {highlightWords.map((word, i) => (
            <motion.span
              key={`h-${i}`}
              className="word-anim"
              variants={wordVariant}
            >
              <span>{word}</span>
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {text}
        </motion.p>

        <div className="hero-actions">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.72 }}
          >
            <Link className="btn btn-primary btn-shimmer" href="/contact">
              Start a Project <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.88 }}
          >
            <Link className="btn btn-secondary" href="/work">
              View Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
