"use client";

import React, { useState } from "react";
import { Cpu, Zap, Radio, Bot, ShieldCheck, Activity, Terminal } from "lucide-react";

interface NodeData {
  id: string;
  title: string;
  tagline: string;
  status: string;
  tech: string;
  icon: React.ElementType;
  position: string;
  color: string;
}

const nodes: NodeData[] = [
  {
    id: "automation",
    title: "AUTOMATION",
    tagline: "Industrial control, PLCs & motion systems",
    status: "PROTOCOL READY",
    tech: "IEC 61131-3 // BUS",
    icon: Zap,
    position: "top-4 left-4 sm:top-8 sm:left-8",
    color: "from-sky-500/20 to-sky-600/5 text-sky-400 border-sky-500/30",
  },
  {
    id: "robotics",
    title: "ROBOTICS",
    tagline: "Kinematic arms, servos & controllers",
    status: "TELEMETRY LINK",
    tech: "SERVO-CAN // MOTION",
    icon: Bot,
    position: "top-4 right-4 sm:top-8 sm:right-8",
    color: "from-indigo-500/20 to-indigo-600/5 text-indigo-400 border-indigo-500/30",
  },
  {
    id: "iot",
    title: "IoT & SENSORS",
    tagline: "Distributed sensory nodes & telemetry",
    status: "SENSOR MESH",
    tech: "MQTT // BLE // LoRa",
    icon: Radio,
    position: "bottom-4 left-4 sm:bottom-8 sm:left-8",
    color: "from-cyan-500/20 to-cyan-600/5 text-cyan-400 border-cyan-500/30",
  },
  {
    id: "ai",
    title: "AI HARDWARE",
    tagline: "Edge neural accelerators & inference compute",
    status: "NEURAL CORE",
    tech: "NPU // TENSOR VPU",
    icon: Cpu,
    position: "bottom-4 right-4 sm:bottom-8 sm:right-8",
    color: "from-violet-500/20 to-violet-600/5 text-violet-400 border-violet-500/30",
  },
];

export default function HeroVisual() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8 px-2 sm:px-6">
      {/* Visual Canvas Container */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl glass-panel p-6 overflow-hidden flex items-center justify-center border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        
        {/* Subtle grid background inside canvas */}
        <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
        
        {/* SVG Connection Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#818CF8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.6" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Central concentric orbital rings */}
          <circle cx="400" cy="250" r="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="400" cy="250" r="220" stroke="rgba(56,189,248,0.07)" strokeWidth="1" />
          <circle cx="400" cy="250" r="300" stroke="rgba(99,102,241,0.05)" strokeWidth="1" strokeDasharray="6 12" />

          {/* Lines connecting corners to center */}
          {/* Top-Left to Center */}
          <path
            d="M 180 110 L 320 200 L 360 230"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse"
          />
          {/* Top-Right to Center */}
          <path
            d="M 620 110 L 480 200 L 440 230"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse"
          />
          {/* Bottom-Left to Center */}
          <path
            d="M 180 390 L 320 300 L 360 270"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse"
          />
          {/* Bottom-Right to Center */}
          <path
            d="M 620 390 L 480 300 L 440 270"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse"
          />

          {/* Circuit tick marks on diagonal axes */}
          <circle cx="320" cy="200" r="3" fill="#38BDF8" />
          <circle cx="480" cy="200" r="3" fill="#818CF8" />
          <circle cx="320" cy="300" r="3" fill="#22D3EE" />
          <circle cx="480" cy="300" r="3" fill="#A78BFA" />
        </svg>

        {/* Central AUTOAI Core */}
        <div className="relative z-20 flex flex-col items-center justify-center">
          {/* Outer glow ring */}
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full flex items-center justify-center p-2">
            <div className="absolute inset-0 rounded-full border border-sky-400/30 animate-spin-slow" />
            <div className="absolute inset-2 rounded-full border border-indigo-500/20 border-dashed" />
            
            {/* Core glowing sphere */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#121622] via-[#0E1118] to-[#0A0C11] border border-sky-400/40 flex flex-col items-center justify-center p-3 text-center shadow-[0_0_40px_rgba(56,189,248,0.25)] relative group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-md pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-6 h-6 rounded bg-sky-500/20 border border-sky-400/40 flex items-center justify-center mb-1">
                  <Activity className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-white font-mono">
                  AUTOAI
                </div>
                <div className="text-[8px] sm:text-[9px] tracking-widest uppercase text-sky-400/90 font-mono mt-0.5">
                  CORE HUB
                </div>
              </div>

              {/* Status indicator pulse */}
              <div className="absolute -bottom-1 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[8px] font-mono text-emerald-400 flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ECOSYSTEM
              </div>
            </div>
          </div>
        </div>

        {/* Four Orbit Nodes */}
        <div className="absolute inset-0 p-4 sm:p-6 pointer-events-none">
          <div className="relative w-full h-full">
            {nodes.map((node) => {
              const Icon = node.icon;
              const isHovered = activeNode === node.id;

              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`absolute ${node.position} pointer-events-auto cursor-pointer transition-all duration-300 ${
                    isHovered ? "scale-105 z-30" : "hover:scale-102 z-20"
                  }`}
                >
                  <div
                    className={`p-3 sm:p-3.5 rounded-xl bg-[#0F121A]/90 border backdrop-blur-md shadow-lg transition-all duration-300 max-w-[140px] sm:max-w-[200px] ${
                      node.color
                    } ${isHovered ? "shadow-sky-500/20 border-white/30" : ""}`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-white font-mono">
                        {node.title}
                      </div>
                    </div>
                    
                    <p className="text-[10px] text-zinc-400 hidden sm:block leading-tight line-clamp-2">
                      {node.tagline}
                    </p>

                    <div className="mt-2 pt-1.5 border-t border-white/[0.06] flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-zinc-500">
                      <span>{node.status}</span>
                      <span className="text-sky-400/80">&bull;</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Hardware Telemetry Bar */}
        <div className="absolute bottom-3 left-4 right-4 hidden md:flex items-center justify-between text-[10px] font-mono text-zinc-500 border-t border-white/[0.05] pt-2 px-2">
          <div className="flex items-center gap-2">
            <Terminal className="w-3 h-3 text-sky-400" />
            <span>SYS_ARCH // HYBRID AUTOMATION-AI BUS</span>
          </div>
          <div className="flex items-center gap-4">
            <span>LATENCY &lt; 1ms</span>
            <span className="text-zinc-600">|</span>
            <span className="text-sky-400">SUPPLIER DIRECT ARCHITECTURE</span>
          </div>
        </div>

      </div>
    </div>
  );
}
