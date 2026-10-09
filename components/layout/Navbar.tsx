
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        darkMode
          ? "border-white/10 bg-[#17151f] text-white"
          : "border-[#e5ddd5] bg-[#f3ede5] text-[#211b26]"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-3"
          aria-label="CairnTech home"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#a991e9] to-[#a6d6df] shadow-sm">
            <Code2 size={20} className="text-white" />
          </span>

          <span className="text-xl font-bold tracking-tight">
            Cairn<span className="text-[#9b85cb]">Tech</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-xl px-4 py-3 text-sm transition-colors duration-200 ${
                item.label === "Home"
                  ? darkMode
                    ? "bg-white/10 text-white"
                    : "bg-[#e8dfdc] text-[#7c65b8]"
                  : darkMode
                    ? "text-white/75 hover:bg-white/10 hover:text-white"
                    : "text-[#514657] hover:bg-white/60 hover:text-[#7c65b8]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            className={`flex size-10 items-center justify-center rounded-xl border transition-colors ${
              darkMode
                ? "border-white/15 hover:bg-white/10"
                : "border-[#dfd2c6] hover:bg-white/60"
            }`}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <Link
            href="#contact"
            className="group flex h-10 items-center gap-3 rounded-xl bg-[#9884c6] px-5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(124,101,184,0.14)] transition-all hover:-translate-y-0.5 hover:bg-[#826ab8]"
          >
            Get a Quote
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className={`flex size-10 items-center justify-center rounded-xl border sm:hidden ${
            darkMode
              ? "border-white/15"
              : "border-[#dfd2c6]"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          className={`border-t px-5 py-4 sm:hidden ${
            darkMode
              ? "border-white/10 bg-[#17151f]"
              : "border-[#e5ddd5] bg-[#f3ede5]"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm transition-colors hover:bg-black/5"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#9884c6] px-4 py-3 text-sm font-semibold text-white"
            >
              Get a Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
