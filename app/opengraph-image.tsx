import { ImageResponse } from "next/og"

export const alt = "Bolnivo - AI assistants for websites and customer conversations"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

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
          padding: "80px",
          background: "#111116",
          color: "white",
        }}
      >
        <div style={{ fontSize: 140, fontWeight: 900, letterSpacing: "-0.04em" }}>Bolnivo</div>
        <div style={{ fontSize: 44, color: "rgba(255,255,255,0.75)", marginTop: 16 }}>
          AI assistants for websites and customer channels
        </div>
        <div style={{ fontSize: 30, color: "rgba(255,255,255,0.5)", marginTop: 40 }}>
          WhatsApp · Instagram · Messenger · bolnivo.me
        </div>
      </div>
    ),
    size
  )
}
