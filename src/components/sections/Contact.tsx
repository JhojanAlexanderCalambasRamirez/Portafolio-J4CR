"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contacto" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="05" title="Contacto" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-lg text-foreground mb-2">
            ¿Tienes un proyecto en mente?
          </p>
          <p className="text-base text-muted mb-8">
            Estoy abierto a oportunidades, colaboraciones y proyectos
            interesantes. Conversemos.
          </p>

          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-edge hover:border-accent/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-raised border border-edge flex items-center justify-center shrink-0">
                <Mail size={18} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-dim">Email</p>
                <p className="text-sm text-foreground truncate">
                  {profile.email}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-dim group-hover:text-accent transition-colors shrink-0"
              />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-edge hover:border-accent/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-raised border border-edge flex items-center justify-center shrink-0">
                <LinkedinIcon size={18} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-dim">LinkedIn</p>
                <p className="text-sm text-foreground">linkedin.com/in/j4cr</p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-dim group-hover:text-accent transition-colors shrink-0"
              />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-edge hover:border-accent/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-raised border border-edge flex items-center justify-center shrink-0">
                <GithubIcon size={18} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-dim">GitHub</p>
                <p className="text-sm text-foreground">JhojanAlexanderCalambasRamirez</p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-dim group-hover:text-accent transition-colors shrink-0"
              />
            </a>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-edge">
                <MapPin size={18} className="text-accent shrink-0" />
                <span className="text-sm text-foreground">
                  {profile.location}
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-edge">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-sm text-foreground">
                  {profile.phone}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
