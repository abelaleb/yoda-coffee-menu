"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#breakfast", label: "Breakfast" },
  { href: "#espresso", label: "Espresso" },
  { href: "#matcha", label: "Matcha Bar" },
  { href: "#salad", label: "Salad" },
  { href: "#pasta", label: "Pasta" },
  { href: "#burger", label: "Burger" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleMobileLinkClick = () => setMobileOpen(false);

  return (
    <nav className="sticky-nav full-width border-b border-outline-variant/20 shadow-sm transition-all duration-300" id="main-nav">
      <div className="flex items-center justify-between w-full px-4 md:px-10 py-2 md:py-3 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <a className="flex items-center gap-2 md:gap-3" href="#">
            <img src="/file.svg" alt="Yoda Coffee logo" className="h-10 w-10 md:h-14 md:w-14" />
            <span className="font-display text-3xl md:text-4xl text-primary tracking-tighter">Yoda Coffee</span>
          </a>
          <span className="hidden lg:inline font-body text-on-surface-variant text-xs italic">Coffee, Culture, Community</span>
        </div>

        <div className="hidden md:flex items-center gap-5 lg:gap-8" id="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs lg:text-sm font-semibold pb-1 transition-colors whitespace-nowrap ${
                activeSection === link.href.slice(1)
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-on-surface shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface-container absolute w-full left-0 border-b border-outline-variant/20 shadow-lg" id="mobile-menu">
          <ul className="flex flex-col py-4 px-6 gap-4">
            <li>
              <a className="block text-primary font-bold border-l-4 border-primary pl-4 py-2 bg-surface-variant/50" href="#breakfast" onClick={handleMobileLinkClick}>
                Breakfast
              </a>
            </li>
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <a
                  className="block text-on-surface-variant font-semibold text-sm pl-4 py-2 hover:bg-surface-variant/30 transition-colors"
                  href={link.href}
                  onClick={handleMobileLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
