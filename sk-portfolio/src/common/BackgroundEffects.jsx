import React from "react"
function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            `radial-gradient(circle at 18% 18%, rgba(var(--color-blood-rgb,54,147,244),0.22), transparent 28%),
             radial-gradient(circle at 80% 12%, rgba(255,255,255,0.06), transparent 22%),
             linear-gradient(90deg, rgba(var(--color-blood-rgb,54,147,244),0.12) 0%, rgba(var(--color-coal-rgb,8,8,10),1) 100%)`,
        }}
      />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{ background: `linear-gradient(to bottom, rgba(var(--color-blood-rgb,54,147,244),0.18), transparent)` }}
      />
    </div>
  );
}
export default BackgroundEffects