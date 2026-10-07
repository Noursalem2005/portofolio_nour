"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if preloader already ran in this session to avoid annoying returning users
    const hasLoaded = sessionStorage.getItem("preloader_loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("preloader_loaded", "true");
          }, 300);
          return 100;
        }
        return prev + 12;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#121514] flex flex-col items-center justify-center p-6 text-[#F2E8DA]"
        >
          {/* Central Logo & Progress */}
          <div className="flex flex-col items-center space-y-6 max-w-sm w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-2"
            >
              <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.2em] uppercase">
                NOUR SALEM
              </h1>
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#707962] uppercase">
                BACKEND SOFTWARE ENGINEER
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full h-[2px] bg-[rgba(232,220,203,0.12)] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-[#B96F4D]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Percentage Indicator */}
            <div className="flex items-center justify-between w-full font-mono text-[10px] text-[#AAA297] tracking-widest">
              <span>LOADING EXPERIENCE</span>
              <span className="text-[#B96F4D]">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
