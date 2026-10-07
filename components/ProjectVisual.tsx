"use client";

import React from "react";

interface ProjectVisualProps {
  projectId: string;
  className?: string;
  variant?: "preview" | "detail";
}

export default function ProjectVisual({
  projectId,
  className = "",
  variant = "preview",
}: ProjectVisualProps) {
  const baseClasses = `relative w-full h-full min-h-[220px] bg-[#181A18] rounded-xl overflow-hidden border border-[rgba(232,220,203,0.18)] flex flex-col ${className}`;

  if (projectId === "virtualqueue") {
    return (
      <div className={baseClasses}>
        {/* Top Window Bar */}
        <div className="h-7 bg-[#121514] px-3 border-b border-[rgba(232,220,203,0.15)] flex items-center justify-between">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B96F4D]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#DDD2C3]/40"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#707962]/40"></span>
          </div>
          <span className="text-[10px] font-mono text-[#AAA297] tracking-wider">
            virtualqueue.internal // Worker Cluster
          </span>
          <span className="text-[10px] font-mono text-[#707962] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#707962] animate-pulse"></span>
            RabbitMQ Active
          </span>
        </div>

        {/* System Dashboard Ticker */}
        <div className="p-4 flex-1 flex flex-col justify-between space-y-3 font-mono text-xs">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-[#121514] p-2 rounded border border-[rgba(232,220,203,0.12)]">
              <div className="text-[9px] text-[#AAA297] uppercase">Throughput</div>
              <div className="text-sm sm:text-base font-bold text-[#F2E8DA] mt-0.5">10,480 req/s</div>
              <div className="text-[9px] text-[#707962]">RabbitMQ Brokered</div>
            </div>
            <div className="bg-[#121514] p-2 rounded border border-[rgba(232,220,203,0.12)]">
              <div className="text-[9px] text-[#AAA297] uppercase">Pub/Sub Cache</div>
              <div className="text-sm sm:text-base font-bold text-[#B96F4D] mt-0.5">Redis Cached</div>
              <div className="text-[9px] text-[#DDD2C3]">&lt; 2.4ms Sync</div>
            </div>
            <div className="bg-[#121514] p-2 rounded border border-[rgba(232,220,203,0.12)]">
              <div className="text-[9px] text-[#AAA297] uppercase">Worker Pool</div>
              <div className="text-sm sm:text-base font-bold text-[#F2E8DA] mt-0.5">Bull Queue</div>
              <div className="text-[9px] text-[#707962]">0 Race Conditions</div>
            </div>
          </div>

          {/* Flow Architecture Diagram */}
          <div className="bg-[#121514] p-3 rounded-lg border border-[rgba(232,220,203,0.14)] flex items-center justify-between text-[10px]">
            <div className="px-2 py-1 bg-[#181A18] rounded border border-[#707962]/40 text-[#F2E8DA]">
              Ingestion API (NestJS)
            </div>
            <div className="h-0.5 w-5 bg-gradient-to-r from-[#707962] to-[#B96F4D]"></div>
            <div className="px-2 py-1 bg-[#B96F4D]/20 rounded border border-[#B96F4D] text-[#F2E8DA] font-semibold">
              RabbitMQ Bus
            </div>
            <div className="h-0.5 w-5 bg-gradient-to-r from-[#B96F4D] to-[#707962]"></div>
            <div className="px-2 py-1 bg-[#181A18] rounded border border-[#707962]/40 text-[#F2E8DA]">
              Worker Dispatch
            </div>
          </div>

          <div className="bg-[#101211] p-2 rounded border border-[rgba(232,220,203,0.1)] text-[10px] text-[#AAA297] flex justify-between">
            <span>[QUEUE OK] Batch #9012 dispatched to worker_04</span>
            <span className="text-[#707962]">Redis Pub/Sub Synced</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "ownshopy") {
    return (
      <div className={baseClasses}>
        {/* Top Window Bar */}
        <div className="h-7 bg-[#121514] px-3 border-b border-[rgba(232,220,203,0.15)] flex items-center justify-between">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#707962]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#DDD2C3]/40"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#B96F4D]/40"></span>
          </div>
          <span className="text-[10px] font-mono text-[#AAA297] tracking-wider">
            ownshopy.api // Azure Container Microservices
          </span>
          <span className="text-[10px] font-mono text-[#B96F4D]">Webhooks Active</span>
        </div>

        {/* E-Commerce Webhook & Payment Dashboard */}
        <div className="p-4 flex-1 flex flex-col justify-between space-y-3 font-sans">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono text-[#B96F4D] uppercase tracking-widest">
                Payment Orchestrator Engine
              </div>
              <div className="text-base font-serif text-[#F2E8DA]">
                Stripe · PayPal · Fawry Microservice
              </div>
            </div>
            <span className="px-2 py-1 bg-[#707962]/20 text-[#F2E8DA] font-mono text-[10px] rounded border border-[#707962]/40">
              Verified Webhook
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-1 font-mono text-[10px]">
            <div className="bg-[#121514] p-2.5 rounded border border-[rgba(232,220,203,0.12)]">
              <div className="text-[#AAA297]">DB INDEX PERFORMANCE</div>
              <div className="text-[#F2E8DA] font-semibold mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#707962]"></span>
                +40% Compound Speedup
              </div>
            </div>
            <div className="bg-[#121514] p-2.5 rounded border border-[rgba(232,220,203,0.12)]">
              <div className="text-[#AAA297]">CLOUD CONTAINER</div>
              <div className="text-[#DDD2C3] font-semibold mt-1">Docker Azure App Service</div>
            </div>
          </div>

          <div className="bg-[#121514] p-2 rounded border border-[rgba(232,220,203,0.12)] flex items-center justify-between text-[10px] font-mono text-[#AAA297]">
            <span>Replay Attack Verification: ACTIVE</span>
            <span className="text-[#707962]">MongoDB Atlas Synced</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "quanth") {
    return (
      <div className={baseClasses}>
        {/* Top Window Bar */}
        <div className="h-7 bg-[#121514] px-3 border-b border-[rgba(232,220,203,0.15)] flex items-center justify-between">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#AAA297]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#707962]/40"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#B96F4D]/40"></span>
          </div>
          <span className="text-[10px] font-mono text-[#AAA297] tracking-wider">
            quanth.terminal // Strategy &amp; Tick Ingestion
          </span>
          <span className="text-[10px] font-mono text-[#707962]">gRPC Stream</span>
        </div>

        {/* Quant Terminal Chart Visual */}
        <div className="p-4 flex-1 flex flex-col justify-between space-y-2 font-mono">
          <div className="flex items-center justify-between text-[11px]">
            <div>
              <div className="text-[#AAA297] uppercase">Strategy Evaluation Daemon</div>
              <div className="text-base font-bold text-[#F2E8DA]">Python + C++ Execution Engine</div>
            </div>
            <span className="px-2 py-0.5 bg-[#B96F4D]/20 text-[#F2E8DA] border border-[#B96F4D]/40 rounded text-[9px]">
              &lt; 1.8ms RPC
            </span>
          </div>

          <div className="h-20 w-full bg-[#121514] rounded border border-[rgba(232,220,203,0.12)] p-2 relative overflow-hidden flex items-end">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 300 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 45 L30 38 L60 42 L90 25 L120 29 L150 15 L180 25 L210 10 L240 14 L270 5 L300 8"
                stroke="#B96F4D"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] text-[#AAA297]">
            <div className="flex justify-between bg-[#121514] p-1.5 rounded">
              <span>Security Enforcement:</span>
              <span className="text-[#F2E8DA]">RBAC + Rate Limits</span>
            </div>
            <div className="flex justify-between bg-[#121514] p-1.5 rounded">
              <span>Database Layer:</span>
              <span className="text-[#DDD2C3]">PostgreSQL + Prisma</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Real-time tracking visual
  return (
    <div className={baseClasses}>
      {/* Top Window Bar */}
      <div className="h-7 bg-[#121514] px-3 border-b border-[rgba(232,220,203,0.15)] flex items-center justify-between">
        <div className="flex space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B96F4D]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#707962]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#DDD2C3]"></span>
        </div>
        <span className="text-[10px] font-mono text-[#AAA297] tracking-wider">
          webrtc.signaling // Geolocation Pipeline
        </span>
        <span className="text-[10px] font-mono text-[#707962]">Sub-50ms P2P</span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between font-mono text-[11px] space-y-2">
        <div className="bg-[#121514] p-2.5 rounded border border-[rgba(232,220,203,0.14)] text-[10px] text-[#DDD2C3]">
          <span className="text-[#B96F4D]">const</span> peer = <span className="text-[#707962]">new</span> WebRTC.<span className="text-[#F2E8DA]">PeerConnection</span>(&#123;
          <br />
          &nbsp;&nbsp;telemetry: <span className="text-[#DDD2C3]">&quot;live_location_tracking&quot;</span>,
          <br />
          &nbsp;&nbsp;signaling: <span className="text-[#DDD2C3]">&quot;wss://tracking.noursalem.dev&quot;</span>
          <br />
          &#125;);
        </div>

        <div className="flex items-center justify-between bg-[#121514] p-2 rounded border border-[rgba(232,220,203,0.12)] text-[10px]">
          <span className="text-[#F2E8DA] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#B96F4D] animate-ping"></span>
            Live Geolocation Telemetry Active
          </span>
          <span className="text-[#AAA297]">500+ Active Clients</span>
        </div>
      </div>
    </div>
  );
}
