"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Work", href: "#work", id: "work" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section Scroll Detection
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#121514]/90 backdrop-blur-md py-4 border-b border-[rgba(232,220,203,0.12)] shadow-xl shadow-black/40"
            : "bg-transparent py-5 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand Name */}
          <Link
            href="#hero"
            className="font-serif text-base sm:text-lg md:text-xl font-normal tracking-[0.18em] text-[#F2E8DA] hover:text-[#DDD2C3] transition-colors uppercase"
          >
            NOUR SALEM
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-sans font-light tracking-wide text-[#DDD2C3]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors relative py-1 group ${
                    isActive ? "text-[#F2E8DA] font-medium" : "hover:text-[#F2E8DA]"
                  }`}
                >
                  {link.name}
                  {isActive ? (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#B96F4D] rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B96F4D] transition-all duration-300 group-hover:w-full"></span>
                  )}
                </Link>
              );
            })}

            {/* Resume Action */}
            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-sans tracking-wider text-[#F2E8DA] px-4 py-1.5 rounded-full border border-[rgba(232,220,203,0.22)] hover:border-[#B96F4D] hover:bg-[#181A18] transition-all duration-300 ml-2 focus:outline-none"
            >
              Resume
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B96F4D]" />
            </button>
          </nav>

          {/* Mobile menu toggle button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-1 text-[11px] tracking-wider text-[#F2E8DA] px-3 py-1 rounded-full border border-[rgba(232,220,203,0.2)]"
            >
              Resume
              <ArrowUpRight className="w-3 h-3 text-[#B96F4D]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#F2E8DA] p-1.5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#121514] border-b border-[rgba(232,220,203,0.15)] px-6 py-6"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-serif transition-colors flex items-center justify-between ${
                        isActive ? "text-[#B96F4D]" : "text-[#F2E8DA] hover:text-[#B96F4D]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#B96F4D]"></span>}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}
