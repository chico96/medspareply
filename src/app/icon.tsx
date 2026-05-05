import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#1f3a32",
          color: "#f4efe7",
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: "-0.04em",
          fontFamily:
            '"Geist", "Inter", "Helvetica Neue", Arial, sans-serif',
          borderRadius: 14,
        }}
      >
        SR
      </div>
    ),
    {
      ...size,
    }
  );
}
