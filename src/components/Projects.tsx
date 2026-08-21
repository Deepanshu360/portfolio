"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Amazon Connect AI Automation Platform",
    emoji: "🔗",
    gradient: "from-blue-500/15 to-purple-500/15",
    border: "#4F8CFF",
    problem: "Enterprise contact centers need AI that can reason, act, and integrate with existing CRM systems in real time.",
    solution: "Designed intelligent routing, AI-powered self-service, Bedrock integration, tool calling, CRM integration, and automated customer support workflows.",
    tech: ["Amazon Connect","Amazon Bedrock","Lambda","DynamoDB","API Gateway","Agentic AI"],
    features: ["Bedrock Agents","Tool calling","CRM integration","Dynamic routing","AI summarization","Customer insights"],
    github: "https://github.com/Deepanshu360",
  },
  {
    title: "RAG Chatbot Web Application",
    emoji: "🧠",
    gradient: "from-purple-500/15 to-cyan-500/15",
    border: "#7C5CFF",
    problem: "Enterprises need AI assistants that answer questions from proprietary documents without hallucinating.",
    solution: "Built a retrieval-augmented AI chatbot with document indexing, secure AWS APIs, knowledge retrieval, and a modern web interface.",
    tech: ["Amazon Bedrock","S3","FastAPI","IAM","boto3","Python"],
    features: ["RAG pipeline","Vector retrieval","Secure auth","FastAPI backend","Cloud-native deployment"],
    github: "https://github.com/Deepanshu360",
  },
  {
    title: "Amazon Lex Banking Chatbot",
    emoji: "🏦",
    gradient: "from-cyan-500/15 to-green-500/15",
    border: "#22D3EE",
    problem: "Banking customers need 24/7 self-service for routine transactions without waiting for agents.",
    solution: "Developed a banking virtual assistant supporting fund transfers, balance checks, and multi-slot conversational workflows with dynamic backend integration.",
    tech: ["Amazon Lex","Lambda","CloudFormation","DynamoDB","Python"],
    features: ["Fund transfers","Balance checks","Multi-slot dialogs","Lambda fulfillment","CloudFormation IaC"],
    github: "https://github.com/Deepanshu360",
  },
  {
    title: "Intelligent IVR Optimization",
    emoji: "📞",
    gradient: "from-green-500/15 to-amber-500/15",
    border: "#22C55E",
    problem: "Legacy IVR systems frustrate customers with rigid menus and long wait times.",
    solution: "Optimized IVR routing, authentication, queue management, callback automation, and customer journey personalization using Amazon Connect.",
    tech: ["Amazon Connect","Lambda","Contact Flows","DynamoDB","CloudWatch"],
    features: ["Caller auth","Self-service","Callback scheduling","Queue optimization","Personalization"],
    github: "https://github.com/Deepanshu360",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">More Projects</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-text">
            Additional <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}}
              transition={{ duration:0.5, delay:i*0.1 }}
              whileHover={{ y:-5, boxShadow:`0 24px 60px ${p.border}20` }}
              className={`glass border rounded-3xl overflow-hidden transition-all duration-300`}
              style={{ borderColor:`${p.border}30` }}>
              <div className={`bg-gradient-to-br ${p.gradient} p-6 border-b border-white/6`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{p.emoji}</span>
                  <h3 className="text-lg font-heading font-bold text-text">{p.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg font-medium"
                      style={{ background:"rgba(255,255,255,0.08)", color:"#E6EEF8" }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">Problem</p>
                  <p className="text-sm text-muted">{p.problem}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">Solution</p>
                  <p className="text-sm text-muted">{p.solution}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.features.map(f => (
                    <span key={f} className="text-xs px-2 py-1 rounded-lg bg-white/4 text-muted border border-white/8">✓ {f}</span>
                  ))}
                </div>
                <motion.a href={p.github} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale:1.04 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-sm text-muted hover:text-text transition-colors">
                  <Github size={14} /> View on GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
