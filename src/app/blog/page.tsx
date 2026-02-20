"use client";

import { useState } from "react";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

const blogPosts = [
  {
    slug: "breaking-defi-vulnerabilities",
    title: "Breaking DeFi: Common Vulnerabilities in Yield Farming Contracts",
    date: "January 15, 2025",
    type: "Whitepaper",
    excerpt: "An in-depth analysis of the most common vulnerabilities found in DeFi yield farming protocols and how to mitigate them.",
    readTime: "12 min read",
  },
  {
    slug: "ai-agents-blockchain",
    title: "The State of AI Agents in Blockchain: Security Considerations",
    date: "December 8, 2024",
    type: "Research",
    excerpt: "Exploring the security implications of AI agents interacting with blockchain systems and smart contracts.",
    readTime: "8 min read",
  },
  {
    slug: "flash-loan-attacks",
    title: "Flash Loan Attacks: Prevention and Mitigation Strategies",
    date: "November 22, 2024",
    type: "Guide",
    excerpt: "A comprehensive guide to understanding flash loan attacks and implementing effective defenses.",
    readTime: "10 min read",
  },
  {
    slug: "smart-contract-auditing-guide",
    title: "Smart Contract Auditing: A Comprehensive Guide",
    date: "October 5, 2024",
    type: "Guide",
    excerpt: "Best practices for conducting thorough smart contract audits and identifying critical vulnerabilities.",
    readTime: "15 min read",
  },
  {
    slug: "zero-knowledge-proofs-intro",
    title: "Introduction to Zero-Knowledge Proofs in Blockchain",
    date: "September 18, 2024",
    type: "Research",
    excerpt: "Understanding ZK proofs and their applications in enhancing blockchain privacy and scalability.",
    readTime: "14 min read",
  },
  {
    slug: "cross-chain-bridge-security",
    title: "Cross-Chain Bridge Security: Analyzing Attack Vectors",
    date: "August 30, 2024",
    type: "Research",
    excerpt: "A technical analysis of bridge vulnerabilities and the most common exploitation techniques.",
    readTime: "11 min read",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#dc2626] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Research & Insights
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Stay updated with the latest security research, vulnerability disclosures, 
              and insights from our team of experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-[#171717] rounded-xl border border-gray-800 hover:border-[#dc2626]/30 transition-all duration-300 group p-6 block"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#dc2626]/10 text-[#dc2626] text-xs rounded-full">
                    {post.type}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-[#dc2626] transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
