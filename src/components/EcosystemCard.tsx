"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Bot, Radio, Cpu } from "lucide-react";

interface PillarProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  specs: string;
  iconType: "automation" | "robotics" | "iot" | "ai";
}

const iconMap = {
  automation: Zap,
  robotics: Bot,
  iot: Radio,
  ai: Cpu,
};

export default function EcosystemCard({
  number,
  title,
  subtitle,
  description,
  features,
  specs,
  iconType,
}: PillarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[iconType] || Zap;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl glass-panel p-6 sm:p-8 transition-all duration-300 hover:bg-[#121520] hover:border-sky-400/30 hover:shadow-[0_10px_35px_-5px_rgba(56,189,248,0.12)] flex flex-col justify-between"
    >
      {/* Subtle hover gradient indicator */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/[0.04] via-indigo-500/[0.03] to-transparent pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div>
        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs tracking-widest text-zinc-500">
            {number}
          </span>
          <div
            className={`p-2.5 rounded-xl border transition-all duration-300 ${
              isHovered
                ? "bg-sky-500/15 border-sky-400/40 text-sky-300 scale-110"
                : "bg-white/[0.04] border-white/10 text-zinc-300"
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
        </div>

        {/* Pillar Title */}
        <div className="mb-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400">
            {subtitle}
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-0.5">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
          {description}
        </p>

        {/* Feature bullets */}
        <div className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400/80 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Specs */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
        <span className="font-mono text-[10px] text-zinc-500 tracking-wider">
          {specs}
        </span>
        <Link
          href="/solutions"
          className="text-sky-400 group-hover:text-sky-300 font-medium inline-flex items-center gap-1 hover:gap-1.5 transition-all text-xs"
        >
          <span>Explore</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
