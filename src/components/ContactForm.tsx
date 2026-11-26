"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send, User, Mail, MessageSquare, Briefcase } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Supplier Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl glass-panel p-8 border border-emerald-500/30 bg-[#0C1215] text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-white">Message Logged</h3>
        <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
          Thank you, <span className="text-white font-medium">{formData.name}</span>. Your inquiry regarding <span className="text-sky-400 font-mono text-xs">{formData.subject}</span> has been queued for our team.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "Supplier Inquiry", message: "" });
          }}
          className="mt-2 px-4 py-2 rounded-lg text-xs font-medium text-sky-400 border border-sky-400/30 hover:bg-sky-400/10 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 space-y-4 shadow-xl">
      {error && (
        <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-sky-400" />
          Name <span className="text-sky-400">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your full name"
          className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-sky-400" />
          Email Address <span className="text-sky-400">*</span>
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your.email@domain.com"
          className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
          <Briefcase className="w-3.5 h-3.5 text-sky-400" />
          Inquiry Type
        </label>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#141721] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
        >
          <option value="Supplier Inquiry">Supplier Inquiry</option>
          <option value="Strategic Partnership">Strategic Partnership</option>
          <option value="Technology Collaboration">Technology Collaboration</option>
          <option value="General Business Inquiry">General Business Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
          Message <span className="text-sky-400">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we assist you or collaborate?"
          className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 transition-all shadow-md shadow-sky-500/20 active:scale-95 inline-flex items-center justify-center gap-2"
      >
        {isSubmitting ? <span>Transmitting...</span> : <><span>Send Message</span><Send className="w-3.5 h-3.5" /></>}
      </button>
    </form>
  );
}
