import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────
const CARDS = [
  {
    id: "01",
    label: "IDENTITY",
    title: "Creative\nEngineer",
    body: "I am a creative engineer sitting at the intersection of robust logic and premium UI/UX designs with a spice of backend setups.",
    color: "#22D3EE",
    rgb: "34,211,238",
  },
  {
    id: "02",
    label: "APPROACH",
    title: "Intentional\nEngineering",
    body: "Code is never just logic — it's a conversation with the person on the other side of the screen. Everything is a deliberate decision.",
    color: "#A855F7",
    rgb: "168,85,247",
  },
  {
    id: "03",
    label: "PROCESS",
    title: "Pixel-Perfect\nExecution",
    body: "Structure first, polish second, ship always. From solid backend foundations outward — refined down to the last spring curve and inset shadow.",
    color: "#EC4899",
    rgb: "236,72,153",
  },
];

const FACTS = [
  { icon: "🎮", label: "Online games", sub: "Late-night fuel" },
  { icon: "🏐", label: "Volleyball",   sub: "Team-first always" },
  { icon: "📍", label: "Hardoi, UP",   sub: "→ The global web" },
  { icon: "💡", label: "HTML cl.7",    sub: "Where it started" },
];

// ─── 3-D tilt card ───────────────────────────────────────────────────────────
function TiltCard({ card, index, active, onEnter, onLeave }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 22 });
  const sry = useSpring(ry, { stiffness: 200, damping: 22 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const px = (e.clientX - left) / width  - 0.5;  // -0.5 → 0.5
    const py = (e.clientY - top)  / height - 0.5;
    ry.set(px * 18);
    rx.set(-py * 18);
  };

  const handleLeave = () => {
    rx.set(0); ry.set(0);
    onLeave();
  };

  return (
    <motion.div
      ref={ref}
      data-cursor
      className="relative cursor-none"
      style={{
        rotateX: srx,
        rotateY: sry,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
        zIndex: active ? 10 : 3 - index,
      }}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseEnter={onEnter}
      onMouseLeave={handleLeave}
    >
      {/* Card shell */}
      <div
        className="relative rounded-2xl overflow-hidden select-none transition-all duration-500"
        style={{
          background: "rgba(8,8,12,0.85)",
          border: `1px solid ${active ? card.color + "60" : "rgba(255,255,255,0.07)"}`,
          backdropFilter: "blur(24px)",
          boxShadow: active
            ? `0 0 0 1px ${card.color}20, 0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(${card.rgb},0.12)`
            : "0 20px 60px rgba(0,0,0,0.5)",
          transform: "translateZ(0)",
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 inset-x-0 h-px transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
            opacity: active ? 1 : 0.25,
          }}
        />

        {/* Floating glow blob inside card */}
        <div
          className="absolute -top-12 -left-12 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none"
          style={{ background: `rgba(${card.rgb},0.18)`, opacity: active ? 1 : 0 }}
        />

        <div className="relative p-8 z-10">
          {/* Row: id + label */}
          <div className="flex items-center gap-3 mb-7">
            <span
              className="font-mono text-[11px] tracking-[0.2em]"
              style={{ color: card.color }}
            >
              {card.id}
            </span>
            <div
              className="h-px flex-1 transition-all duration-500"
              style={{ background: `linear-gradient(90deg, ${card.color}60, transparent)`, opacity: active ? 1 : 0.4 }}
            />
            <span
              className="font-mono text-[10px] tracking-[0.25em] uppercase"
              style={{ color: active ? card.color : "rgba(255,255,255,0.2)", transition: "color 0.3s" }}
            >
              {card.label}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-3xl font-light leading-[1.15] text-white mb-4 whitespace-pre-line"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              letterSpacing: "-0.02em",
              textShadow: active ? `0 0 40px rgba(${card.rgb},0.3)` : "none",
              transition: "text-shadow 0.4s",
            }}
          >
            {card.title}
          </h3>

          {/* Body */}
          <p
            className="text-sm leading-relaxed transition-colors duration-300"
            style={{ color: active ? "rgba(210,230,255,0.65)" : "rgba(210,230,255,0.38)" }}
          >
            {card.body}
          </p>

          {/* Bottom bar */}
          <div
            className="absolute bottom-0 left-0 h-px transition-all duration-500 ease-out"
            style={{
              width: active ? "100%" : "0%",
              background: `linear-gradient(90deg, ${card.color}, transparent)`,
            }}
          />
        </div>

        {/* 3-D depth face (visible on tilt) */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%)`,
            transform: "translateZ(-4px)",
          }}
        />
      </div>
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function AboutMe() {
  const [activeCard, setActiveCard] = useState(null);

  // Typewriter for the tagline
  const TAGLINE = "full-stack developer.";
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(TAGLINE.slice(0, i));
      if (i === TAGLINE.length) clearInterval(id);
    }, 65);
    return () => clearInterval(id);
  }, []);

  return (
    <>

      <section
        id="about"
        className="relative w-full bg-[#060608] overflow-hidden py-32 px-6 cursor-none"
      >
        {/* ── Static noise grain ── */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
          }}
        />

        {/* ── Ambient orbs ── */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px]"
            style={{ background: "rgba(34,211,238,0.05)" }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[180px]"
            style={{ background: "rgba(168,85,247,0.05)" }} />
        </div>

        {/* ── Horizontal rule top ── */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="flex items-center gap-6 mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="h-px flex-1"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08))" }} />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "rgba(167,237,255,0.3)" }}>
              Hardoi, UP → The Global Web
            </span>
            <div className="h-px flex-1"
              style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent)" }} />
          </motion.div>

          {/* ── EDITORIAL HEADER ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28 items-end">

            {/* Left — giant name */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase mb-6"
                style={{ color: "rgba(34,211,238,0.6)" }}>
                / About Me
              </p>
              <h1
                className="text-white leading-[0.92] mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(4.5rem, 9vw, 8rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.04em",
                }}
              >
                Ravi<br />
                <span style={{
                  background: "linear-gradient(135deg, #22D3EE 0%, #A855F7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 40px rgba(34,211,238,0.25))",
                }}>
                  Mohan.
                </span>
              </h1>

              {/* Typewriter tagline */}
              <p className="font-mono text-sm" style={{ color: "rgba(167,237,255,0.5)" }}>
                <span style={{ color: "rgba(34,211,238,0.4)" }}>→ </span>
                {typed}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-0.5 h-4 ml-0.5 align-middle"
                  style={{ background: "rgba(34,211,238,0.7)" }}
                />
              </p>
            </motion.div>

            {/* Right — bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              {/* Pull quote */}
              <blockquote
                className="border-l-2 pl-6 italic"
                style={{
                  borderColor: "rgba(34,211,238,0.3)",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.25rem",
                  color: "rgba(210,230,255,0.7)",
                  lineHeight: 1.6,
                }}
              >
                "It started in 7th grade — a single HTML tag, and something clicked."
              </blockquote>

              <p className="text-sm leading-relaxed"
                style={{ color: "rgba(167,237,255,0.45)" }}>
                Today I build full-stack web applications — from pixel-perfect frontends that move
                with intention, to backends that scale without complaint. Still learning. Still building.
                Still chasing that feeling of shipping something and thinking —&nbsp;
                <span className="italic" style={{ color: "rgba(34,211,238,0.7)" }}>
                  yeah, that's the one.
                </span>
              </p>

              {/* Stat row */}
              <div className="flex gap-8 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {[["5+", "years"], ["40+", "projects"], ["99%", "satisfaction"]].map(([n, l]) => (
                  <div key={l} className="flex flex-col gap-0.5">
                    <span
                      className="text-3xl font-light"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        background: "linear-gradient(90deg, #22D3EE, #A855F7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >{n}</span>
                    <span className="text-[10px] tracking-widest uppercase font-mono"
                      style={{ color: "rgba(167,237,255,0.3)" }}>{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── FULL-WIDTH RULE ── */}
          <div className="h-px w-full mb-20"
            style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.15), rgba(168,85,247,0.15), transparent)" }} />

          {/* ── PHILOSOPHY CARDS ── */}
          <motion.p
            className="font-mono text-[10px] tracking-[0.3em] uppercase mb-10"
            style={{ color: "rgba(167,237,255,0.3)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            / Philosophy
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
            {CARDS.map((card, i) => (
              <TiltCard
                key={card.id}
                card={card}
                index={i}
                active={activeCard === i}
                onEnter={() => setActiveCard(i)}
                onLeave={() => setActiveCard(null)}
              />
            ))}
          </div>

          {/* ── FULL-WIDTH RULE ── */}
          <div className="h-px w-full mb-20"
            style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.15), rgba(236,72,153,0.15), transparent)" }} />

          {/* ── FUN FACTS ── */}
          <motion.p
            className="font-mono text-[10px] tracking-[0.3em] uppercase mb-10"
            style={{ color: "rgba(167,237,255,0.3)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            / The Human
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {FACTS.map((f, i) => (
              <motion.div
                key={i}
                data-cursor
                className="group rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-none"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ borderColor: "rgba(34,211,238,0.2)" }}
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <div className="text-sm text-white font-light mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {f.label}
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase"
                  style={{ color: "rgba(167,237,255,0.3)" }}>
                  {f.sub}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── CLOSING QUOTE ── */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="inline-block font-mono text-[11px] tracking-[0.35em] uppercase"
              style={{ color: "rgba(167,237,255,0.15)" }}
            >
              "I grew up in a small town with a big internet connection — and that changed everything."
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
}