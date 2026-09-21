import React from "react"

const positionMap = {
  top: ["50%", "12%"],
  right: ["88%", "50%"],
  bottom: ["50%", "88%"],
  left: ["12%", "50%"],
  "top-left": ["18%", "18%"],
  "top-right": ["82%", "18%"],
  "bottom-left": ["18%", "82%"],
  "bottom-right": ["82%", "82%"],
  center: ["50%", "50%"],
}

function BackgroundEffects({ position = "top-left" }) {
  const [glowX, glowY] = positionMap[position] ?? positionMap["top-left"];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ "--glow-x": glowX, "--glow-y": glowY }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            `radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(var(--color-blood-rgb,54,147,244),0.22), transparent 28%),
             radial-gradient(circle at 80% 12%, rgba(255,255,255,0.06), transparent 22%),
             linear-gradient(90deg, rgba(var(--color-blood-rgb,54,147,244),0.12) 0%, rgba(var(--color-coal-rgb,8,8,10),1) 100%)`,
        }}
      />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 42% 28% at var(--glow-x) var(--glow-y), rgba(var(--color-blood-rgb,54,147,244),0.18), transparent 72%)`,
        }}
      />
    </div>
  );
}
export default BackgroundEffects