import { motion } from "framer-motion";
import { Code2, Server, Database, Terminal, Wrench, Sparkles } from "lucide-react";
import { SectionHeading } from "./section-heading";

const groups = [
  { Icon: Code2, title: "Frontend Development", items: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX Principles"], span: "md:col-span-2 md:row-span-2" },
  { Icon: Server, title: "Backend", items: ["Django (Basic)"], span: "" },
  { Icon: Database, title: "Database", items: ["MySQL (Basic)"], span: "" },
  { Icon: Terminal, title: "Languages", items: ["Python", "Java (Basic)"], span: "" },
  { Icon: Wrench, title: "Tools", items: ["Git & GitHub", "VS Code", "Claude"], span: "md:col-span-2" },
  { Icon: Sparkles, title: "Other Skills", items: ["SEO Basics", "API Integration", "AI Fundamentals"], span: "" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit tuned for modern web."
          description="An interactive stack of the technologies, tools, and principles I work with every day."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4">
          {groups.map(({ Icon, title, items, span }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-3xl glass-strong glow-border p-6 ${span}`}
            >
              <div
                className="absolute -top-20 -right-20 size-56 rounded-full opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: "radial-gradient(circle, var(--accent-glow), transparent 60%)" }}
              />
              <div className="relative flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="size-9 grid place-items-center rounded-xl"
                    style={{ background: "color-mix(in oklab, var(--accent) 22%, transparent)", color: "var(--accent-glow)" }}
                  >
                    <Icon size={16} />
                  </div>
                  <h3 className="font-display font-semibold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {items.map((it) => (
                    <span
                      key={it}
                      className="px-3 py-1.5 rounded-full text-xs font-mono glass hover:text-foreground text-muted-foreground transition-colors"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
