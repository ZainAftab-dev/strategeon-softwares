"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("ss-loaded");
    if (!shown) {
      setVisible(true);
      sessionStorage.setItem("ss-loaded", "1");
      const t = setTimeout(() => setVisible(false), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.15 } }}
        >
          <motion.img
            src="/logo.png"
            alt="Strategeon Softwares"
            className="loading-logo"
            initial={{ opacity: 0, scale: 0.75, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <motion.p
            className="loading-name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            Strategeon Softwares
          </motion.p>
          <motion.div
            className="loading-bar-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="loading-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 0.45 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
