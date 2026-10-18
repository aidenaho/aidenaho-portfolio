import { ImageResponse } from "next/og";

export const alt = "Aiden Aho, software developer";
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
          justifyContent: "space-between",
          padding: 80,
          background: "#fafaf9",
          color: "#171717",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 600 }}>aiden aho</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, letterSpacing: 4, color: "#666666" }}>SOFTWARE DEVELOPER</div>
          <div style={{ fontSize: 68, fontWeight: 600, marginTop: 16, lineHeight: 1.1 }}>
            Hi, I&apos;m Aiden. I build useful software.
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#666666" }}>Creator of Dropdesk</div>
      </div>
    ),
    size,
  );
}
