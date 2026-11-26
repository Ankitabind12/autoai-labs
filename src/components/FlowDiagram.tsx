import React from "react";
import { Building2, Layers, Cpu, Users2, ArrowRight } from "lucide-react";

export default function FlowDiagram() {
  const steps = [
    {
      step: "01",
      role: "SUPPLIERS & DISTRIBUTORS",
      icon: Building2,
      desc: "Hardware manufacturers, component fabricators, and certified distributors of robotics & industrial automation.",
      tag: "INBOUND NETWORK",
    },
    {
      step: "02",
      role: "AUTOAI LABS PLATFORM",
      icon: Layers,
      desc: "Unified ecosystem core: verification, technical cataloging, standardized telemetry, and intelligent indexing.",
      tag: "THE CONVERGENCE LAYER",
      highlight: true,
    },
    {
      step: "03",
      role: "INTELLIGENT ECOSYSTEM",
      icon: Cpu,
      desc: "Seamless categorization connecting robotics, sensors, control systems, and AI hardware in one accessible space.",
      tag: "HARDWARE DISCOVERY",
    },
    {
      step: "04",
      role: "BUILDERS & ENGINEERS",
      icon: Users2,
      desc: "Robotics engineers, automation architects, IoT developers, and enterprises deploying intelligent systems.",
      tag: "END APPLICATIONS",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="relative flex flex-col">
              <div
                className={`h-full rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  item.highlight
                    ? "bg-gradient-to-b from-[#121624] to-[#0A0D14] border-sky-400/40 shadow-[0_0_30px_-5px_rgba(56,189,248,0.2)]"
                    : "glass-panel hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-zinc-500">
                      STAGE {item.step}
                    </span>
                    <div
                      className={`p-2 rounded-lg border ${
                        item.highlight
                          ? "bg-sky-500/20 border-sky-400/40 text-sky-300"
                          : "bg-white/[0.04] border-white/10 text-zinc-300"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-sky-400">
                      {item.tag}
                    </span>
                    <h4 className="text-base font-semibold text-white mt-0.5">
                      {item.role}
                    </h4>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                  <span>FLOW ARCHITECTURE</span>
                  <span className="text-sky-400">&bull;</span>
                </div>
              </div>

              {/* Connecting arrow for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-zinc-900 border border-white/15 items-center justify-center text-zinc-400 shadow-md">
                  <ArrowRight className="w-3 h-3 text-sky-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
