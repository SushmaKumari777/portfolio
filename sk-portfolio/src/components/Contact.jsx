import React from "react"
import { motion } from "framer-motion";
import SocialIcon from "../common/SocialIcon"
import {
    MapPin,
    Mail,
    Github,
    Linkedin,
    Send
} from "lucide-react"
import {profile} from "../data/portfolioData"

function Contact() {
  return (
    <section id="contact" className="relative z-10 px-5 py-24 sm:px-8">
      <motion.div
        className="mx-auto max-w-7xl overflow-hidden rounded border border-blood-500/50 bg-blood-500 p-px shadow-glow"
        initial={{ opacity: 0, y: 56 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid gap-8 rounded bg-coal p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blood-100">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-ash">
              Have a project idea or want to collaborate? Feel free to send a message
              and I&apos;ll get back to you soon.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-4 text-ash transition hover:border-blood-500/70 hover:text-white"
              >
                <Mail size={20} className="text-blood-300" />
                {profile.email}
              </a>
              <div className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-4 text-ash">
                <MapPin size={20} className="text-blood-300" />
                {profile.location}
              </div>
              <div className="flex gap-3">
                <SocialIcon label="GitHub" icon={<Github size={20} />} />
                <SocialIcon label="LinkedIn" icon={<Linkedin size={20} />} />
              </div>
            </div>
          </div>
          <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-ash">
                Your Name
                <input
                  className="rounded border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-blood-500"
                  placeholder="Your Name"
                  type="text"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-ash">
                Email Address
                <input
                  className="rounded border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-blood-500"
                  placeholder="Email Address"
                  type="email"
                  required
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-ash">
              Message
              <textarea
                className="min-h-40 resize-none rounded border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-blood-500"
                placeholder="Write your message..."
                required
              />
            </label>
            <button
              className="inline-flex items-center justify-center gap-2 rounded bg-blood-500 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-glow transition hover:-translate-y-1 hover:bg-blood-600"
              type="submit"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
export default Contact