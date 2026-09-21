import  React,{ useEffect, useRef } from "react";

function CursorHoverEffect({ className = "" }) {
  const effectRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const effect = effectRef.current;
    if (!effect) return undefined;

    const updatePointer = (event) => {
      const previous = pointerRef.current;
      const deltaX = event.clientX - previous.x;
      const deltaY = event.clientY - previous.y;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;

      effect.style.setProperty("--cursor-x", `${event.clientX}px`);
      effect.style.setProperty("--cursor-y", `${event.clientY}px`);
      effect.style.setProperty("--fire-angle", `${angle}deg`);
      effect.style.setProperty("--fire-speed", `${Math.min(1.5, Math.max(0.8, Math.hypot(deltaX, deltaY) / 10))}`);
      effect.classList.add("cursor-hover-effect--active");
      pointerRef.current = { x: event.clientX, y: event.clientY };
    };

    const updateTouch = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      updatePointer({ clientX: touch.clientX, clientY: touch.clientY });
    };

    const resetPointer = () => {
      effect.classList.remove("cursor-hover-effect--active");
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("touchstart", updateTouch, { passive: true });
    window.addEventListener("touchmove", updateTouch, { passive: true });
    window.addEventListener("pointerleave", resetPointer);

    return () => {
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("touchstart", updateTouch);
      window.removeEventListener("touchmove", updateTouch);
      window.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <div ref={effectRef} className={`cursor-hover-effect ${className}`} aria-hidden="true">
      <span className="cursor-hover-effect__shadow" />
      <span className="cursor-hover-effect__flame cursor-hover-effect__flame--outer" />
      <span className="cursor-hover-effect__flame cursor-hover-effect__flame--inner" />
      <span className="cursor-hover-effect__core" />
      <span className="cursor-hover-effect__sparks" />
    </div>
  );
}

export default CursorHoverEffect;