
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Database,
  LayoutDashboard,
  QrCode,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Restova",
    category: "Restaurant Technology",
    description:
      "A digital dining experience connecting menus, QR ordering, and restaurant operations.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    type: "restaurant",
    accent: "#F4B18B",
  },
  {
    number: "02",
    name: "CertiFlow",
    category: "Certificate Management SaaS",
    description:
      "A streamlined platform for issuing, organizing, and verifying digital certificates.",
    tags: ["React", "Node.js", "Database"],
    type: "certificates",
    accent: "#86B9FF",
  },
  {
    number: "03",
    name: "AI Operations",
    category: "AI & Workflow Automation",
    description:
      "An interface concept for orchestrating intelligent workflows and operational tasks.",
    tags: ["AI", "Automation", "APIs"],
    type: "automation",
    accent: "#B5A2FF",
  },
];

function RestovaPreview() {
  return (
    <div className="relative h-full min-h-[245px] overflow-hidden rounded-xl bg-[#F3E8D9] p-4 text-[#25251F] sm:p-5">
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight">
          restova<span className="text-[#C56E48]">.</span>
        </span>
        <span className="text-[10px] text-[#74695D]">
          GOOD FOOD. GOOD MOOD.
        </span>
      </div>

      <div className="mt-6 grid grid-cols-[1fr_0.9fr] items-center gap-3">
        <div>
          <span className="text-[9px] uppercase tracking-[0.16em] text-[#9B6348]">
            Today&apos;s menu
          </span>
          <h3 className="mt-2 text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
            Made fresh.
            <br />
            Served better.
          </h3>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25251F] px-3 py-2 text-[10px] text-white">
            Explore menu
            <ArrowUpRight size={12} />
          </div>
        </div>

        <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl bg-[#E2B99C]">
          <div className="absolute inset-3 rounded-full border border-white/40" />
          <div className="relative flex size-28 items-center justify-center rounded-full bg-[#F8D6AD] shadow-lg sm:size-32">
            <div className="flex size-20 items-center justify-center rounded-full bg-[#A95734] sm:size-24">
              <div className="flex size-14 items-center justify-center rounded-full bg-[#E6B16B]">
                <div className="size-7 rounded-full bg-[#6C7B43]" />
              </div>
            </div>
          </div>
          <span className="absolute bottom-3 rounded-full bg-white/80 px-2.5 py-1 text-[9px]">
            Chef&apos;s special
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[#25251F]/10 pt-3 text-[10px] text-[#74695D]">
        <span>Discover your next favourite</span>
        <QrCode size={15} />
      </div>
    </div>
  );
}

function CertiFlowPreview() {
  return (
    <div className="relative h-full min-h-[245px] overflow-hidden rounded-xl bg-[#EAF1FB] p-4 text-[#14243C] sm:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-[#193B6A] text-white">
            <ShieldCheck size={17} />
          </div>
          <span className="font-semibold tracking-tight">CertiFlow</span>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-[9px] text-[#456185]">
          Workspace
        </span>
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="text-[10px] text-[#637793]">
            CERTIFICATE OVERVIEW
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            Your credentials.
          </h3>
        </div>
        <div className="flex size-9 items-center justify-center rounded-lg bg-white text-[#315C9A]">
          <ClipboardCheck size={18} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-[#D4E0F0] bg-white p-3">
          <p className="text-[10px] text-[#71819A]">Certificates</p>
          <p className="mt-2 text-2xl font-semibold">1,248</p>
          <p className="mt-1 text-[9px] text-[#4774AC]">
            Organized records
          </p>
        </div>

        <div className="rounded-xl border border-[#D4E0F0] bg-white p-3">
          <p className="text-[10px] text-[#71819A]">Verification</p>
          <p className="mt-2 flex items-center gap-2 text-lg font-semibold">
            <CheckCircle2 size={16} className="text-emerald-600" />
            Ready
          </p>
          <p className="mt-1 text-[9px] text-[#71819A]">
            Verification interface
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3 rounded-lg border border-[#D4E0F0] bg-white p-3">
        <Search size={15} className="text-[#315C9A]" />
        <span className="text-[10px] text-[#71819A]">
          Search certificates and records...
        </span>
      </div>
    </div>
  );
}

function AutomationPreview() {
  return (
    <div className="relative h-full min-h-[245px] overflow-hidden rounded-xl bg-[#111729] p-4 text-white sm:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-violet-400/15 text-violet-300">
            <Sparkles size={17} />
          </div>
          <span className="font-semibold tracking-tight">
            AI Operations
          </span>
        </div>

        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-2.5 py-1 text-[9px] text-emerald-300">
          Workflow concept
        </span>
      </div>

      <h3 className="mt-6 max-w-[270px] text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
        Less repetitive work.
        <br />
        More intelligent flow.
      </h3>

      <div className="relative mt-5 grid grid-cols-3 gap-2">
        {[
          { label: "Input", icon: Database },
          { label: "Process", icon: Workflow },
          { label: "Output", icon: CheckCircle2 },
        ].map((node, index) => {
          const Icon = node.icon;

          return (
            <div key={node.label} className="relative">
              <div className="flex min-h-[70px] flex-col items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.035]">
                <Icon
                  size={17}
                  className={
                    index === 1 ? "text-violet-300" : "text-slate-400"
                  }
                />
                <span className="text-[10px] text-slate-300">
                  {node.label}
                </span>
              </div>
              {index < 2 && (
                <div className="absolute -right-2 top-1/2 z-10 h-px w-2 bg-violet-300/70" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3">
        <Code2 size={14} className="text-violet-300" />
        <span className="text-[10px] text-slate-400">
          Intelligent workflows and integrations
        </span>
      </div>
    </div>
  );
}

function ProjectPreview({ type }: { type: string }) {
  if (type === "restaurant") return <RestovaPreview />;
  if (type === "certificates") return <CertiFlowPreview />;
  return <AutomationPreview />;
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative border-t border-white/[0.08] bg-[#09182B] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300">
              01 / Selected work
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-6xl">
              Ideas made
              <br />
              <span className="text-slate-400">into real products.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-sm leading-7 text-slate-400 sm:text-base"
          >
            A look at the digital experiences and engineering
            concepts we&apos;re building, from restaurant technology
            to intelligent workflow systems.
          </motion.p>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              className="group min-w-0"
            >
              {/* Preview */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0C1D32] p-2 transition-colors duration-300 group-hover:border-white/20">
                <div className="overflow-hidden rounded-xl">
                  <ProjectPreview type={project.type} />
                </div>
              </div>

              {/* Project details */}
              <div className="px-1 pb-3 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[10px] tracking-wider text-slate-500">
                    PROJECT / {project.number}
                  </p>

                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: project.accent }}
                  />
                </div>

                <div className="mt-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-white">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs text-blue-200/80">
                      {project.category}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    aria-label={`Discuss a project like ${project.name}`}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-200 group-hover:border-blue-300/40 group-hover:bg-blue-400/10 group-hover:text-blue-200"
                  >
                    <ArrowUpRight size={17} />
                  </a>
                </div>

                <p className="mt-4 min-h-[48px] text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.09] px-2.5 py-1.5 font-mono text-[9px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            Thoughtful interfaces. Reliable systems. Measurable purpose.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-blue-300"
          >
            Have a project in mind?
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
