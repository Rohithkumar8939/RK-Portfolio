import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github, Copy, Check } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./section-heading";

const items = [
  { Icon: Phone, label: "Phone", value: "+91 89391 45079", href: "tel:+918939145079", copy: "+91 89391 45079" },
  { Icon: Mail, label: "Email", value: "sj893914@gmail.com", href: "mailto:sj893914@gmail.com", copy: "sj893914@gmail.com" },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rohithkumars", href: "https://www.linkedin.com/in/rohith-kumar-s-399723406/", copy: null },
  { Icon: Github, label: "GitHub", value: "github.com/rohithkumars", href: "https://github.com/", copy: null },
];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (v: string) => {
    navigator.clipboard?.writeText(v);
    setCopied(v);
    setTimeout(() => setCopied(null), 1600);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something extraordinary."
          description="Reach out directly — I'm open to internships, freelance work, and creative collaborations."
        />
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
          {items.map(({ Icon, label, value, href, copy }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl glass-strong glow-border p-6 flex items-center gap-5"
            >
              <div
                className="absolute -top-20 -right-20 size-48 rounded-full opacity-20 group-hover:opacity-50 transition-opacity"
                style={{ background: "radial-gradient(circle, var(--accent-glow), transparent 60%)" }}
              />
              <div
                className="relative size-12 grid place-items-center rounded-2xl group-hover:scale-110 transition-transform"
                style={{ background: "color-mix(in oklab, var(--accent) 22%, transparent)", color: "var(--accent-glow)" }}
              >
                <Icon size={18} />
              </div>
              <div className="relative flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="font-display font-semibold truncate">{value}</p>
              </div>
              {copy && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy(copy);
                  }}
                  className="relative size-9 grid place-items-center rounded-full glass text-muted-foreground hover:text-foreground"
                  aria-label="Copy"
                >
                  {copied === copy ? <Check size={14} /> : <Copy size={14} />}
                </button>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
