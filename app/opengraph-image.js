import { ImageResponse } from "next/og";

export const alt = "Strategeon Softwares — Full Stack Development Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #061424 0%, #0d2942 60%, #12334d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 90px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Accent circle */}
        <div style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(22,136,255,0.18) 0%, transparent 70%)",
          display: "flex",
        }} />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <div style={{
            background: "#07192b",
            border: "1px solid rgba(83,174,255,0.3)",
            borderRadius: 10,
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            <span style={{ color: "#4f7fff", fontSize: 36, fontWeight: 900, lineHeight: 1 }}>S</span>
            <span style={{ color: "#ffffff", fontSize: 36, fontWeight: 900, lineHeight: 1 }}>S</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#ffffff", fontSize: 22, fontWeight: 800, lineHeight: 1.1 }}>Strategeon</span>
            <span style={{ color: "#86a9ff", fontSize: 14, letterSpacing: "0.22em" }}>SOFTWARES</span>
          </div>
        </div>

        {/* Headline */}
        <h1 style={{
          color: "#ffffff",
          fontSize: 72,
          fontWeight: 900,
          margin: "0 0 24px",
          lineHeight: 1.0,
          maxWidth: 900,
        }}>
          We Build.{" "}
          <span style={{ color: "#4f7fff" }}>You Grow.</span>
        </h1>

        {/* Subline */}
        <p style={{
          color: "rgba(255,255,255,0.78)",
          fontSize: 26,
          margin: "0 0 48px",
          maxWidth: 780,
          lineHeight: 1.45,
        }}>
          Production-grade web apps, mobile apps, and the automation behind them.
        </p>

        {/* Pills */}
        <div style={{ display: "flex", gap: 14 }}>
          {["Web Apps", "Mobile", "Cloud", "End-to-End"].map((label) => (
            <div key={label} style={{
              background: "rgba(22,136,255,0.18)",
              border: "1px solid rgba(22,136,255,0.35)",
              borderRadius: 6,
              padding: "8px 18px",
              color: "#86a9ff",
              fontSize: 16,
              fontWeight: 700,
              display: "flex",
            }}>
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
