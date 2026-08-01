import React from "react"
import Section from "../common/Section"
import {education, experience, profile} from "../data/portfolioData"
import {
    GraduationCap,
    Download

} from "lucide-react"
import CTAButton from "../common/CTAButton";

function Experience() {
  return (
    <Section id="experience" eyebrow="Education" title="Learning Path And Experience" revealFrom="left">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          {education.map((item) => (
            <div key={item.title} className="rounded border border-white/10 bg-white/[0.035] p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded bg-blood-500/15 text-blood-100">
                  <GraduationCap size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold text-blood-300">{item.year}</p>
                  <h3 className="mt-1 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-ash">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {experience.map((item) => (
            <div key={item.title} className="rounded border border-white/10 bg-iron p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-blood-300">
                    {item.company}
                  </p>
                </div>
                <span className="text-sm font-bold text-blood-300">{item.period}</span>
              </div>
              <p className="mt-4 leading-7 text-ash">{item.description}</p>
            </div>
          ))}
          
          <CTAButton btntxt={'Download Resume'} url={profile.resumeUrl} active={false} icon={<Download/>} />
        </div>
      </div>
    </Section>
  );
}
export default Experience