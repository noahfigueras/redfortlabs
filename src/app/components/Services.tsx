"use client";

import { useState } from "react";

const services = [
  {
    id: "ai-agents",
    title: "AI Agents",
    subtitle: "Autonomous Intelligence",
    description:
      "Build sophisticated autonomous agents that can reason, plan, and execute complex tasks. From chatbots to autonomous trading systems.",
    features: [
      "Custom LLM Integration",
      "Multi-Agent Systems",
      "Autonomous Workflows",
      "Natural Language Processing",
      "AI Safety & Alignment",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "blockchain",
    title: "Blockchain",
    subtitle: "Decentralized Infrastructure",
    description:
      "End-to-end blockchain development from smart contracts to full dApps. We build secure, scalable, and innovative decentralized solutions.",
    features: [
      "Smart Contract Development",
      "DeFi Protocols",
      "NFT Platforms",
      "Cross-Chain Solutions",
      "Tokenomics Design",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "security",
    title: "Security Research",
    subtitle: "Offensive & Defensive",
    description:
      "Comprehensive security audits and red team operations. We find vulnerabilities before attackers do, protecting your digital assets.",
    features: [
      "Smart Contract Audits",
      "Penetration Testing",
      "Red Team Operations",
      "Vulnerability Research",
      "Incident Response",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<string>("ai-agents");

  return (
    <section id="services" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#dc2626]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#dc2626] text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Three pillars of modern technology, fortified by rigorous research 
            and battle-tested implementations.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeService === service.id
                  ? "bg-[#dc2626]/10 border-[#dc2626] shadow-lg shadow-red-900/20"
                  : "bg-[#171717]/50 border-gray-800 hover:border-gray-700 hover:bg-[#1a1a1a]"
              }`}
              onClick={() => setActiveService(service.id)}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                  activeService === service.id
                    ? "bg-[#dc2626] text-white"
                    : "bg-gray-800 text-gray-400 group-hover:text-[#dc2626] group-hover:bg-gray-700"
                }`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <span className="text-[#dc2626] text-xs font-semibold tracking-wider uppercase mb-2 block">
                {service.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg
                      className="w-5 h-5 text-[#dc2626] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative corner */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 transition-opacity duration-300 ${
                  activeService === service.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#dc2626] rounded-full" />
                <div className="absolute top-4 right-8 w-1 h-1 bg-[#dc2626]/50 rounded-full" />
                <div className="absolute top-8 right-4 w-1 h-1 bg-[#dc2626]/50 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Need a custom solution that spans multiple domains?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626] hover:text-white font-semibold rounded-lg transition-all duration-200"
          >
            Discuss Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}