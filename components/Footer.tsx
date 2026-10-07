"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 md:py-12 bg-[#121514] border-t border-[rgba(232,220,203,0.12)] text-xs font-mono text-[#AAA297]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-serif text-sm text-[#F2E8DA] tracking-widest uppercase">
            NOUR SALEM
          </span>
          <span className="hidden sm:inline text-[rgba(232,220,203,0.2)]">|</span>
          <span className="uppercase text-[10px] tracking-wider text-[#707962]">BACKEND SOFTWARE ENGINEER</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-wider text-[#DDD2C3]">
          <a
            href="https://github.com/Noursalem2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F2E8DA] transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/nour-salem-43a380201/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F2E8DA] transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:noursalem741@gmail.com"
            className="hover:text-[#F2E8DA] transition-colors"
          >
            EMAIL
          </a>
        </div>

        {/* Right Scroll to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span>&copy; {new Date().getFullYear()}</span>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 text-[#DDD2C3] hover:text-[#F2E8DA] transition-colors focus:outline-none"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B96F4D] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
