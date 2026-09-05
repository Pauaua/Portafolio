import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const alt = "Paulina Acuña Paiva — Desarrolladora Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#09090f",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(185,123,247,0.35), transparent 55%), radial-gradient(circle at 10% 90%, rgba(192,132,252,0.25), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#b97bf7",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            color: "#f5f3ff",
            fontWeight: 500,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          {personalInfo.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 42,
            color: "#d8b4fe",
            fontWeight: 300,
          }}
        >
          {personalInfo.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#9d9db8",
            marginTop: 40,
          }}
        >
          Java Spring Boot · Python · React · Next.js — {personalInfo.location}
        </div>
      </div>
    ),
    { ...size }
  );
}
