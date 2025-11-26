"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-ink flex items-center justify-center px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Background Character */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[40vw] font-[family-name:var(--font-playfair)] text-white/[0.01] select-none">
          誤
        </span>
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Logo */}
        <Link href="/" className="inline-block mb-12">
          <div className="w-12 h-12 bg-vermillion rounded-xl flex items-center justify-center mx-auto">
            <span className="text-paper text-xl font-bold">P</span>
          </div>
        </Link>

        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-ember/10 rounded-full flex items-center justify-center mx-auto">
            <span className="text-5xl font-[family-name:var(--font-playfair)] text-ember">!</span>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-10">
          <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-paper">
            Something went wrong.
          </h1>
          <p className="text-text-secondary text-lg max-w-sm mx-auto">
            We encountered an unexpected error. Please try again or return home.
          </p>
          {error.digest && (
            <p className="text-xs font-mono text-text-muted">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-ink-light border border-white/10 text-paper font-semibold rounded hover:bg-ink-muted transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 bg-vermillion text-paper font-semibold rounded hover:bg-vermillion-dark transition-colors"
          >
            Return Home
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-16 text-xs text-text-muted">
          © 2025 PolymasterLabs Inc.
        </p>
      </div>
    </main>
  );
}

