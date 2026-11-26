"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Bot, Radio, Zap, Layers, CircuitBoard, Clock, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Automation Components",
    subtitle: "Industrial Controllers & PLCs",
    icon: Zap,
    description: "Programmable logic controllers, human-machine interfaces (HMI), industrial I/O, safety relays, and fieldbus networking components.",
    status: "COMING SOON",
    tech: "IEC 61131-3 // MODBUS // ETHERCAT",
  },
  {
    title: "Robotics Hardware",
    subtitle: "Motion & Kinematics",
    icon: Bot,
    description: "Robotic arm joints, harmonic drive gearboxes, precision brushless servos, stepper drives, motor encoders, and gripper mechanisms.",
    status: "COMING SOON",
    tech: "CANOPEN // ROS2 // SERVO-DRIVE",
  },
  {
    title: "Sensors & Telemetry",
    subtitle: "Environmental & Spatial",
    icon: Radio,
    description: "LiDAR modules, depth cameras, industrial encoders, ultrasonic proximity sensors, IMUs, pressure, and thermal infrared arrays.",
    status: "COMING SOON",
    tech: "I2C // SPI // ANALOG 4-20mA",
  },
  {
    title: "IoT & Connectivity",
    subtitle: "Distributed Edge Nodes",
    icon: Layers,
    description: "Industrial IoT gateways, LoRaWAN transceivers, wireless telemetry units, ruggedized antennas, and power-over-ethernet controllers.",
    status: "COMING SOON",
    tech: "MQTT // LORAWAN // BLE 5.3",
  },
  {
    title: "AI Hardware & Compute",
    subtitle: "Edge Neural Accelerators",
    icon: Cpu,
    description: "System-on-Modules (SoM), edge TPUs, embedded neural processing units (NPU), vision processing units, and high-performance carrier boards.",
    status: "COMING SOON",
    tech: "TENSOR NPU // ONNX // RISC-V",
  },
  {
    title: "Electronic Components",
    subtitle: "Passive & Active Subsystems",
    icon: CircuitBoard,
    description: "Power regulation modules, MOSFET arrays, optoisolators, precision voltage references, RF components, and industrial microcontrollers.",
    status: "COMING SOON",
    tech: "SMD // HIGH-VOLTAGE // ISOLATED",
  },
];

export default function ComingSoonSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase">
            <Clock className="w-3.5 h-3.5 animate-spin-slow" />
            MARKETPLACE PREPARATION PHASE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            The ecosystem is coming together.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            We&apos;re currently building our supplier network and preparing the AutoAI Labs marketplace. Explore the specialized technology categories currently in onboarding.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl glass-panel p-6 sm:p-7 border border-white/[0.08] transition-all duration-300 hover:border-sky-400/40 hover:bg-[#11141E] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:bg-sky-500/15 group-hover:border-sky-400/30 transition-colors">
                      <Icon className="w-5 h-5 text-sky-400" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold tracking-wider bg-white/[0.06] border border-white/10 text-zinc-300">
                      {cat.status}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-sky-400/90 uppercase tracking-wider">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-xl font-semibold text-white tracking-tight mt-0.5 mb-2.5">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="font-mono text-[9px] text-zinc-500 tracking-wider">
                    {cat.tech}
                  </span>
                  <Link
                    href="/partners"
                    className="text-xs text-sky-400 group-hover:text-sky-300 font-medium inline-flex items-center gap-1"
                  >
                    Supply Category <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout box */}
        <div className="mt-12 rounded-2xl border border-sky-500/20 bg-gradient-to-r from-sky-950/30 via-zinc-900/40 to-indigo-950/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-white">
              Are you a manufacturer or distributor in these categories?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Join early as an AutoAI Labs foundational supplier before the public marketplace launch.
            </p>
          </div>
          <Link
            href="/partners"
            className="shrink-0 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 transition-colors shadow-md shadow-sky-500/20"
          >
            Become a Foundational Supplier
          </Link>
        </div>
      </div>
    </section>
  );
}
