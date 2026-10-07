"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 md:py-36 bg-[#121514] relative border-t border-[rgba(232,220,203,0.12)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-12 sm:mb-16 md:mb-20"
        >
          <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#AAA297]">
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F2E8DA] font-normal">
            A Little About Me.
          </h2>
        </motion.div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Portrait Photograph in Asymmetric Frame */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2.5rem] rounded-tl-[1.5rem] rounded-br-[5rem] overflow-hidden border border-[rgba(232,220,203,0.2)] bg-[#181A18] shadow-2xl group"
            >
              <Image
                src="/images/nour-portrait.jpg"
                alt="Nour Salem"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top filter saturate-[1.05] contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121514] via-transparent to-transparent pointer-events-none opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-xl bg-[#121514]/85 backdrop-blur-md border border-[rgba(232,220,203,0.15)] flex items-center justify-between text-xs font-mono">
                <span className="text-[#F2E8DA] font-serif text-sm">Nour Salem</span>
                <span className="text-[#707962]">Alexandria, Egypt</span>
              </div>
            </motion.div>

            {/* Information Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-[#181A18]/80 border border-[rgba(232,220,203,0.14)] space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#AAA297] block">
                  BASED IN
                </span>
                <span className="text-xs sm:text-sm font-sans font-medium text-[#F2E8DA]">
                  Alexandria, Egypt
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#181A18]/80 border border-[rgba(232,220,203,0.14)] space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#AAA297] block">
                  FOCUS
                </span>
                <span className="text-xs sm:text-sm font-sans font-medium text-[#F2E8DA]">
                  Full Stack / Backend / Systems
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#181A18]/80 border border-[rgba(232,220,203,0.14)] space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#AAA297] block">
                  CURRENTLY
                </span>
                <span className="text-xs sm:text-sm font-sans font-medium text-[#F2E8DA]">
                  Software Engineering
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#181A18]/80 border border-[rgba(232,220,203,0.14)] space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#AAA297] block">
                  AVAILABILITY
                </span>
                <span className="text-xs sm:text-sm font-sans font-medium text-[#B96F4D]">
                  Open for selected projects
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 font-sans font-light">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-serif text-[#F2E8DA] leading-snug"
            >
              Engineering scalable backends, intuitive products, and automated systems.
            </motion.h3>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-[#DDD2C3] leading-relaxed">
              {aboutData.paragraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Philosophy quote */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-5 sm:p-6 rounded-xl bg-[#181A18] border-l-2 border-[#B96F4D] border-y border-r border-[rgba(232,220,203,0.14)] space-y-2 shadow-xl"
            >
              <p className="text-xs sm:text-sm font-serif italic text-[#F2E8DA]">
                &quot;The finest software engineering looks quiet on the surface because all the complexity has been carefully designed into reliable components behind the scenes.&quot;
              </p>
              <p className="text-[11px] font-mono text-[#AAA297] uppercase tracking-wider">
                — Nour Salem
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
