"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certs = [
  { title:"AWS Certified Solutions Architect – Associate", issuer:"Amazon Web Services", color:"#F59E0B", emoji:"☁️", level:"Associate" },
  { title:"AWS Certified AI Practitioner", issuer:"Amazon Web Services", color:"#4F8CFF", emoji:"🤖", level:"Foundational" },
  { title:"AWS Certified Machine Learning Engineer – Associate", issuer:"Amazon Web Services", color:"#7C5CFF", emoji:"🧠", level:"Associate" },
  { title:"Kore.ai XO 11 Basic & Advanced", issuer:"Kore.ai", color:"#22D3EE", emoji:"💬", level:"Professional" },
  { title:"Cisco CCNA", issuer:"Cisco", color:"#22C55E", emoji:"🌐", level:"Associate" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding" ref={ref}
      style={{ background:"linear-gradient(180deg,#050816 0%,#0B1220 50%,#050816 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-text">
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
              transition={{ duration:0.5, delay:i*0.08 }}
              whileHover={{ y:-5, boxShadow:`0 20px 50px ${c.color}20` }}
              className="glass border border-white/8 rounded-2xl p-5 transition-all relative overflow-hidden group">
              {/* Top accent */}
              <div className="absolute top-0 inset-x-0 h-0.5 opacity-60" style={{ background:c.color }} />

              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background:`${c.color}12`, border:`1px solid ${c.color}30` }}>
                  {c.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background:`${c.color}15`, color:c.color, border:`1px solid ${c.color}30` }}>
                    {c.level}
                  </span>
                  <h3 className="text-sm font-heading font-semibold text-text leading-snug">{c.title}</h3>
                  <p className="text-xs text-muted mt-0.5">{c.issuer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <BadgeCheck size={13} style={{ color:c.color }} />
                  <span className="text-xs font-medium" style={{ color:c.color }}>Verified</span>
                </div>
                <ExternalLink size={12} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
