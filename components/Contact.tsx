"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone, Check, Copy, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "noursalem741@gmail.com";
  const phoneNumber = "+201203917464";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const links = [
    {
      name: "Send an Email",
      label: emailAddress,
      href: `mailto:${emailAddress}`,
      icon: Mail,
    },
    {
      name: "Call / WhatsApp",
      label: phoneNumber,
      href: `tel:${phoneNumber}`,
      icon: Phone,
    },
    {
      name: "LinkedIn Profile",
      label: "in/nour-salem-43a380201",
      href: "https://www.linkedin.com/in/nour-salem-43a380201/",
      icon: LinkedinIcon,
    },
    {
      name: "GitHub Repositories",
      label: "github.com/Noursalem2005",
      href: "https://github.com/Noursalem2005",
      icon: GithubIcon,
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#121514] relative border-t border-[rgba(232,220,203,0.12)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Quick Copy Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase font-mono tracking-[0.2em] text-[#AAA297]"
            >
              GET IN TOUCH
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F2E8DA] font-normal leading-[1.04]"
            >
              LET&apos;S BUILD <br />
              <span className="italic text-[#DDD2C3]">SOMETHING</span> <br />
              INTERESTING.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#AAA297] font-sans font-light max-w-lg leading-relaxed"
            >
              Whether you have a complex backend system to build, microservices to scale, or an engineering role — my inbox is open.
            </motion.p>

            {/* Quick Copy Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#181A18] border border-[rgba(232,220,203,0.2)] hover:border-[#B96F4D] text-xs font-mono text-[#F2E8DA] transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-[#B96F4D]" />
                <span>{emailAddress}</span>
                {copiedEmail ? (
                  <span className="flex items-center gap-1 text-[#707962] font-semibold ml-1">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#AAA297] group-hover:text-[#F2E8DA] transition-colors ml-1" />
                )}
              </button>

              <button
                onClick={handleCopyPhone}
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#181A18] border border-[rgba(232,220,203,0.2)] hover:border-[#707962] text-xs font-mono text-[#F2E8DA] transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-[#707962]" />
                <span>{phoneNumber}</span>
                {copiedPhone ? (
                  <span className="flex items-center gap-1 text-[#707962] font-semibold ml-1">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#AAA297] group-hover:text-[#F2E8DA] transition-colors ml-1" />
                )}
              </button>
            </motion.div>
          </div>

          {/* Right Column: Links */}
          <div className="lg:col-span-5 divide-y divide-[rgba(232,220,203,0.12)] border-y border-[rgba(232,220,203,0.12)]">
            {links.map((link, idx) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group py-4 sm:py-5 flex items-center justify-between hover:bg-[#181A18]/50 px-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-full bg-[#181A18] border border-[rgba(232,220,203,0.15)] text-[#B96F4D]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-serif text-[#F2E8DA] group-hover:text-[#F2E8DA]">
                        {link.name}
                      </div>
                      <div className="text-xs font-mono text-[#AAA297] mt-0.5">{link.label}</div>
                    </div>
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-[#AAA297] group-hover:text-[#F2E8DA] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
