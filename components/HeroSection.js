"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { stats } from "@/data/site";

// --- Helpers ---

const TYPED_TEXT = "Custom Software,";
const TYPED_CHARS = TYPED_TEXT.split("");

function parseStat(val) {
  const match = val.match(/^(\d+)(.*)/);
  return match ? { num: parseInt(match[1], 10), suffix: match[2] } : { num: null, suffix: val };
}

function useCountUp(target, duration, started) {
  const [value, setVal] = useState(0);
  useEffect(() => {
    if (!started || target === null) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return value;
}

function HeroStat({ item, started }) {
  const { num, suffix } = parseStat(item.value);
  const count = useCountUp(num, 2200, started);
  return (
    <span>
      <strong>
        {num !== null ? count : item.value}
        {num !== null && suffix ? suffix : ""}
      </strong>
      {item.label}
    </span>
  );
}

// --- Main Component ---

export function HeroSection() {
  const [typingDone, setTypingDone] = useState(false);
  const proofRef = useRef(null);
  const proofInView = useInView(proofRef, { once: true });

  // Approximate total typing duration for "We Build." (9 chars × 0.06s stagger + 0.3s delay)
  const typingTotalDelay = 0.3 + TYPED_CHARS.length * 0.06 + 0.1;

  return (
    <section className="hero hero-animated">
      <div className="container hero-grid">
        {/* Left column */}
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Custom Software Development
          </motion.span>

          <h1 aria-label="Custom Software, Built Around Your Business.">
            {/* Typewriter: "We Build." */}
            <motion.span
              aria-hidden="true"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.3 }
                }
              }}
              onAnimationComplete={() => setTypingDone(true)}
            >
              {TYPED_CHARS.map((char, i) => (
                <motion.span
                  key={i}
                  style={{ display: "inline-block", color: "inherit" }}
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.25 }
                    }
                  }}
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </motion.span>

            {/* "You Grow." — fades in after typing finishes */}
            {" "}
            <motion.span
              style={{ color: "inherit" }}
              initial={{ opacity: 0 }}
              animate={typingDone ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
            >
              Built Around Your{" "}
              <span className="grow-text">Business.</span>
            </motion.span>
          </h1>

          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: typingTotalDelay + 0.3 }}
          >
            We design and build custom web apps, mobile apps, and automation
            tools around the way your business works — not the other way around.
            Your full-stack partner from concept to launch.
          </motion.p>

          <div className="hero-actions">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: typingTotalDelay + 0.6 }}
            >
              <Link className="btn btn-primary btn-shimmer btn-pulse" href="/contact">
                Schedule a Free Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: typingTotalDelay + 0.8 }}
            >
              <Link className="btn btn-secondary" href="/work">
                See Our Work
              </Link>
            </motion.div>
          </div>

          {/* Stats — count-up when in view */}
          <div className="hero-proof" ref={proofRef}>
            {stats.slice(0, 3).map((item) => (
              <HeroStat key={item.label} item={item} started={proofInView} />
            ))}
          </div>
        </div>

        {/* Right column — floating image */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=900&q=80&fit=crop"
            alt="Developer working at a multi-monitor workstation"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
