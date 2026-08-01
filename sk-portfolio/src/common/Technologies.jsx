import React from "react";

// Renders a list of technology tags with a rotating set of color styles
export default function Technologies({ items = [], className = "" }) {
  // list of RGB colors used for left-side theme color in gradient badges
  const colorRgb = [
    "54,147,244", // blue
    "16,185,129", // emerald
    "14,165,233", // sky
    "236,72,153", // rose
    "245,158,11", // amber
    "99,102,241", // indigo
    "139,92,246", // violet
    "20,184,166", // teal
    "132,204,22", // lime
    "71,85,105", // slate
  ];

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {items.map((tech, i) => {
        const name = typeof tech === "string" ? tech : tech.name || tech;
        const rgb = colorRgb[i % colorRgb.length];

        const style = {
          background: `linear-gradient(90deg, rgba(${rgb}, 0.18) 0%, rgba(var(--color-coal-rgb,8,8,10), 0.04) 100%)`,
          border: `1px solid rgba(${rgb}, 0.18)`,
          boxShadow: `0 4px 18px rgba(${rgb}, 0.06)`,
          color: "white",
        };

        return (
          <span
            key={name + i}
            style={style}
            className="rounded px-4 py-2 text-sm font-bold transition transform  "
          >
            {name}
          </span>
        );
      })}
    </div>
  );
}

 