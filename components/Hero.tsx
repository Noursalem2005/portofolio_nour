"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Play, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#121514] w-full max-w-full"
    >
      {/* Golden Bokeh Background & Atmospheric Light Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none max-w-full">
        {/* Full-width blurred background for golden bokeh lighting */}
        <Image
          src="/images/nour-portrait.jpg"
          alt="Glowing Golden Atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter blur-3xl scale-125 brightness-[0.25] saturate-[1.2] opacity-50"
        />

        {/* Golden Tonal Light Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] h-[550px] bg-radial from-[#B96F4D]/25 via-[#707962]/12 to-transparent blur-3xl opacity-80" />
        <div className="absolute bottom-10 right-0 w-[80vw] max-w-[500px] h-[450px] bg-radial from-[#D48C6A]/15 via-transparent to-transparent blur-3xl opacity-60" />

        {/* Multi-layered dark vignetting */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121514]/90 via-[#121514]/65 to-[#121514]" />
      </div>

      {/* Main Composition Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 w-full max-w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 relative">
        
        {/* Left Column: Headline & Backend Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-7 relative z-20 w-full max-w-full">
          
          {/* Section Indicator */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs font-mono text-[#AAA297]"
          >
            <span className="text-[#F2E8DA] font-semibold">01</span>
            <span className="uppercase text-[10px] tracking-[0.2em] text-[#707962]">
              SOFTWARE ENGINEER · DISTRIBUTED SYSTEMS
            </span>
          </motion.div>

          {/* Micro Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2 text-xs uppercase font-mono tracking-[0.25em] text-[#AAA297]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B96F4D]"></span>
            <span>ALEXANDRIA, EGYPT</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-1 w-full"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif text-[#F2E8DA] font-normal leading-[1.05] tracking-tight break-words">
              I ARCHITECT <br />
              BACKEND SYSTEMS THAT <br />
              <span className="font-serif italic font-normal text-copper-gradient">
                SCALE BEYOND DEMOS.
              </span>
            </h1>
          </motion.div>

          {/* Backend Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xs sm:text-base md:text-lg text-[#DDD2C3] font-sans font-light max-w-lg leading-relaxed"
          >
            Backend Software Engineer specializing in distributed architectures, message queues, APIs, and automated cloud infrastructure.
          </motion.p>

          {/* Understated Editorial Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3 sm:gap-6 pt-1 w-full"
          >
            <Link
              href="#work"
              className="group inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.15em] text-[#F2E8DA] bg-transparent border border-[rgba(232,220,203,0.3)] px-5 sm:px-6 py-3.5 rounded hover:border-[#B96F4D] hover:bg-[#181A18] transition-all duration-300 shadow-lg"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowUpRight className="w-4 h-4 text-[#B96F4D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.15em] text-[#DDD2C3] hover:text-[#F2E8DA] transition-colors"
            >
              <span className="w-8 h-8 rounded-full border border-[rgba(232,220,203,0.3)] flex items-center justify-center text-[#B96F4D] group-hover:border-[#B96F4D] transition-colors">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </span>
              <span>GET IN TOUCH</span>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-4 flex items-center gap-3 text-[10px] font-mono tracking-[0.2em] text-[#AAA297] uppercase"
          >
            <span>SCROLL TO EXPLORE ↓</span>
          </motion.div>
        </div>

        {/* Right / Background Layered Column: Clean Handcrafted Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-4 lg:mt-0 w-full max-w-full">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[280px] sm:max-w-sm aspect-[4/5] group"
          >
            {/* Handcrafted Golden SVG Border Outline with subtle low glow */}
            <div className="absolute -inset-2 sm:-inset-3 pointer-events-none z-10 opacity-80 overflow-hidden filter drop-shadow-[0_0_3px_rgba(185,111,77,0.2)]">
              <svg className="w-full h-full" viewBox="0 0 320 400" fill="none">
                <path
                  d="M20,10 Q160,-15 300,20 Q330,200 300,380 Q160,415 20,380 Q-10,200 20,10 Z"
                  stroke="#B96F4D"
                  strokeWidth="1.5"
                />
                <circle cx="300" cy="20" r="4" fill="#B96F4D" />
                <circle cx="20" cy="380" r="4" fill="#707962" />
              </svg>
            </div>

            {/* Faint Focused Golden Accent Glow Around Photo */}
            <div className="absolute -inset-1 sm:-inset-1.5 bg-[#B96F4D]/10 blur-sm rounded-[2.5rem] sm:rounded-[3.5rem] rounded-tl-[1.5rem] rounded-br-[4.5rem] sm:rounded-br-[6rem] -z-10" />

            {/* Soft Ambient Backlight Glow */}
            <div className="absolute -inset-4 sm:-inset-6 bg-radial from-[#B96F4D]/20 via-transparent to-transparent blur-3xl -z-20 rounded-full" />

            {/* Organic Container */}
            <div className="relative w-full h-full rounded-[2.5rem] sm:rounded-[3.5rem] rounded-tl-[1.5rem] rounded-br-[4.5rem] sm:rounded-br-[6rem] overflow-hidden bg-[#181A18] border-2 border-[#B96F4D]/25 shadow-[0_0_12px_rgba(185,111,77,0.08)]">
              <Image
                src="/images/nour-portrait.jpg"
                alt="Nour Salem — Software Engineer"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-cover object-top filter saturate-[1.08] contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
              />

              {/* Multi-Directional Vignette Fading Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121514] via-[#121514]/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#121514]/60 via-transparent to-transparent pointer-events-none lg:hidden" />
              <div className="absolute inset-0 bg-radial from-transparent via-[#121514]/10 to-[#121514]/40 pointer-events-none" />
              
              {/* Inner Accent Ring */}
              <div className="absolute inset-0 border border-[#B96F4D]/30 rounded-[2.5rem] sm:rounded-[3.5rem] rounded-tl-[1.5rem] rounded-br-[4.5rem] sm:rounded-br-[6rem] pointer-events-none" />
            </div>

            {/* Floating Handwritten Signature Accent: Nour Salem */}
            <div className="absolute -bottom-4 left-2 sm:left-6 z-20">
              <span className="font-handwritten text-2xl sm:text-4xl text-[#F2E8DA] drop-shadow-lg">
                Nour Salem
              </span>
            </div>

            {/* Floating Circle Badge: SOFTWARE ENGINEER */}
            <div className="absolute top-4 right-0 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#121514]/90 backdrop-blur-md border border-[#B96F4D]/60 flex items-center justify-center text-center p-1.5 sm:p-2 shadow-2xl z-20">
              <span className="text-[8px] sm:text-[9px] font-mono text-[#DDD2C3] uppercase tracking-wider leading-tight">
                Software <br /> Engineer
              </span>
            </div>

            {/* Location Badge */}
            <div className="absolute -bottom-4 right-0 sm:right-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#121514]/95 backdrop-blur-md border border-[rgba(232,220,203,0.2)] rounded-lg text-[9px] sm:text-[10px] font-mono text-[#AAA297] uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 shadow-xl z-20">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B96F4D]" />
              <div>
                <span className="text-[7px] sm:text-[8px] text-[#707962] block">BASED IN</span>
                <span className="text-[#F2E8DA] font-medium">ALEXANDRIA, EG</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
