"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

// Multi-language representation - subtle background
const languageSymbols = ["言", "語", "말", "λ", "ش"];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink-wash pt-20"
    >
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Language Symbols - very subtle */}
        {languageSymbols.map((char, i) => (
          <motion.span
            key={char}
            className="absolute text-white/[0.015] font-[family-name:var(--font-playfair)] select-none"
            style={{
              fontSize: `${120 + i * 40}px`,
              left: `${5 + i * 22}%`,
              top: `${10 + (i % 3) * 35}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, i % 2 === 0 ? 2 : -2, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        ))}

        {/* Subtle Grid Lines */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white" />
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white" />
          <div className="absolute top-1/3 left-0 right-0 h-px bg-white" />
          <div className="absolute top-2/3 left-0 right-0 h-px bg-white" />
        </div>
      </div>

      {/* Main Content - Text Only */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Opening Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-10"
        >
          <span className="text-xl md:text-2xl font-[family-name:var(--font-playfair)] italic text-text-secondary">
            Language is not a game.
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] text-paper leading-[1.05] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="block"
          >
            It is the
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="block text-gradient-vermillion"
          >
            architecture
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="block"
          >
            of thought.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-text-secondary text-lg md:text-xl leading-relaxed"
        >
          We are building the cognitive engine that powers language acquisition.
          <br className="hidden md:block" />
          <span className="text-paper font-medium">One system.</span>{" "}
          <span className="text-paper font-medium">Every language.</span>{" "}
          <span className="text-vermillion font-semibold">True mastery.</span>
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs font-mono uppercase tracking-widest">
            Enter
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
