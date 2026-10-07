"use client";

import React from "react";
import { motion } from "motion/react";
import { skillGroups, featuredSkills } from "@/data/skills";
import { Cpu, Terminal } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-[#121514] relative border-t border-[rgba(232,220,203,0.12)]">
      {/* Background Soft Glow */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-radial from-[#707962]/10 via-[#B96F4D]/05 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#AAA297] flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#B96F4D]" />
              TECHNICAL SKILLS &amp; ARCHITECTURE
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F2E8DA] font-normal">
              I Work With.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm font-sans text-[#DDD2C3] font-light max-w-md"
          >
            Core backend frameworks, message brokers, real-time location telemetry, ORMs, cloud infrastructure, and security standards.
          </motion.p>
        </div>

        {/* Featured Skills Pills Flow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2.5 mb-16"
        >
          {featuredSkills.map((skill) => (
            <span
              key={skill.name}
              className="text-xs font-mono text-[#F2E8DA] bg-[#181A18] px-3.5 py-1.5 rounded-full border border-[rgba(232,220,203,0.18)] shadow-md hover:border-[#B96F4D] transition-colors"
            >
              <span className="text-[#B96F4D] mr-1.5">●</span>
              {skill.name}
            </span>
          ))}
        </motion.div>

        {/* Detailed Categorized Skill Blueprint Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
              className="p-6 rounded-2xl bg-[#181A18]/80 border border-[rgba(232,220,203,0.14)] hover:border-[#707962]/50 transition-all duration-300 space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(232,220,203,0.12)]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F2E8DA] uppercase tracking-wider font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-[#B96F4D]" />
                  {group.category}
                </div>
              </div>

              <p className="text-xs text-[#AAA297] font-sans font-light leading-relaxed">
                {group.description}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-2.5 rounded-lg bg-[#121514] border border-[rgba(232,220,203,0.12)] text-xs flex flex-col justify-between"
                  >
                    <span className="font-mono font-medium text-[#F2E8DA]">{item.name}</span>
                    <span className="text-[10px] font-mono text-[#707962] mt-1">{item.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
