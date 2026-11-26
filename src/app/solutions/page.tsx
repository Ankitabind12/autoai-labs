"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, Bot, Radio, Cpu, CircuitBoard, Layers, ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const solutionCategories = [
  {
    id: "automation",
    name: "Automation",
    icon: Zap,
    badge: "INDUSTRIAL CONTROL",
    title: "Automation & Industrial Control Systems",
    summary:
      "Deterministic controllers, programmable automation modules, and industrial communication architectures engineered for 24/7 reliability.",
    whatItIs:
      "Automation components form the brain and spinal cord of manufacturing facilities, process plants, and automated assembly cells. These include Programmable Logic Controllers (PLCs), Human-Machine Interfaces (HMIs), distributed I/O islands, and industrial networking hardware.",
    whyItMatters:
      "Modern automation demands sub-millisecond deterministic response times, electrical isolation, and fail-safe safety compliance. Selecting the right control architecture dictates whether a factory line operates with zero downtime or suffers catastrophic stoppages.",
    applications: [
      "Automated assembly lines & packaging machinery",
      "Process monitoring & batch recipe management",
      "Building automation & industrial energy telemetry",
      "Deterministic machine vision synchronization",
    ],
    protocols: "IEC 61131-3 &bull; Modbus TCP &bull; EtherCAT &bull; PROFINET",
  },
  {
    id: "robotics",
    name: "Robotics",
    icon: Bot,
    badge: "KINEMATICS & MOTION",
    title: "Robotic Components & Motion Hardware",
    summary:
      "Precision brushless servos, harmonic gearboxes, multi-axis motion controllers, and end-of-arm tooling for robotic platforms.",
    whatItIs:
      "Robotic hardware encompasses all mechanical and electromechanical elements responsible for controlled movement: high-density servo motors, precision strain wave gearboxes, integrated drives with absolute encoders, and specialized robotic grippers.",
    whyItMatters:
      "Whether developing an autonomous mobile robot (AMR), collaborative manipulator (cobot), or robotic drone, torque density, backlash tolerance, and motion smoothness are the fundamental physical limits of capability.",
    applications: [
      "Articulated multi-axis robotic arms",
      "Autonomous Mobile Robots (AMR) & AGV drivetrains",
      "Pick-and-place precision assembly heads",
      "Medical & surgical robotic manipulators",
    ],
    protocols: "CANopen &bull; ROS 2 Hardware Interfaces &bull; EtherCAT CoE",
  },
  {
    id: "iot",
    name: "IoT & Connectivity",
    icon: Layers,
    badge: "EDGE TELEMETRY",
    title: "IoT Systems & Field Connectivity",
    summary:
      "Ruggedized edge gateways, wireless mesh transceivers, and telemetry hardware linking distributed field assets to centralized systems.",
    whatItIs:
      "IoT infrastructure covers edge transceivers, cellular/satellite modems, LoRaWAN concentrators, and industrial gateways that reliably capture and transmit telemetry data across challenging physical environments.",
    whyItMatters:
      "Intelligent operations require continuous real-time data from assets deployed in factories, mines, fields, and transport routes. Robust IoT hardware ensures uninterrupted data flow even under electrical noise and harsh temperatures.",
    applications: [
      "Predictive maintenance & remote vibration telemetry",
      "Fleet tracking & logistics asset telemetry",
      "Smart agriculture & environmental monitoring",
      "Distributed smart grid & microgrid telemetry",
    ],
    protocols: "MQTT-SN &bull; LoRaWAN &bull; OPC-UA &bull; 5G RedCap",
  },
  {
    id: "ai-hardware",
    name: "AI Hardware",
    icon: Cpu,
    badge: "NEURAL SILICON",
    title: "AI Hardware & Edge Accelerators",
    summary:
      "Embedded Neural Processing Units (NPUs), Vision Processing Units (VPUs), System-on-Modules (SoMs), and tensor coprocessors.",
    whatItIs:
      "AI hardware comprises specialized semiconductor silicon architected specifically for parallel matrix multiplication and neural network inference at the edge, offering high TOPS per watt without requiring cloud roundtrips.",
    whyItMatters:
      "Autonomous robots and real-time visual inspection systems cannot afford the latency, bandwidth cost, or connectivity dependence of cloud AI. On-device inference delivers instant decision-making and privacy.",
    applications: [
      "Real-time visual defect detection on factory lines",
      "On-device SLAM & spatial obstacle avoidance for AMRs",
      "Audio acoustic anomaly detection in turbines",
      "Embedded natural language and command parsing",
    ],
    protocols: "ONNX Runtime &bull; TensorRT &bull; OpenVINO &bull; RISC-V",
  },
  {
    id: "sensors",
    name: "Sensors",
    icon: Radio,
    badge: "SENSORY PERCEPTION",
    title: "Sensors & Perception Subsystems",
    summary:
      "Solid-state LiDARs, 3D stereo cameras, industrial proximity switches, IMUs, and specialized environmental transducers.",
    whatItIs:
      "Sensors act as the sensory organs of automated systems: converting physical phenomena—light, distance, magnetic fields, pressure, temperature, and acceleration—into calibrated digital data streams.",
    whyItMatters:
      "An automated system can only make decisions based on what it perceives. High-precision, low-noise sensing hardware is what separates a blind machine from an intelligent, context-aware system.",
    applications: [
      "3D volumetric point-cloud mapping & LiDAR SLAM",
      "Precision torque and force sensing in robotic joints",
      "Laser displacement measuring for micrometer tolerances",
      "Infrared thermal imaging for electrical fault prevention",
    ],
    protocols: "IO-Link &bull; SPI &bull; I2C &bull; 4-20mA Current Loop",
  },
  {
    id: "electronic-components",
    name: "Electronic Components",
    icon: CircuitBoard,
    badge: "CIRCUIT LEVEL",
    title: "Electronic Components & Power Hardware",
    summary:
      "Industrial power regulators, MOSFET drivers, optocouplers, microcontrollers, and precision passive components.",
    whatItIs:
      "The foundational circuitry that powers and protects every board: DC-DC step-down buck regulators, high-voltage gate drivers, isolated transceiver ICs, filtering capacitors, and embedded ARM/RISC-V microcontrollers.",
    whyItMatters:
      "Even the most advanced AI chip is useless if power rail noise creates instability or inductive spikes from motor braking blow out the logic board. Component-level reliability is the bedrock of hardware engineering.",
    applications: [
      "Motor driver H-bridge inverters & power stages",
      "Galvanically isolated communication interfaces",
      "Battery management systems (BMS) for mobile robotics",
      "High-efficiency industrial DIN-rail power supplies",
    ],
    protocols: "AEC-Q200 &bull; UL94V-0 &bull; Galvanic Isolation",
  },
];

