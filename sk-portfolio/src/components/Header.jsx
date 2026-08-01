import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Palette,
  Rocket,
  Send,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import {
  navItems,
  education,
  experience,
  profile,
  projects,
  services,
  skills,
  stats,
} from "../data/portfolioData";


function Header({ isMenuOpen, onToggle, onNavigate }) {
  const [activeId, setActiveId] = useState(navItems?.[0]?.id ?? "home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavigate = (id) => {
    setActiveId(id);
    onNavigate(id);
  };

  React.useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 8);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  React.useEffect(() => {
    // Observe sections to update active nav on scroll (intersection-based)
    const ids = navItems.map((n) => n.id).concat(["home"]);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-20% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled ? "border-white/10 bg-coal/78 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          className="group flex items-center gap-3"
          onClick={() => handleNavigate("home")}
          aria-label="Go to home"
        >
          <span className="grid h-11 w-11 place-items-center rounded border border-blood-500/50 bg-blood-500/15 text-blood-100 shadow-glow">
            <Code2 size={22} />
          </span>
          <span className="text-lg font-black tracking-[0.08em]">{profile.brand}</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id || item.highlight;
            return (
              <button
                key={`${item.label}-${item.id}`}
                onClick={() => handleNavigate(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "rounded bg-blood-500 px-4 py-2 text-sm font-black text-white shadow-glow transition hover:bg-blood-600"
                    : "rounded px-4 py-2 text-sm font-semibold text-ash transition hover:bg-white/10 hover:text-white"
                }
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          className="grid h-11 w-11 place-items-center rounded border border-white/10 bg-white/5 lg:hidden"
          onClick={onToggle}
          aria-label="Open navigation menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/10 bg-coal px-5 py-4 lg:hidden">
          {navItems.map((item) => {
            const isActive = activeId === item.id || item.highlight;
            return (
              <button
                key={`${item.label}-${item.id}`}
                onClick={() => handleNavigate(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "block w-full rounded bg-blood-500 px-3 py-3 text-left text-sm font-black text-white shadow-glow"
                    : "block w-full rounded px-3 py-3 text-left text-sm font-semibold text-ash hover:bg-white/10 hover:text-white"
                }
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      )}
    </motion.header>
  );
}

export default Header;