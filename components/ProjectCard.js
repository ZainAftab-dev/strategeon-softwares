"use client";

import Image from "next/image";
import { Github, Link2 } from "lucide-react";
import { motion } from "framer-motion";
import { githubProfileUrl } from "@/data/site";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export function ProjectCard({ item, index = 0 }) {
  return (
    <motion.article
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="project-info">
        <div className="project-icons">
          <a
            className="icon-circle"
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github size={20} />
          </a>
          <a
            className="icon-circle"
            href={item.demoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${item.title} live project`}
          >
            <Link2 size={20} />
          </a>
        </div>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <div className="project-tech">
          {item.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="project-visual">
        <div className="laptop">
          <div className="laptop-screen">
            <span className="laptop-camera" aria-hidden="true" />
            <div className="laptop-display">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 780px) 90vw, 560px"
              />
            </div>
          </div>
          <div className="laptop-base">
            <span className="laptop-notch" aria-hidden="true" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
