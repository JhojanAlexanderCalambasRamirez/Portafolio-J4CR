"use client";

import { motion } from "framer-motion";
import type { Role } from "@/data/profile";

const roles: { key: Role; label: string }[] = [
  { key: "fullstack", label: "Fullstack" },
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
];

interface RoleSelectorProps {
  activeRole: Role;
  onRoleChange: (role: Role) => void;
}

export default function RoleSelector({
  activeRole,
  onRoleChange,
}: RoleSelectorProps) {
  return (
    <div className="inline-flex items-center gap-1 p-1.5 rounded-xl bg-surface border border-edge">
      {roles.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onRoleChange(key)}
          className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeRole === key
              ? "text-[#09090b]"
              : "text-muted hover:text-foreground"
          }`}
        >
          {activeRole === key && (
            <motion.div
              layoutId="role-indicator"
              className="absolute inset-0 bg-accent rounded-lg"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </button>
      ))}
    </div>
  );
}
