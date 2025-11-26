"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, PenTool, Cpu } from "lucide-react";

const blocks = [
  {
    icon: X,
    title: "AI Cannot:",
    items: ["Understand Cultural Nuance", "Create Original Humor", "Map the Emotional Journey"],
    color: "ember",
    bgClass: "bg-ember/5",
    borderClass: "border-ember/20",
  },
  {
    icon: PenTool,
    title: "The Human Core",
    description:
      "Our curriculum is handcrafted by world-class linguists. Every lesson arc, every cultural note, every mnemonic anchor is designed by a person.",
    badge: "Quality Control",
    color: "paper",
    bgClass: "bg-paper",
    borderClass: "border-paper/20",
    isCenter: true,
  },
  {
    icon: Cpu,
    title: "AI Turbocharges:",
    items: ["Infinite Practice Variations", "Instant Error Analysis", "Personalized Scheduling"],
    color: "jade",
    bgClass: "bg-jade/5",
    borderClass: "border-jade/20",
  },
];

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-ink overflow-hidden">
      {/* Background Quote Watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="text-[20vw] font-[family-name:var(--font-playfair)] text-white/[0.01] select-none">
          人
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-text-muted text-xs font-mono uppercase tracking-widest border border-white/10">
            Our Stance
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-playfair)] text-paper leading-[1.1]">
            AI is the engine.
            <br />
            <span className="text-gradient-vermillion">Humanity is the fuel.</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We reject the trend of "AI-Generated Everything." Language is culture,
            humor, and history. An algorithm cannot teach you to feel a poem.
          </p>
        </motion.div>

        {/* Three Blocks */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`${block.bgClass} p-10 md:p-12 flex flex-col items-center relative ${
                block.isCenter ? "text-ink md:-my-4 md:shadow-2xl md:z-10" : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
                  block.isCenter
                    ? "bg-ink text-paper shadow-xl"
                    : block.color === "ember"
                    ? "bg-ember/10 text-ember"
                    : "bg-jade/10 text-jade"
                }`}
              >
                <block.icon className={`w-7 h-7 ${block.isCenter ? "" : ""}`} />
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-[family-name:var(--font-playfair)] font-bold mb-6 ${
                  block.isCenter ? "text-ink" : "text-paper"
                }`}
              >
                {block.title}
              </h3>

              {/* Content */}
              {block.items && (
                <ul className="space-y-3 text-sm">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className={block.isCenter ? "text-ink/70" : "text-text-secondary"}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {block.description && (
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    block.isCenter ? "text-ink/70" : "text-text-secondary"
                  }`}
                >
                  {block.description}
                </p>
              )}

              {block.badge && (
                <span className="mt-auto text-xs font-bold uppercase tracking-widest text-jade">
                  {block.badge}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

