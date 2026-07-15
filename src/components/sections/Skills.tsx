"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Cloud,
  Box,
  GitBranch,
  Cpu,
  Database,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

const categoryIcons: Record<string, LucideIcon> = {
  frontend: Monitor,
  backend: Server,
  azure: Cloud,
  containers: Box,
  cicd: GitBranch,
  ml: Cpu,
  databases: Database,
};

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 bg-raised/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="03" title="Habilidades" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIdx) => {
            const Icon = categoryIcons[category.id] ?? Cpu;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.07 }}
                className="group flex flex-col p-6 rounded-2xl bg-surface border border-edge hover:border-accent/40 hover:shadow-[0_0_24px_var(--accent-glow)] transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-glow border border-accent/20 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground leading-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted mt-1 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-px bg-accent/25 mb-4" />

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-raised text-foreground/75 border border-edge hover:text-accent hover:border-accent/30 hover:bg-accent-glow transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
