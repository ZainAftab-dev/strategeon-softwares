"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

function parseStat(val) {
  const match = val.match(/^(\d+)(.*)/);
  return match
    ? { num: parseInt(match[1], 10), suffix: match[2] }
    : { num: null, suffix: val };
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

function StatItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { num, suffix } = parseStat(item.value);
  const count = useCountUp(num, 2000, inView);

  return (
    <motion.div
      className="stat"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
    >
      <strong>
        {num !== null ? count : item.value}
        {num !== null && suffix && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 2.1 + index * 0.1, duration: 0.3 }}
          >
            {suffix}
          </motion.span>
        )}
      </strong>
      <span>{item.label}</span>
    </motion.div>
  );
}

export function AnimatedStats({ stats, className = "stats" }) {
  return (
    <div className={className}>
      {stats.map((item, i) => (
        <StatItem key={item.label} item={item} index={i} />
      ))}
    </div>
  );
}
