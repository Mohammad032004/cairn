
"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import AIAgentVisual from "@/components/hero/AIAgentVisual";

const capabilities = [
  "Software Engineering",
  "AI & Automation",
  "Cloud & DevOps",
];

const disciplines = [
  "Product strategy",
  "Engineering",
  "Automation",
  "Infrastructure",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071426] text-white">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative isolate overflow-hidden"
      >
        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-20 h-[580px] w-[580px] rounded-full bg-blue-500/[0.12] blur-[140px]" />

          <div className="absolute -bottom-40 left-[10%] h-[400px] w-[400px] rounded-full bg-indigo-500/[0.08] blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,183,230,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,183,230,0.15) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />
        </div>

        <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-[1440px] items-center gap-16 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 lg:px-12 lg:py-14">
          {/* LEFT: Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 mx-auto w-full max-w-[620px] lg:mx-0"
          >
            {/* Eyebrow */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-200/15 bg-blue-100/[0.04] px-4 py-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-blue-400 opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-blue-400" />
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-blue-100/80 sm:text-[11px]">
                Independent product engineering studio
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-[clamp(3.4rem,6.3vw,6.2rem)] font-medium leading-[0.96] tracking-[-0.075em]">
              We build
              <br />
              digital products
              <br />
              that{" "}
              <span className="relative inline-block text-[#80B5FF]">
                move.
                <span className="absolute -bottom-1 left-0 h-[3px] w-[58%] rounded-full bg-gradient-to-r from-blue-400 to-transparent" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[490px] text-base leading-7 text-slate-300/75 sm:text-lg sm:leading-8">
              We combine thoughtful design, reliable engineering,
              and intelligent automation to turn complex ideas
              into products people can use.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex h-[52px] items-center gap-4 rounded-md bg-[#EAF2FF] px-6 text-sm font-semibold text-[#071426] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                Start a project

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#work"
                className="group inline-flex h-[52px] items-center gap-3 rounded-md border border-white/15 px-6 text-sm font-medium text-white transition-all duration-200 hover:border-blue-300/40 hover:bg-white/[0.04]"
              >
                Explore our work

                <ArrowDownRight
                  size={16}
                  className="text-blue-300 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
            </div>

            {/* Capabilities */}
            <div className="mt-12 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-center gap-2 text-xs text-slate-300/70"
                >
                  <Check
                    size={13}
                    className="shrink-0 text-blue-300"
                  />

                  {capability}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Animated AI agent visualization */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[650px] lg:ml-auto"
          >
            <AIAgentVisual />
          </motion.div>
        </div>
      </section>

      {/* CAPABILITY STRIP */}
      <section className="border-t border-white/10 bg-[#09182B]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="text-sm font-medium text-white">
              From first concept to production.
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Design, engineering, and intelligent systems working together.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {disciplines.map((item) => (
              <span
                key={item}
                className="text-xs text-slate-300/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Temporary anchors for sections we will build next */}
      <div className="sr-only" aria-hidden="true">
        <span id="services">Services</span>
        <span id="work">Selected work</span>
        <span id="about">About CAIRN</span>
        <span id="contact">Contact CAIRN</span>
      </div>
    </main>
  );
}
