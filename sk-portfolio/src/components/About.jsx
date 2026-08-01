import React, { useEffect, useState } from "react";
import Section from "../common/Section";
import { profile, roleNotes, roleSummaries, roleGoals, roleSkills } from "../data/portfolioData";


function About() {
  const roles = Array.isArray(profile.role) ? profile.role : [profile.role];
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    if (roles.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [roles.length]);

  
  const activeRole = roles[activeRoleIndex];
  const activeSkills = roleSkills[activeRole] ?? ["React", "Tailwind CSS", "JavaScript", "Framer Motion", "Node"];

  return (
    <Section id="about" eyebrow="About Me" title="Building Modern Experiences" revealFrom="left">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded border border-blood-500/40 bg-blood-500/10 p-7">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blood-100">
            Profile Focus
          </p>
          <h3 className="mt-4 text-3xl font-black leading-tight text-white transition-all duration-500 animate-fade-up">
            {activeRole}
          </h3>
          <p className="mt-5 leading-7 text-ash">
            {roleNotes[activeRole] ?? profile.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {roles.map((role, index) => (
              <button
                key={role}
                type="button"
                onClick={() => setActiveRoleIndex(index)}
                className={`rounded-full border px-2 md:px-4 py-2 text-sm font-bold transition ${
                  index === activeRoleIndex
                    ? "border-blood-500 bg-blood-500/20 text-white shadow-glow"
                    : "border-white/10 bg-white/5 text-ash hover:border-blood-500/40 hover:text-white"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded border border-white/10 bg-white/[0.035] p-7">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blood-100">
            Current Profile
          </p>
          <h3 className="mt-4 text-3xl font-black leading-tight text-white transition-all duration-500 animate-fade-up">
            {profile.name.trim()} - {activeRole}
          </h3>
          <p className="leading-8 text-ash transition-all duration-500 animate-fade-up">
            {roleSummaries[activeRole] ?? profile.summary}
          </p>
          <p className="mt-6 leading-8 text-ash transition-all duration-500 animate-fade-up">
            {roleGoals[activeRole] ?? profile.goal}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
              {activeSkills.map((item) => (
                <span
                  key={item}
                  className="rounded border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-blood-100"
                >
                  {item}
                </span>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;