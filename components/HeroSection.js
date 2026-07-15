"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { stats } from "@/data/site";
import { SplineScene } from "@/components/SplineScene";

const ROBOT_SCENE = "https://prod.spline.design/DUSNOPOfdYuj-qBm/scene.splinecode";

// --- Cursor spotlight (follows the mouse across the hero) ---

function useHeroSpotlight(containerRef, spotRef, badgeCoverRef) {
  useEffect(() => {
    const container = containerRef.current;
    const spot = spotRef.current;
    if (!container || !spot) return;

    // Cache bounding rects instead of measuring on every mousemove (avoids
    // forced synchronous layout on a high-frequency event), refreshed only
    // when the layout might actually change.
    let containerRect = container.getBoundingClientRect();
    let coverRect = badgeCoverRef?.current ? badgeCoverRef.current.getBoundingClientRect() : null;
    const refreshRects = () => {
      containerRect = container.getBoundingClientRect();
      const cover = badgeCoverRef && badgeCoverRef.current;
      coverRect = cover ? cover.getBoundingClientRect() : null;
    };
    window.addEventListener("resize", refreshRects);

    let rafId = null;
    let pendingEvent = null;

    const apply = () => {
      rafId = null;
      const e = pendingEvent;
      if (!e) return;
      spot.style.setProperty("--spot-x", `${e.clientX - containerRect.left}px`);
      spot.style.setProperty("--spot-y", `${e.clientY - containerRect.top}px`);
      spot.style.setProperty("--spot-opacity", "1");

      const cover = badgeCoverRef && badgeCoverRef.current;
      if (cover && coverRect) {
        cover.style.setProperty("--spot-x", `${e.clientX - coverRect.left}px`);
        cover.style.setProperty("--spot-y", `${e.clientY - coverRect.top}px`);
        const dx = e.clientX - (coverRect.left + coverRect.width / 2);
        const dy = e.clientY - (coverRect.top + coverRect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = Math.max(0, 0.75 * (1 - dist / 220));
        cover.style.setProperty("--spot-alpha", alpha.toFixed(2));
      }
    };

    // Batch rapid mousemove events into at most one style update per frame.
    const handleMove = (e) => {
      pendingEvent = e;
      if (rafId === null) rafId = requestAnimationFrame(apply);
    };
    const handleLeave = () => {
      spot.style.setProperty("--spot-opacity", "0");
      const cover = badgeCoverRef && badgeCoverRef.current;
      if (cover) cover.style.setProperty("--spot-alpha", "0");
    };
    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", handleLeave);
    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("resize", refreshRects);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [containerRef, spotRef, badgeCoverRef]);
}

// --- Desktop detection (robot only loads/renders on desktop-width viewports) ---

function useIsDesktop(breakpoint = 980) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isDesktop;
}

// --- Helpers ---

const TYPED_TEXT = "We Build.";
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
  const heroRef = useRef(null);
  const spotRef = useRef(null);
  const badgeCoverRef = useRef(null);
  useHeroSpotlight(heroRef, spotRef, badgeCoverRef);
  const isDesktop = useIsDesktop();

  // Approximate total typing duration for "We Build." (9 chars × 0.028s stagger + 0.1s delay)
  const typingTotalDelay = 0.1 + TYPED_CHARS.length * 0.028 + 0.05;

  return (
    <section className="hero hero-animated" ref={heroRef}>
      <div className="hero-spotlight" aria-hidden="true" ref={spotRef} />
      <div className="container hero-grid">
        {/* Left column */}
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Full-Stack Engineering
          </motion.span>

          <h1 aria-label="We Build. You Grow.">
            {/* Typewriter: "We Build." */}
            <motion.span
              aria-hidden="true"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.028, delayChildren: 0.1 }
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
              You{" "}
              <span className="grow-text">Grow.</span>
            </motion.span>
          </h1>

          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: typingTotalDelay + 0.08 }}
          >
            Production-grade web apps, mobile apps, and the automation behind
            them — designed, built, and shipped by one full-stack team.
          </motion.p>

          <div className="hero-actions">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: typingTotalDelay + 0.2 }}
            >
              <Link className="btn btn-primary btn-shimmer btn-pulse" href="/contact">
                Schedule a Free Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: typingTotalDelay + 0.3 }}
            >
              <Link className="btn btn-secondary" href="/work">
                See Our Work
              </Link>
            </motion.div>
          </div>

          <motion.p
            className="hero-price-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: typingTotalDelay + 0.45 }}
          >
            Projects from <strong>$500</strong> — scoped to your budget, not a fixed package
          </motion.p>

          {/* Stats — count-up when in view */}
          <div className="hero-proof" ref={proofRef}>
            {stats.slice(0, 3).map((item) => (
              <HeroStat key={item.label} item={item} started={proofInView} />
            ))}
          </div>
        </div>

        {/* Right column — interactive 3D robot on desktop; static photo on mobile
            (the robot's assets are heavy, so it's never loaded on small screens) */}
        {isDesktop ? (
          <motion.div
            className="hero-robot-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <SplineScene scene={ROBOT_SCENE} className="hero-robot-canvas" />
            <div className="hero-robot-badge-cover" aria-hidden="true" ref={badgeCoverRef} />
          </motion.div>
        ) : (
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
        )}
      </div>
    </section>
  );
}
