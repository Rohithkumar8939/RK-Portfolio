import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Education" title="Academic journey." />
        <div className="relative max-w-3xl">
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, var(--accent-glow), transparent)" }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative pl-14 md:pl-20"
          >
            <span
              className="absolute left-0 top-2 size-9 md:size-12 grid place-items-center rounded-full glass-strong animate-pulse-glow"
              style={{ color: "var(--accent-glow)" }}
            >
              <GraduationCap size={18} />
            </span>
            <div className="glass-strong glow-border rounded-2xl p-6 md:p-8">
              <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent-glow)" }}>
                2025 — Present
              </p>
              <h3 className="font-display text-xl md:text-2xl font-bold mt-2">
                Bachelor of Science in Computer Science with AI
              </h3>
              <p className="text-muted-foreground mt-2">DG Vaishnav College — Chennai</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
