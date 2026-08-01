import React from "react";
import { motion } from "framer-motion";

const directionOffsets = {
  left: { x: -72, y: 0 },
  right: { x: 72, y: 0 },
  bottom: { x: 0, y: 56 },
  top: { x: 0, y: -56 },
};

function MotionReveal({
  children,
  direction = "bottom",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
}) {
  const offset = directionOffsets[direction] ?? directionOffsets.bottom;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.22 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default MotionReveal;