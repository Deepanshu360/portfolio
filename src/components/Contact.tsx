"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle, Download } from "lucide-react";

const links = [
  { icon:Mail, label:"Email", value:"deepanshusingh774@gmail.com", href:"mailto:deepanshusingh774@gmail.com", color:"#4F8CFF" },
  { icon:Linkedin, label:"LinkedIn", value:"connectdeepanshu0711", href:"https://linkedin.com/in/connectdeepanshu0711", color:"#7C5CFF" },
  { icon:Github, label:"GitHub", value:"Deepanshu360", href:"https://github.com/Deepanshu360", color:"#22D3EE" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name:"", email:"", subject:"", message:"" });
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-text">
            Let's Build Intelligent <span className="gradient-text">AI Contact Center</span> Solutions
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto text-sm">
            Available for Amazon Connect, Genesys Cloud, AI Contact Center, Generative AI, and Cloud Engineering opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <motion.div initial={{ opacity:0, x:-30 }} animate={inView?{opacity:1,x:0}:{}}
            transition={{ duration:0.6, delay:0.1 }} className="lg:col-span-2 flex flex-col gap-4">
            {links.map((c, i) => (
              <motion.a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity:0, x:-20 }} animate={inView?{opacity:1,x:0}:{}}
                transition={{ duration:0.5, delay:0.2+i*0.1 }}
                whileHover={{ x:5, boxShadow:`0 0 30px ${c.color}20` }}
                className="glass border border-white/8 rounded-2xl p-4 flex items-center gap-4 transition-all group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background:`${c.color}12`, border:`1px solid ${c.color}30` }}>
                  <c.icon size={18} style={{ color:c.color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted mb-0.5">{c.label}</p>
                  <p className="text-sm font-medium text-text truncate">{c.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.a href="/resume.pdf" download
              initial={{ opacity:0, x:-20 }} animate={inView?{opacity:1,x:0}:{}}
              transition={{ duration:0.5, delay:0.5 }}
              whileHover={{ scale:1.02, boxShadow:"0 0 30px rgba(79,140,255,0.3)" }}
              className="glass border border-white/10 rounded-2xl p-4 flex items-center gap-3 transition-all"
              style={{ background:"linear-gradient(135deg,rgba(79,140,255,0.08),rgba(124,92,255,0.08))" }}>
              <Download size={18} className="text-accent" />
              <div>
                <p className="text-sm font-semibold text-text">Download Resume</p>
                <p className="text-xs text-muted">PDF · Updated 2025</p>
              </div>
            </motion.a>

            <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:0.6 }}
              className="glass border border-green-500/20 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-400">Open to Opportunities</span>
              </div>
              <p className="text-xs text-muted">Full-time roles & consulting engagements in AI Contact Center engineering.</p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={submit}
            initial={{ opacity:0, x:30 }} animate={inView?{opacity:1,x:0}:{}}
            transition={{ duration:0.6, delay:0.2 }}
            className="lg:col-span-3 glass border border-white/8 rounded-3xl p-6 flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { key:"name", label:"Name", type:"text", placeholder:"Your name" },
                { key:"email", label:"Email", type:"email", placeholder:"your@email.com" },
              ].map(f => (
                <div key={f.key}>
                  <label className="text-xs text-muted mb-1.5 block">{f.label}</label>
                  <input type={f.type} required placeholder={f.placeholder}
                    value={form[f.key as keyof typeof form]}
                    onChange={e => setForm({...form,[f.key]:e.target.value})}
                    className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-text placeholder-muted/50 focus:outline-none focus:border-blue-500/50 transition-colors" />
                </div>
              ))}
            </div>
            <div>
              <label className="text-xs text-muted mb-1.5 block">Subject</label>
              <input type="text" placeholder="Amazon Connect opportunity / Project inquiry"
                value={form.subject}
                onChange={e => setForm({...form,subject:e.target.value})}
                className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-text placeholder-muted/50 focus:outline-none focus:border-blue-500/50 transition-colors" />
            </div>
            <div>
              <label className="text-xs text-muted mb-1.5 block">Message</label>
              <textarea required rows={5} placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={e => setForm({...form,message:e.target.value})}
                className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-text placeholder-muted/50 focus:outline-none focus:border-blue-500/50 transition-colors resize-none" />
            </div>
            <motion.button type="submit"
              whileHover={{ scale:1.02, boxShadow:"0 0 35px rgba(79,140,255,0.4)" }}
              whileTap={{ scale:0.98 }}
              className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white text-sm transition-all"
              style={{ background:sent?"linear-gradient(135deg,#22C55E,#16A34A)":"linear-gradient(135deg,#4F8CFF,#7C5CFF)" }}>
              {sent ? <><CheckCircle size={15}/> Message Sent!</> : <><Send size={15}/> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
