"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="habilidades" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="03" title="Habilidades" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="p-5 rounded-2xl bg-surface border border-edge hover:border-accent/30 transition-all"
            >
              <h3 className="text-sm font-mono text-accent font-medium mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-lg bg-raised text-foreground/80 border border-edge hover:text-accent hover:border-accent/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
