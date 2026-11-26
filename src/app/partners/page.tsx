import React from "react";
import { Building2, ShieldCheck, CheckCircle2, Handshake, TrendingUp, Layers, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SupplierForm from "@/components/SupplierForm";

export const metadata = {
  title: "Partners & Suppliers | AUTOAI LABS",
  description:
    "Partner with AutoAI Labs. We are building the supplier ecosystem for automation, robotics, IoT, sensors, and AI hardware.",
};

export default function PartnersPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-12">
      {/* Hero */}
      <section className="pt-12 sm:pt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/40 border border-sky-800/40 text-sky-300 text-xs font-mono uppercase tracking-widest">
          <Handshake className="w-3.5 h-3.5 text-sky-400" />
          SUPPLIER & DISTRIBUTOR ONBOARDING
        </div>

        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
          Build the future with us.
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
          We&apos;re building a technology ecosystem across automation, robotics, IoT and AI. If your company supplies relevant products or components, we&apos;d like to hear from you.
        </p>
      </section>

      {/* Main Content: Form + Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Why Partner */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
                SUPPLIER BENEFITS
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Why distribute through AutoAI Labs?
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                As robotics, edge AI, and industrial automation converge, traditional component distribution fails to connect hardware with modern software and systems builders.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl glass-panel border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Direct Reach to Systems Engineers</span>
                </div>
                <p className="text-xs text-zinc-400 pl-6 leading-relaxed">
                  Put your components directly into the workflows of robotics startups, system integrators, and industrial engineers.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Standardized Technical Presentation</span>
                </div>
                <p className="text-xs text-zinc-400 pl-6 leading-relaxed">
                  We translate complex datasheets into searchable, structured parameters, CAD integrations, and software driver compatibility matrices.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Transparent Routing Architecture</span>
                </div>
                <p className="text-xs text-zinc-400 pl-6 leading-relaxed">
                  Clear customer fulfillment pipeline: Customer &rarr; AutoAI Labs &rarr; Supplier &rarr; Customer, with verified payment processing.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Zero Unverified Listings</span>
                </div>
                <p className="text-xs text-zinc-400 pl-6 leading-relaxed">
                  We protect our partner brands by rejecting grey-market clones, counterfeit silicon, and unauthorized resellers.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-xs text-zinc-400 space-y-2">
              <div className="font-mono text-zinc-300 uppercase tracking-wider text-[11px] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Foundational Partner Commitment
              </div>
              <p>
                Suppliers who onboard during this early preparation phase receive preferred placement, direct input on catalog schemas, and co-marketing opportunities for public launch.
              </p>
            </div>
          </div>

          {/* Right Column: Supplier Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">
                Supplier Inquiry Application
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Tell us about your organization and component categories. Our partnership team will follow up directly.
              </p>
            </div>

            <SupplierForm />
          </div>

        </div>
      </section>
    </div>
  );
}
