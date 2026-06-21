"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";

const typeLabels = {
  professional: "Profesional",
  academic: "Académico",
  freelance: "Freelance",
} as const;

export default function Projects() {
  return (
    <section id="proyectos" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="02" title="Proyectos" />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="grid md:grid-cols-[80px_1fr] gap-6">
                <div className="flex md:flex-col items-center md:items-start gap-3 md:pt-8">
                  <span className="text-4xl font-bold font-mono text-dim">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-mono text-accent px-2 py-1 rounded-md bg-accent-glow">
                    {typeLabels[project.type]}
                  </span>
                </div>

                <div className="p-6 md:p-8 rounded-2xl bg-surface border border-edge group-hover:border-accent/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-accent mt-1 font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    <span className="text-xs text-dim font-mono whitespace-nowrap md:pt-1">
                      {project.period}
                    </span>
                  </div>

                  <p className="mt-4 text-muted leading-relaxed">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="mt-6 flex gap-8 p-4 rounded-xl bg-raised border border-edge">
                      {project.metrics.map(({ label, value }) => (
                        <div key={label}>
                          <span className="text-xl font-bold font-mono text-accent">
                            {value}
                          </span>
                          <p className="text-xs text-muted mt-1">{label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="mt-6 space-y-2.5">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <ArrowUpRight
                          size={14}
                          className="text-accent mt-0.5 shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-mono rounded-lg bg-raised text-foreground/70 border border-edge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
