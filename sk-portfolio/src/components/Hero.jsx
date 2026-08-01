import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Rocket,
  Sparkles,
} from "lucide-react";
import { profile, stats } from "../data/portfolioData";
import CTAButton from "../common/CTAButton";
import myPic from "../../outputs/mypic1.jpeg";


function Hero() {
  const roles = profile.role;
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    if (!Array.isArray(roles) || roles.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [roles]);

  return (
    <section
      id="home"
      className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-24 sm:px-8"
    >
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, x: -72 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="md:hidden mb-6 inline-flex items-center gap-2 rounded border border-blood-500/40 bg-blood-500/10 px-4 py-2 text-sm font-bold text-blood-100">
            <Sparkles size={16} />
            Available For Freelance
          </div>
          <p className="text-lg font-bold text-ash">Hi, I&apos;m</p>
          <h1 className="mt-2 max-w-4xl text-5xl font-black leading-[0.98] sm:text-7xl lg:text-8xl">
            {profile.name}
            <span
              key={activeRoleIndex}
              className="block text-blood-500 transition-all duration-500 animate-fade-up"
            >
              {roles[activeRoleIndex]}
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ash sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CTAButton btntxt={"Hire Me"} url={"#contact"}  icon={<ArrowUpRight/>} active={true}/>
             <CTAButton btntxt={"My Projects"} url={"#projects"}  icon={<Rocket/>} active={false}/>
            
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {stats.map((item) => (
              <div key={item.label} className="border-l border-blood-500/50 pl-4">
                <p className="text-3xl font-black text-white">{item.value}</p>
                <p className="mt-1 text-sm text-ash">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-[480px]"
          initial={{ opacity: 0, x: 72, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <motion.div
            className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-blood-500/25 blur-3xl"
            animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-12 bottom-6 h-44 w-44 rounded-full bg-white/10 blur-3xl"
            animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-5 rotate-6 rounded-[3rem] border border-blood-500/25 bg-gradient-to-br from-blood-500/20 via-transparent to-white/5 shadow-glow" />
          <div className="absolute inset-0 overflow-hidden rounded-[3rem] border border-white/12 bg-[radial-gradient(circle_at_top_left,rgba(var(--color-blood-rgb,54,147,244),0.28),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.08),transparent_26%),linear-gradient(160deg,#1a1a22_0%,#0f1014_50%,#08080b_100%)] shadow-hard">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_36%)]" />
            <motion.div
              className="absolute inset-5 rounded-[2rem] border border-dashed border-white/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-9 rounded-[1.7rem] border border-dotted border-blood-300/70"
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-10 overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#08080c] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
              animate={{ y: [0, -5, 0], scale: [1, 1.01, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.img
                src={myPic}
                alt="Portrait of Sushma"
                className="h-full w-full object-contain object-center p-2 rounded-md sm:p-3"
               
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent_20%,transparent_80%,rgba(0,0,0,0.12))]" />
            </motion.div>

            <motion.div
              className="absolute left-8 top-8 h-4 w-4 rounded-full bg-blood-500 shadow-[0_0_24px_rgba(var(--color-blood-rgb,54,147,244),0.7)]"
              animate={{ y: [0, 12, 0], x: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-10 right-10 h-3 w-3 rounded-full bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.55)]"
              animate={{ y: [0, -10, 0], x: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-blood-500/20 to-transparent" />
            <div className="absolute inset-x-0 top-24 h-px animate-scan-line bg-blood-500/70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;