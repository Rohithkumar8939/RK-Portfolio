import { Github, Linkedin, Mail } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export function Footer() {
  return (
    <footer className="relative pt-16 pb-10">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent-glow), transparent)" }}
      />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#home" className="font-display font-bold tracking-widest text-lg">
            ROHITH<span style={{ color: "var(--accent-glow)" }}>.</span>K
          </a>
          <nav className="flex flex-wrap items-center gap-6">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com/" },
              { Icon: Linkedin, href: "https://linkedin.com/" },
              { Icon: Mail, href: "mailto:sj893914@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="size-9 grid place-items-center rounded-full glass hover:text-foreground text-muted-foreground transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          Built with <span style={{ color: "var(--accent-glow)" }}>♥</span> by Rohith Kumar S
        </p>
      </div>
    </footer>
  );
}
