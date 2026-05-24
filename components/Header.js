"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-wrap">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <motion.img
            src="/logo.png"
            alt="Strategeon Softwares"
            className="brand-logo brand-logo-anim"
            fetchPriority="high"
            decoding="sync"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          />
          <span className="brand-copy">
            <strong>Strategeon</strong>
            <small>Softwares</small>
          </span>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link className="btn btn-primary btn-shimmer" href="/contact">
              Free Consultation
            </Link>
          </motion.div>
          <button
            className="icon-button"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}
