"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="sobre-mi" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="01" title="Sobre mí" />

        <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Soy ingeniero de multimedia con tarjeta profesional y
              especialista en Inteligencia Artificial. Lo que me diferencia es
              que no me quedo en una sola capa: diseño la interfaz, construyo el
              backend, configuro la infraestructura cloud y, cuando el proyecto
              lo requiere, entreno y despliego modelos de ML en producción.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
              No hago demos, hago productos que funcionan. He gestionado +50,000
              registros catastrales, optimizado tiempos de respuesta en un ~40%
              y desplegado sistemas de IA en Azure con arranque en frío menor a
              30 segundos.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-edge">
                <MapPin size={18} className="text-accent shrink-0" />
                <span className="text-sm text-foreground">
                  {profile.location}
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-edge">
                <Briefcase size={18} className="text-accent shrink-0" />
                <span className="text-sm text-foreground">3+ años exp.</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-edge">
                <Code2 size={18} className="text-accent shrink-0" />
                <span className="text-sm text-foreground">Fullstack & IA</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-edge">
                <GraduationCap size={18} className="text-accent shrink-0" />
                <span className="text-sm text-foreground">Esp. en IA</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="relative w-full aspect-square rounded-2xl bg-surface border border-edge overflow-hidden">
              <Image
                src="/images/profile.jpeg"
                alt="Alexander Calambas Ramírez"
                fill
                className="object-cover object-top"
                sizes="340px"
                priority
              />
            </div>

            {profile.education.map((edu) => (
              <div
                key={edu.degree}
                className="p-4 rounded-xl bg-surface border border-edge"
              >
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/uao-logo.png"
                    alt="UAO"
                    width={28}
                    height={28}
                    className="mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-medium text-sm text-foreground">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-muted mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-dim mt-1">{edu.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
