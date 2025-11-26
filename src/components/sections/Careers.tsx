"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Languages, TrendingUp, ArrowRight } from "lucide-react";

const roles = [
  {
    id: "01",
    icon: Code2,
    title: "Builders",
    description:
      "Server-driven UI. Local-first databases. Construct the engine that powers mastery.",
    color: "jade",
    email: "careers@polymasterlabs.com?subject=Engineering",
  },
  {
    id: "02",
    icon: Languages,
    title: "Architects",
    description:
      "Language is culture, not code. Design the curriculum that respects human intelligence.",
    color: "gold",
    email: "careers@polymasterlabs.com?subject=Linguistics",
  },
  {
    id: "03",
    icon: TrendingUp,
    title: "Backers",
    description:
      "The EdTech market is stagnant. We are the kinetic energy. Fuel the language revolution.",
    color: "vermillion",
    email: "investors@polymasterlabs.com",
  },
];

const colorClasses = {
  jade: {
    hover: "hover:border-jade/50",
    accent: "bg-jade",
    text: "text-jade",
    iconBg: "group-hover:text-jade",
    arrow: "text-jade",
  },
  gold: {
    hover: "hover:border-gold/50",
    accent: "bg-gold",
    text: "text-gold",
    iconBg: "group-hover:text-gold",
    arrow: "text-gold",
  },
  vermillion: {
    hover: "hover:border-vermillion/50",
    accent: "bg-vermillion",
    text: "text-vermillion",
    iconBg: "group-hover:text-vermillion",
    arrow: "text-vermillion",
  },
};

export function Careers() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="alliance"
      ref={ref}
      className="relative py-32 bg-ink-light overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 60px,
              rgba(255,255,255,0.5) 60px,
              rgba(255,255,255,0.5) 61px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-gold mb-4 block">
            Recruitment Protocol
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-8xl font-[family-name:var(--font-playfair)] text-paper leading-none mb-8">
            The Alliance.
          </h2>

          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed">
            We are building the cognitive infrastructure of the next century. We
            don't need employees.{" "}
            <span className="text-paper font-medium">We need partners.</span>
          </p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 border-t border-white/10">
          {roles.map((role, index) => {
            const colors = colorClasses[role.color as keyof typeof colorClasses];

            return (
              <motion.a
                key={role.id}
                href={`mailto:${role.email}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`group relative block border-b border-r border-white/10 p-10 md:p-12 transition-all duration-500 hover:bg-ink ${colors.hover} ${
                  index === 2 ? "md:border-r-0" : ""
                }`}
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 ${colors.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />

                {/* Number */}
                <div className="mb-10">
                  <span className="font-mono text-sm text-text-muted">{role.id}</span>
                </div>

                {/* Title */}
                <h3
                  className={`text-3xl md:text-4xl font-[family-name:var(--font-playfair)] font-bold text-paper mb-4 group-hover:${colors.text} transition-colors`}
                >
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-12">
                  {role.description}
                </p>

                {/* Bottom Row */}
                <div className="flex items-center justify-between">
                  <role.icon
                    className={`w-7 h-7 text-white/20 ${colors.iconBg} transition-colors`}
                  />
                  <ArrowRight
                    className={`w-6 h-6 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${colors.arrow}`}
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

