"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from "lucide-react";

const roles = [
  "Amazon Connect Architect",
  "Genesys Cloud Engineer",
  "Generative AI Developer",
  "Agentic AI Builder",
  "Intelligent IVR Designer",
  "Conversational AI Engineer",
  "Cloud Solution Architect",
];

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(79,140,255,0.35)";
        ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach((b) => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(79,140,255,${0.08 * (1 - d / 100)})`;
          ctx.stroke();
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const cur = roles[idx];
    if (typing) {
      if (text.length < cur.length) {
        const t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 55);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), 2000);
      return () => clearTimeout(t);
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 25);
        return () => clearTimeout(t);
      }
      setIdx((i) => (i + 1) % roles.length);
      setTyping(true);
    }
  }, [text, typing, idx]);

  return (
    <section
      id="home"
      className="relative flex items-start lg:items-center overflow-hidden min-h-screen"
      style={{ background: "radial-gradient(ellipse at 55% 35%, rgba(79,140,255,0.13) 0%, transparent 55%), radial-gradient(ellipse at 15% 75%, rgba(124,92,255,0.1) 0%, transparent 50%), #050816" }}
    >
      <Particles />

      {/* Orbs */}
      <motion.div animate={{ x:[0,40,0], y:[0,-25,0] }} transition={{ duration:14, repeat:Infinity, ease:"easeInOut" }}
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle, rgba(79,140,255,0.08), transparent)", filter:"blur(40px)" }} />
      <motion.div animate={{ x:[0,-30,0], y:[0,35,0] }} transition={{ duration:18, repeat:Infinity, ease:"easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle, rgba(124,92,255,0.08), transparent)", filter:"blur(40px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10 lg:pt-24 lg:pb-16 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left */}
        <div className="w-full">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7"
            style={{ background:"rgba(34,197,94,0.08)", border:"1px solid rgba(34,197,94,0.25)" }}>
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-green-400" />
            </span>
            <Sparkles size={12} className="text-green-400" />
            <span className="text-sm text-green-400 font-medium">Available for AI & Cloud Opportunities</span>
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold leading-[1.05] mb-4">
            <span className="gradient-text">Deepanshu</span><br />
            <span className="text-text">Singh</span>
          </motion.h1>

          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
            className="text-xl text-muted font-medium mb-3">
            AI Contact Center Engineer
          </motion.p>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }} className="h-9 mb-6">
            <span className="text-lg font-semibold gradient-text-accent">
              {text}<span className="animate-pulse text-accent">|</span>
            </span>
          </motion.div>

          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            className="text-muted leading-relaxed mb-8 max-w-lg text-[15px]">
            I design and build intelligent customer experience platforms using{" "}
            <span className="text-text font-medium">Amazon Connect</span>,{" "}
            <span className="text-text font-medium">Genesys Cloud CX</span>,{" "}
            <span className="text-text font-medium">Amazon Bedrock</span>, Lex, Lambda, and AI automation
            technologies to transform contact centers through conversational AI and self-service automation.
          </motion.p>

          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.5 }}
            className="flex flex-wrap gap-3 mb-8">
            <motion.button
              whileHover={{ scale:1.05, boxShadow:"0 0 35px rgba(79,140,255,0.45)" }}
              whileTap={{ scale:0.97 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior:"smooth" })}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm"
              style={{ background:"linear-gradient(135deg,#4F8CFF,#7C5CFF)" }}>
              View Enterprise Projects <ArrowRight size={15} />
            </motion.button>
            <motion.a whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
              href="/resume.pdf" download
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-text glass border border-white/10 hover:border-white/20 transition-colors text-sm">
              <Download size={15} /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.7 }} className="flex items-center gap-3 mb-8">
            {[
              { icon:Github, href:"https://github.com/Deepanshu360", label:"GitHub" },
              { icon:Linkedin, href:"https://linkedin.com/in/connectdeepanshu0711", label:"LinkedIn" },
              { icon:Mail, href:"mailto:deepanshusingh774@gmail.com", label:"Email" },
            ].map(({ icon:Icon, href, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale:1.15, y:-3 }}
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-muted hover:text-accent transition-colors"
                aria-label={label}>
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile tech grid — only on small screens */}
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.9 }}
            className="flex lg:hidden flex-wrap gap-2">
            {[
              { label:"Amazon Connect", color:"#4F8CFF", emoji:"☁️" },
              { label:"Genesys Cloud",  color:"#F59E0B", emoji:"🌐" },
              { label:"Bedrock",        color:"#7C5CFF", emoji:"🧠" },
              { label:"Amazon Lex",     color:"#22D3EE", emoji:"🤖" },
              { label:"AI Copilot",     color:"#22C55E", emoji:"⚡" },
            ].map((c) => (
              <div key={c.label} className="glass-strong rounded-xl px-3 py-2 flex items-center gap-2"
                style={{ border:`1px solid ${c.color}35` }}>
                <span className="text-sm">{c.emoji}</span>
                <span className="text-xs font-semibold text-text">{c.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Desktop only orbit */}
        <div className="hidden lg:flex items-center justify-center relative h-[520px]">
          <div className="absolute w-[340px] h-[340px] rounded-full border border-white/6 pointer-events-none" />
          <div className="absolute w-[220px] h-[220px] rounded-full border border-white/4 pointer-events-none" />
          <div className="absolute w-64 h-64 rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle, rgba(79,140,255,0.15), transparent)", filter:"blur(30px)" }} />
          <motion.div initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }}
            transition={{ delay:2.2, duration:0.6, type:"spring" }}
            className="absolute glass-strong rounded-2xl px-5 py-4 text-center border border-white/12 z-10">
            <div className="w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center text-xl"
              style={{ background:"linear-gradient(135deg,rgba(79,140,255,0.3),rgba(124,92,255,0.3))", border:"1px solid rgba(79,140,255,0.4)" }}>🎯</div>
            <p className="text-xs text-muted mb-0.5">Specialization</p>
            <p className="text-sm font-bold gradient-text">AI Contact Center</p>
          </motion.div>
          {[
            { label:"Amazon Connect", sub:"Cloud Contact Center", color:"#4F8CFF", emoji:"☁️",  delay:0,   x:0,    y:-200 },
            { label:"Genesys Cloud",  sub:"CX Platform",          color:"#F59E0B", emoji:"🌐", delay:0.4, x:-210, y:-70  },
            { label:"Bedrock",        sub:"Foundation Models",    color:"#7C5CFF", emoji:"🧠",  delay:0.8, x:210,  y:-70  },
            { label:"Amazon Lex",     sub:"Conversational AI",    color:"#22D3EE", emoji:"🤖", delay:1.2, x:-140, y:150  },
            { label:"AI Copilot",     sub:"Agent Assist",         color:"#22C55E", emoji:"⚡",  delay:1.6, x:140,  y:150  },
          ].map((c, i) => (
            <motion.div key={c.label} initial={{ opacity:0, scale:0.6 }} animate={{ opacity:1, scale:1 }}
              transition={{ duration:0.5, delay:c.delay, type:"spring", stiffness:120 }}
              style={{ position:"absolute", x:c.x, y:c.y }}>
              <motion.div animate={{ y:[0,-10,0] }}
                transition={{ duration:3.5+i*0.5, repeat:Infinity, ease:"easeInOut", delay:c.delay }}
                whileHover={{ scale:1.08, zIndex:20 }}
                className="glass-strong rounded-2xl px-4 py-3 flex items-center gap-3 cursor-default"
                style={{ boxShadow:`0 0 20px ${c.color}20`, border:`1px solid ${c.color}25` }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{ background:`${c.color}20`, border:`1px solid ${c.color}50` }}>{c.emoji}</div>
                <div>
                  <p className="text-sm font-semibold text-text whitespace-nowrap">{c.label}</p>
                  <p className="text-xs text-muted">{c.sub}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div animate={{ y:[0,8,0] }} transition={{ duration:2.5, repeat:Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted z-10">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </motion.div>
    </section>
  );
}
