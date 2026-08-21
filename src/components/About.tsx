"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: "100+", label: "Customer Journeys Designed", color: "#4F8CFF" },
  { value: "5+", label: "Enterprise Contact Center Solutions", color: "#7C5CFF" },
  { value: "3", label: "AWS Certifications", color: "#22D3EE" },
  { value: "E2E", label: "AI & IVR Implementations", color: "#22C55E" },
];

const tags = ["Amazon Connect", "Genesys Cloud CX", "Amazon Bedrock", "Agentic AI", "IVR Design", "RAG Systems", "Prompt Engineering", "LangGraph"];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-text">
            The Engineer Behind the <span className="gradient-text">Intelligence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div initial={{ opacity:0, x:-40 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.1 }}
            className="flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-[2rem] opacity-40 pointer-events-none"
                style={{ background:"linear-gradient(135deg,rgba(79,140,255,0.3),rgba(124,92,255,0.3))", filter:"blur(20px)" }} />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[1.75rem] overflow-hidden border border-white/12"
                style={{ boxShadow:"0 0 60px rgba(79,140,255,0.2)" }}>
                <img src="/photo.jpg" alt="Deepanshu Singh"
                  className="absolute inset-0 w-full h-full object-cover object-top" />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
                  style={{ background:"linear-gradient(to top, rgba(5,8,22,0.6), transparent)" }} />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-5 rounded-[2.25rem] border border-white/5 pointer-events-none" />
              {/* Spinning dot */}
              <motion.div animate={{ rotate:360 }} transition={{ duration:18, repeat:Infinity, ease:"linear" }}
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full"
                style={{ background:"linear-gradient(135deg,#4F8CFF,#7C5CFF)", boxShadow:"0 0 12px rgba(79,140,255,0.6)" }} />
              <motion.div animate={{ rotate:-360 }} transition={{ duration:24, repeat:Infinity, ease:"linear" }}
                className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full"
                style={{ background:"linear-gradient(135deg,#22D3EE,#4F8CFF)", boxShadow:"0 0 10px rgba(34,211,238,0.5)" }} />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity:0, x:40 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.2 }}>
            <p className="text-[15px] text-muted leading-relaxed mb-4">
              AI-focused Contact Center Engineer with expertise in{" "}
              <span className="text-accent font-semibold">Amazon Connect</span>,{" "}
              <span className="text-accent font-semibold">Genesys Cloud CX</span>,{" "}
              <span className="text-accent font-semibold">Generative AI</span>, Agentic AI, Prompt Engineering, and AWS cloud architecture.
            </p>
            <p className="text-[15px] text-muted leading-relaxed mb-6">
              Experienced in designing intelligent IVR systems, conversational AI platforms, RAG chatbots, workflow automation, case management systems, and customer journey optimization for enterprise and public-sector environments.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((t, i) => (
                <motion.span key={t}
                  initial={{ opacity:0, scale:0.85 }}
                  animate={inView?{opacity:1,scale:1}:{}}
                  transition={{ delay:0.3+i*0.05 }}
                  className="badge">
                  {t}
                </motion.span>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m, i) => (
                <motion.div key={m.label}
                  initial={{ opacity:0, y:20 }}
                  animate={inView?{opacity:1,y:0}:{}}
                  transition={{ duration:0.5, delay:0.4+i*0.1 }}
                  whileHover={{ y:-2, boxShadow:`0 8px 30px ${m.color}20` }}
                  className="glass border border-white/8 rounded-2xl p-4 transition-all">
                  <div className="text-3xl font-heading font-bold mb-1" style={{ color:m.color }}>{m.value}</div>
                  <div className="text-xs text-muted leading-snug">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
