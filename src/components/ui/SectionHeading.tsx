"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="relative mb-12">
      <span
        aria-hidden="true"
        className="absolute -top-4 -left-1 text-[6rem] font-bold leading-none select-none pointer-events-none text-foreground opacity-[0.03]"
      >
        {number}
      </span>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center gap-4"
      >
        <span className="text-accent font-mono text-sm font-medium">{number}</span>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <div className="flex-1 h-px bg-edge" />
      </motion.div>
    </div>
  );
}
