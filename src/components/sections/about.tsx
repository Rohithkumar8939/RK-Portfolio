import { motion } from "framer-motion";
import { Smartphone, Sparkles, Brain, Layers, Lightbulb } from "lucide-react";
import { SectionHeading } from "./section-heading";

const highlights = [
  { Icon: Smartphone, label: "Responsive Design" },
  { Icon: Sparkles, label: "Modern UI" },
  { Icon: Brain, label: "AI Integration" },
  { Icon: Layers, label: "Scalable Web Apps" },
  { Icon: Lightbulb, label: "Creative Problem Solving" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="About" title="Building the future, one interface at a time." />
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-8 md:p-10 glow-border"
          >
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Frontend developer skilled in building responsive, user-focused web applications using
              <span className="text-foreground"> HTML, CSS, and JavaScript</span>. Passionate about integrating
              <span className="text-foreground"> AI</span> into modern web applications and creating clean,
              scalable, user-centric digital experiences.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "Focus", v: "Frontend + AI" },
                { k: "Status", v: "Student" },
                { k: "Location", v: "Chennai, IN" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl glass p-4">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</p>
                  <p className="mt-1 font-display text-sm">{s.v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 group cursor-default"
              >
                <div
                  className="size-10 rounded-xl grid place-items-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ background: "color-mix(in oklab, var(--accent) 20%, transparent)", color: "var(--accent-glow)" }}
                >
                  <Icon size={18} />
                </div>
                <p className="font-display text-sm font-semibold">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
