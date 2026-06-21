"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experiencia" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="04" title="Experiencia" />

        <div className="relative">
          <div className="absolute left-[7px] md:left-[39px] top-0 bottom-0 w-px bg-edge" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-8 md:pl-16"
              >
                <div className="absolute left-0 md:left-8 top-8 w-[15px] h-[15px] rounded-full bg-accent border-[3px] border-page" />

                <div className="p-6 md:p-8 rounded-2xl bg-surface border border-edge">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-accent text-sm font-medium">
                        {exp.company}
                      </p>
                      {exp.companyDescription && (
                        <p className="text-xs text-muted mt-1">
                          {exp.companyDescription}
                        </p>
                      )}
                    </div>
                    <div className="md:text-right">
                      <span className="text-xs font-mono text-muted bg-raised px-2 py-1 rounded-md">
                        {exp.period}
                      </span>
                      {exp.location && (
                        <p className="text-xs text-muted mt-2">
                          {exp.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="text-accent mt-0.5 font-mono text-xs shrink-0">
                          &rsaquo;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-raised text-foreground/70 border border-edge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
