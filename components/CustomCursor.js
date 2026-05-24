"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springCfg = { damping: 28, stiffness: 350, mass: 0.5 };
  const x = useSpring(mouseX, springCfg);
  const y = useSpring(mouseY, springCfg);

  useEffect(() => {
    // Only on pointer-capable devices
    const noPointer = window.matchMedia("(hover: none)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (noPointer || reducedMotion) return;
    setIsMobile(false);

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e) => {
      if (e.target.closest("a, button, [role='button'], input, select, textarea")) {
        setIsHovering(true);
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, [role='button'], input, select, textarea")) {
        setIsHovering(false);
      }
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    document.body.classList.add("cursor-hidden");

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.body.classList.remove("cursor-hidden");
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y, opacity: isVisible ? 1 : 0 }}
        animate={{ scale: isHovering ? 0.3 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x, y, opacity: isVisible ? 1 : 0 }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          borderColor: isHovering
            ? "rgba(22, 136, 255, 0.8)"
            : "rgba(22, 136, 255, 0.45)"
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
