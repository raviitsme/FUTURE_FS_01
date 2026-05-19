import SoftAurora from "./SoftAurora";
import RotatingText from "@/animations/RotatingText";
import ShinyButton from "./ui/ShinyButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 py-10">
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

      {/* ── Subtle noise grain overlay ────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Grid container ────────────────────────────────── */}
      <div className="relative z-10 mx-auto mt-10 grid min-h-[80vh] max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* ── Left card ─────────────────────────────────── */}
        <div
          className="group relative rounded-3xl p-px"
          style={{
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.35) 0%, rgba(168,85,247,0.2) 50%, rgba(34,211,238,0.1) 100%)",
            boxShadow:
              "0 0 60px rgba(34,211,238,0.12), 0 0 120px rgba(168,85,247,0.08), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Shimmer ring – purely decorative */}
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.5), transparent 40%, rgba(168,85,247,0.5))",
            }}
          />

          {/* Inner glass surface */}
          <div
            className="relative flex h-full w-full flex-col items-center justify-center gap-10 rounded-[calc(1.5rem-1px)] py-14 backdrop-blur-xl"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            {/* ── Avatar ring ─────────────────────────── */}
            <div className="relative">
              {/* Glow rings */}
              <div
                className="absolute -inset-4 rounded-full opacity-60 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(34,211,238,0.4) 0%, rgba(168,85,247,0.3) 60%, transparent 80%)",
                }}
              />
              <div
                className="absolute -inset-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34,211,238,0.6), rgba(168,85,247,0.6))",
                  padding: "2px",
                }}
              />

              {/* Avatar frame */}
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
                    src="/src/assets/ravi.jpeg"
                    alt="Ravi Mohan"
                    className="h-80 w-80 rounded-full object-cover opacity-95"
                    style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.5)" }}
                  />
                  {/* Inner vignette */}
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
                </div>
              </div>
            </div>

            {/* ── Name ────────────────────────────────── */}
            <div className="flex flex-col items-center gap-2">
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

              {/* Decorative rule */}
              <div
                className="mt-1 h-px w-32"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(34,211,238,0.6), rgba(168,85,247,0.6), transparent)",
                }}
              />

              {/* Role badge */}
              <p
                className="mt-1 text-sm tracking-[0.5em] uppercase"
                style={{ color: "rgba(167,237,255,0.55)" }}
              >
                  Full-Stack Developer
              </p>
            </div>
          </div>
        </div>

        {/* ── Right side ────────────────────────────────── */}
        <div className="mx-auto flex flex-col justify-center gap-8 text-white">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
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
          </div>

          {/* Main heading */}
          <h1
            className="leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.8rem, 5vw, 4rem)",
            }}
          >
            Experienced in {/* Gradient "Building" */}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(90deg, #22D3EE 0%, #A855F7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 18px rgba(34,211,238,0.35))",
              }}
            >
              Building
            </span>
            {/* Rotating text chip */}
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
          </h1>

          {/* Tagline */}
          <p
            className="max-w-sm text-base leading-relaxed"
            style={{ color: "rgba(203,231,255,0.8)" }}
          >
            Crafting high-performance digital experiences — from pixel-perfect
            UIs to rock-solid backend architectures.
          </p>

          {/* CTA strip */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary button */}
            <button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior : "smooth"
                });
              }}
              className="relative overflow-hidden bg-linear-to-br from-cyan-400 to-purple-500 tracking-[0.03em] shadow-[0_4px_20px_rgba(34,211,238,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] rounded-xl px-7 py-3 text-sm font-medium text-black transition-all duration-200 active:scale-95 cursor-pointer hover:scale-110 hover:bg-linear-to-br hover:from-cyan-400 hover:to-fuchsia-500 hover:font-black hover:text-transparent hover:bg-clip-text">
              View Projects
            </button>

            <ShinyButton
              onClick={() => console.log("Clicked")}
              className="text-muted-vibrant/50 text-sm hover:text-muted-vibrant"
            >
              Get in Touch
            </ShinyButton>
          </div>

          {/* Stat row */}
          <div
            className="flex gap-8 border-t pt-6"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            {[
              { value: "5+", label: "Years exp." },
              { value: "40+", label: "Projects shipped" },
              { value: "99%", label: "Client satisfaction" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    background: "linear-gradient(45deg, #22D3EE, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
