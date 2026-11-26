import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-75" />

      {/* Atmospheric radial glows */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-sky-500/10 via-indigo-600/5 to-transparent blur-[120px] rounded-full" />
      <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] rounded-full" />
      <div className="absolute top-[65%] -right-[10%] w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full" />

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_10%,transparent_0%,#08090C_85%)]" />
    </div>
  );
}
