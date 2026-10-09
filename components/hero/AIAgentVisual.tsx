
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  GitBranch,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const agents = [
  {
    name: "Research Agent",
    role: "Understand the problem",
    icon: Search,
    color: "#8AB8FF",
    position: "left",
  },
  {
    name: "Engineering Agent",
    role: "Build intelligent solutions",
    icon: Code2,
    color: "#79D7FF",
    position: "right",
  },
  {
    name: "Quality Agent",
    role: "Review and validate",
    icon: ShieldCheck,
    color: "#79E2C0",
    position: "left",
  },
  {
    name: "Workflow Agent",
    role: "Connect every step",
    icon: Workflow,
    color: "#B7A4FF",
    position: "right",
  },
];

function AgentCard({
  agent,
  index,
}: {
  agent: (typeof agents)[number];
  index: number;
}) {
  const Icon = agent.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: 0.35 + index * 0.12,
      }}
      whileHover={{ y: -4, borderColor: `${agent.color}70` }}
      className="relative z-10 rounded-xl border border-white/10 bg-[#0C2038]/95 p-3 shadow-[0_14px_35px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-4"
    >
      <div className="flex items-start gap-3">
        <div
          className="flex size-9 shrink-0 items-center justify-center rounded-lg"
          style={{
            backgroundColor: `${agent.color}18`,
            color: agent.color,
          }}
        >
          <Icon size={17} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold text-white sm:text-xs">
            {agent.name}
          </p>
          <p className="mt-1 text-[10px] leading-4 text-slate-400">
            {agent.role}
          </p>
        </div>

        <span
          className="mt-1 size-1.5 shrink-0 rounded-full"
          style={{
            backgroundColor: agent.color,
            boxShadow: `0 0 10px ${agent.color}70`,
          }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-3">
        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
          Agent 0{index + 1}
        </span>

        <span className="flex items-center gap-1 text-[9px] text-slate-300">
          <Check size={10} style={{ color: agent.color }} />
          Ready
        </span>
      </div>
    </motion.div>
  );
}

export default function AIAgentVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      {/* Ambient blue light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px] sm:size-[420px]" />

      {/* Main composition */}
      <div className="relative overflow-hidden rounded-2xl border border-blue-200/[0.13] bg-[#08172A] p-4 sm:p-6">
        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(120,170,255,.4) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 95%)",
          }}
        />

        {/* Composition header */}
        <div className="relative z-10 flex items-center justify-between gap-3 border-b border-white/[0.09] pb-4">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg border border-blue-300/20 bg-blue-400/10 text-blue-300">
              <BrainCircuit size={17} />
            </div>

            <div>
              <p className="text-xs font-semibold text-white">
                CAIRN Intelligence
              </p>
              <p className="mt-1 text-[9px] text-slate-400">
                Multi-agent system
              </p>
            </div>
          </div>

          <span className="flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-2.5 py-1.5">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            <span className="text-[9px] text-emerald-200">
              System ready
            </span>
          </span>
        </div>

        {/* Agent network */}
        <div className="relative mt-5">
          {/* Connection SVG */}
          <svg
            viewBox="0 0 520 410"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cairn-agent-flow">
                <stop stopColor="#629CFF" stopOpacity=".12" />
                <stop offset=".5" stopColor="#78BCFF" stopOpacity=".9" />
                <stop offset="1" stopColor="#629CFF" stopOpacity=".12" />
              </linearGradient>
            </defs>

            <path
              d="M120 85 C175 85 175 170 260 205"
              stroke="url(#cairn-agent-flow)"
              strokeWidth="1.4"
            />
            <path
              d="M400 85 C345 85 345 170 260 205"
              stroke="url(#cairn-agent-flow)"
              strokeWidth="1.4"
            />
            <path
              d="M120 325 C175 325 175 245 260 205"
              stroke="url(#cairn-agent-flow)"
              strokeWidth="1.4"
            />
            <path
              d="M400 325 C345 325 345 245 260 205"
              stroke="url(#cairn-agent-flow)"
              strokeWidth="1.4"
            />

            <circle cx="260" cy="205" r="82" stroke="#5D9EFF" strokeOpacity=".14" strokeDasharray="3 7" />
            <circle cx="260" cy="205" r="106" stroke="#5D9EFF" strokeOpacity=".1" strokeDasharray="2 9" />
          </svg>

          <div className="relative z-10 grid grid-cols-[1fr_72px_1fr] items-center gap-x-2 gap-y-8 sm:grid-cols-[1fr_100px_1fr] sm:gap-x-4 sm:gap-y-10">
            {/* Upper-left agent */}
            <AgentCard agent={agents[0]} index={0} />

            {/* Intelligence core */}
            <div className="relative col-start-2 row-span-2 flex aspect-square items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-dashed border-blue-300/30"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 19,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[9px] rounded-full border border-blue-300/20"
              />

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px rgba(61,137,255,.12)",
                    "0 0 42px rgba(61,137,255,.28)",
                    "0 0 20px rgba(61,137,255,.12)",
                  ],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-[17px] rounded-[19px] border border-blue-300/45 bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-indigo-500/20"
                style={{ transform: "rotate(45deg)" }}
              />

              <div className="relative z-10 flex size-9 items-center justify-center rounded-xl border border-blue-200/50 bg-[#153967] text-blue-100 shadow-[0_0_24px_rgba(75,150,255,0.35)] sm:size-12">
                <Sparkles size={21} />
              </div>

              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-sky-200 shadow-[0_0_12px_#60A5FA]" />
              </motion.span>
            </div>

            {/* Upper-right agent */}
            <AgentCard agent={agents[1]} index={1} />

            {/* Lower-left agent */}
            <AgentCard agent={agents[2]} index={2} />

            {/* Lower-right agent */}
            <AgentCard agent={agents[3]} index={3} />
          </div>
        </div>

        {/* Main task */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="relative z-10 mt-6 rounded-xl border border-blue-300/15 bg-gradient-to-r from-blue-400/[0.09] to-indigo-400/[0.04] p-4"
        >
          <div className="flex items-start gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-300">
              <GitBranch size={15} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-medium text-white">
                One coordinated workflow
              </p>
              <p className="mt-1 text-[10px] leading-5 text-slate-400">
                Research, engineering, review, and automation working toward a shared goal.
              </p>
            </div>

            <ArrowUpRight size={15} className="shrink-0 text-blue-300" />
          </div>
        </motion.div>

        {/* Footer */}
        <div className="relative z-10 mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Zap size={12} className="text-blue-300" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
              Intelligence by design
            </span>
          </div>

          <span className="text-[9px] text-slate-500">
            Concept visualization
          </span>
        </div>
      </div>

      {/* Floating label */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-2 -top-4 hidden items-center gap-2 rounded-lg border border-blue-300/20 bg-[#102440] px-3 py-2.5 shadow-xl sm:flex lg:-right-5"
      >
        <div className="flex size-7 items-center justify-center rounded-md bg-blue-400/10 text-blue-300">
          <Zap size={14} />
        </div>
        <div>
          <p className="text-[10px] font-medium text-white">
            Agent collaboration
          </p>
          <p className="mt-1 text-[9px] text-slate-400">
            One connected system
          </p>
        </div>
      </motion.div>
    </div>
  );
}
