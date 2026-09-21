import { useEffect, useRef } from "react";
import React from "react"

function CursorScrollEffect({ children, className = "" }) {
  const effectRef = useRef(null);

  useEffect(() => {
    const effect = effectRef.current;
    if (!effect) return undefined;

    const updatePointer = (event) => {
      const bounds = effect.getBoundingClientRect();
      const x = Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100));
      const y = Math.min(100, Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100));

      effect.style.setProperty("--tilt-x", `${((y / 100) - 0.5) * -4}deg`);
      effect.style.setProperty("--tilt-y", `${((x / 100) - 0.5) * 4}deg`);
      effect.classList.add("cursor-scroll-effect--active");
    };

    const resetPointer = () => {
      effect.classList.remove("cursor-scroll-effect--active");
      effect.style.setProperty("--tilt-x", "0deg");
      effect.style.setProperty("--tilt-y", "0deg");
    };

    effect.addEventListener("pointermove", updatePointer);
    effect.addEventListener("pointerleave", resetPointer);

    return () => {
      effect.removeEventListener("pointermove", updatePointer);
      effect.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <div ref={effectRef} className={`cursor-scroll-effect ${className}`}>
      <div className="cursor-scroll-effect__content">{children}</div>
    </div>
  );
}

export default CursorScrollEffect;