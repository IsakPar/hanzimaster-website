"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Mic, BarChart3, DollarSign, Headphones } from "lucide-react";

const books = [
  { title: "The Monkey King", genre: "Classic Fiction", chapter: "Ch 1", match: 92 },
  { title: "The Art of War", genre: "Philosophy", chapter: "Ch 3", match: 87 },
  { title: "Modern Beijing", genre: "Contemporary", chapter: "Ch 1", match: 78 },
];

export function Library() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="product"
      ref={ref}
      className="relative py-32 bg-ink-light overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold mb-4 block">
                The Library
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-paper leading-[1.1]">
                The Library{" "}
                <span className="block text-gold italic">is alive.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Legacy players suffer from the{" "}
                <span className="text-ember font-medium">"Content Drought."</span>{" "}
                Their libraries are small, and their grading is blunt. They dump you
                into generic buckets like "Beginner" or "Intermediate."
              </p>
              <p>
                Our Smart Layer changes the physics of reading. We don't just tag a
                story as "HSK 3." We analyze your personal knowledge graph and say:
              </p>
              <blockquote className="border-l-2 border-gold pl-6 py-2 text-paper font-medium italic">
                "You know 92% of the words in this audiobook. It is perfect for you."
              </blockquote>
              <p>
                Every story is equipped with active recall quizzes and speaking
                practice. You don't just consume content; you conquer it.
              </p>
            </div>

            {/* Creator Studio Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 p-6 bg-ink rounded-xl border border-white/10 relative overflow-hidden group hover:border-gold/30 transition-colors"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-gold text-ink text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                Coming Soon
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                  <Mic className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-[family-name:var(--font-playfair)] font-bold text-paper">
                  The Creator Studio
                </h4>
              </div>

              <p className="text-text-secondary text-sm mb-6">
                Are you a storyteller? Publish your own audiobooks and lessons. Our
                engine handles the grading and distribution.{" "}
                <span className="text-gold font-semibold">
                  You get paid for performance.
                </span>
              </p>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex gap-6 text-xs font-medium text-text-muted">
                  <span className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" /> Analytics
                  </span>
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" /> Revenue Share
                  </span>
                </div>
                <span className="text-[10px] font-bold text-jade flex items-center gap-1 bg-jade/10 px-3 py-1.5 rounded-full">
                  Verified Quality
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Book Cards Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />

            <div className="relative space-y-4">
              {books.map((book, index) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`bg-ink rounded-xl border p-6 transition-all duration-300 hover:scale-[1.02] ${
                    index === 0
                      ? "border-gold/40 shadow-lg shadow-gold/10"
                      : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                      <div
                        className={`w-14 h-20 rounded-lg flex items-center justify-center ${
                          index === 0 ? "bg-gold/20" : "bg-white/5"
                        }`}
                      >
                        {index === 0 ? (
                          <Headphones className="w-6 h-6 text-gold" />
                        ) : (
                          <BookOpen className="w-6 h-6 text-text-muted" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-lg font-[family-name:var(--font-playfair)] font-bold text-paper">
                          {book.title}
                        </h4>
                        <p className="text-xs text-text-muted uppercase tracking-wide">
                          {book.genre} • {book.chapter}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`block text-3xl font-bold ${
                          index === 0 ? "text-gold" : "text-text-secondary"
                        }`}
                      >
                        {book.match}%
                      </span>
                      <span className="text-[10px] text-text-muted uppercase tracking-wide">
                        Comprehension
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/5 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${book.match}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-2 rounded-full ${
                        index === 0 ? "bg-gold" : "bg-text-muted"
                      }`}
                    />
                  </div>

                  {index === 0 && (
                    <p className="text-xs text-gold/80 italic">
                      "Perfect active zone. 8 unknown words."
                    </p>
                  )}
                </motion.div>
              ))}

              {/* Generic Faded Card */}
              <div className="bg-ink/50 rounded-xl border border-dashed border-white/10 p-6 opacity-40">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="w-14 h-20 bg-white/5 rounded-lg" />
                    <div>
                      <h4 className="text-lg font-[family-name:var(--font-playfair)] text-text-muted">
                        Generic Textbook
                      </h4>
                      <p className="text-xs text-text-muted uppercase">
                        HSK 3 Standard
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-text-muted">???</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

