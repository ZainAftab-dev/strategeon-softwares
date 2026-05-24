"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <span>S</span><span>G</span>
          </span>
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
          <Link className="btn btn-primary" href="/contact">
            Free Consultation
          </Link>
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
