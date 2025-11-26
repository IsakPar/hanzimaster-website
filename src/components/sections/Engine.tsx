"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Split, Network, Sparkles } from "lucide-react";

// Separate components for each pillar visual
function DualTrackVisual({ colors }: { colors: ColorClasses }) {
  return (
    <div className="relative space-y-4">
      <div className="flex gap-4">
        <div className={`flex-1 p-4 rounded-lg ${colors.bg} border ${colors.border}`}>
          <span className={`text-xs font-mono uppercase tracking-wide ${colors.text} block mb-2`}>
            Vocab Track
          </span>
          <div className="space-y-2">
            <div className="h-2 bg-white/10 rounded w-full" />
            <div className="h-2 bg-white/10 rounded w-3/4" />
            <div className="h-2 bg-white/10 rounded w-5/6" />
          </div>
        </div>
        <div className={`flex-1 p-4 rounded-lg ${colors.bg} border ${colors.border}`}>
          <span className={`text-xs font-mono uppercase tracking-wide ${colors.text} block mb-2`}>
            Grammar Track
          </span>
          <div className="space-y-2">
            <div className="h-2 bg-white/10 rounded w-5/6" />
            <div className="h-2 bg-white/10 rounded w-full" />
            <div className="h-2 bg-white/10 rounded w-2/3" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <span className="text-xs font-mono text-text-muted">Dedicated tracks, not incidental learning</span>
      </div>
    </div>
  );
}

function SmartLayerVisual({ colors }: { colors: ColorClasses }) {
  return (
    <div className="relative">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 150">
        <line x1="75" y1="40" x2="150" y2="75" stroke="currentColor" strokeWidth="1" className="text-white/10" />
        <line x1="225" y1="40" x2="150" y2="75" stroke="currentColor" strokeWidth="1" className="text-white/10" />
        <line x1="75" y1="110" x2="150" y2="75" stroke="currentColor" strokeWidth="1" className="text-white/10" />
        <line x1="225" y1="110" x2="150" y2="75" stroke="currentColor" strokeWidth="1" className="text-white/10" />
      </svg>
      
      <div className="relative grid grid-cols-3 gap-4 items-center py-4">
        <div className="space-y-8">
          <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-xs font-mono text-text-muted">
            読
          </div>
          <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-xs font-mono text-text-muted">
            書
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className={`w-16 h-16 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center`}>
            <Network className={`w-8 h-8 ${colors.text}`} />
          </div>
        </div>
        
        <div className="space-y-8 flex flex-col items-end">
          <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-xs font-mono text-text-muted">
            聴
          </div>
          <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-xs font-mono text-text-muted">
            話
          </div>
        </div>
      </div>
      
      <div className="text-center mt-2">
        <span className={`text-xs font-mono ${colors.text}`}>Local-first • Privacy-focused</span>
      </div>
    </div>
  );
}

function AITutorVisual({ colors }: { colors: ColorClasses }) {
  return (
    <div className="relative space-y-4">
      <div className={`p-4 rounded-lg ${colors.bg} border ${colors.border}`}>
        <div className="flex items-start gap-3">
          <div className={`w-8 h-8 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}>
            <Sparkles className={`w-4 h-4 ${colors.text}`} />
          </div>
          <div className="space-y-2 flex-1">
            <div className="h-2 bg-white/20 rounded w-full" />
            <div className="h-2 bg-white/20 rounded w-4/5" />
            <div className="h-2 bg-white/10 rounded w-3/5" />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1 p-3 rounded-lg bg-white/5 border border-white/10 text-center">
          <span className="text-xs text-text-muted">Explains errors</span>
        </div>
        <div className="flex-1 p-3 rounded-lg bg-white/5 border border-white/10 text-center">
          <span className="text-xs text-text-muted">Creates drills</span>
        </div>
      </div>
    </div>
  );
}

type ColorClasses = {
  bg: string;
  border: string;
  text: string;
  glow: string;
};

type Pillar = {
  id: string;
  icon: typeof Split;
  title: string;
  color: "jade" | "vermillion" | "gold";
  description: string;
  visualType: "dualtrack" | "smartlayer" | "aitutor";
};

const pillars: Pillar[] = [
  {
    id: "01",
    icon: Split,
    title: "Dual Track Learning",
    color: "jade",
    description:
      "Most apps rely on incidental vocabulary through gamified exercises. We take a different approach: dedicated tracks for vocabulary AND grammar, each optimized for its purpose. Master both systematically, not accidentally.",
    visualType: "dualtrack",
  },
  {
    id: "02",
    icon: Network,
    title: "The Smart Layer",
    color: "vermillion",
    description:
      "Every interaction is tracked and connected. Your knowledge graph grows with you—understanding what you know, what you struggle with, and what's ready to learn next. All processed locally on your device. Your data stays yours.",
    visualType: "smartlayer",
  },
  {
    id: "03",
    icon: Sparkles,
    title: "AI Tutor",
    color: "gold",
    description:
      "When you stumble, our AI doesn't just mark it wrong. It explains why, generates targeted practice, and adapts to your specific gaps. Like having a personal tutor available 24/7, powered by your own learning data.",
    visualType: "aitutor",
  },
];

const colorClasses: Record<Pillar["color"], ColorClasses> = {
  jade: {
    bg: "bg-jade/10",
    border: "border-jade/30",
    text: "text-jade",
    glow: "bg-jade/20",
  },
  vermillion: {
    bg: "bg-vermillion/10",
    border: "border-vermillion/30",
    text: "text-vermillion",
    glow: "bg-vermillion/20",
  },
  gold: {
    bg: "bg-gold/10",
    border: "border-gold/30",
    text: "text-gold",
    glow: "bg-gold/20",
  },
};

export function Engine() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderVisual = (visualType: Pillar["visualType"], colors: ColorClasses) => {
    switch (visualType) {
      case "dualtrack":
        return <DualTrackVisual colors={colors} />;
      case "smartlayer":
        return <SmartLayerVisual colors={colors} />;
      case "aitutor":
        return <AITutorVisual colors={colors} />;
    }
  };

  return (
    <section
      id="engine"
      ref={ref}
      className="relative py-32 bg-ink overflow-hidden"
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-xs font-mono uppercase tracking-widest text-text-muted">
              The Blueprint
            </span>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-white/20" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-paper max-w-3xl">
            Built different.{" "}
            <span className="text-gradient-jade">By design.</span>
          </h2>

          <p className="mt-6 text-xl text-text-secondary max-w-2xl">
            Three pillars that separate real acquisition from gamified illusion.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="space-y-32">
          {pillars.map((pillar, index) => {
            const colors = colorClasses[pillar.color];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-12 lg:gap-24 items-center ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Text Content */}
                <div className={isEven ? "md:order-1" : "md:order-2"}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center border ${colors.border}`}
                    >
                      <pillar.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <span
                      className={`text-xs font-mono uppercase tracking-widest ${colors.text}`}
                    >
                      Pillar {pillar.id}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-paper mb-6">
                    {pillar.title}
                  </h3>

                  <p className="text-lg text-text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Visual */}
                <div className={isEven ? "md:order-2" : "md:order-1"}>
                  <div className="relative p-8 rounded-2xl bg-ink-light border border-white/5 overflow-hidden">
                    {/* Glow */}
                    <div
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 ${colors.glow} rounded-full blur-[80px]`}
                    />
                    <div className="relative">
                      {renderVisual(pillar.visualType, colors)}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
