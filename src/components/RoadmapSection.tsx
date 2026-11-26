import React from "react";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";

export default function RoadmapSection() {
  const stages = [
    {
      phase: "PHASE 01",
      title: "Foundation",
      status: "CURRENT STAGE",
      statusColor: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30",
      description:
        "Building the AutoAI Labs platform architecture, technical specifications, brand foundation, and core technology taxonomy.",
      deliverables: [
        "Core digital architecture & visual identity",
        "Taxonomy for automation & AI hardware",
        "Foundational partner portal design",
        "Compliance & specification schemas",
      ],
    },
    {
      phase: "PHASE 02",
      title: "Supplier Network",
      status: "IN PROGRESS",
      statusColor: "text-sky-400 bg-sky-950/60 border-sky-500/30",
      description:
        "Building direct relationships with certified manufacturers, distributors, and component specialists across automation, robotics, and sensors.",
      deliverables: [
        "Supplier onboarding & verification flow",
        "Standardized technical cataloging",
        "Lead time & availability integration",
        "Distributor partnership framework",
      ],
    },
    {
      phase: "PHASE 03",
      title: "Marketplace Launch",
      status: "UPCOMING",
      statusColor: "text-zinc-400 bg-zinc-900 border-white/10",
      description:
        "Opening the central AutoAI Labs marketplace for builders, robotics engineers, and enterprise automation teams to discover and procure technology.",
      deliverables: [
        "Comprehensive hardware search & filter",
        "Direct RFQ and purchasing workflows",
        "Spec comparisons & CAD file access",
        "Customer → AutoAI Labs → Supplier routing",
      ],
    },
    {
      phase: "PHASE 04",
      title: "Intelligent Platform",
      status: "FUTURE VISION",
      statusColor: "text-indigo-400 bg-indigo-950/60 border-indigo-500/30",
      description:
        "Future platform intelligence: AI-powered component matching, automated BOM analysis, system compatibility verification, and smart replenishment.",
      deliverables: [
        "AI-assisted bill-of-materials (BOM) generator",
        "Hardware compatibility reasoning engine",
        "Autonomous inventory telemetry",
        "Cross-vendor ecosystem interoperability",
      ],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className="group rounded-2xl glass-panel p-6 sm:p-7 border border-white/[0.08] transition-all duration-300 hover:border-sky-400/30 hover:bg-[#11141E] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold text-zinc-500">
                  {stage.phase}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${stage.statusColor}`}
                >
                  {stage.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                {stage.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {stage.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  Key Milestones:
                </div>
                {stage.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500 flex items-center justify-between">
              <span>MILESTONE // 0{idx + 1}</span>
              <span className="text-zinc-600">STAGED ROLLOUT</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
