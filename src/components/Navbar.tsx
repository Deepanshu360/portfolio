"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Home","About","Architecture","Projects","Experience","Skills","Certifications","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id.toLowerCase());
      if (!el) return;
      const offset = 64;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-[999] transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/95 backdrop-blur-xl shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.08 }}
          onClick={() => go("home")}
          className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-base text-white shrink-0"
          style={{ background: "linear-gradient(135deg,#4F8CFF,#7C5CFF)", boxShadow: "0 0 20px rgba(79,140,255,0.4)" }}
        >
          DS
        </motion.button>

        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => go(l)}
              className="px-3.5 py-2 text-sm text-muted hover:text-text transition-colors rounded-lg hover:bg-white/5"
            >
              {l}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(79,140,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => go("contact")}
            className="px-5 py-2 rounded-xl text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg,#4F8CFF,#7C5CFF)" }}
          >
            Hire Me
          </motion.button>
        </div>

        <button className="lg:hidden text-muted hover:text-text" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050816]/95 backdrop-blur-xl border-t border-white/8 px-6 py-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <button key={l} onClick={() => go(l)} className="text-left py-2.5 text-sm text-muted hover:text-text transition-colors">
                {l}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="mt-2 py-2.5 rounded-xl text-sm font-semibold text-white text-center"
              style={{ background: "linear-gradient(135deg,#4F8CFF,#7C5CFF)" }}
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
