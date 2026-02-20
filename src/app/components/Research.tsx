"use client";

const researchAreas = [
  {
    title: "Smart Contract Vulnerabilities",
    description: "Researching novel attack vectors in DeFi protocols and NFT contracts.",
    status: "Active",
    findings: 12,
  },
  {
    title: "AI Model Safety",
    description: "Red teaming large language models for jailbreaks and prompt injection attacks.",
    status: "Active",
    findings: 8,
  },
  {
    title: "Zero-Knowledge Proofs",
    description: "Auditing ZK circuits and exploring new cryptographic primitives.",
    status: "Ongoing",
    findings: 5,
  },
  {
    title: "Cross-Chain Bridges",
    description: "Analyzing bridge architectures for potential exploit vectors.",
    status: "Active",
    findings: 3,
  },
];

const publications = [
  {
    title: "Breaking DeFi: Common Vulnerabilities in Yield Farming Contracts",
    date: "Jan 2025",
    type: "Whitepaper",
    slug: "breaking-defi-vulnerabilities",
  },
  {
    title: "The State of AI Agents in Blockchain: Security Considerations",
    date: "Dec 2024",
    type: "Research",
    slug: "ai-agents-blockchain",
  },
  {
    title: "Flash Loan Attacks: Prevention and Mitigation Strategies",
    date: "Nov 2024",
    type: "Guide",
    slug: "flash-loan-attacks",
  },
];

export function Research() {
  return (
    <section id="research" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0f0f0f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#dc2626] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Research
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Pushing the Boundaries
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our security researchers are constantly exploring new attack vectors, 
            testing novel defenses, and contributing to the security community.
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="p-6 bg-[#171717] rounded-xl border border-gray-800 hover:border-[#dc2626]/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#dc2626] transition-colors">
                  {area.title}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    area.status === "Active"
                      ? "bg-green-900/30 text-green-400 border border-green-800"
                      : "bg-yellow-900/30 text-yellow-400 border border-yellow-800"
                  }`}
                >
                  {area.status}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{area.description}</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#dc2626] font-semibold">{area.findings}</span>
                <span className="text-gray-500">vulnerabilities discovered</span>
              </div>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="bg-[#171717] rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6">Latest Publications</h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <a
                key={index}
                href={`/blog/${pub.slug}`}
                className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#dc2626]/10 flex items-center justify-center text-[#dc2626]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-[#dc2626] transition-colors">
                      {pub.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{pub.date}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                  {pub.type}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="/blog"
              className="text-[#dc2626] hover:text-[#f87171] font-medium inline-flex items-center gap-2 transition-colors"
            >
              View All Research
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}