"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const weeks = [
  {
    week: "Week 1", title: "Foundation",
    items: ["Inbound call flow setup", "Welcome prompts & IVR menus", "Permit inquiry queue", "Benefits inquiry queue", "Initial routing architecture"],
    color: "#4F8CFF",
  },
  {
    week: "Week 2", title: "Conversational AI",
    items: ["Virtual agent integration", "Intent recognition engine", "Application reference collection", "Date of birth validation", "Request confirmation flows", "Priority qualification logic"],
    color: "#7C5CFF",
  },
  {
    week: "Week 3", title: "Self-Service Automation",
    items: ["Data Table integration", "Data Actions configuration", "Application status retrieval", "Permit details lookup", "Benefit eligibility checks", "Automatic case creation", "Reference number generation"],
    color: "#22D3EE",
  },
  {
    week: "Week 4", title: "Intelligent Escalation & Analytics",
    items: ["Priority Service Queue routing", "Senior citizen prioritization", "AI Copilot guidance setup", "AI-generated call summaries", "Sentiment detection indicators", "Analytics dashboards", "SLA monitoring & alerts"],
    color: "#22C55E",
  },
];

const features = [
  { icon:"🧠", title:"Intelligent Virtual Agent", desc:"Intent-based conversations with authentication and context-aware routing.", color:"#4F8CFF" },
  { icon:"⚡", title:"Self-Service Automation", desc:"Real-time status retrieval and automated case management via Data Actions.", color:"#7C5CFF" },
  { icon:"🎯", title:"Priority Routing Engine", desc:"Rules-based routing for urgent permits and vulnerable citizen cases.", color:"#22D3EE" },
  { icon:"🤖", title:"AI Agent Copilot", desc:"Real-time regulatory guidance and process recommendations for agents.", color:"#F59E0B" },
  { icon:"📝", title:"AI Summarization", desc:"Automatic documentation of citizen interactions post-call.", color:"#22C55E" },
  { icon:"💡", title:"Sentiment Detection", desc:"Identifies frustrated callers for proactive escalation and care.", color:"#EF4444" },
  { icon:"📊", title:"Operational Analytics", desc:"Dashboards for call volumes, containment rates, and citizen experience KPIs.", color:"#4F8CFF" },
];

const impacts = [
  { value:"65–80%", label:"Self-Service Containment", color:"#4F8CFF" },
  { value:"↓ AHT", label:"Average Handling Time", color:"#7C5CFF" },
  { value:"100%", label:"Automated Case Creation", color:"#22D3EE" },
  { value:"Real-Time", label:"Operational Visibility", color:"#22C55E" },
  { value:"Enhanced", label:"Agent Productivity", color:"#F59E0B" },
  { value:"Improved", label:"Priority Routing Accuracy", color:"#EF4444" },
];

export default function GenesysProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section ref={ref} className="section-padding"
      style={{ background:"linear-gradient(180deg,#050816 0%,#0a0f1e 50%,#050816 100%)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }}
          className="text-center mb-4">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Flagship Enterprise Project</span>
        </motion.div>

        {/* Hero Card */}
        <motion.div initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7, delay:0.1 }}
          className="relative rounded-3xl overflow-hidden mb-16 border border-white/10"
          style={{ background:"linear-gradient(135deg,rgba(245,158,11,0.08),rgba(79,140,255,0.08))", boxShadow:"0 0 80px rgba(245,158,11,0.1)" }}>
          {/* Top accent bar */}
          <div className="h-1 w-full" style={{ background:"linear-gradient(90deg,#F59E0B,#4F8CFF,#7C5CFF)" }} />
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background:"rgba(245,158,11,0.15)", border:"1px solid rgba(245,158,11,0.3)" }}>
                🏛️
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {["Genesys Cloud CX","AI Copilot","Data Tables","Data Actions","Case Management","Analytics"].map(t => (
                    <span key={t} className="badge" style={{ borderColor:"rgba(245,158,11,0.3)", color:"#F59E0B" }}>{t}</span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-text">
                  Government-Citizen Service Helpline
                </h2>
                <p className="text-muted mt-1">AI-Powered Permit & Benefit Status Inquiry Platform</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Project Overview</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Designed and implemented an end-to-end AI-powered government citizen service platform that automated
                  permit application inquiries, public benefit eligibility verification, intelligent case management,
                  priority routing, and AI-assisted agent support.
                </p>
                <p className="text-sm text-muted leading-relaxed mt-3">
                  The solution combines conversational AI, data-driven decision making, self-service automation, and
                  analytics to improve citizen experience while reducing operational workload.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Architecture Flow</h4>
                <div className="space-y-1.5">
                  {["Citizen Call","Genesys Cloud Inbound Flow","Virtual Agent + Intent Detection","Authentication & Data Tables","Data Actions → Case Management","Priority Queue Routing","Agent Copilot + AI Summary","Analytics & SLA Monitoring"].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{ background:"rgba(245,158,11,0.2)", color:"#F59E0B", border:"1px solid rgba(245,158,11,0.3)" }}>
                        {i+1}
                      </div>
                      <span className="text-xs text-muted">{step}</span>
                      {i < 7 && <div className="w-px h-3 bg-amber-500/30 ml-2 hidden" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Implementation Timeline */}
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6, delay:0.2 }}
          className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-text text-center mb-10">
            Implementation <span className="gradient-text">Timeline</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {weeks.map((w, i) => (
              <motion.div key={w.week}
                initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
                transition={{ duration:0.5, delay:0.3+i*0.1 }}
                className="glass border border-white/8 rounded-2xl overflow-hidden">
                <div className="h-1" style={{ background:w.color }} />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color:w.color }}>{w.week}</span>
                    <button onClick={() => setExpanded(expanded===i?null:i)} className="text-muted hover:text-text">
                      {expanded===i ? <ChevronUp size={14}/> : <ChevronDown size={14}/>}
                    </button>
                  </div>
                  <h4 className="font-heading font-bold text-text text-sm mb-3">{w.title}</h4>
                  <ul className={`space-y-1.5 overflow-hidden transition-all duration-300 ${expanded===i?"max-h-96":"max-h-24"}`}>
                    {w.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted">
                        <CheckCircle size={11} className="mt-0.5 shrink-0" style={{ color:w.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Features */}
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6, delay:0.3 }}
          className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-text text-center mb-10">
            Technical <span className="gradient-text">Highlights</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
                transition={{ duration:0.4, delay:0.4+i*0.07 }}
                whileHover={{ y:-4, boxShadow:`0 16px 40px ${f.color}20` }}
                className="glass border border-white/8 rounded-2xl p-5 transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                  style={{ background:`${f.color}15`, border:`1px solid ${f.color}30` }}>
                  {f.icon}
                </div>
                <h4 className="font-heading font-semibold text-text text-sm mb-2">{f.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Impact */}
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6, delay:0.4 }}>
          <h3 className="text-2xl font-heading font-bold text-text text-center mb-10">
            Business <span className="gradient-text">Impact</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impacts.map((imp, i) => (
              <motion.div key={imp.label}
                initial={{ opacity:0, scale:0.85 }} animate={inView?{opacity:1,scale:1}:{}}
                transition={{ duration:0.4, delay:0.5+i*0.07 }}
                whileHover={{ y:-3 }}
                className="glass border border-white/8 rounded-2xl p-4 text-center transition-all">
                <div className="text-xl font-heading font-bold mb-1" style={{ color:imp.color }}>{imp.value}</div>
                <div className="text-xs text-muted leading-snug">{imp.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
