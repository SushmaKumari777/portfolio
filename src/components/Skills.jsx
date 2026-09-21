import React, { useEffect, useRef, useState } from "react";
import Section from "../common/Section";
import { skills } from "../data/portfolioData";
import Technologies from "../common/Technologies";
import CursorScrollEffect from "../common/CursorScrollEffect";

function SkillBar({ skill }) {
  const barRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setDisplayLevel(0);
      return undefined;
    }

    let animationFrame;
    const startTime = performance.now();
    const duration = 700;

    const animateLevel = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setDisplayLevel(Math.round(progress * skill.level));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateLevel);
      }
    };

    animationFrame = requestAnimationFrame(animateLevel);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, skill.level]);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-bold">{skill.name}</p>
          <p className="text-sm text-ash">{skill.category}</p>
        </div>
        <span className="text-sm font-black text-blood-300">{displayLevel}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded bg-white/10">
        <div
          className="h-full rounded bg-blood-500 shadow-glow transition-[width] duration-700 ease-out"
          style={{ width: isVisible ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="My Skills" title="Technologies I Use" revealFrom="bottom">
      <p className="-mt-8 mb-10 max-w-3xl text-lg leading-8 text-ash">
        Technologies and tools that help me build fast, scalable and modern web
        applications.
      </p>
      
      <div className="grid gap-8 lg:grid-cols-1">
        {skills.map((group, gIndex) => (
          <CursorScrollEffect key={group.title}>
          <div
            className="group rounded border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-blood-500"
            style={{ animationDelay: `${gIndex * 80}ms` }}
          >
            
            <h3 className="mb-4 text-xl font-black">{group.title}</h3>
           
            {group.items && group.items.length > 0 && (
              <div>
                
                {group.title.toLowerCase().includes("language") ? (
                  
                  <div className="grid gap-4">
                    {group.items.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                    
                  </div>
                 
                ) : (
                  <div className="mt-2 ">
                    <Technologies items={group.items} />
                  </div>
                )}
              </div>
            )}
             
          </div>
          </CursorScrollEffect>
        ))}
      </div>
      
    </Section>
  );
}

export default Skills;