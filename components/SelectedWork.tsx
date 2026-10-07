"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";
import ProjectModal from "./ProjectModal";

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-28 md:py-36 bg-[#121514] relative border-t border-[rgba(232,220,203,0.12)]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#B96F4D]/10 via-[#707962]/05 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-3"
          >
            <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#AAA297] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B96F4D]" />
              KEY ENGINEERING PROJECTS
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F2E8DA] font-normal">
              Projects I&apos;m Proud Of.
            </h2>
            <div className="w-full h-[1px] bg-[rgba(232,220,203,0.15)] mt-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 flex flex-col justify-end md:text-right relative"
          >
            <p className="text-sm font-sans text-[#DDD2C3] font-light leading-relaxed">
              Real-world distributed systems, payment microservices, financial execution engines, and WebRTC telemetry APIs built for production.
            </p>
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer p-6 sm:p-8 rounded-2xl bg-[#181A18]/80 border border-[rgba(232,220,203,0.16)] hover:border-[#B96F4D]/60 hover:bg-[#181A18] transition-all duration-400 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-2xl hover:shadow-[#B96F4D]/10"
            >
              {/* Card Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#B96F4D] px-2.5 py-1 bg-[#121514] rounded-full border border-[rgba(232,220,203,0.15)]">
                    {project.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#707962]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#F2E8DA] group-hover:text-[#F2E8DA] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#DDD2C3] font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Visual Preview Graphic Box */}
              <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-[rgba(232,220,203,0.12)]">
                <ProjectVisual projectId={project.id} variant="preview" />
              </div>

              {/* Card Footer: Technologies & Click CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(232,220,203,0.1)]">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-[#AAA297] bg-[#121514] px-2.5 py-1 rounded-full border border-[rgba(232,220,203,0.15)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F2E8DA] group-hover:text-[#B96F4D] transition-colors">
                  <span>VIEW SPECS &amp; STATS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
