"use client";

import { useEffect, useRef } from "react";
import { Logo } from "./Logo";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Matrix-like rain effect with red accents
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = new Array(columns).fill(1);
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    let animationId: number;
    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = "14px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const isRed = Math.random() > 0.95;
        ctx.fillStyle = isRed ? "#dc2626" : "#333";
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      
      {/* Red glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#dc2626]/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#dc2626]/20 to-transparent border border-[#dc2626]/30">
            <Logo size={80} />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white">Building</span>{" "}
          <span className="gradient-text">Unbreakable</span>
          <br />
          <span className="text-white">Digital Fortresses</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          RedFortLabs specializes in cutting-edge AI agents, blockchain technology, 
          and offensive security research. We fortify the future of decentralized systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#services"
            className="px-8 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-gray-700 hover:border-[#dc2626] text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-200"
          >
            Start a Project
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: "50+", label: "Security Audits" },
            { value: "100+", label: "Smart Contracts" },
            { value: "0", label: "Breaches" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#dc2626] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}