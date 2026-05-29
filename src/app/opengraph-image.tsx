import { ImageResponse } from "next/og";

export const alt = "Christina Child, Marketing & Go-to-Market Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#1b1016",
          padding: "90px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#ff3e84",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 8,
          }}
        >
          MARKETING & GTM LEADER
        </div>
        <div
          style={{
            display: "flex",
            color: "#fff7f1",
            fontSize: 120,
            fontWeight: 800,
            marginTop: 20,
            lineHeight: 1.05,
          }}
        >
          Christina Child
        </div>
        <div
          style={{
            display: "flex",
            width: 300,
            height: 18,
            background: "#ffce1f",
            marginTop: 10,
          }}
        />
        <div
          style={{
            display: "flex",
            color: "rgba(255,247,241,0.85)",
            fontSize: 38,
            marginTop: 48,
            maxWidth: 940,
          }}
        >
          12 years building B2B SaaS demand. $6M+ pipeline influenced.
        </div>
      </div>
    ),
    { ...size },
  );
}
