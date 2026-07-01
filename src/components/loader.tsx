import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  const text = "ROHITH PORTFOLIO";

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background grid-bg"
        >
          {/* ambient blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -left-40 size-[40rem] rounded-full"
              style={{ background: "radial-gradient(circle, var(--accent-glow), transparent 60%)", opacity: 0.25 }}
              animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-40 -right-40 size-[40rem] rounded-full"
              style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)", opacity: 0.2 }}
              animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            <div className="flex overflow-hidden">
              {text.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-3xl md:text-5xl font-bold tracking-[0.18em] text-foreground text-glow"
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-px w-64 origin-left"
              style={{ background: "linear-gradient(90deg, transparent, var(--accent-glow), transparent)" }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xs uppercase tracking-[0.4em] text-muted-foreground"
            >
              Initializing experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
