import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#E23D28",
          borderRadius: "7px",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M18 12H38C46.8366 12 54 19.1634 54 28C54 36.8366 46.8366 44 38 44H28V52H18V12Z"
            fill="#FAF9F6"
          />
          <path
            d="M28 22H36C38.7614 22 41 24.2386 41 27C41 29.7614 38.7614 32 36 32H28V22Z"
            fill="#E23D28"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}



