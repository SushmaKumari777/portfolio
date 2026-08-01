import React from "react";
import { motion } from "framer-motion";

function ProblemCount() {
  const stats = [
    { value: "100+", label: "DSA Problems" },
    { value: "3+", label: "Projects Built" },
    { value: "2★", label: "HackerRank" },
    { value: "5+", label: "Certification" },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 56 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-lg border border-blood-500/30 bg-gradient-to-br from-blood-500/5 to-blood-600/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blood-500/60 hover:shadow-glow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blood-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative z-10 text-center lg:text-left">
              <p className="bg-gradient-to-r from-blood-300 to-blood-500 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold text-ash sm:text-base">
                {stat.label}
              </p>
            </div>

            {/* Border accent */}
            <div className="absolute -bottom-1 -right-1 h-20 w-20 rounded-full bg-blood-500/20 blur-2xl transition-all duration-300 group-hover:bg-blood-500/40" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ProblemCount;
