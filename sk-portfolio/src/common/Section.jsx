import React from "react";
import { motion } from "framer-motion";
import MotionReveal from "./MotionReveal";

function Section({ id, eyebrow, title, children, revealFrom = "bottom" }) {
  return (
    <motion.section
      id={id}
      className="relative z-10 px-5 py-24 sm:px-8"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-7xl">
        <MotionReveal direction={revealFrom} className="mb-12 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blood-300">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">{title}</h2>
        </MotionReveal>
        <MotionReveal direction={revealFrom} delay={0.08}>
          {children}
        </MotionReveal>
      </div>
    </motion.section>
  );
}
export default Section