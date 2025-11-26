"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import Link from "next/link";

type Status = "loading" | "success" | "error";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    const unsubscribe = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787";
        const response = await fetch(`${apiUrl}/v1/waitlist/unsubscribe`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (response.ok) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    };

    unsubscribe();
  }, [token]);

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-md w-full text-center"
      >
        {/* Logo */}
        <Link href="/" className="inline-block mb-12">
          <div className="w-12 h-12 bg-vermillion rounded-xl flex items-center justify-center mx-auto">
            <span className="text-paper text-xl font-bold">P</span>
          </div>
        </Link>

        {/* Content */}
        <div className="bg-ink-light rounded-2xl border border-white/5 p-10">
          {status === "loading" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                <Loader2 className="w-8 h-8 text-text-muted animate-spin" />
              </div>
              <div>
                <h1 className="text-2xl font-[family-name:var(--font-playfair)] text-paper mb-2">
                  Processing...
                </h1>
                <p className="text-text-secondary">
                  Please wait while we update your preferences.
                </p>
              </div>
            </motion.div>
          )}

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-jade/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-jade" />
              </div>
              <div>
                <h1 className="text-2xl font-[family-name:var(--font-playfair)] text-paper mb-2">
                  You&apos;ve been removed.
                </h1>
                <p className="text-text-secondary">
                  You will no longer receive emails from us about the waitlist.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-xs text-text-muted">
                  Changed your mind?{" "}
                  <Link href="/#footer" className="text-vermillion hover:underline">
                    Re-join the waitlist
                  </Link>
                </p>
              </div>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-ember/10 rounded-full flex items-center justify-center mx-auto">
                <XCircle className="w-8 h-8 text-ember" />
              </div>
              <div>
                <h1 className="text-2xl font-[family-name:var(--font-playfair)] text-paper mb-2">
                  Link expired or invalid.
                </h1>
                <p className="text-text-secondary">
                  This unsubscribe link may have expired or is no longer valid.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-vermillion text-paper text-sm font-semibold rounded hover:bg-vermillion-dark transition-colors"
                >
                  Return Home
                </Link>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-text-muted">
          © 2025 PolymasterLabs Inc.
        </p>
      </motion.div>
    </main>
  );
}

// Loading fallback for Suspense
function LoadingFallback() {
  return (
    <main className="min-h-screen bg-ink flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-12 h-12 bg-vermillion rounded-xl flex items-center justify-center mx-auto mb-8">
          <span className="text-paper text-xl font-bold">P</span>
        </div>
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto">
          <Loader2 className="w-8 h-8 text-text-muted animate-spin" />
        </div>
      </div>
    </main>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <UnsubscribeContent />
    </Suspense>
  );
}

