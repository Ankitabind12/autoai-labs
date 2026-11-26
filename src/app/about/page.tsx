import React from "react";
import Link from "next/link";
import { ShieldCheck, Target, Cpu, Layers, Workflow, Sparkles, ArrowRight, Building2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About | AUTOAI LABS",
  description:
    "Learn about AutoAI Labs: our mission to unify hardware discovery, automation components, robotics, and edge AI compute.",
};

export default function AboutPage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-12">
      {/* Hero */}
      <section className="pt-12 sm:pt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/40 border border-sky-800/40 text-sky-300 text-xs font-mono uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          ABOUT AUTOAI LABS
        </div>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
          Unifying the technology layer for intelligent systems.
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
          AutoAI Labs is an early-stage startup building a curated technology marketplace and ecosystem connecting automation, robotics, IoT, sensors, electronic components, and AI hardware.
        </p>
      </section>

      {/* The Problem We Are Solving */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/[0.08]">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
              INDUSTRY CHALLENGE
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight mt-1">
              Why hardware engineering needs a modern ecosystem.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
              Engineers and companies building automated machines, robotic systems, and autonomous devices face a severely fragmented landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center font-mono text-sm font-semibold">
                01
              </div>
              <h3 className="text-lg font-semibold text-white">Fragmented Sourcing</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Industrial PLCs, robotic motion drives, and AI processors exist in separate distributor silos with incompatible technical taxonomies and opaque availability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-sm font-semibold">
                02
              </div>
              <h3 className="text-lg font-semibold text-white">The Hardware-AI Disconnect</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Traditional industrial suppliers do not understand neural accelerators and edge VPUs, while modern AI chipmakers often lack connections to industrial fieldbus hardware.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-sm font-semibold">
                03
              </div>
              <h3 className="text-lg font-semibold text-white">High Friction for Builders</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Prototyping an autonomous robot requires interfacing with dozens of disparate suppliers, slowing down innovation cycles for early-stage and enterprise teams alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution & Business Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PLATFORM MISSION"
          title="The AutoAI Labs Approach"
          description="A clear, structured model designed to bridge verified manufacturers with the creators of next-generation hardware."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl glass-panel p-8 border border-white/[0.08] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-2.5 w-fit rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">Curated Marketplace Ecosystem</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Rather than acting as an unvetted listings page, AutoAI Labs is partnering directly with certified suppliers, manufacturers, and distributors. We organize components by system-level compatibility, protocol support, and real engineering specifications.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Standardized datasheets and CAD file references</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Verified manufacturer compliance & protocol standards</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Transparent delivery routing: Customer &rarr; AutoAI Labs &rarr; Supplier</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
              SUPPLIER ONBOARDING IN PROGRESS
            </div>
          </div>

          <div className="rounded-2xl glass-panel p-8 border border-white/[0.08] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-2.5 w-fit rounded-xl bg-indigo-500/15 border border-indigo-400/30 text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">Long-Term Platform Vision</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                As the ecosystem expands, AutoAI Labs will introduce intelligent platform tooling: AI-assisted Bill of Materials (BOM) creation, protocol matching algorithms, and automated cross-vendor compatibility checks.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>Automated power budget & bus compatibility checks</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>Intelligent alternative component recommendations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>Streamlined procurement for hardware teams</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
              NEXT GENERATION SYSTEM ARCHITECTURE
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GUIDING PRINCIPLES"
          title="Built for Serious Engineers"
          description="How AutoAI Labs approaches ecosystem curation and technology partnership."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Technical Accuracy",
              desc: "No vague hype. We focus strictly on verified electrical, mechanical, and computational specifications.",
            },
            {
              title: "Supplier Integrity",
              desc: "We work with legitimate manufacturers and authorized distributors to guarantee genuine hardware.",
            },
            {
              title: "Cross-Disciplinary",
              desc: "Bridging the gap between classical industrial automation and bleeding-edge edge AI processors.",
            },
            {
              title: "Builder-First",
              desc: "Designed to remove procurement friction so engineering teams can build faster and innovate without delay.",
            },
          ].map((principle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-white/[0.06] space-y-2 hover:border-sky-400/30 transition-colors"
            >
              <div className="text-[10px] font-mono text-sky-400 tracking-wider">
                RULE // 0{idx + 1}
              </div>
              <h4 className="text-base font-semibold text-white">
                {principle.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
