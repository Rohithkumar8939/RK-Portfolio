import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "./section-heading";

const certs = [
  {
    title: "Certificate of Excellence in Web Application Development using Django",
    issuer: "Futuro Focus",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Certifications" title="Credentials & recognition." />
        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass-strong glow-border p-8"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--accent-glow) 20%, transparent), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="size-12 grid place-items-center rounded-2xl animate-pulse-glow"
                    style={{ background: "color-mix(in oklab, var(--accent) 22%, transparent)", color: "var(--accent-glow)" }}
                  >
                    <Award size={20} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Certificate
                  </span>
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 text-muted-foreground">{c.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
