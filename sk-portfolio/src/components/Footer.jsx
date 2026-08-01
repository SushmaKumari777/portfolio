import React from "react";
import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SushmaKumari777",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sushma-kumari92/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: `mailto:${profile.email}`,
      label: "Email",
    },
  ];

  return (
    <footer className="relative z-10 mx-auto max-w-7xl border-t border-blood-500/20 px-5 py-8 sm:px-8">
      {/* Main Footer Content */}
      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
        {/* Left: Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blood-500">
            <Code2 size={20} className="text-white" />
          </div>
          <span className="text-lg font-bold text-white">{profile.name}</span>
        </motion.div>

        {/* Center: Built with */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-sm text-ash sm:text-base"
        >
          Built with{" "}
          <span className="text-blood-500">❤️</span> in React & Tailwind CSS
        </motion.div>

        {/* Right: Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-blood-500/30 text-ash transition-all duration-300 hover:border-blood-500/60 hover:text-blood-500"
                aria-label={social.label}
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-gradient-to-r from-transparent via-blood-500 to-transparent" />

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-sm text-ash"
      >
        © {currentYear} {profile.name}. All rights reserved.
      </motion.div>
    </footer>
  );
}

export default Footer;
