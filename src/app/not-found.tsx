import Link from "next/link";

export default function NotFound() {
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
          迷
        </span>
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Logo */}
        <Link href="/" className="inline-block mb-12">
          <div className="w-12 h-12 bg-vermillion rounded-xl flex items-center justify-center mx-auto">
            <span className="text-paper text-xl font-bold">P</span>
          </div>
        </Link>

        {/* Error Code */}
        <div className="mb-8">
          <span className="text-[120px] md:text-[180px] font-[family-name:var(--font-playfair)] text-paper leading-none block">
            4<span className="text-vermillion">0</span>4
          </span>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-10">
          <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-paper">
            Lost in translation.
          </h1>
          <p className="text-text-secondary text-lg max-w-sm mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-vermillion text-paper font-semibold rounded hover:bg-vermillion-dark transition-colors"
        >
          Return Home
        </Link>

        {/* Footer */}
        <p className="mt-16 text-xs text-text-muted">
          © 2025 PolymasterLabs Inc.
        </p>
      </div>
    </main>
  );
}

