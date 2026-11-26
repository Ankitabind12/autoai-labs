import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, Layers } from "lucide-react";
import HeroVisual from "@/components/HeroVisual";
import SectionHeading from "@/components/SectionHeading";
import EcosystemCard from "@/components/EcosystemCard";
import FlowDiagram from "@/components/FlowDiagram";
import ComingSoonSection from "@/components/ComingSoonSection";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/40 border border-sky-800/40 text-sky-300 text-xs font-mono tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              EARLY-STAGE STARTUP &bull; ECOSYSTEM IN DEVELOPMENT
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08]">
              Where Automation <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                Meets Intelligence.
              </span>
            </h1>

            {/* Supporting Message */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto">
              AutoAI Labs is building a unified technology ecosystem connecting industrial automation, robotics, IoT, sensors, electronic components, and AI hardware.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/solutions"
                className="w-full sm:w-auto px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 transition-all shadow-lg shadow-sky-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Explore AutoAI Labs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/partners"
                className="w-full sm:w-auto px-7 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all active:scale-95 inline-flex items-center justify-center gap-2"
              >
                <Building2 className="w-4 h-4 text-sky-400" />
                <span>Become a Supplier</span>
              </Link>
            </div>

            {/* Status note */}
            <div className="text-[11px] font-mono text-zinc-500 pt-1">
              SUPPLIER ONBOARDING CURRENTLY ACTIVE &bull; MARKETPLACE LAUNCHING SOON
            </div>
          </div>

          {/* Hero Visual Node Graph */}
          <div className="mt-12 sm:mt-16">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel p-8 sm:p-14 border border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                PLATFORM VISION
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
                Building the technology layer behind intelligent systems.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Modern intelligent systems cannot rely on siloed, outdated procurement. Building robotics, automated facilities, and connected edge devices requires synchronizing industrial control, sensory perception, and neural compute.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                AutoAI Labs is creating the central ecosystem to bring verified suppliers, hardware innovators, and engineers together under one standardized platform.
              </p>
            </div>

            {/* Technology Domain Badges Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
              {[
                { name: "Automation", desc: "PLCs, industrial I/O, control logic", tag: "SYS 01" },
                { name: "Robotics", desc: "Actuators, motor drives, kinematics", tag: "SYS 02" },
                { name: "IoT", desc: "Telemetry gateways, mesh networks", tag: "SYS 03" },
                { name: "Sensors", desc: "LiDAR, depth vision, IMUs, thermals", tag: "SYS 04" },
                { name: "AI Hardware", desc: "Edge NPUs, SoMs, neural accelerators", tag: "SYS 05" },
                { name: "Electronic Components", desc: "Power regulators, MOSFETs, passives", tag: "SYS 06" },
              ].map((domain, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-400/30 hover:bg-white/[0.05] transition-all"
                >
                  <div className="text-[10px] font-mono text-sky-400 tracking-wider">
                    {domain.tag}
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">
                    {domain.name}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 leading-snug">
                    {domain.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. ECOSYSTEM PILLARS SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CORE ARCHITECTURE"
          title="Four Pillars of Intelligent Technology"
          description="Every modern automated system converges across four core technical disciplines. We are structuring our ecosystem around these foundational domains."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <EcosystemCard
            number="01 // AUTOMATION"
            subtitle="Industrial Control"
            title="Automation & Control Systems"
            description="Mission-critical control architectures, programmable automation controllers, fieldbus networking, and deterministic industrial software interfaces."
            features={[
              "Programmable Logic Controllers (PLCs)",
              "Industrial Ethernet & Modbus protocols",
              "Fail-safe safety relays and I/O modules",
              "HMI panels & distributed control systems",
            ]}
            specs="IEC 61131-3 // ETHERCAT"
            iconType="automation"
          />

          <EcosystemCard
            number="02 // ROBOTICS"
            subtitle="Motion & Kinematics"
            title="Robotics & Motion Systems"
            description="Precision mechanical actuation, servo drives, harmonic gearboxes, and multi-axis kinematic controllers engineered for precision automation."
            features={[
              "High-torque brushless servo motors",
              "Integrated harmonic drive gearing",
              "Multi-axis motion controller modules",
              "End-effector tooling & robotic grippers",
            ]}
            specs="CANOPEN // ROS2 SUPPORT"
            iconType="robotics"
          />

          <EcosystemCard
            number="03 // IoT & SENSORS"
            subtitle="Perception & Connectivity"
            title="Sensory & Edge Connectivity"
            description="Distributed sensors and ruggedized edge connectivity enabling real-time telemetry, spatial awareness, and environmental perception."
            features={[
              "LiDAR, optical, and depth imaging sensors",
              "Industrial LoRaWAN & cellular gateways",
              "Vibration, thermal, and pressure transducers",
              "Edge data logging & telemetry nodes",
            ]}
            specs="MQTT // ANALOG // DIGITAL MESH"
            iconType="iot"
          />

          <EcosystemCard
            number="04 // AI HARDWARE"
            subtitle="Neural Compute"
            title="AI Hardware & Neural Processors"
            description="Next-generation compute silicon, neural processing units (NPUs), vision accelerators, and System-on-Modules built for low-latency edge inference."
            features={[
              "Embedded NPU accelerators (5-100+ TOPS)",
              "Carrier boards & System-on-Modules (SoMs)",
              "Vision processing units (VPU) for real-time inspection",
              "Energy-efficient tensor inference engines",
            ]}
            specs="TENSOR ACCEL // ONNX COMPATIBLE"
            iconType="ai"
          />
        </div>
      </section>

      {/* 4. WHAT WE'RE BUILDING (FLOW ARCHITECTURE) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PLATFORM FLOW"
          title="What We're Building"
          description="A direct bridge from verified hardware suppliers to engineers and businesses building the next generation of automation."
        />

        <FlowDiagram />

        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            AutoAI Labs acts as the intelligent orchestration layer: ensuring hardware compatibility, technical spec verification, and seamless discovery for developers, robotics teams, and enterprise system integrators.
          </p>
        </div>
      </section>

      {/* 5. COMING SOON SECTION (CATEGORY OVERVIEW) */}
      <ComingSoonSection />

      {/* 6. ROADMAP */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="EXECUTION ROADMAP"
          title="Phased Platform Rollout"
          description="A transparent look at our progression from ecosystem foundation to full marketplace availability."
        />

        <RoadmapSection />
      </section>

      {/* 7. MAJOR CALL TO ACTION */}
      <CTASection />
    </div>
  );
}
