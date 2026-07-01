import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from "lucide-react";
import profile from "@/assets/profile.jpg";

const roles = ["Frontend Developer", "Creative UI Engineer", "AI Enthusiast", "Open to Internship & Freelance"];

function TypingRoles() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    if (!del && text === current) {
      const t = setTimeout(() => setDel(true), 1600);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((i + 1) % roles.length);
      return;
    }
    const t = setTimeout(() => {
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, del ? 30 : 70);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-glow" style={{ color: "var(--accent-glow)" }}>
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle ml-1 animate-pulse" style={{ background: "var(--accent-glow)" }} />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--accent-glow) 18%, transparent), transparent 60%)",
        }}
      />
      <motion.div
        className="absolute -left-32 top-1/3 size-[28rem] rounded-full"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)", opacity: 0.2, filter: "blur(40px)" }}
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-32 bottom-10 size-[26rem] rounded-full"
        style={{ background: "radial-gradient(circle, var(--accent-glow), transparent 60%)", opacity: 0.2, filter: "blur(40px)" }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center relative">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Internship & Freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.7 }}
            className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Rohith <br />
            <span className="gradient-text">Kumar S</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground font-mono h-7"
          >
            <TypingRoles />
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.1, duration: 0.6 }}
            className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
          >
            Crafting immersive, AI-powered web experiences with a focus on modern UI/UX, performance, and meaningful interaction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground overflow-hidden glow-border"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-glow))" }}
            >
              <span className="relative">View Projects</span>
              <ArrowRight size={16} className="relative transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium glass hover:bg-secondary transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium glass hover:bg-secondary transition-colors"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { Icon: Github, href: "https://github.com/" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/rohith-kumar-s-399723406/" },
              { Icon: Mail, href: "mailto:sj893914@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.08 }}
                className="size-10 grid place-items-center rounded-full glass hover:text-foreground text-muted-foreground transition-colors"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="relative size-[280px] md:size-[360px]">
            <div className="absolute inset-0 rounded-full animate-spin-slow"
              style={{ background: "conic-gradient(from 0deg, transparent, var(--accent-glow), transparent 40%, var(--accent), transparent 80%)" }}
            />
            <div className="absolute inset-2 rounded-full bg-background" />
            <div className="absolute inset-3 rounded-full overflow-hidden glow-border animate-float">
              <img src={profile} alt="Rohith Kumar S" className="size-full object-cover" />
            </div>
            {/* floating tech chips */}
            {["React", "AI", "JS", "UI"].map((t, i) => (
              <motion.div
                key={t}
                className="absolute glass-strong rounded-full px-3 py-1 text-xs font-mono"
                style={{
                  top: `${[5, 80, 50, 15][i]}%`,
                  left: `${[80, 70, -8, -5][i]}%`,
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
              >
                <span style={{ color: "var(--accent-glow)" }}>◆</span> {t}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  );
}
