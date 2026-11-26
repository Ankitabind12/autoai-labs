import React from "react";
import Link from "next/link";
import { Cpu, ArrowLeft, Home, Layers, Handshake, HelpCircle } from "lucide-react";

export const metadata = {
  title: "404 - Node Not Found | AUTOAI LABS",
  description: "The requested route or hardware node does not exist in the AutoAI Labs ecosystem.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 text-center space-y-6 shadow-2xl relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-sky-500/10 blur-[60px] pointer-events-none" />

        <div className="w-14 h-14 rounded-2xl bg-sky-500/15 border border-sky-400/30 text-sky-400 flex items-center justify-center mx-auto">
          <Cpu className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest">
            ERROR 404 // UNRESOLVED NODE
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Node Not Found
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            The route or hardware endpoint you requested does not exist or has been relocated within the AutoAI Labs architecture.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            href="/"
            className="w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 transition-all shadow-md shadow-sky-500/20 inline-flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/solutions"
            className="w-full px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all inline-flex items-center justify-center gap-2"
          >
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span>Explore Solutions</span>
          </Link>

          <Link
            href="/partners"
            className="w-full px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all inline-flex items-center justify-center gap-2"
          >
            <Handshake className="w-3.5 h-3.5 text-sky-400" />
            <span>Supplier Network</span>
          </Link>
        </div>

        <div className="pt-2 text-[10px] font-mono text-zinc-500">
          SYS_STATUS // AUTOAI PLATFORM ACTIVE
        </div>
      </div>
    </div>
  );
}
