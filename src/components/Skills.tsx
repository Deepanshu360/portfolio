"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const groups = [
  {
    title: "Cloud & Contact Center",
    color: "#4F8CFF",
    emoji: "☁️",
    skills: ["Amazon Connect","Genesys Cloud CX","Amazon Bedrock","Amazon Lex","AWS Lambda","API Gateway","DynamoDB","S3","CloudFormation","CloudWatch","IAM"],
  },
  {
    title: "AI & Machine Learning",
    color: "#7C5CFF",
    emoji: "🧠",
    skills: ["Generative AI","Agentic AI","Prompt Engineering","LangChain","LangGraph","RAG Systems","Conversational AI","Speech AI","Sentiment Analysis"],
  },
  {
    title: "Development",
    color: "#22D3EE",
    emoji: "💻",
    skills: ["Python","JavaScript","TypeScript","React","Next.js","FastAPI","REST APIs","Git","GitHub","Vue.js"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-text">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <motion.div key={g.title}
              initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}}
              transition={{ duration:0.5, delay:gi*0.1 }}
              className="glass border border-white/8 rounded-3xl p-6 relative overflow-hidden"
              style={{ boxShadow:`0 0 50px ${g.color}08` }}>
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{ background:`radial-gradient(circle, ${g.color}10, transparent)`, filter:"blur(20px)" }} />

              <div className="flex items-center gap-3 mb-5 relative">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background:`${g.color}15`, border:`1px solid ${g.color}35` }}>
                  {g.emoji}
                </div>
                <h3 className="font-heading font-bold text-text">{g.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 relative">
                {g.skills.map((skill, si) => (
                  <motion.span key={skill}
                    initial={{ opacity:0, scale:0.8 }}
                    animate={inView?{opacity:1,scale:1}:{}}
                    transition={{ duration:0.3, delay:gi*0.1+si*0.04 }}
                    whileHover={{ scale:1.08, borderColor:g.color, color:"#E6EEF8", boxShadow:`0 0 12px ${g.color}30` }}
                    className="text-xs px-3 py-1.5 rounded-lg border border-white/8 text-muted cursor-default transition-all"
                    style={{ background:"rgba(255,255,255,0.04)" }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
