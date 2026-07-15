"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile, type Role } from "@/data/profile";
import RoleSelector from "@/components/ui/RoleSelector";

const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "+50k", label: "Registros gestionados" },
  { value: "~40%", label: "Optimización lograda" },
  { value: "<30s", label: "Cold start en Azure" },
];

export default function Hero() {
  const [activeRole, setActiveRole] = useState<Role>("fullstack");
  const roleData = profile.roles[activeRole];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 noise overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-[0.04]" />

      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-accent-glow rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-accent-glow rounded-full blur-[100px] opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-accent mb-4 tracking-widest uppercase">
            Ingeniero Multimedia · Especialista IA
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95]">
            <span className="text-gradient">{profile.firstName}</span>
            <br />
            <span className="text-foreground">{profile.lastName}</span>
          </h1>

          <div className="mt-8">
            <RoleSelector
              activeRole={activeRole}
              onRoleChange={setActiveRole}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 min-h-[120px]"
            >
              <p className="font-mono text-sm text-accent tracking-wide">
                {roleData.tagline}
              </p>
              <p className="mt-3 text-muted max-w-xl text-base md:text-lg leading-relaxed">
                {roleData.bio}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-[#09090b] font-semibold rounded-lg hover:bg-accent-hover transition-all shadow-[0_0_24px_var(--accent-glow)] hover:shadow-[0_0_32px_var(--accent-glow)]"
            >
              Ver proyectos
              <ArrowDown size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-edge bg-surface text-foreground font-medium rounded-lg hover:border-accent hover:text-accent transition-all"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-edge bg-surface text-foreground font-medium rounded-lg hover:border-accent hover:text-accent transition-all"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 border-t border-edge pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-edge">
            {stats.map(({ value, label }) => (
              <div key={label} className="px-6 first:pl-0">
                <span className="text-2xl md:text-3xl font-bold font-mono text-accent">
                  {value}
                </span>
                <p className="text-xs text-muted mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-dim" />
        </motion.div>
      </motion.div>
    </section>
  );
}
