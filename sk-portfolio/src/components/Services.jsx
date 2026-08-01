import React from "react"
import Section from "../common/Section"
import {services} from "../data/portfolioData"
import {
    Icon,
    ArrowUpRight,
    Laptop,
    Palette,
    Code2,
    UserRound
} from "lucide-react"
import CTAButton from "../common/CTAButton";


function Services() {

    
const serviceIcons = [Laptop, Palette, Code2, UserRound];

  return (
    <Section id="services" eyebrow="Services" title="Freelance Services" revealFrom="right">
      <p className="-mt-8 mb-10 max-w-3xl text-lg leading-8 text-ash">
        Helping businesses, startups and individuals create modern digital experiences
        with high-quality web solutions.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = serviceIcons[index] ?? BriefcaseBusiness;
          return (
            <article
              key={service.title}
              className="rounded border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-2 hover:border-blood-500 hover:bg-blood-500/10"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded bg-blood-500/15 text-blood-100">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-black">{service.title}</h3>
              <p className="mt-4 leading-7 text-ash">{service.description}</p>
            </article>
          );
        })}
      </div>
       <div className="mt-5">
         <CTAButton url={'#contact'} btntxt={'Start a Project'} icon={<ArrowUpRight/>} active={true}  />
       </div>
      
    </Section>
  );
}
export default Services