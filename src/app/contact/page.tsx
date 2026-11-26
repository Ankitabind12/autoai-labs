import React from "react";
import { Mail, MessageSquare, Building2, MapPin, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | AUTOAI LABS",
  description:
    "Get in touch with AutoAI Labs for supplier onboarding, technology collaborations, and general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-12">
      {/* Hero */}
      <section className="pt-12 sm:pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/40 border border-sky-800/40 text-sky-300 text-xs font-mono uppercase tracking-widest">
          <Mail className="w-3.5 h-3.5 text-sky-400" />
          GET IN TOUCH
        </div>

        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
          Contact AutoAI Labs
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
          We welcome inquiries from component suppliers, robotics engineers, automation distributors, technology collaborators, and industry partners.
        </p>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Inquiry Types & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
                CHANNELS & CATEGORIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                How we can collaborate
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                AutoAI Labs is in active pre-launch ecosystem development. Our operational team handles incoming inquiries across four core areas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl glass-panel border border-white/[0.06] space-y-1">
                <div className="text-xs font-mono uppercase text-sky-400">01 // Suppliers & Distributors</div>
                <div className="text-sm font-semibold text-white">Hardware Catalog Onboarding</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  For manufacturers, authorized component representatives, and distributors wishing to list on the AutoAI Labs platform.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/[0.06] space-y-1">
                <div className="text-xs font-mono uppercase text-indigo-400">02 // Technology Collaborations</div>
                <div className="text-sm font-semibold text-white">Engineering & Protocol Integration</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  For robotics software frameworks, ROS2 toolmakers, and edge AI runtime teams interested in ecosystem compatibility.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/[0.06] space-y-1">
                <div className="text-xs font-mono uppercase text-cyan-400">03 // Builders & Early Access</div>
                <div className="text-sm font-semibold text-white">Hardware Procurement Inquiries</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  For robotics startups and automation teams seeking specialized component sourcing assistance prior to public marketplace launch.
                </p>
              </div>
            </div>

            {/* Direct Channel Box */}
            <div className="p-6 rounded-2xl bg-[#0F121A] border border-white/[0.08] space-y-3">
              <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                Primary Contact Channel
              </div>
              <div className="text-base sm:text-lg font-mono text-sky-300 font-medium">
                <a
                  href="mailto:autoa.labs5@gmail.com"
                  className="hover:text-sky-200 underline decoration-sky-500/40 underline-offset-4 transition-colors"
                >
                  autoa.labs5@gmail.com
                </a>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Direct inquiries are answered within 1-2 business days. For supplier catalog submissions, please include company website and product domain.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Fill in the details below and your message will be routed to the appropriate AutoAI Labs department.
              </p>
            </div>

            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}
