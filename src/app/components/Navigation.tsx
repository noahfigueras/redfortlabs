"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LogoWithText } from "./Logo";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (href: string) => {
    if (href.startsWith("#") && !isHomePage) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href={isHomePage ? "#" : "/"} className="hover:opacity-90 transition-opacity">
            <LogoWithText iconSize={36} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={getHref(item.href)}
                className="text-gray-300 hover:text-[#dc2626] transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              href={getHref("#contact")}
              className="px-5 py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={getHref(item.href)}
                  className="text-gray-300 hover:text-[#dc2626] transition-colors duration-200 text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={getHref("#contact")}
                className="px-5 py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-medium rounded-lg transition-all duration-200 text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}