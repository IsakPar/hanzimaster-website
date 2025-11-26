"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send, Info } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "existing" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787";
      const response = await fetch(`${apiUrl}/v1/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "polymaster-website",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.isExisting) {
          // Email already on waitlist
          setStatus("existing");
          setMessage("You're already on the list!");
        } else {
          // New signup
          setStatus("success");
          setMessage("Your signal has been received.");
        }
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Transmission failed. Please retry.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Check your connection.");
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <footer id="footer" className="relative py-32 bg-ink overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-vermillion/5 via-transparent to-transparent" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Success/Existing Flash */}
      <AnimatePresence>
        {(status === "success" || status === "existing") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 pointer-events-none ${
              status === "success" ? "bg-jade" : "bg-gold"
            }`}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] italic text-paper leading-relaxed">
            "The limits of my language mean the limits of my world."
          </p>
          <footer className="mt-4 text-sm text-text-muted">
            — Ludwig Wittgenstein
          </footer>
        </motion.blockquote>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-16" />

        {/* Waitlist Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-text-muted mb-8">
            {status === "success" ? (
              <span className="text-jade flex items-center justify-center gap-2">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex"
                >
                  <CheckCircle2 className="w-4 h-4" />
                </motion.span>
                Signal Locked
              </span>
            ) : status === "existing" ? (
              <span className="text-gold flex items-center justify-center gap-2">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex"
                >
                  <Info className="w-4 h-4" />
                </motion.span>
                Already Registered
              </span>
            ) : (
              "Expand Your World"
            )}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={status === "loading" || status === "success" || status === "existing"}
                required
                className="w-full bg-transparent border-b-2 border-white/20 py-4 text-center text-lg text-paper placeholder:text-text-muted focus:outline-none focus:border-vermillion transition-colors disabled:opacity-50"
              />

              {/* Animated Underline */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-vermillion origin-center"
                initial={{ scaleX: 0 }}
                whileFocus={{ scaleX: 1 }}
                animate={
                  status === "success" 
                    ? { scaleX: 1, backgroundColor: "#00A878" } 
                    : status === "existing"
                    ? { scaleX: 1, backgroundColor: "#D4AF37" }
                    : {}
                }
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === "loading" || status === "success" || status === "existing"}
              className={`
                inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300
                ${
                  status === "success"
                    ? "bg-jade text-paper scale-105"
                    : status === "existing"
                    ? "bg-gold text-ink scale-105"
                    : "bg-vermillion text-paper hover:bg-vermillion-dark hover:scale-105"
                }
                disabled:cursor-not-allowed
              `}
              whileHover={
                status !== "loading" && status !== "success" && status !== "existing"
                  ? { scale: 1.02 }
                  : {}
              }
              whileTap={
                status !== "loading" && status !== "success" && status !== "existing"
                  ? { scale: 0.98 }
                  : {}
              }
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Transmitting...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Confirmed
                </>
              ) : status === "existing" ? (
                <>
                  <Info className="w-5 h-5" />
                  Already Listed
                </>
              ) : (
                <>
                  Join Waitlist
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>

          {/* Status Messages */}
          <AnimatePresence>
            {message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`mt-6 text-sm ${
                  status === "success" 
                    ? "text-jade" 
                    : status === "existing"
                    ? "text-gold"
                    : "text-ember"
                }`}
              >
                {message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Seal / Stamp Animation on Success or Existing */}
        <AnimatePresence>
          {(status === "success" || status === "existing") && (
            <motion.div
              initial={{ scale: 0, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mt-12 inline-flex flex-col items-center"
            >
              <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center relative ${
                status === "success" ? "border-jade" : "border-gold"
              }`}>
                <div className={`absolute inset-2 rounded-full border-2 ${
                  status === "success" ? "border-jade/50" : "border-gold/50"
                }`} />
                <span className={`text-3xl font-[family-name:var(--font-playfair)] ${
                  status === "success" ? "text-jade" : "text-gold"
                }`}>
                  {status === "success" ? "准" : "已"}
                </span>
              </div>
              <span className={`mt-3 text-[10px] font-mono uppercase tracking-widest ${
                status === "success" ? "text-jade" : "text-gold"
              }`}>
                {status === "success" ? "Approved" : "Already Listed"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Links */}
        <div className="mt-24 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[10px] text-text-muted uppercase tracking-widest">
            <span>© 2025 PolymasterLabs Inc.</span>
            <span className="hidden sm:block">•</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

