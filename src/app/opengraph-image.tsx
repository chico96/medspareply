import { ImageResponse } from "next/og";

export const alt =
  "SpaReply — Review replies + local SEO toolkit for med spas. $49 one-time, 7-day refund.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#f4efe7";
const PAPER = "#ffffff";
const INK = "#10171a";
const INK_MUTED = "#4f5a59";
const INK_SOFT = "#8a8f8b";
const RULE = "rgba(16, 23, 26, 0.10)";
const RULE_STRONG = "rgba(16, 23, 26, 0.18)";
const ACCENT = "#1f3a32";
const ACCENT_TINT = "#d6e1dd";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BG,
          color: INK,
          padding: "44px 64px 60px",
          fontFamily:
            '"Geist", "Inter", "Helvetica Neue", Arial, sans-serif',
        }}
      >
        {/* Header bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 16,
            borderBottom: `1px solid ${RULE}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: INK,
                color: BG,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              SR
            </div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 600,
                letterSpacing: "-0.025em",
                color: INK,
              }}
            >
              SpaReply
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: ACCENT,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                background: ACCENT,
                display: "block",
              }}
            />
            spareply.com
          </div>
        </div>

        {/* Main */}
        <div
          style={{
            display: "flex",
            flex: 1,
            paddingTop: 28,
            gap: 44,
          }}
        >
          {/* Left column — copy */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1.15,
              maxWidth: 660,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: ACCENT,
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 999,
                  background: ACCENT,
                  display: "block",
                }}
              />
              Review replies + local SEO
            </div>
            <div
              style={{
                fontSize: 64,
                lineHeight: 1.04,
                letterSpacing: "-0.038em",
                fontWeight: 500,
                color: INK,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>The front-desk system</span>
              <span>for med-spa review</span>
              <span>replies, done right.</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 18,
                marginTop: 38,
              }}
            >
              <div
                style={{
                  fontSize: 80,
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  color: ACCENT,
                  lineHeight: 1,
                  display: "flex",
                }}
              >
                $49
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: 10,
                  color: INK_MUTED,
                }}
              >
                <span style={{ fontSize: 18, fontWeight: 500, color: INK }}>
                  one-time
                </span>
                <span style={{ fontSize: 16, marginTop: 2 }}>
                  7-day satisfaction refund
                </span>
              </div>
            </div>
          </div>

          {/* Right column — review reply card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 420,
              borderRadius: 18,
              background: PAPER,
              border: `1px solid ${RULE_STRONG}`,
              boxShadow:
                "0 1px 0 rgba(16, 23, 26, 0.04), 0 30px 70px -40px rgba(16, 23, 26, 0.32)",
              padding: 26,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  background: ACCENT_TINT,
                  color: ACCENT,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                M
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: INK,
                  }}
                >
                  M. Reyes
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: INK_SOFT,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#c89a3c"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </span>
                  <span>· Hydrafacial</span>
                </span>
              </div>
            </div>

            <div
              style={{
                marginTop: 20,
                fontSize: 16,
                lineHeight: 1.5,
                color: INK,
                display: "flex",
              }}
            >
              “Loved my Hydrafacial with Mia. The spa felt calm and my skin
              looked refreshed.”
            </div>

            <div
              style={{
                marginTop: 24,
                paddingTop: 20,
                borderTop: `1px solid ${RULE}`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: ACCENT,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: ACCENT,
                    display: "block",
                  }}
                />
                Reply · toolkit-quality
              </div>
              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.45,
                  color: INK_MUTED,
                  display: "flex",
                }}
              >
                Thank you for trusting us with your visit. Mia and the team
                appreciated caring for you — we look forward to welcoming you
                back soon.
              </div>
            </div>

            <div
              style={{
                marginTop: 18,
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {[
                "No treatment confirmed",
                "No outcome promised",
                "Under 35 words",
              ].map((label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    color: ACCENT,
                    background: ACCENT_TINT,
                    padding: "5px 10px",
                    borderRadius: 999,
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 999,
                      background: ACCENT,
                      display: "block",
                    }}
                  />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer fact strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: 36,
            paddingTop: 26,
            borderTop: `1px solid ${RULE}`,
          }}
        >
          {[
            { value: "31-page", label: "complete PDF" },
            { value: "20", label: "paste-ready templates" },
            { value: "HIPAA-aware", label: "wording + checklist" },
            { value: "Stripe", label: "instant download" },
          ].map((fact) => (
            <div
              key={fact.value}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                style={{
                  fontSize: 19,
                  fontWeight: 600,
                  color: INK,
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                }}
              >
                {fact.value}
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: INK_MUTED,
                  lineHeight: 1,
                }}
              >
                {fact.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
