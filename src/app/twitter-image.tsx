import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "PolymasterLabs - Language is not a game";
export const size = {
  width: 1200,
  height: 600,
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
            "radial-gradient(circle at 20% 30%, rgba(200, 55, 55, 0.2) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(76, 175, 80, 0.15) 0%, transparent 40%)",
        }}
      >
        {/* Floating characters background */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            gap: "100px",
            opacity: 0.03,
          }}
        >
          <span style={{ fontSize: "300px", color: "#FAF9F6" }}>言</span>
          <span style={{ fontSize: "300px", color: "#FAF9F6" }}>語</span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Logo and brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "56px",
                height: "56px",
                backgroundColor: "#C83737",
                borderRadius: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#FAF9F6",
                }}
              >
                P
              </span>
            </div>
            <span
              style={{
                fontSize: "24px",
                color: "#FAF9F6",
                letterSpacing: "0.1em",
              }}
            >
              PolymasterLabs
            </span>
          </div>

          {/* Opening quote */}
          <div
            style={{
              fontSize: "28px",
              fontStyle: "italic",
              color: "rgba(250, 249, 246, 0.5)",
              marginBottom: "24px",
            }}
          >
            Language is not a game.
          </div>

          {/* Main headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span
              style={{
                fontSize: "64px",
                fontWeight: "400",
                color: "#FAF9F6",
                fontFamily: "serif",
              }}
            >
              It is the
            </span>
            <span
              style={{
                fontSize: "64px",
                fontWeight: "400",
                color: "#C83737",
                fontFamily: "serif",
              }}
            >
              architecture of thought.
            </span>
          </div>

          {/* CTA hint */}
          <div
            style={{
              marginTop: "48px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 24px",
              backgroundColor: "rgba(200, 55, 55, 0.2)",
              borderRadius: "100px",
              border: "1px solid rgba(200, 55, 55, 0.3)",
            }}
          >
            <span style={{ fontSize: "18px", color: "#FAF9F6" }}>
              Join the Waitlist
            </span>
            <span style={{ fontSize: "18px", color: "#C83737" }}>→</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            display: "flex",
            gap: "24px",
            fontSize: "14px",
            color: "rgba(250, 249, 246, 0.4)",
          }}
        >
          <span>HanziMaster</span>
          <span>•</span>
          <span>HSK 3.0</span>
          <span>•</span>
          <span>Zero to Fluency</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}



