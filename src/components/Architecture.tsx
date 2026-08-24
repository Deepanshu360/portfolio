"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const nodes = [
  { id:"citizen", label:"Citizen / Customer", icon:"👤", color:"#22D3EE",
    purpose:"End user initiating contact via voice, chat, or digital channel.",
    architecture:"Multi-channel entry supporting PSTN, WebRTC, chat APIs, and digital messaging.",
    implementation:"Amazon Connect phone numbers, Genesys Cloud queues, and web chat widgets.",
    dataflow:"Caller ID, channel type, and initial intent captured at entry point.",
    impact:"Seamless omnichannel experience reducing customer effort score by 40%." },
  { id:"platform", label:"Amazon Connect / Genesys Cloud", icon:"☁️", color:"#4F8CFF",
    purpose:"Cloud contact center platform orchestrating all customer interactions.",
    architecture:"Contact flows (Connect) / Architect flows (Genesys) with routing profiles, queues, and real-time analytics.",
    implementation:"Custom flows with Lambda/Data Actions integrations, dynamic routing, and caller authentication.",
    dataflow:"Contact metadata, queue assignments, and routing decisions flow through the platform.",
    impact:"Reduced average handle time by 35% through intelligent self-service automation." },
  { id:"virtualagent", label:"Virtual Agent", icon:"🤖", color:"#7C5CFF",
    purpose:"AI-powered conversational agent handling self-service interactions.",
    architecture:"Genesys AI Copilot or Amazon Lex bot embedded in the contact flow.",
    implementation:"Intent-based dialog management with slot filling and context carryover.",
    dataflow:"User utterances → NLU engine → intent + entities → fulfillment logic.",
    impact:"Automated 60% of tier-1 queries without human intervention." },
  { id:"lex", label:"Amazon Lex / Conversational AI", icon:"💬", color:"#22D3EE",
    purpose:"NLU engine powering intent recognition and multi-turn dialog.",
    architecture:"Custom intents, slot types, and Lambda fulfillment hooks.",
    implementation:"Banking, government, and support intents with dynamic backend integration.",
    dataflow:"Text/speech → intent classification → slot extraction → Lambda fulfillment.",
    impact:"95%+ intent recognition accuracy across production workloads." },
  { id:"bedrock", label:"Amazon Bedrock", icon:"🧠", color:"#F59E0B",
    purpose:"Foundation model API for generative AI, RAG, and agentic workflows.",
    architecture:"Claude/Titan models with Knowledge Bases for RAG, Agents for tool calling.",
    implementation:"Bedrock Agents with action groups invoking Lambda tools for CRM and DB operations.",
    dataflow:"Prompt + context → FM inference → structured response → downstream action.",
    impact:"Real-time AI summarization and next-best-action recommendations." },
  { id:"lambda", label:"AWS Lambda", icon:"⚡", color:"#22C55E",
    purpose:"Serverless compute executing business logic and integrations.",
    architecture:"Event-driven functions triggered by Connect, Lex, Bedrock, and API Gateway.",
    implementation:"Python functions for CRM lookups, authentication, data transformation, routing.",
    dataflow:"Event payload → business logic → API calls → structured response.",
    impact:"Sub-100ms response times at scale with zero infrastructure overhead." },
  { id:"data", label:"Data Tables / DynamoDB", icon:"🗄️", color:"#4F8CFF",
    purpose:"Persistent storage for session state, customer profiles, and case data.",
    architecture:"Genesys Data Tables + DynamoDB single-table design with GSIs.",
    implementation:"Stores contact metadata, conversation context, case records, and preferences.",
    dataflow:"Lambda reads/writes → customer profile enrichment → routing decisions.",
    impact:"Sub-10ms reads enabling real-time personalization during live interactions." },
  { id:"crm", label:"CRM / Case Management", icon:"📋", color:"#7C5CFF",
    purpose:"Customer relationship and case lifecycle management system.",
    architecture:"Genesys Case Management or external CRM via Data Actions / API Gateway.",
    implementation:"Automated case creation, updates, and closure triggered by interaction events.",
    dataflow:"Interaction data → case record creation → agent screen pop → resolution tracking.",
    impact:"100% automated case creation eliminating manual agent data entry." },
  { id:"cloudwatch", label:"CloudWatch / Analytics", icon:"📊", color:"#F59E0B",
    purpose:"Observability, metrics, and operational analytics platform.",
    architecture:"Custom metrics, log groups, dashboards, and Genesys Analytics views.",
    implementation:"Real-time alerting on queue depth, containment rate, and SLA breaches.",
    dataflow:"Platform events → metrics pipeline → dashboards → automated alerts.",
    impact:"Proactive incident detection reducing MTTR by 50%." },
];

