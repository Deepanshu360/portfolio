"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Code2 } from "lucide-react";

const experiences = [
  {
    company: "Genpact",
    role: "Software Development Engineer",
    period: "Jan 2025 – Present",
    type: "Full-time",
    color: "#4F8CFF",
    icon: Briefcase,
    highlights: [
      "Amazon Connect contact flow development & optimization",
      "Genesys Cloud CX Architect flow design",
      "Amazon Bedrock integrations for generative AI",
      "AI workflow automation & agentic implementations",
      "Contact center engineering for enterprise clients",
      "AWS cloud architecture & IaC with CloudFormation",
      "Intelligent customer experience system design",
    ],
    tags: ["Amazon Connect","Genesys Cloud","Bedrock","AI Automation","Cloud Architecture"],
  },
  {
    company: "InAwwgment Pvt Ltd",
    role: "Software Engineer Intern",
    period: "Sept 2022 – Aug 2023",
    type: "Internship",
    color: "#7C5CFF",
    icon: Code2,
    highlights: [
      "Vue.js frontend development for web applications",
      "UI/UX optimization improving user engagement",
      "REST API integration and state management",
      "Component library development and documentation",
    ],
    tags: ["Vue.js","JavaScript","Frontend","REST APIs"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}
      style={{ background:"linear-gradient(180deg,#050816 0%,#0B1220 50%,#050816 100%)" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Career</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-text">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-4 bottom-4 w-px timeline-line" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div key={exp.company}
                initial={{ opacity:0, x:-30 }} animate={inView?{opacity:1,x:0}:{}}
                transition={{ duration:0.6, delay:i*0.15 }}
                className="relative pl-16">
                {/* Dot */}
                <motion.div initial={{ scale:0 }} animate={inView?{scale:1}:{}}
                  transition={{ duration:0.4, delay:i*0.15+0.2 }}
                  className="absolute left-3 top-5 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor:exp.color, background:"#050816", boxShadow:`0 0 16px ${exp.color}50` }}>
                  <div className="w-2 h-2 rounded-full" style={{ background:exp.color }} />
                </motion.div>

                <motion.div whileHover={{ x:4 }}
                  className="glass border rounded-2xl p-6 transition-all"
                  style={{ borderColor:`${exp.color}25` }}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <exp.icon size={15} style={{ color:exp.color }} />
                        <h3 className="text-lg font-heading font-bold text-text">{exp.company}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full border"
                          style={{ borderColor:`${exp.color}40`, color:exp.color, background:`${exp.color}10` }}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm font-semibold" style={{ color:exp.color }}>{exp.role}</p>
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-full glass border border-white/10 text-muted shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                    {exp.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background:exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map(t => (
                      <span key={t} className="badge" style={{ borderColor:`${exp.color}30`, color:exp.color }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
