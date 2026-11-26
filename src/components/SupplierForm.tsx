"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send, Building2, User, Mail, Phone, Globe, Tag, MessageSquare } from "lucide-react";

const productCategories = [
  "Automation",
  "Robotics",
  "Sensors",
  "IoT",
  "AI Hardware",
  "Electronic Components",
  "Other",
];

export default function SupplierForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    businessEmail: "",
    phoneNumber: "",
    website: "",
    category: "Automation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.companyName.trim() || !formData.contactPerson.trim() || !formData.businessEmail.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields (Company, Contact Person, Business Email, and Message).");
      return;
    }

    if (!formData.businessEmail.includes("@") || !formData.businessEmail.includes(".")) {
      setError("Please enter a valid business email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/autoa.labs5@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          companyName: formData.companyName,
          contactPerson: formData.contactPerson,
          email: formData.businessEmail,
          _replyto: formData.businessEmail,
          phoneNumber: formData.phoneNumber || "Not provided",
          website: formData.website || "Not provided",
          productCategory: formData.category,
          _subject: `[AUTOAI LABS Supplier] ${formData.companyName} (${formData.category})`,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
    } catch {
      setError("Could not send automatically right now. Please email us directly at autoa.labs5@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl glass-panel p-8 sm:p-10 border border-emerald-500/30 bg-[#0C1215] text-center space-y-4 shadow-xl">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-white">Inquiry Received</h3>
        <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="text-white font-medium">{formData.contactPerson}</span> from <span className="text-white font-medium">{formData.companyName}</span>. Your supplier onboarding inquiry for the <span className="text-sky-400 font-mono text-xs">{formData.category}</span> category has been sent to <span className="text-sky-300 font-mono text-xs">autoa.labs5@gmail.com</span>.
        </p>
        <p className="text-xs text-zinc-500 font-mono pt-2">
          NOTE: Our partnership team reviews all submissions as supplier agreements and product categorization are prepared for the platform launch.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              companyName: "",
              contactPerson: "",
              businessEmail: "",
              phoneNumber: "",
              website: "",
              category: "Automation",
              message: "",
            });
          }}
          className="mt-4 px-4 py-2 rounded-lg text-xs font-medium text-sky-400 border border-sky-400/30 hover:bg-sky-400/10 transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 space-y-5 shadow-2xl">
      {error && (
        <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Company Name */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            Company Name <span className="text-sky-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Apex Industrial Systems"
            className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
          />
        </div>

        {/* Contact Person */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-sky-400" />
            Contact Person <span className="text-sky-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.contactPerson}
            onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
            placeholder="Full Name"
            className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Business Email */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            Business Email <span className="text-sky-400">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.businessEmail}
            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
            placeholder="corporate@company.com"
            className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="+1 (555) 000-0000"
            className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Website */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            Company Website
          </label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            placeholder="https://company.com"
            className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
          />
        </div>

        {/* Product Category */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-sky-400" />
            Product Category <span className="text-sky-400">*</span>
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#141721] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
          >
            {productCategories.map((cat) => (
              <option key={cat} value={cat} className="bg-[#141721] text-white">
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
          Message & Component Details <span className="text-sky-400">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe the hardware, components, or systems your company manufactures or distributes..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[11px] text-zinc-500 font-mono">
          SUPPLIER INQUIRY &bull; PRE-LAUNCH REVIEW
        </span>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 transition-all shadow-md shadow-sky-500/20 active:scale-95 inline-flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span>Processing...</span>
          ) : (
            <>
              <span>Start a Conversation</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
