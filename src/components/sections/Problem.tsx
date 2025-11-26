"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Sparkles, TrendingDown, TrendingUp, Clock, XCircle, Target, CheckCircle } from "lucide-react";

export function Problem() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="thesis" ref={ref} className="relative">
      {/* Split Background - Horizontal on mobile, Vertical on desktop */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div className="flex-1 bg-ink-light" />
        <div className="flex-1 bg-ink" />
      </div>

      {/* Center Divider - Horizontal on mobile, Vertical on desktop */}
      <div className="absolute left-0 right-0 md:left-1/2 md:right-auto top-1/2 md:top-0 h-px md:h-auto w-full md:w-px md:bottom-0 bg-white/5 hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 min-h-screen">
          {/* LEFT: The Enemy (Addiction) */}
          <div className="relative px-8 lg:px-16 py-24 md:py-32 flex flex-col justify-center">
            {/* Ember Glow */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ember/10 rounded-full blur-[100px]" />

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative space-y-8"
            >
              {/* Label */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ember/20 rounded-full flex items-center justify-center">
                  <Flame className="w-5 h-5 text-ember" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-ember">
                  The Trap
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] leading-[1.1]">
                <span className="text-paper">Optimized for</span>
                <br />
                <span className="text-ember italic">Addiction.</span>
              </h2>

              {/* Body */}
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed max-w-md">
                <p>
                  Legacy apps sell you dopamine. They measure success by{" "}
                  <span className="text-ember font-medium">
                    "Daily Active Users"
                  </span>{" "}
                  and{" "}
                  <span className="text-ember font-medium">"Streaks."</span>
                </p>
                <p>
                  They give you a false sense of progress by feeding you easy wins.
                </p>
                <p className="text-paper font-medium pt-4">
                  The result? You feel fluent in the app, but you are mute in the
                  real world.
                </p>
              </div>

              {/* Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="pt-8 border-t border-white/10 space-y-3"
              >
                <div className="flex items-center gap-3 text-sm">
                  <TrendingDown className="w-4 h-4 text-ember" />
                  <span className="font-mono text-text-muted">
                    METRIC: DAU (RETENTION)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-ember" />
                  <span className="font-mono text-text-muted">
                    GOAL: TIME ON SITE
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <XCircle className="w-4 h-4 text-ember" />
                  <span className="font-mono text-ember/80">
                    OUTCOME: CHURN
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: The Solution (Acquisition) */}
          <div className="relative px-8 lg:px-16 py-24 md:py-32 flex flex-col justify-center border-t md:border-t-0 border-white/5">
            {/* Jade Glow */}
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-jade/10 rounded-full blur-[100px]" />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative space-y-8"
            >
              {/* Label */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-jade/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-jade" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-jade">
                  The Engine
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] leading-[1.1]">
                <span className="text-paper">Optimized for</span>
                <br />
                <span className="text-jade italic">Acquisition.</span>
              </h2>

              {/* Body */}
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed max-w-md">
                <p>
                  We sell you cognitive load. We measure success by{" "}
                  <span className="text-jade font-medium">Retrievability</span> and{" "}
                  <span className="text-jade font-medium">Stability</span>.
                </p>
                <p>
                  We map the language as a Knowledge Graph, ensuring every new word
                  connects to what you already know.
                </p>
                <p className="text-paper font-medium pt-4">
                  It is harder. But it is real.
                </p>
              </div>

              {/* Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="pt-8 border-t border-white/10 space-y-3"
              >
                <div className="flex items-center gap-3 text-sm">
                  <TrendingUp className="w-4 h-4 text-jade" />
                  <span className="font-mono text-text-muted">
                    METRIC: R (RETRIEVABILITY)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Target className="w-4 h-4 text-jade" />
                  <span className="font-mono text-text-muted">GOAL: MASTERY</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-jade" />
                  <span className="font-mono text-jade">OUTCOME: FLUENCY</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ember via-gold to-jade" />
    </section>
  );
}

