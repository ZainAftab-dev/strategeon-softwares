"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "@/data/site";
import { ClutchBadge } from "@/components/ClutchBadge";

export function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % reviews.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const review = reviews[current];

  return (
    <div
      className="reviews-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.article
          key={current}
          className="review-card review-carousel-card"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="review-top">
            <span className="avatar">{review.initials}</span>
            <div>
              <h3>{review.name}</h3>
              <span>{review.location}</span>
            </div>
            <strong className="score">{review.rating}</strong>
          </div>
          <p className="verified">✓ {review.order}</p>
          <h4>{review.headline}</h4>
          <p>{review.quote}</p>
          <p className="review-role">{review.role}</p>
        </motion.article>
      </AnimatePresence>

      {/* Bottom row: stars+dots left, Clutch badge right */}
      <div className="carousel-bottom-row">
        <div>
          {/* Star ratings — staggered fill */}
          <div className="carousel-stars">
            {[1, 2, 3, 4, 5].map((star, i) => (
              <motion.span
                key={`${current}-${star}`}
                className="star"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07, duration: 0.25 }}
              >
                ★
              </motion.span>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="carousel-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <ClutchBadge />
      </div>
    </div>
  );
}
