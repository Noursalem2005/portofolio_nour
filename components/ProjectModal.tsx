"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, CheckCircle2, Cpu, BarChart3, Target } from "lucide-react";
import { Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
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
            <div className="px-6 py-5 bg-[#121514] border-b border-[rgba(232,220,203,0.14)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#B96F4D] px-2.5 py-1 bg-[#181A18] rounded border border-[rgba(232,220,203,0.15)]">
                  {project.number}
                </span>
                <span className="font-mono text-xs uppercase text-[#AAA297] tracking-widest">
                  {project.category}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 text-[#DDD2C3] hover:text-[#F2E8DA] bg-[#181A18] hover:bg-[#202422] rounded border border-[rgba(232,220,203,0.15)] transition-colors focus:outline-none"
                aria-label="Close project preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content area */}
            <div className="p-6 md:p-10 space-y-8 max-h-[80vh] overflow-y-auto">
              {/* Title & Tagline */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F2E8DA]">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-[#DDD2C3] font-sans mt-2 font-light">
                  {project.tagline}
                </p>
              </div>

              {/* Stats Metrics Grid */}
              {project.stats && project.stats.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#121514] border border-[rgba(232,220,203,0.14)] space-y-1"
                    >
                      <div className="text-[10px] font-mono uppercase text-[#AAA297] flex items-center gap-1.5">
                        <BarChart3 className="w-3.5 h-3.5 text-[#B96F4D]" />
                        {stat.label}
                      </div>
                      <div className="text-base sm:text-lg font-serif font-semibold text-[#F2E8DA]">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Interactive Visual Graphic */}
              <div className="w-full min-h-[240px] md:min-h-[300px]">
                <ProjectVisual projectId={project.id} variant="detail" />
              </div>

              {/* Project Purpose & Engineering Rationale */}
              {project.purpose && (
                <div className="p-5 bg-[#121514] rounded-xl border border-[rgba(232,220,203,0.14)] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#B96F4D] tracking-wider font-semibold">
                    <Target className="w-4 h-4 text-[#B96F4D]" />
                    Design Purpose &amp; Problem Solved
                  </div>
                  <p className="text-sm text-[#DDD2C3] leading-relaxed font-sans font-light">
                    {project.purpose}
                  </p>
                </div>
              )}

              {/* Technologies list */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-widest text-[#AAA297] mb-3">
                  Technologies &amp; Microservices Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-[#F2E8DA] bg-[#121514] px-3 py-1.5 rounded-full border border-[rgba(232,220,203,0.15)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overview */}
              <div className="space-y-4 text-sm sm:text-base text-[#DDD2C3] leading-relaxed font-sans font-light">
                <h3 className="text-xs uppercase font-mono tracking-widest text-[#AAA297]">
                  Detailed Architecture Overview
                </h3>
                <p>{project.longDescription}</p>
              </div>

              {/* Architecture breakdown if available */}
              {project.architecture && (
                <div className="p-5 bg-[#121514] rounded-xl border border-[rgba(232,220,203,0.14)] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#707962] tracking-wider">
                    <Cpu className="w-4 h-4 text-[#707962]" />
                    System Component Breakdown
                  </div>
                  <p className="text-sm text-[#DDD2C3] leading-relaxed font-light">
                    {project.architecture.overview}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    {project.architecture.components.map((comp, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#181A18] rounded border border-[rgba(232,220,203,0.12)] text-xs"
                      >
                        <div className="font-semibold text-[#F2E8DA] font-mono mb-1">
                          {comp.title}
                        </div>
                        <div className="text-[#AAA297] leading-normal font-light">{comp.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-widest text-[#AAA297] mb-3">
                  Technical Highlights &amp; Accomplishments
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#F2E8DA]">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#707962] shrink-0 mt-0.5" />
                      <span className="text-[#DDD2C3] font-light">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links & Actions */}
              <div className="pt-4 border-t border-[rgba(232,220,203,0.15)] flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase font-mono text-[#F2E8DA] bg-[#121514] hover:bg-[#202422] px-4 py-2.5 rounded-full border border-[rgba(232,220,203,0.2)] transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 text-[#B96F4D]" />
                      GitHub Repository
                    </a>
                  )}

                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase font-mono font-semibold text-[#121514] bg-[#F2E8DA] hover:bg-[#DDD2C3] px-4 py-2.5 rounded-full transition-colors"
                    >
                      Live Project
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="text-xs font-mono text-[#AAA297] hover:text-[#F2E8DA] transition-colors"
                >
                  Close Preview [ESC]
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
