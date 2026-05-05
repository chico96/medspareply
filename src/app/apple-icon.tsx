import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1f3a32",
          color: "#f4efe7",
          fontFamily:
            '"Geist", "Inter", "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 600,
            letterSpacing: "-0.05em",
            lineHeight: 1,
            display: "flex",
          }}
        >
          SR
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#d8c3a3",
            marginTop: 14,
            display: "flex",
          }}
        >
          SpaReply
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
