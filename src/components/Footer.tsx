import React from "react";
import Link from "next/link";
import { Cpu, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080B] text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-sky-400/20 to-indigo-500/20 border border-sky-400/30 flex items-center justify-center">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
              </div>
              <span className="font-semibold tracking-[0.16em] text-sm uppercase text-white">
                AUTOAI<span className="text-sky-400 font-light">LABS</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-zinc-400 max-w-sm">
              Building a connected technology ecosystem and marketplace across automation, robotics, IoT, sensors, and AI hardware.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>EARLY ACCESS &bull; SUPPLIER ONBOARDING PHASE</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-zinc-200 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About AutoAI Labs
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Technology Solutions
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="hover:text-white transition-colors">
                  Marketplace Status
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  Supplier Network
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Pillars */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-zinc-200 font-mono">
              Core Pillars
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <div className="text-zinc-200 font-medium">Automation</div>
                <div className="text-[11px] text-zinc-500">Control systems & PLC</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <div className="text-zinc-200 font-medium">Robotics</div>
                <div className="text-[11px] text-zinc-500">Motion & actuators</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <div className="text-zinc-200 font-medium">IoT & Sensors</div>
                <div className="text-[11px] text-zinc-500">Telemetry & devices</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <div className="text-zinc-200 font-medium">AI Hardware</div>
                <div className="text-[11px] text-zinc-500">Edge compute & accelerators</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {currentYear} AUTOAI LABS. All rights reserved. Preparing the intelligent systems ecosystem.
          </div>
          <div className="flex items-center gap-6 text-[11px] font-mono">
            <span>PRE-LAUNCH ARCHITECTURE</span>
            <span>&bull;</span>
            <Link href="/partners" className="hover:text-sky-400 transition-colors inline-flex items-center gap-1">
              Supplier Inquiries <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
