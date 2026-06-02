import SoftAurora from "./SoftAurora";
import RotatingText from "@/animations/RotatingText";
import ShinyButton from "./ui/ShinyButton";
import { motion } from "framer-motion";

const Hero = () => {
  /* ── Motion Variants ───────────────────────────── */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },

    show: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-10">
      {/* ── Aurora Background ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <SoftAurora
          speed={1}
          scale={1.5}
          brightness={0.8}
          color1="#22D3EE"
          color2="#A855F7"
          noiseFrequency={5.5}
          noiseAmplitude={7.5}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.16}
          layerOffset={0.3}
          colorSpeed={1}
          enableMouseInteraction={true}
          mouseInfluence={0.1}
        />
      </div>

      {/* ── Radial vignette overlay ───────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_90%)]" />

      {/* ── Noise Overlay ───────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Main Grid ───────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto mt-10 grid min-h-[80vh] max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2"
      >
        {/* ── LEFT SIDE ───────────────────────────── */}
        <motion.div
          variants={scaleIn}
          whileHover={{
            scale: 1.02,
          }}
          className="group relative rounded-3xl p-px"
          style={{
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.35) 0%, rgba(168,85,247,0.2) 50%, rgba(34,211,238,0.1) 100%)",
            boxShadow:
              "0 0 60px rgba(34,211,238,0.12), 0 0 120px rgba(168,85,247,0.08), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Shimmer */}
          <motion.div
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="pointer-events-none absolute -inset-px rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.5), transparent 40%, rgba(168,85,247,0.5))",
            }}
          />

          {/* Glass Surface */}
          <div
            className="relative flex h-full w-full flex-col items-center justify-center gap-10 rounded-[calc(1.5rem-1px)] py-14 backdrop-blur-xl"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            {/* Avatar */}
            <motion.div
              variants={scaleIn}
              whileHover={{
                rotate: 3,
                scale: 1.03,
              }}
              className="relative"
            >
              <div
                className="absolute -inset-4 rounded-full opacity-60 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(34,211,238,0.4) 0%, rgba(168,85,247,0.3) 60%, transparent 80%)",
                }}
              />

              <div
                className="relative rounded-full p-0.75"
                style={{
                  background:
                    "linear-gradient(135deg, #22D3EE 0%, #A855F7 100%)",
                  boxShadow:
                    "0 0 30px rgba(34,211,238,0.4), 0 0 60px rgba(168,85,247,0.2)",
                }}
              >
                <div className="relative rounded-full bg-black">
                  <img
                    src="/ravi.jpeg"
                    alt="Ravi Mohan"
                    className="h-80 w-80 rounded-full object-cover opacity-95"
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
                </div>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center gap-2"
            >
              <h1
                className="text-5xl font-semibold tracking-tight text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  textShadow: "0 0 40px rgba(34,211,238,0.25)",
                  letterSpacing: "-0.02em",
                }}
              >
                Ravi Mohan
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                }}
                className="mt-1 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(34,211,238,0.6), rgba(168,85,247,0.6), transparent)",
                }}
              />

              <p
                className="mt-1 text-sm tracking-[0.5em] uppercase"
                style={{ color: "rgba(167,237,255,0.55)" }}
              >
                Full-Stack Developer
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ── RIGHT SIDE ───────────────────────────── */}
        <motion.div
          variants={container}
          className="mx-auto flex flex-col justify-center gap-8 text-white"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <div
              className="h-px w-8 shrink-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(34,211,238,0.7))",
              }}
            />

            <span
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "rgba(167,237,255,0.5)" }}
            >
              Portfolio
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.8rem, 5vw, 4rem)",
            }}
          >
            Experienced in{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(90deg, #22D3EE 0%, #A855F7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Building
            </span>

            <span className="my-3 block">
              <RotatingText
                texts={["Scalable", "Secure", "Responsive"]}
                mainClassName="inline-flex transition-all duration-150 justify-center text-5xl text-black max-w-[330px] px-6 py-3 items-center rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #22D3EE 0%, #c084fc 100%)",
                  boxShadow:
                    "0 4px 30px rgba(34,211,238,0.3), 0 2px 0 rgba(255,255,255,0.15) inset",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 600,
                }}
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                splitBy="characters"
                auto
                loop
              />
            </span>

            Web Apps
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="max-w-sm text-base leading-relaxed"
            style={{ color: "rgba(203,231,255,0.8)" }}
          >
            Crafting high-performance digital experiences — from pixel-perfect
            UIs to rock-solid backend architectures.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.button
            data-cursor
              whileHover={{
                scale: 1.08,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="relative overflow-hidden bg-linear-to-br from-cyan-400 to-purple-500 tracking-[0.03em] shadow-[0_4px_20px_rgba(34,211,238,0.35)] rounded-xl px-7 py-3 text-sm font-medium text-black cursor-pointer"
            >
              View Projects
            </motion.button>

            <motion.div
              data-cursor
              whileHover={{
                scale: 1.05,
              }}
            >
              <ShinyButton
                onClick={() => console.log("Clicked")}
                className="text-muted-vibrant/50 text-sm hover:text-muted-vibrant"
              >
                Get in Touch
              </ShinyButton>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex gap-8 border-t pt-6"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            {[
              { value: "5+", label: "Years exp." },
              { value: "40+", label: "Projects shipped" },
              { value: "99%", label: "Client satisfaction" },
            ].map(({ value, label }, index) => (
              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1 + index * 0.2,
                }}
                className="flex flex-col gap-0.5"
              >
                <span
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    background: "linear-gradient(45deg, #22D3EE, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {value}
                </span>

                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "rgba(167,237,255,0.4)" }}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;