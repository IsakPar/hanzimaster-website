import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "PolymasterLabs - The Architecture of Thought";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D0D0D",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(200, 55, 55, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              backgroundColor: "#C83737",
              borderRadius: "16px",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#FAF9F6",
              }}
            >
              P
            </span>
          </div>

          {/* Brand name */}
          <div
            style={{
              fontSize: "32px",
              fontWeight: "400",
              color: "rgba(250, 249, 246, 0.6)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            PolymasterLabs
          </div>

          {/* Main headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "72px",
                fontWeight: "400",
                color: "#FAF9F6",
                fontFamily: "serif",
              }}
            >
              The Architecture
            </span>
            <span
              style={{
                fontSize: "72px",
                fontWeight: "400",
                color: "#C83737",
                fontFamily: "serif",
              }}
            >
              of Thought.
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              marginTop: "40px",
              fontSize: "24px",
              color: "rgba(250, 249, 246, 0.5)",
              maxWidth: "700px",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Building the cognitive engine that powers language acquisition.
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, #C83737, #4CAF50, #D4AF37, transparent)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}



