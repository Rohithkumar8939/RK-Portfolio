import { motion } from "framer-motion";
import { ExternalLink, Github, PlayCircle, FileText, Sparkles } from "lucide-react";
import { SectionHeading } from "./section-heading";

const small = [
  {
    title: "Lottle Cafe Website",
    subtitle: "Freelance Model Project",
    description: "A responsive cafe website showcasing modern UI/UX and clean user-focused design.",
    features: ["Responsive layout", "SEO meta tags", "Formspree integration", "WhatsApp CTA", "Smooth animations"],
    actions: [
      { label: "Live Website", Icon: ExternalLink, href: "#" },
      { label: "GitHub", Icon: Github, href: "#" },
    ],
  },
  {
    title: "Library Management System",
    subtitle: "Full-Stack Web App",
    description: "A web application with authentication and CRUD operations for managing library records.",
    features: ["User authentication", "CRUD operations", "Frontend + Backend + DB", "Real-world workflow"],
    actions: [
      { label: "Demo Video", Icon: PlayCircle, href: "#" },
      { label: "GitHub", Icon: Github, href: "#" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="A handful of products and experiments — built with care, animated with intent."
        />

        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] glass-strong glow-border p-8 md:p-12 mb-10 group"
        >
          <div
            className="absolute -top-32 -right-32 size-[28rem] rounded-full opacity-40 group-hover:opacity-70 transition-opacity"
            style={{ background: "radial-gradient(circle, var(--accent-glow), transparent 60%)" }}
          />
          <div
            className="absolute -bottom-32 -left-32 size-[28rem] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)" }}
          />

          <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-widest animate-pulse-glow"
                  style={{ background: "color-mix(in oklab, var(--accent) 22%, transparent)", color: "var(--accent-glow)" }}
                >
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Currently Building
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Featured</span>
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Career <span className="gradient-text">DNA AI</span>
              </h3>
              <p className="mt-3 text-base md:text-lg text-muted-foreground">
                AI-Powered Career Guidance Platform
              </p>
              <p className="mt-5 text-muted-foreground max-w-xl leading-relaxed">
                Developing an AI-powered career guidance and skill analysis platform that helps users discover paths,
                analyze strengths, and receive intelligent recommendations through modern AI workflows and
                interactive dashboards.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "AI Recommendations",
                  "Smart User Analysis",
                  "Interactive Dashboard",
                  "Realtime Insights",
                  "AI Workflows",
                  "Dynamic Analytics",
                ].map((f) => (
                  <span key={f} className="px-3 py-1.5 rounded-full text-xs font-mono glass text-muted-foreground">
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground glow-border"
                  style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-glow))" }}
                >
                  <ExternalLink size={14} /> Live Preview
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium glass hover:bg-secondary transition-colors">
                  <Github size={14} /> GitHub
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium glass hover:bg-secondary transition-colors">
                  <FileText size={14} /> Case Study
                </a>
              </div>
            </div>

            {/* AI dashboard mock */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="relative glass-strong glow-border rounded-2xl p-5 aspect-[4/5]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} style={{ color: "var(--accent-glow)" }} />
                    <span className="text-xs font-mono">career.ai/dashboard</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="size-2 rounded-full bg-muted-foreground/40" />
                    <span className="size-2 rounded-full bg-muted-foreground/40" />
                    <span className="size-2 rounded-full bg-muted-foreground/40" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="glass rounded-xl p-3">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Career Match</p>
                    <p className="font-display font-bold text-2xl mt-1" style={{ color: "var(--accent-glow)" }}>
                      94%
                    </p>
                  </div>
                  {["Frontend Engineer", "AI Product Designer", "UX Researcher"].map((r, i) => (
                    <motion.div
                      key={r}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="glass rounded-xl p-3 flex items-center justify-between"
                    >
                      <span className="text-sm">{r}</span>
                      <span className="text-xs font-mono text-muted-foreground">→</span>
                    </motion.div>
                  ))}
                  <div className="glass rounded-xl p-3 flex items-end gap-1.5 h-20">
                    {[40, 70, 50, 90, 60, 80, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
                        className="flex-1 rounded-sm"
                        style={{ background: "linear-gradient(to top, var(--accent), var(--accent-glow))" }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.article>

        {/* Smaller projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {small.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass-strong glow-border p-7"
            >
              <div
                className="absolute -top-24 -right-24 size-56 rounded-full opacity-20 group-hover:opacity-50 transition-opacity"
                style={{ background: "radial-gradient(circle, var(--accent-glow), transparent 60%)" }}
              />
              <div className="relative">
                <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent-glow)" }}>
                  {p.subtitle}
                </p>
                <h3 className="font-display text-2xl font-bold mt-2">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <span key={f} className="px-2.5 py-1 rounded-full text-[11px] font-mono glass text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.actions.map(({ label, Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium glass hover:bg-secondary transition-colors"
                    >
                      <Icon size={13} /> {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
