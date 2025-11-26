"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Calendar, Globe, Lock, BookOpen } from "lucide-react";

const pipeline = [
  {
    lang: "Korean",
    desc: "The Logic of Hangul",
    status: "R&D Phase",
    eta: "2027",
  },
  {
    lang: "Japanese",
    desc: "The Mixed Script Challenge",
    status: "Planned",
    eta: "2028",
  },
];

const hskLevels = [
  { level: "HSK 1-3", words: "1,200", desc: "Foundation" },
  { level: "HSK 4-6", words: "5,000", desc: "Intermediate" },
  { level: "HSK 7-9", words: "11,000", desc: "Advanced" },
];

export function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-ink overflow-hidden">
      {/* Background Character */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[40vw] font-[family-name:var(--font-playfair)] text-white/[0.01] select-none">
          中
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: The Flagship */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vermillion text-paper text-xs font-bold uppercase tracking-widest mb-6">
                <Rocket className="w-4 h-4" />
                Deployment 01
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] text-paper leading-none mb-6">
                Hanzi
                <span className="text-vermillion">Master.</span>
              </h2>

              <p className="text-xl text-text-secondary leading-relaxed max-w-lg">
                The complete Chinese learning system. From your first character to 
                full fluency. Built on the modern{" "}
                <span className="text-paper font-semibold">HSK 3.0 curriculum</span>
                —the most comprehensive standard for Mandarin proficiency.
              </p>
            </div>

            {/* HSK Levels */}
            <div className="space-y-3">
              {hskLevels.map((item, i) => (
                <motion.div
                  key={item.level}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-ink-light rounded-lg border border-white/5"
                >
                  <div className="w-10 h-10 bg-vermillion/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-vermillion" />
                  </div>
                  <div className="flex-1">
                    <span className="text-paper font-semibold">{item.level}</span>
                    <span className="text-text-muted text-sm ml-2">• {item.desc}</span>
                  </div>
                  <span className="text-xs font-mono text-vermillion">{item.words} words</span>
                </motion.div>
              ))}
            </div>

            {/* Launch Status */}
            <div className="p-6 bg-ink-light rounded-xl border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-[family-name:var(--font-playfair)] font-bold text-paper">
                  Status: Alpha
                </span>
                <span className="text-xs font-mono text-text-muted uppercase flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Launch Q1 2026
                </span>
              </div>

              <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "75%" } : {}}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                  className="bg-gradient-to-r from-vermillion to-gold h-full rounded-full relative"
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-paper rounded-full shadow-lg" />
                </motion.div>
              </div>

              <div className="flex justify-between text-[10px] uppercase tracking-widest text-text-muted">
                <span>Core Engine</span>
                <span>Global Release</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual + Pipeline */}
          <div className="space-y-10">
            {/* Product Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] bg-ink-light rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center"
            >
              {/* Noise Texture */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Radial Glow */}
              <div className="absolute inset-0 bg-gradient-radial from-vermillion/10 via-transparent to-transparent" />

              <div className="text-center z-10 space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                      : {}
                  }
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="relative"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 text-[100px] md:text-[140px] font-[family-name:var(--font-playfair)] text-vermillion/30 blur-2xl">
                    中文
                  </div>
                  <span className="relative text-[100px] md:text-[140px] font-[family-name:var(--font-playfair)] text-paper leading-none">
                    中文
                  </span>
                </motion.div>

                <div className="text-xs font-mono text-text-muted uppercase tracking-widest">
                  Zero to Fluency
                </div>
              </div>
            </motion.div>

            {/* Pipeline List */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-6 pb-3 border-b border-white/10">
                Future Deployments
              </h4>

              <div className="space-y-3">
                {pipeline.map((item, i) => (
                  <motion.div
                    key={item.lang}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-ink-light/50 border border-white/5 hover:bg-ink-light hover:border-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-text-muted group-hover:bg-white/10 transition-colors">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-[family-name:var(--font-playfair)] font-bold text-paper">
                          {item.lang}
                        </h5>
                        <p className="text-xs text-text-muted">{item.desc}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-xs font-medium text-text-muted">
                        <Lock className="w-3 h-3" /> {item.status}
                      </div>
                      <span className="text-[10px] font-mono text-text-muted/60">
                        ETA {item.eta}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
