"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Cpu, Layers } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Coming Soon", href: "/coming-soon" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090C]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
            aria-label="AUTOAI LABS Home"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400/20 via-indigo-500/20 to-cyan-400/10 border border-sky-400/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-sky-400/60 shadow-[0_0_15px_-3px_rgba(56,189,248,0.3)]">
              <Cpu className="w-4 h-4 text-sky-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-sky-400/10 blur-sm -z-10 group-hover:bg-sky-400/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-[0.16em] text-sm uppercase text-white group-hover:text-sky-300 transition-colors flex items-center gap-1.5">
                AUTOAI<span className="text-sky-400 font-light">LABS</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-zinc-500 font-mono -mt-0.5">
                AUTOMATION &bull; AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-white/[0.07] px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/10 shadow-sm shadow-sky-500/20 border border-white/15"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/partners"
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg hover:from-sky-400 hover:to-indigo-500 transition-all duration-200 shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0A0C10]/95 backdrop-blur-xl px-4 pt-4 pb-6 mt-2 transition-all shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-sky-300 bg-sky-950/40 border border-sky-800/30"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-white/10">
              <Link
                href="/partners"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/20"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
