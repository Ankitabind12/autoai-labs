import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-8 sm:p-14 text-center shadow-2xl">
          {/* Subtle gradient light inside */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-800/40 text-sky-300 text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              JOIN THE ECOSYSTEM
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Let&apos;s build what&apos;s next.
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Whether you&apos;re building with automation, supplying technology, or exploring what&apos;s possible with AI and robotics, AutoAI Labs is being built for the next generation of intelligent systems.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/partners"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 transition-all shadow-lg shadow-sky-500/20 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <Building2 className="w-4 h-4" />
                <span>Become a Supplier</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all active:scale-95 inline-flex items-center justify-center gap-2"
              >
                <span>Contact AutoAI Labs</span>
              </Link>
            </div>

            <div className="pt-4 text-[11px] font-mono text-zinc-500">
              CONFIDENTIAL INQUIRIES &bull; PRE-LAUNCH ECOSYSTEM PARTNERSHIP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
