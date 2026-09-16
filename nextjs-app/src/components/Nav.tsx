"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#features", label: "Why Us" },
  { href: "/#process", label: "Process" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#work", label: "Our Work" },
  { href: "/supply", label: "CCTV Supply" },
];

function toggleTheme() {
  const current =
    document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("dtech-theme", next);
  } catch {
    // ignore (private browsing / storage disabled)
  }
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">
          <div className="logo-text">
            D<span>Tech</span> Solutions
          </div>
        </div>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              className="nav-cta"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="nav-right-group">
          <button
            className="theme-toggle"
            aria-label="Toggle light and dark theme"
            title="Toggle theme"
            onClick={toggleTheme}
          >
            <svg
              className="theme-icon-sun"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 4a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1Zm0 19a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1ZM4.22 5.64a1 1 0 0 1-1.41 0L1.4 4.22A1 1 0 1 1 2.82 2.8l1.4 1.42a1 1 0 0 1 0 1.41Zm15.98 15.98a1 1 0 0 1-1.41 0l-1.41-1.41a1 1 0 0 1 1.41-1.41l1.41 1.4a1 1 0 0 1 0 1.42ZM3 13H1a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm20 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2ZM4.22 18.36a1 1 0 0 1 0-1.41l1.41-1.41a1 1 0 1 1 1.41 1.41l-1.4 1.41a1 1 0 0 1-1.42 0ZM18.78 5.64a1 1 0 0 1 0-1.41l1.41-1.42a1 1 0 1 1 1.42 1.42l-1.41 1.41a1 1 0 0 1-1.42 0ZM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z" />
            </svg>
            <svg
              className="theme-icon-moon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.74 13.15a1 1 0 0 0-1.05-.27 7.5 7.5 0 0 1-9.57-9.57 1 1 0 0 0-1.28-1.28A9.53 9.53 0 0 0 2.5 11.5 9.5 9.5 0 0 0 12 21a9.53 9.53 0 0 0 9.47-8.34 1 1 0 0 0-.73-1.51Z" />
            </svg>
          </button>
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
