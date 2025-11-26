"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Zap, Sparkles, ChevronRight } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: BookOpen,
    title: "The Core Lesson",
    subtitle: "Crafted by Linguists",
    description: "Human-designed curriculum with cultural nuance and pedagogical rigor.",
    color: "paper",
    bgColor: "bg-paper/5",
    borderColor: "border-paper/20",
  },
  {
    id: 2,
    icon: Zap,
    title: "The Gap Detected",
    subtitle: "Real-time Analysis",
    description: "Our engine identifies specific patterns of confusion—not just wrong answers.",
    color: "ember",
    bgColor: "bg-ember/10",
    borderColor: "border-ember/30",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Custom Remediation",
    subtitle: "AI-Generated Instantly",
    description: "A prescription, not a punishment. Targeted micro-lessons to close the gap.",
    color: "jade",
    bgColor: "bg-jade/10",
    borderColor: "border-jade/30",
  },
];

export function Methodology() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-ink-light overflow-hidden">
      {/* Diagonal Lines Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.5) 40px,
              rgba(255,255,255,0.5) 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: The Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold mb-4 block">
                The Methodology
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-paper leading-[1.1]">
                Static lessons fail{" "}
                <span className="block text-jade italic">
                  because you are dynamic.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Other apps fall into two traps: they either feed you{" "}
                <span className="text-ember font-medium">generic AI slop</span>{" "}
                that lacks soul, or they force you through rigid textbook chapters
                that ignore your specific struggles.
              </p>
              <p>
                We take a different path. Our curriculum is{" "}
                <span className="text-paper font-semibold">built by humans</span>
                —linguists who understand the nuance of the language.
              </p>
              <p>
                But when you stumble? We don't just make you repeat the level. Our{" "}
                <span className="text-jade font-semibold">AI Tutor</span> instantly
                generates a custom remedial lesson targeting exactly that gap.
              </p>
            </div>

            <div className="pt-4">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-px bg-gradient-to-r from-ember via-gold to-jade"
              />
            </div>
          </motion.div>

          {/* Right: The Flow Visualization */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-6 top-20 bottom-20 w-px bg-gradient-to-b from-paper/20 via-ember/40 to-jade/60 hidden sm:block" />

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="relative"
                >
                  <div
                    className={`${step.bgColor} ${step.borderColor} border rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-${step.color}/5`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                          step.color === "ember"
                            ? "bg-ember/20 text-ember"
                            : step.color === "jade"
                            ? "bg-jade/20 text-jade"
                            : "bg-paper/10 text-paper"
                        }`}
                      >
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-[family-name:var(--font-playfair)] font-semibold ${
                            step.color === "ember"
                              ? "text-ember"
                              : step.color === "jade"
                              ? "text-jade"
                              : "text-paper"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <span className="text-xs font-mono uppercase tracking-widest text-text-muted">
                          {step.subtitle}
                        </span>
                        <p className="mt-2 text-text-secondary text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ChevronRight className="w-4 h-4 text-text-muted/50 rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

