import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { S as Sun, M as Moon, X, a as Menu, A as ArrowRight, b as Mail, D as Download, G as Github, L as Linkedin, C as ChevronDown, c as Smartphone, d as Sparkles, B as Brain, e as Layers, f as Lightbulb, g as CodeXml, h as Server, i as Database, T as Terminal, W as Wrench, j as GraduationCap, k as Award, E as ExternalLink, l as CirclePlay, P as Phone, m as Check, n as Copy, o as ArrowUp } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const ThemeCtx = reactExports.createContext({
  theme: "dark",
  toggle: () => {
  }
});
function ThemeProvider({ children }) {
  const [theme, setTheme] = reactExports.useState("dark");
  reactExports.useEffect(() => {
    const stored = typeof localStorage !== "undefined" && localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
    }
  }, [theme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeCtx.Provider, { value: { theme, toggle: () => setTheme((t) => t === "dark" ? "light" : "dark") }, children });
}
const useTheme = () => reactExports.useContext(ThemeCtx);
function Loader() {
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);
  const text = "ROHITH PORTFOLIO";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, filter: "blur(20px)", scale: 1.05 },
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background grid-bg",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute -top-40 -left-40 size-[40rem] rounded-full",
              style: { background: "radial-gradient(circle, var(--accent-glow), transparent 60%)", opacity: 0.25 },
              animate: { x: [0, 40, 0], y: [0, 20, 0] },
              transition: { duration: 6, repeat: Infinity }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute -bottom-40 -right-40 size-[40rem] rounded-full",
              style: { background: "radial-gradient(circle, var(--accent), transparent 60%)", opacity: 0.2 },
              animate: { x: [0, -30, 0], y: [0, -20, 0] },
              transition: { duration: 7, repeat: Infinity }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-hidden", children: text.split("").map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              initial: { y: "110%", opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              className: "font-display text-3xl md:text-5xl font-bold tracking-[0.18em] text-foreground text-glow",
              style: { display: "inline-block", whiteSpace: "pre" },
              children: ch === " " ? " " : ch
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scaleX: 0 },
              animate: { scaleX: 1 },
              transition: { duration: 1.8, ease: "easeInOut" },
              className: "h-px w-64 origin-left",
              style: { background: "linear-gradient(90deg, transparent, var(--accent-glow), transparent)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1 },
              className: "text-xs uppercase tracking-[0.4em] text-muted-foreground",
              children: "Initializing experience"
            }
          )
        ] })
      ]
    }
  ) });
}
const links$1 = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];
function Nav() {
  const [active, setActive] = reactExports.useState("home");
  const [open, setOpen] = reactExports.useState(false);
  const { theme, toggle } = useTheme();
  reactExports.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links$1.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.nav,
      {
        initial: { y: -40, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { delay: 2.8, duration: 0.6 },
        className: "fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(96vw,860px)]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-full px-3 py-2 flex items-center justify-between shadow-glass", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "px-3 py-1 font-display font-bold tracking-widest text-sm", children: [
            "R",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--accent-glow)" }, children: "." }),
            "K"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-1", children: links$1.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `#${l.id}`,
              className: "relative px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors",
              children: [
                active === l.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    layoutId: "nav-pill",
                    className: "absolute inset-0 rounded-full",
                    style: { background: "color-mix(in oklab, var(--accent) 18%, transparent)" },
                    transition: { type: "spring", stiffness: 380, damping: 30 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative ${active === l.id ? "text-foreground text-glow" : ""}`, children: l.label })
              ]
            },
            l.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: toggle,
                "aria-label": "Toggle theme",
                className: "size-9 grid place-items-center rounded-full hover:bg-secondary transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { rotate: -90, opacity: 0 },
                    animate: { rotate: 0, opacity: 1 },
                    exit: { rotate: 90, opacity: 0 },
                    transition: { duration: 0.25 },
                    children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 16 })
                  },
                  theme
                ) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "md:hidden size-9 grid place-items-center rounded-full hover:bg-secondary",
                onClick: () => setOpen((o) => !o),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 16 })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        className: "fixed top-20 left-1/2 z-50 -translate-x-1/2 w-[min(94vw,420px)] md:hidden glass-strong rounded-2xl p-3 shadow-glass",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: links$1.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `#${l.id}`,
            onClick: () => setOpen(false),
            className: `px-4 py-3 rounded-xl text-sm ${active === l.id ? "bg-secondary text-foreground" : "text-muted-foreground"}`,
            children: l.label
          },
          l.id
        )) })
      }
    ) })
  ] });
}
function BackToTop() {
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.button,
    {
      initial: { opacity: 0, scale: 0.6, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.6, y: 20 },
      whileHover: { scale: 1.08 },
      whileTap: { scale: 0.95 },
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      "aria-label": "Back to top",
      className: "fixed bottom-6 right-6 z-50 size-12 grid place-items-center rounded-full glass-strong glow-border animate-pulse-glow",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          animate: { y: [0, -3, 0] },
          transition: { duration: 1.6, repeat: Infinity },
          style: { color: "var(--accent-glow)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 18 })
        }
      )
    }
  ) });
}
function CursorGlow() {
  const [pos, setPos] = reactExports.useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      "aria-hidden": true,
      className: "pointer-events-none fixed z-[60] size-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full",
      style: {
        background: "radial-gradient(circle, color-mix(in oklab, var(--accent-glow) 18%, transparent), transparent 60%)",
        left: pos.x,
        top: pos.y,
        mixBlendMode: "screen"
      },
      transition: { type: "spring", damping: 30, stiffness: 200 }
    }
  );
}
const profile = "/assets/profile2-ByCzGGaV.jpeg";
const roles = ["Frontend Developer", "Creative UI Engineer", "AI Enthusiast", "Open to Internship & Freelance"];
function TypingRoles() {
  const [i, setI] = reactExports.useState(0);
  const [text, setText] = reactExports.useState("");
  const [del, setDel] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const current = roles[i];
    if (!del && text === current) {
      const t2 = setTimeout(() => setDel(true), 1600);
      return () => clearTimeout(t2);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-glow", style: { color: "var(--accent-glow)" }, children: [
    text,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-[2px] h-[1em] align-middle ml-1 animate-pulse", style: { background: "var(--accent-glow)" } })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--accent-glow) 18%, transparent), transparent 60%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute -left-32 top-1/3 size-[28rem] rounded-full",
        style: { background: "radial-gradient(circle, var(--accent), transparent 60%)", opacity: 0.2, filter: "blur(40px)" },
        animate: { y: [0, 30, 0] },
        transition: { duration: 8, repeat: Infinity }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute -right-32 bottom-10 size-[26rem] rounded-full",
        style: { background: "radial-gradient(circle, var(--accent-glow), transparent 60%)", opacity: 0.2, filter: "blur(40px)" },
        animate: { y: [0, -30, 0] },
        transition: { duration: 9, repeat: Infinity }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 2.6, duration: 0.6 },
            className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-emerald-400 animate-pulse" }),
              "Available for Internship & Freelance"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 2.7, duration: 0.7 },
            className: "mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight",
            children: [
              "Rohith ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Kumar S" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 3, duration: 0.6 },
            className: "mt-6 text-lg md:text-xl text-muted-foreground font-mono h-7",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypingRoles, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 3.1, duration: 0.6 },
            className: "mt-6 max-w-xl text-muted-foreground leading-relaxed",
            children: "Crafting immersive, AI-powered web experiences with a focus on modern UI/UX, performance, and meaningful interaction."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 3.2, duration: 0.6 },
            className: "mt-8 flex flex-wrap gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#projects",
                  className: "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground overflow-hidden glow-border",
                  style: { background: "linear-gradient(135deg, var(--accent), var(--accent-glow))" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "View Projects" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "relative transition-transform group-hover:translate-x-1" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#contact",
                  className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium glass hover:bg-secondary transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16 }),
                    " Contact Me"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#",
                  onClick: (e) => e.preventDefault(),
                  className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium glass hover:bg-secondary transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16 }),
                    " Resume"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 3.4 },
            className: "mt-8 flex items-center gap-3",
            children: [
              { Icon: Github, href: "https://github.com/" },
              { Icon: Linkedin, href: "https://linkedin.com/" },
              { Icon: Mail, href: "mailto:sj893914@gmail.com" }
            ].map(({ Icon, href }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.a,
              {
                href,
                target: "_blank",
                rel: "noreferrer",
                whileHover: { y: -3, scale: 1.08 },
                className: "size-10 grid place-items-center rounded-full glass hover:text-foreground text-muted-foreground transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 })
              },
              i
            ))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: 2.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          className: "relative mx-auto",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative size-[280px] md:size-[360px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 rounded-full animate-spin-slow",
                style: { background: "conic-gradient(from 0deg, transparent, var(--accent-glow), transparent 40%, var(--accent), transparent 80%)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-2 rounded-full bg-background" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-3 rounded-full overflow-hidden glow-border animate-float flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profile, alt: "Rohith Kumar S", className: "size-full object-cover object-[center_20%] block rounded-full" }) }),
            ["React", "AI", "JS", "UI"].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "absolute glass-strong rounded-full px-3 py-1 text-xs font-mono",
                style: {
                  top: `${[5, 80, 50, 15][i]}%`,
                  left: `${[80, 70, -8, -5][i]}%`
                },
                animate: { y: [0, -10, 0] },
                transition: { duration: 3 + i, repeat: Infinity, delay: i * 0.4 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--accent-glow)" }, children: "◆" }),
                  " ",
                  t
                ]
              },
              t
            ))
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.a,
      {
        href: "#about",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 3.6 },
        className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground",
        "aria-label": "Scroll",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: { y: [0, 6, 0] }, transition: { duration: 1.6, repeat: Infinity }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 22 }) })
      }
    )
  ] });
}
function SectionHeading({ eyebrow, title, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.p,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        className: "text-xs uppercase tracking-[0.4em] mb-3",
        style: { color: "var(--accent-glow)" },
        children: [
          "— ",
          eyebrow
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6 },
        className: "font-display text-4xl md:text-5xl font-bold tracking-tight",
        children: title
      }
    ),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { delay: 0.1, duration: 0.6 },
        className: "mt-4 text-muted-foreground",
        children: description
      }
    )
  ] });
}
const highlights = [
  { Icon: Smartphone, label: "Responsive Design" },
  { Icon: Sparkles, label: "Modern UI" },
  { Icon: Brain, label: "AI Integration" },
  { Icon: Layers, label: "Scalable Web Apps" },
  { Icon: Lightbulb, label: "Creative Problem Solving" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "About", title: "Building the future, one interface at a time." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1.1fr_1fr] gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.7 },
          className: "glass-strong rounded-3xl p-8 md:p-10 glow-border",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base md:text-lg leading-relaxed text-muted-foreground", children: [
              "Frontend developer skilled in building responsive, user-focused web applications using",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " HTML, CSS, and JavaScript" }),
              ". Passionate about integrating",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " AI" }),
              " into modern web applications and creating clean, scalable, user-centric digital experiences."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-4", children: [
              { k: "Focus", v: "Frontend + AI" },
              { k: "Status", v: "Student" },
              { k: "Location", v: "Chennai, IN" }
            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: s.k }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-sm", children: s.v })
            ] }, s.k)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: highlights.map(({ Icon, label }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { delay: i * 0.06, duration: 0.5 },
          whileHover: { y: -4 },
          className: "glass rounded-2xl p-5 group cursor-default",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "size-10 rounded-xl grid place-items-center mb-3 group-hover:scale-110 transition-transform",
                style: { background: "color-mix(in oklab, var(--accent) 20%, transparent)", color: "var(--accent-glow)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold", children: label })
          ]
        },
        label
      )) })
    ] })
  ] }) });
}
const groups = [
  { Icon: CodeXml, title: "Frontend Development", items: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX Principles"], span: "md:col-span-2 md:row-span-2" },
  { Icon: Server, title: "Backend", items: ["Django (Basic)"], span: "" },
  { Icon: Database, title: "Database", items: ["MySQL (Basic)"], span: "" },
  { Icon: Terminal, title: "Languages", items: ["Python", "Java (Basic)"], span: "" },
  { Icon: Wrench, title: "Tools", items: ["Git & GitHub", "VS Code", "Claude"], span: "md:col-span-2" },
  { Icon: Sparkles, title: "Other Skills", items: ["SEO Basics", "API Integration", "AI Fundamentals"], span: "" }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Skills",
        title: "A toolkit tuned for modern web.",
        description: "An interactive stack of the technologies, tools, and principles I work with every day."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4", children: groups.map(({ Icon, title, items: items2, span }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { delay: i * 0.07, duration: 0.6 },
        whileHover: { y: -4 },
        className: `group relative overflow-hidden rounded-3xl glass-strong glow-border p-6 ${span}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-20 -right-20 size-56 rounded-full opacity-30 group-hover:opacity-60 transition-opacity",
              style: { background: "radial-gradient(circle, var(--accent-glow), transparent 60%)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "size-9 grid place-items-center rounded-xl",
                  style: { background: "color-mix(in oklab, var(--accent) 22%, transparent)", color: "var(--accent-glow)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold", children: title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-auto", children: items2.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-3 py-1.5 rounded-full text-xs font-mono glass hover:text-foreground text-muted-foreground transition-colors",
                children: it
              },
              it
            )) })
          ] })
        ]
      },
      title
    )) })
  ] }) });
}
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "education", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Education", title: "Academic journey." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-4 md:left-6 top-0 bottom-0 w-px",
          style: { background: "linear-gradient(to bottom, var(--accent-glow), transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.7 },
          className: "relative pl-14 md:pl-20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "absolute left-0 top-2 size-9 md:size-12 grid place-items-center rounded-full glass-strong animate-pulse-glow",
                style: { color: "var(--accent-glow)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 18 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong glow-border rounded-2xl p-6 md:p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono uppercase tracking-widest", style: { color: "var(--accent-glow)" }, children: "2025 — Present" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl md:text-2xl font-bold mt-2", children: "Bachelor of Science in Computer Science with AI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "DG Vaishnav College — Chennai" })
            ] })
          ]
        }
      )
    ] })
  ] }) });
}
const certs = [
  {
    title: "Certificate of Excellence in Web Application Development using Django",
    issuer: "Futuro Focus",
    href: "https://drive.google.com/file/d/1UEN-TofB9gFYBzyc2t9mgy_bwmElchID/view?usp=sharing"
  }
];
function Certifications() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "certifications", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Certifications", title: "Credentials & recognition." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: certs.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: c.href,
        target: "_blank",
        rel: "noopener noreferrer",
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, delay: i * 0.1 },
        whileHover: { y: -6 },
        className: "group relative overflow-hidden rounded-3xl glass-strong glow-border p-8 block",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
              style: {
                background: "linear-gradient(135deg, color-mix(in oklab, var(--accent-glow) 20%, transparent), transparent 60%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "size-12 grid place-items-center rounded-2xl animate-pulse-glow",
                  style: { background: "color-mix(in oklab, var(--accent) 22%, transparent)", color: "var(--accent-glow)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 20 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground", children: "Certificate" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg md:text-xl font-semibold leading-snug", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: c.issuer })
          ] })
        ]
      },
      i
    )) })
  ] }) });
}
const small = [
  {
    title: "Lottle Cafe Website",
    subtitle: "Freelance Model Project",
    description: "A responsive cafe website showcasing modern UI/UX and clean user-focused design.",
    features: ["Responsive layout", "SEO meta tags", "Formspree integration", "WhatsApp CTA", "Smooth animations"],
    actions: [
      { label: "Live Website", Icon: ExternalLink, href: "https://project-lottle-cafe-ui-ux.vercel.app/" }
    ]
  },
  {
    title: "Library Management System",
    subtitle: "Full-Stack Web App",
    description: "A web application with authentication and CRUD operations for managing library records.",
    features: ["User authentication", "CRUD operations", "Frontend + Backend + DB", "Real-world workflow"],
    actions: [
      { label: "Demo Video", Icon: CirclePlay, href: "https://drive.google.com/file/d/1oCKTp1cnfmXk1MArvAw8kzt4fGEvonal/view?usp=sharing" },
      { label: "GitHub", Icon: Github, href: "https://github.com/Rohithkumar8939/Library-Management-System-LMS" }
    ]
  }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Projects",
        title: "Selected work.",
        description: "A handful of products and experiments — built with care, animated with intent."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.8 },
        className: "relative overflow-hidden rounded-[2rem] glass-strong glow-border p-8 md:p-12 mb-10 group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-32 -right-32 size-[28rem] rounded-full opacity-40 group-hover:opacity-70 transition-opacity",
              style: { background: "radial-gradient(circle, var(--accent-glow), transparent 60%)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-32 -left-32 size-[28rem] rounded-full opacity-30",
              style: { background: "radial-gradient(circle, var(--accent), transparent 60%)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Featured" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-3xl md:text-5xl font-bold tracking-tight", children: [
              "Career ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "DNA AI" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base md:text-lg text-muted-foreground", children: "AI-Powered Career Guidance Platform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground max-w-xl leading-relaxed", children: "Developing an AI-powered career guidance and skill analysis platform that helps users discover paths, analyze strengths, and receive intelligent recommendations through modern AI workflows and interactive dashboards." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: [
              "AI Recommendations",
              "Smart User Analysis",
              "Interactive Dashboard",
              "Realtime Insights",
              "AI Workflows",
              "Dynamic Analytics"
            ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 rounded-full text-xs font-mono glass text-muted-foreground", children: f }, f)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex flex-wrap gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://github.com/Saravanan2005real/AI-Powered-Resume-JD-analyzer",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium glass hover:bg-secondary transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 14 }),
                  " GitHub"
                ]
              }
            ) })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: small.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, delay: i * 0.1 },
        whileHover: { y: -6 },
        className: "group relative overflow-hidden rounded-3xl glass-strong glow-border p-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-24 -right-24 size-56 rounded-full opacity-20 group-hover:opacity-50 transition-opacity",
              style: { background: "radial-gradient(circle, var(--accent-glow), transparent 60%)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono uppercase tracking-widest", style: { color: "var(--accent-glow)" }, children: p.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mt-2", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: p.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-full text-[11px] font-mono glass text-muted-foreground", children: f }, f)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: p.actions.map(({ label, Icon, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium glass hover:bg-secondary transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13 }),
                  " ",
                  label
                ]
              },
              label
            )) })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
const items = [
  { Icon: Phone, label: "Phone", value: "+91 89391 45079", href: "tel:+918939145079", copy: "+91 89391 45079" },
  { Icon: Mail, label: "Email", value: "sj893914@gmail.com", href: "mailto:sj893914@gmail.com", copy: "sj893914@gmail.com" },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rohithkumars", href: "https://linkedin.com/", copy: null },
  { Icon: Github, label: "GitHub", value: "github.com/rohithkumars", href: "https://github.com/", copy: null }
];
function Contact() {
  const [copied, setCopied] = reactExports.useState(null);
  const handleCopy = (v) => {
    navigator.clipboard?.writeText(v);
    setCopied(v);
    setTimeout(() => setCopied(null), 1600);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Contact",
        title: "Let's build something extraordinary.",
        description: "Reach out directly — I'm open to internships, freelance work, and creative collaborations."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5 max-w-4xl", children: items.map(({ Icon, label, value, href, copy }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href,
        target: href.startsWith("http") ? "_blank" : void 0,
        rel: "noreferrer",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { delay: i * 0.08, duration: 0.6 },
        whileHover: { y: -4 },
        className: "group relative overflow-hidden rounded-2xl glass-strong glow-border p-6 flex items-center gap-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-20 -right-20 size-48 rounded-full opacity-20 group-hover:opacity-50 transition-opacity",
              style: { background: "radial-gradient(circle, var(--accent-glow), transparent 60%)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "relative size-12 grid place-items-center rounded-2xl group-hover:scale-110 transition-transform",
              style: { background: "color-mix(in oklab, var(--accent) 22%, transparent)", color: "var(--accent-glow)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold truncate", children: value })
          ] }),
          copy && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.preventDefault();
                handleCopy(copy);
              },
              className: "relative size-9 grid place-items-center rounded-full glass text-muted-foreground hover:text-foreground",
              "aria-label": "Copy",
              children: copied === copy ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 14 })
            }
          )
        ]
      },
      label
    )) })
  ] }) });
}
const links = ["Home", "About", "Skills", "Projects", "Contact"];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative pt-16 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute top-0 left-0 right-0 h-px",
        style: { background: "linear-gradient(90deg, transparent, var(--accent-glow), transparent)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "font-display font-bold tracking-widest text-lg", children: [
          "ROHITH",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--accent-glow)" }, children: "." }),
          "K"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-wrap items-center gap-6", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `#${l.toLowerCase()}`,
            className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
            children: l
          },
          l
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: [
          { Icon: Github, href: "https://github.com/" },
          { Icon: Linkedin, href: "https://linkedin.com/" },
          { Icon: Mail, href: "mailto:sj893914@gmail.com" }
        ].map(({ Icon, href }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noreferrer",
            className: "size-9 grid place-items-center rounded-full glass hover:text-foreground text-muted-foreground transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 14 })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 text-center text-xs text-muted-foreground", children: [
        "Built with ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--accent-glow)" }, children: "♥" }),
        " by Rohith Kumar S"
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Certifications, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackToTop, {})
  ] });
}
export {
  Index as component
};
