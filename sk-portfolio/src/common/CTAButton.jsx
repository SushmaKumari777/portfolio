import React from "react";
import { ArrowUpRight } from "lucide-react";

const CTAButton = ({ btntxt, url = "#", icon = null, active = false }) => {
  return (
    <a
      href={url}
      className={`group inline-flex items-center justify-center gap-2 rounded-md px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-glow transition hover:-translate-y-1  ${active?"bg-blood-500 hover:bg-blood-600":"border border-white/15 hover:border-blood-500/70 bg-white/5"}`}
    >
      {btntxt}
      {icon ?? <ArrowUpRight size={18} className="transition group-hover:translate-x-1" />}
    </a>
  );
};

export default CTAButton;