export default function Architecture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sel, setSel] = useState<typeof nodes[0] | null>(null);

  return (
    <section id="architecture" className="section-padding" ref={ref}
      style={{ background:"linear-gradient(180deg, #050816 0%, #0B1220 50%, #050816 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Solution Design</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-text">
            Contact Center <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-muted mt-4 max-w-lg mx-auto text-sm">
            Click any node to explore purpose, implementation, data flow, and business impact.
          </p>
        </motion.div>

        <div className="flex flex-col items-center w-full">
          {nodes.map((node, i) => (
            <motion.div key={node.id}
              initial={{ opacity:0, scale:0.85 }}
              animate={inView?{opacity:1,scale:1}:{}}
              transition={{ duration:0.4, delay:i*0.07 }}
              className="flex flex-col items-center w-full max-w-sm">
              <motion.button
                whileHover={{ scale:1.04, boxShadow:`0 0 35px ${node.color}50` }}
                whileTap={{ scale:0.97 }}
                onClick={() => setSel(node)}
                className="glass border rounded-2xl px-6 py-3.5 flex items-center gap-3 cursor-pointer transition-all w-full justify-center"
                style={{ borderColor:`${node.color}35` }}>
                <span className="text-xl shrink-0">{node.icon}</span>
                <span className="font-heading font-semibold text-text text-sm text-left flex-1">{node.label}</span>
                <motion.div animate={{ opacity:[0.5,1,0.5] }} transition={{ duration:2, repeat:Infinity }}
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background:node.color, boxShadow:`0 0 8px ${node.color}` }} />
              </motion.button>
              {i < nodes.length - 1 && (
                <motion.div
                  initial={{ scaleY:0 }} animate={inView?{scaleY:1}:{}}
                  transition={{ duration:0.3, delay:i*0.07+0.2 }}
                  className="w-px h-7 origin-top"
                  style={{ background:`linear-gradient(to bottom, ${node.color}70, ${nodes[i+1].color}70)` }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Overlay + Panel */}
      <AnimatePresence>
        {sel && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[997]"
              onClick={() => setSel(null)}
            />

            {/* Desktop: right drawer | Mobile: bottom sheet */}
            <motion.div
              initial={{ x:"100%" }}
              animate={{ x:0 }}
              exit={{ x:"100%" }}
              transition={{ type:"spring", damping:28, stiffness:220 }}
              className="fixed right-0 top-16 bottom-0 w-full max-w-[420px] glass border-l border-white/10 z-[998] flex flex-col max-md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background:`${sel.color}20`, border:`1px solid ${sel.color}40` }}>
                    {sel.icon}
                  </div>
                  <h3 className="text-base font-heading font-bold text-text leading-tight truncate">{sel.label}</h3>
                </div>
                <button
                  onClick={() => setSel(null)}
                  className="w-9 h-9 rounded-xl glass border border-white/15 flex items-center justify-center text-muted hover:text-text hover:border-white/30 transition-all shrink-0 ml-4"
                  aria-label="Close panel"
                >
                  <X size={16} />
                </button>
              </div>
              {/* Body */}
              <div className="overflow-y-auto flex-1 p-6 pt-5">
                {[
                  { title:"Purpose", content:sel.purpose },
                  { title:"Architecture", content:sel.architecture },
                  { title:"Implementation", content:sel.implementation },
                  { title:"Data Flow", content:sel.dataflow },
                  { title:"Business Impact", content:sel.impact },
                ].map((item) => (
                  <div key={item.title} className="mb-5 pb-5 border-b border-white/6 last:border-0 last:mb-0 last:pb-0">
                    <h4 className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color:sel.color }}>{item.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mobile bottom sheet */}
            <motion.div
              initial={{ y:"100%" }}
              animate={{ y:0 }}
              exit={{ y:"100%" }}
              transition={{ type:"spring", damping:28, stiffness:220 }}
              className="fixed bottom-0 left-0 right-0 glass border-t border-white/10 z-[998] flex flex-col rounded-t-3xl md:hidden"
              style={{ maxHeight:"82vh" }}
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-1 shrink-0">
                <div className="w-10 h-1 rounded-full bg-white/20" />
              </div>
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background:`${sel.color}20`, border:`1px solid ${sel.color}40` }}>
                    {sel.icon}
                  </div>
                  <h3 className="text-sm font-heading font-bold text-text leading-tight">{sel.label}</h3>
                </div>
                <button
                  onClick={() => setSel(null)}
                  className="w-9 h-9 rounded-xl glass border border-white/15 flex items-center justify-center text-muted hover:text-text transition-all shrink-0 ml-3"
                  aria-label="Close panel"
                >
                  <X size={16} />
                </button>
              </div>
              {/* Body */}
              <div className="overflow-y-auto flex-1 px-5 py-4">
                {[
                  { title:"Purpose", content:sel.purpose },
                  { title:"Architecture", content:sel.architecture },
                  { title:"Implementation", content:sel.implementation },
                  { title:"Data Flow", content:sel.dataflow },
                  { title:"Business Impact", content:sel.impact },
                ].map((item) => (
                  <div key={item.title} className="mb-4 pb-4 border-b border-white/6 last:border-0 last:mb-0 last:pb-0">
                    <h4 className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color:sel.color }}>{item.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