export default function SolutionsPage() {
  const [selectedId, setSelectedId] = useState(solutionCategories[0].id);
  const current = solutionCategories.find((c) => c.id === selectedId) || solutionCategories[0];
  const CurrentIcon = current.icon;

  return (
    <div className="space-y-24 sm:space-y-32 pb-12">
      {/* Header */}
      <section className="pt-12 sm:pt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/40 border border-sky-800/40 text-sky-300 text-xs font-mono uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          ECOSYSTEM SOLUTIONS & TAXONOMY
        </div>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
          Comprehensive Technology Domains.
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
          Explore the core technology disciplines that AutoAI Labs is organizing into a unified ecosystem. From silicon-level AI accelerators to heavy-duty industrial automation.
        </p>
      </section>

      {/* Interactive Category Selector & Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start md:justify-center">
          {solutionCategories.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400"
                    : "glass-panel text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Deep Dive Panel */}
        <div className="mt-8 rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/15 border border-sky-400/30 text-sky-400">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-sky-400 tracking-wider uppercase">
                    {current.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    {current.title}
                  </h2>
                </div>
              </div>

              <p className="text-base text-zinc-300 leading-relaxed font-normal">
                {current.summary}
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <h4 className="text-xs font-mono uppercase text-sky-400 tracking-wider mb-1">
                    What It Is
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {current.whatItIs}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <h4 className="text-xs font-mono uppercase text-sky-400 tracking-wider mb-1">
                    Why It Matters
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {current.whyItMatters}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Applications & Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-[#0D1018] border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Target Applications
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> ACTIVE SCOPE
                  </span>
                </div>

                <div className="space-y-2.5">
                  {current.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    Standard Interfaces & Protocols
                  </div>
                  <div
                    className="text-xs font-mono text-zinc-300"
                    dangerouslySetInnerHTML={{ __html: current.protocols }}
                  />
                </div>
              </div>

              {/* Action Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-950/40 via-zinc-900/60 to-indigo-950/40 border border-sky-500/20 space-y-3">
                <h4 className="text-sm font-semibold text-white">
                  Supply {current.name} Hardware?
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We are actively establishing relationships with verified component vendors in this domain.
                </p>
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors pt-1"
                >
                  <span>Submit Catalog for Onboarding</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid of all six domains */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SYSTEM ARCHITECTURE"
          title="All Six Technology Layers"
          description="Click any layer to review its role in the AutoAI Labs ecosystem."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionCategories.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`p-6 rounded-2xl glass-panel border cursor-pointer transition-all duration-300 ${
                  selectedId === item.id
                    ? "border-sky-400/50 bg-[#121622] shadow-[0_0_25px_rgba(56,189,248,0.15)]"
                    : "border-white/[0.06] hover:border-white/20 hover:bg-[#0E1119]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sky-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
