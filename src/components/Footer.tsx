"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-8 px-6"
      style={{ background:"rgba(5,8,22,0.8)" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted">
            Designed & Built by <span className="gradient-text font-semibold">Deepanshu Singh</span>
          </p>
          <p className="text-xs text-muted/60 mt-0.5">AI Contact Center Engineer</p>
        </div>
        <div className="flex items-center gap-4">
          {[
            { icon:Github, href:"https://github.com/Deepanshu360", label:"GitHub" },
            { icon:Linkedin, href:"https://linkedin.com/in/connectdeepanshu0711", label:"LinkedIn" },
            { icon:Mail, href:"mailto:deepanshusingh774@gmail.com", label:"Email" },
          ].map(({ icon:Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-muted hover:text-accent transition-colors">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
