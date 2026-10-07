"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Download, FileText, Briefcase, GraduationCap, Code } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#121514]/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#181A18] border border-[rgba(232,220,203,0.2)] rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
          >
            {/* Header bar */}
            <div className="px-6 py-4 bg-[#121514] border-b border-[rgba(232,220,203,0.14)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#B96F4D]" />
                <span className="font-serif text-base text-[#F2E8DA] tracking-wider uppercase">
                  NOUR SALEM — RESUME / CV
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download="Nour_Salem_CV.pdf"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#121514] bg-[#F2E8DA] hover:bg-[#DDD2C3] px-3.5 py-1.5 rounded-full font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>

                <button
                  onClick={onClose}
                  className="p-1.5 text-[#DDD2C3] hover:text-[#F2E8DA] bg-[#181A18] hover:bg-[#202422] rounded border border-[rgba(232,220,203,0.15)] transition-colors focus:outline-none"
                  aria-label="Close resume preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-10 space-y-8 max-h-[78vh] overflow-y-auto font-sans">
              
              {/* Summary */}
              <div className="space-y-3 pb-6 border-b border-[rgba(232,220,203,0.12)]">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#F2E8DA]">
                      Nour Kamal Ahmed (Nour Salem)
                    </h2>
                    <p className="text-xs font-mono text-[#707962] uppercase tracking-wider mt-1">
                      Backend Software Engineer · Alexandria, Egypt
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/nour-salem-43a380201/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#B96F4D] hover:underline"
                  >
                    LinkedIn Profile <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-[#DDD2C3] leading-relaxed font-light">
                  Backend Software Engineer with practical experience designing distributed architectures, asynchronous message pipelines, and high-throughput APIs. Proficient in Node.js, NestJS, and message brokering using RabbitMQ and Redis. Experienced in relational schema modeling with Prisma, query indexing, and automated testing with Jest.
                </p>
              </div>

              {/* Technical Skills Summary */}
              <div className="space-y-3 pb-6 border-b border-[rgba(232,220,203,0.12)]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#707962] tracking-widest font-semibold">
                  <Code className="w-4 h-4 text-[#707962]" />
                  Technical Stack Breakdown
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#DDD2C3]">
                  <div><span className="font-semibold text-[#F2E8DA]">Core Backend:</span> Node.js, Express.js, NestJS, RESTful APIs, gRPC, RabbitMQ, Microservices</div>
                  <div><span className="font-semibold text-[#F2E8DA]">Databases &amp; ORM:</span> PostgreSQL, Prisma, MongoDB, Mongoose, Redis</div>
                  <div><span className="font-semibold text-[#F2E8DA]">Frontend Support:</span> React.js, Next.js, TypeScript, Tailwind CSS, Redux Toolkit</div>
                  <div><span className="font-semibold text-[#F2E8DA]">Testing &amp; DevOps:</span> Jest, Docker, Git, GitHub Actions, Azure, Vercel</div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#B96F4D] tracking-widest font-semibold">
                  <Briefcase className="w-4 h-4 text-[#B96F4D]" />
                  Professional Experience
                </div>

                <div className="space-y-6 divide-y divide-[rgba(232,220,203,0.1)]">
                  {/* Job 1 */}
                  <div className="pt-4 first:pt-0 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                      <span className="font-semibold text-[#F2E8DA]">
                        Backend Developer Intern · I-Fikra
                      </span>
                      <span className="text-xs font-mono text-[#AAA297]">
                        Aug 2026 – Present
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-[#DDD2C3] font-light space-y-1.5">
                      <li>Engineer backend modules and internal microservices using Node.js, Express.js, and NestJS for high-scale enterprise systems.</li>
                      <li>Build RESTful endpoints and supporting frontend services for internal administrative dashboards using Next.js &amp; React.</li>
                      <li>Implement gRPC service-to-service communication layers to reduce serialization overhead between internal services.</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="pt-4 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                      <span className="font-semibold text-[#F2E8DA]">
                        Backend Engineer (Freelance) · Upwork (Remote)
                      </span>
                      <span className="text-xs font-mono text-[#AAA297]">
                        Nov 2025 – Present
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-[#DDD2C3] font-light space-y-1.5">
                      <li>Built server-side infrastructure and trading strategy execution APIs backed by Python and Node.js microservices.</li>
                      <li>Integrated transactional payment webhooks and balance verification logic for digital strategy purchases.</li>
                      <li>Enforced schema validation, rate limiting, and role-based authorization (RBAC) rules.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="pt-6 border-t border-[rgba(232,220,203,0.12)] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#707962] tracking-widest font-semibold">
                  <GraduationCap className="w-4 h-4 text-[#707962]" />
                  Education
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-[#F2E8DA]">
                  <div>
                    <span className="font-medium">B.Sc. Computer Science (Data Science Major)</span>
                    <span className="text-[#AAA297] block sm:inline sm:ml-2">Alexandria University</span>
                  </div>
                  <span className="font-mono text-xs text-[#AAA297]">Expected 2027</span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[rgba(232,220,203,0.12)] flex flex-wrap gap-4 items-center justify-between">
                <a
                  href="/resume.pdf"
                  download="Nour_Salem_CV.pdf"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#121514] bg-[#F2E8DA] hover:bg-[#DDD2C3] px-5 py-2.5 rounded-full font-semibold transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Full PDF Resume
                </a>

                <button
                  onClick={onClose}
                  className="text-xs font-mono text-[#AAA297] hover:text-[#F2E8DA] transition-colors"
                >
                  Close Resume [ESC]
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
