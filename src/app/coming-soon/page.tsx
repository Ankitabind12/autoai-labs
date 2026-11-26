"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, Zap, Bot, Radio, Cpu, CircuitBoard, Layers, ShieldCheck, Mail, CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Engineer / Builder");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/autoa.labs5@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _replyto: email,
          role,
          _subject: `[AUTOAI LABS Early Access] ${email}`,
          message: `Early access notification request from ${email} (${role}).`,
        }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setSubscribed(true);
    } catch {
      setError("Could not register automatically right now. Please email autoa.labs5@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  };

  const categories = [
    {
      title: "Automation Components",
      icon: Zap,
      spec: "PLCs &bull; Industrial Fieldbus &bull; Relays &bull; HMIs",
      readiness: "SPECIFICATION DEFINED",
    },
    {
      title: "Robotics Hardware",
      icon: Bot,
      spec: "Brushless Servos &bull; Harmonic Drives &bull; Grippers",
      readiness: "SUPPLIER ENGAGEMENT",
    },
    {
      title: "Sensors & Perception",
      icon: Radio,
      spec: "LiDAR &bull; Depth Vision &bull; IMUs &bull; Transducers",
      readiness: "CATALOG STRUCTURING",
    },
    {
      title: "IoT & Connectivity",
      icon: Layers,
      spec: "Industrial Gateways &bull; LoRaWAN &bull; Cellular RedCap",
      readiness: "PROTOCOL VALIDATION",
    },
    {
      title: "AI Hardware & Compute",
      icon: Cpu,
      spec: "Edge NPUs &bull; SoMs &bull; Neural Accelerators",
      readiness: "SILICON TAXONOMY",
    },
    {
      title: "Electronic Components",
      icon: CircuitBoard,
      spec: "Power Regulators &bull; Isolated Drivers &bull; MOSFETs",
      readiness: "SCHEMATIC STANDARDS",
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-12">
      {/* Hero */}
      <section className="pt-12 sm:pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono uppercase tracking-widest">
          <Clock className="w-3.5 h-3.5 animate-spin-slow" />
          ECOSYSTEM PREPARATION PHASE
        </div>

        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
          The ecosystem is coming together.
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
          We&apos;re currently building our supplier network and preparing the AutoAI Labs marketplace. No fake products. No artificial inventory. Just serious engineering infrastructure in active development.
        </p>

        {/* Early Access Notification Form */}
        <div className="pt-4 max-w-md mx-auto">
          {subscribed ? (
            <div className="p-4 rounded-xl glass-panel border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-xs flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>You&apos;re registered for early platform notifications!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-3">
              {error && (
                <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-grow px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/20 shrink-0"
                >
                  {submitting ? "Registering..." : "Notify Me"}
                </button>
              </div>
              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono px-1">
                <span>STRICTLY NO SPAM</span>
                <span>EARLY ACCESS INVITATIONS ONLY</span>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ONBOARDING DIRECTORY"
          title="Hardware Categories in Preparation"
          description="We are cataloging suppliers across six fundamental domains before opening public marketplace transactions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel p-6 border border-white/[0.08] hover:border-sky-400/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium tracking-wider bg-amber-500/10 border border-amber-500/25 text-amber-300">
                      COMING SOON
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                    {cat.title}
                  </h3>

                  <div
                    className="text-xs text-zinc-400 leading-relaxed font-mono mb-4"
                    dangerouslySetInnerHTML={{ __html: cat.spec }}
                  />
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>{cat.readiness}</span>
                  <Link
                    href="/partners"
                    className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 font-sans"
                  >
                    Supply Category <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Transparent FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ & TRANSPARENCY"
          title="Launch Questions Answered"
          description="Clear facts about the AutoAI Labs launch timeline and business model."
        />

        <div className="space-y-4">
          {[
            {
              q: "Why is the marketplace not live with products right now?",
              a: "AutoAI Labs is an early-stage startup committed to hardware authenticity. Rather than scraping unverified web listings or showing mock inventory, we are actively onboarding verified suppliers and distributors first.",
            },
            {
              q: "How will the eventual purchasing model work?",
              a: "The transaction flow is structured as: Customer → AutoAI Labs → Supplier → Customer. Engineers will order directly through our unified catalog, and orders will be fulfilled through verified manufacturer and distributor agreements.",
            },
            {
              q: "How can my company become an early supplier?",
              a: "You can submit an inquiry through our dedicated Partners page (/partners). Our team reviews your component catalog, certifications, and inventory capabilities to evaluate foundational partnership status.",
            },
            {
              q: "What types of components are prioritized?",
              a: "Our initial focus centers on industrial PLCs, robotics actuators and servos, spatial perception sensors (LiDAR/optical), industrial IoT gateways, and edge neural processing silicon.",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/[0.07] space-y-2">
              <h4 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                <span className="text-sky-400 font-mono text-xs">0{idx + 1}.</span>
                {item.q}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
