
"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleDashed,
  Code2,
  Database,
  GitBranch,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const agents = [
  { name: "Planner", detail: "Breaking down the task", icon: BrainCircuit, color: "#82B5FF" },
  { name: "Researcher", detail: "Gathering context", icon: Search, color: "#A99AFF" },
  { name: "Coder", detail: "Writing implementation", icon: Code2, color: "#72D5FF" },
  { name: "Reviewer", detail: "Checking quality", icon: ShieldCheck, color: "#75E0BD" },
];

const steps = ["Plan", "Research", "Build", "Test", "Deploy"];

export default function AIAgentVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[650px] select-none">
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.12] blur-[100px]" />

      {/* Agent workspace */}
      <div className="relative overflow-hidden rounded-2xl border border-blue-200/[0.14] bg-[#08172B] shadow-[0_35px_100px_rgba(0,0,0,0.4)]">
        {/* Window bar */}
        <div className="flex h-12 items-center justify-between border-b border-white/[0.08] px-4">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-md bg-blue-400/15 text-blue-300">
              <Sparkles size={13} />
            </div>
            <span className="text-[11px] font-semibold tracking-wide text-slate-100">
              CAIRN <span className="text-blue-300">/ AGENTS</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[9px] text-slate-400">
              SYSTEM ONLINE
            </span>
          </div>
        </div>

        {/* Workspace content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue-300/70">
                Autonomous workspace
              </p>
              <h2 className="mt-2 text-lg font-medium tracking-tight text-white sm:text-xl">
                Agent orchestration
              </h2>
              <p className="mt-1 text-[11px] text-slate-400">
                Intelligent systems. Working together.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 p-2 text-slate-300">
              <Workflow size={16} />
            </div>
          </div>

          {/* Main AI visualization */}
          <div className="relative mt-5 overflow-hidden rounded-xl border border-blue-300/10 bg-[#061326]">
            {/* Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(89,154,255,.45) 1px, transparent 1px)",
                backgroundSize: "19px 19px",
              }}
            />

            {/* Connection paths */}
            <svg
              viewBox="0 0 500 300"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 h-full w-full"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="agent-line">
                  <stop stopColor="#497BFF" stopOpacity=".15" />
                  <stop offset=".5" stopColor="#65B5FF" stopOpacity=".95" />
                  <stop offset="1" stopColor="#497BFF" stopOpacity=".2" />
                </linearGradient>
              </defs>

              <path d="M250 145 C190 120 170 70 95 72" stroke="url(#agent-line)" strokeWidth="1.2" />
              <path d="M250 145 C310 120 330 70 405 72" stroke="url(#agent-line)" strokeWidth="1.2" />
              <path d="M250 145 C190 175 170 230 95 230" stroke="url(#agent-line)" strokeWidth="1.2" />
              <path d="M250 145 C310 175 330 230 405 230" stroke="url(#agent-line)" strokeWidth="1.2" />

              {[95, 405].map((x) => (
                <g key={x}>
                  <circle cx={x} cy="72" r="3" fill="#6AB8FF" />
                  <circle cx={x} cy="230" r="3" fill="#6AB8FF" />
                </g>
              ))}

              <circle cx="250" cy="145" r="74" stroke="#4285FF" strokeOpacity=".15" strokeDasharray="3 7" />
              <circle cx="250" cy="145" r="94" stroke="#4285FF" strokeOpacity=".1" strokeDasharray="2 9" />
            </svg>

            {/* Agent node positions */}
            <div className="relative grid min-h-[290px] grid-cols-[1fr_104px_1fr] grid-rows-[1fr_1fr] items-center gap-x-1 px-3 py-5 sm:min-h-[320px] sm:grid-cols-[1fr_128px_1fr] sm:px-5">
              {/* Planner */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="z-10 self-end rounded-lg border border-blue-300/15 bg-[#0B1D35]/95 p-2.5 sm:p-3"
              >
                <div className="flex items-center gap-2">
                  <BrainCircuit size={15} className="shrink-0 text-blue-300" />
                  <span className="text-[10px] font-medium text-slate-100 sm:text-[11px]">
                    Planner
                  </span>
                </div>
                <p className="mt-2 text-[9px] leading-4 text-slate-400">
                  Decomposing task
                </p>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    animate={{ width: ["20%", "85%", "45%", "75%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full rounded-full bg-blue-400"
                  />
                </div>
              </motion.div>

              {/* Central AI core */}
              <div className="relative col-start-2 row-span-2 row-start-1 flex aspect-square items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-blue-300/25"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[10px] rounded-full border border-blue-300/20"
                />

                <motion.div
                  animate={{ scale: [1, 1.045, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-[20px] rounded-[24px] border border-blue-300/60 bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-indigo-500/20 shadow-[0_0_38px_rgba(55,130,255,0.25)]"
                  style={{ transform: "rotate(45deg)" }}
                />

                <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-blue-200/40 bg-[#102E55] text-blue-200 shadow-[0_0_32px_rgba(60,145,255,0.3)] sm:size-14">
                  <motion.div
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <BrainCircuit size={25} strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Orbiting signal */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_12px_#60A5FA]" />
                </motion.div>
              </div>

              {/* Researcher */}
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="z-10 col-start-3 row-start-1 self-end rounded-lg border border-indigo-300/15 bg-[#0B1D35]/95 p-2.5 sm:p-3"
              >
                <div className="flex items-center gap-2">
                  <Search size={14} className="shrink-0 text-indigo-300" />
                  <span className="text-[10px] font-medium text-slate-100 sm:text-[11px]">
                    Research
                  </span>
                </div>
                <p className="mt-2 text-[9px] leading-4 text-slate-400">
                  Finding context
                </p>
                <div className="mt-2 flex gap-1">
                  <span className="h-1 w-1/3 rounded-full bg-indigo-300/80" />
                  <span className="h-1 w-1/4 rounded-full bg-indigo-300/40" />
                  <span className="h-1 w-1/5 rounded-full bg-white/10" />
                </div>
              </motion.div>

              {/* Coder */}
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="z-10 col-start-1 row-start-2 self-start rounded-lg border border-sky-300/15 bg-[#0B1D35]/95 p-2.5 sm:p-3"
              >
                <div className="flex items-center gap-2">
                  <Code2 size={14} className="shrink-0 text-sky-300" />
                  <span className="text-[10px] font-medium text-slate-100 sm:text-[11px]">
                    Coder
                  </span>
                </div>
                <p className="mt-2 text-[9px] leading-4 text-slate-400">
                  Generating code
                </p>
                <div className="mt-2 flex gap-1">
                  <span className="h-1 w-1/4 rounded-full bg-sky-300" />
                  <span className="h-1 w-1/3 rounded-full bg-sky-300/50" />
                </div>
              </motion.div>

              {/* Reviewer */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="z-10 col-start-3 row-start-2 self-start rounded-lg border border-emerald-300/15 bg-[#0B1D35]/95 p-2.5 sm:p-3"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="shrink-0 text-emerald-300" />
                  <span className="text-[10px] font-medium text-slate-100 sm:text-[11px]">
                    Reviewer
                  </span>
                </div>
                <p className="mt-2 text-[9px] leading-4 text-slate-400">
                  Validating output
                </p>
                <div className="mt-2 flex items-center gap-1.5">
                  <Check size={10} className="text-emerald-300" />
                  <span className="text-[9px] text-emerald-300">Quality check</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Live workflow */}
          <div className="mt-3 rounded-xl border border-white/[0.09] bg-white/[0.025] p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <GitBranch size={14} className="text-blue-300" />
                <span className="text-[11px] font-medium text-white">
                  Execution pipeline
                </span>
              </div>
              <span className="font-mono text-[9px] text-blue-200">
                LIVE PREVIEW
              </span>
            </div>

            <div className="mt-5 flex items-start">
              {steps.map((step, index) => (
                <div key={step} className="flex min-w-0 flex-1 flex-col items-center">
                  <div className="flex w-full items-center">
                    {index > 0 && (
                      <div className="h-px flex-1 bg-blue-400/50" />
                    )}

                    <motion.div
                      animate={
                        index === 3
                          ? { boxShadow: ["0 0 0px #3B82F6", "0 0 12px #3B82F6", "0 0 0px #3B82F6"] }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`flex size-6 shrink-0 items-center justify-center rounded-full border ${
                        index < 3
                          ? "border-blue-400 bg-blue-400 text-[#071426]"
                          : index === 3
                            ? "border-blue-300 text-blue-200"
                            : "border-white/20 text-slate-500"
                      }`}
                    >
                      {index < 3 ? (
                        <Check size={12} />
                      ) : index === 3 ? (
                        <CircleDashed size={13} />
                      ) : (
                        <span className="text-[9px]">{index + 1}</span>
                      )}
                    </motion.div>

                    {index < steps.length - 1 && (
                      <div className="h-px flex-1 bg-white/10" />
                    )}
                  </div>

                  <span className="mt-2 text-[9px] text-slate-300 sm:text-[10px]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Current activity */}
          <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-[#0B1B30] px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-300">
                <Activity size={15} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-medium text-slate-200">
                  Agents collaborating
                </p>
                <p className="mt-1 truncate text-[9px] text-slate-400">
                  Planning → Building → Validation
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1.5">
              <Zap size={12} className="text-blue-300" />
              <span className="text-[10px] text-blue-200">Orchestrated</span>
            </div>
          </div>
        </div>

        {/* Decorative edge */}
        <div className="pointer-events-none absolute -bottom-8 -right-8 size-24 rounded-full border border-blue-400/10" />
      </div>

      {/* Floating label */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 -top-4 hidden items-center gap-2 rounded-lg border border-blue-300/20 bg-[#102440] px-3 py-2.5 shadow-xl sm:flex lg:-right-5"
      >
        <span className="flex size-6 items-center justify-center rounded-md bg-blue-400/15 text-blue-200">
          <Bot size={14} />
        </span>
        <div>
          <p className="text-[10px] font-medium text-white">AI orchestration</p>
          <p className="mt-0.5 text-[9px] text-slate-400">Multi-agent workflow</p>
        </div>
      </motion.div>
    </div>
  );
}
