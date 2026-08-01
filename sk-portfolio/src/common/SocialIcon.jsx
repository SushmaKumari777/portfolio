import React from "react"
import {profile} from "../data/portfolioData"
function SocialIcon({ label, icon }) {
  const href = profile.socials.find((item) => item.label === label)?.href ?? "#";

  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-12 w-12 place-items-center rounded border border-white/10 bg-white/5 text-ash transition hover:-translate-y-1 hover:border-blood-500/70 hover:bg-blood-500 hover:text-white"
    >
      {icon}
    </a>
  );
}
export default SocialIcon