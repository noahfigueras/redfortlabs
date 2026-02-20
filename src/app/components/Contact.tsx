"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xgvwgzye", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="text-[#dc2626] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Something
              <span className="gradient-text"> Unbreakable</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Ready to fortify your project? Whether you need a security audit, 
              AI agent development, or blockchain consulting, we&apos;re here to help.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#dc2626]/10 flex items-center justify-center text-[#dc2626]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a href="mailto:info@solus.rocks" className="text-white hover:text-[#dc2626] transition-colors">
                    info@solus.rocks
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#dc2626]/10 flex items-center justify-center text-[#dc2626]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-white">Remote First / Global</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#dc2626]/10 flex items-center justify-center text-[#dc2626]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Response Time</p>
                  <p className="text-white">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#171717] rounded-2xl p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition-all"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition-all"
                    placeholder="Company Inc."
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-agents">AI Agents</option>
                    <option value="blockchain">Blockchain Development</option>
                    <option value="security">Security Audit</option>
                    <option value="research">Security Research</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#dc2626] hover:bg-[#b91c1c] disabled:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-center text-sm">Message sent successfully! We'll get back to you soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center text-sm">Failed to send message. Please try again or email us directly.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
