export default function Card({ tag, title, description, classname = "" }) {
  return (
    <div 
      className={`
        relative w-full max-w-115 h-64 
        bg-zinc-950 rounded-[28px] p-8
        flex flex-col justify-center overflow-hidden group
        border border-white/5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:border-cyan-500/30
        ${classname}
      `}
    >
      {/* Backdrop neon glow */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px] opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[80px] opacity-30 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out pointer-events-none" />

      {/* laser cut glass line */}
      <div className="absolute top-0 left-10 right-10 h-0.5 bg-linear-to-r from-transparent via-cyan-400/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

      {/* Card content - Perfectly centered inside the box */}
      <div className="relative z-10 space-y-2.5">
        {/* Animated Category Tag */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase group-hover:text-cyan-400/80 transition-colors duration-300">
            {tag}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-light text-zinc-200 tracking-wide font-jakarta group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        
        {/* Short Description */}
        <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-[95%]">
          {description}
        </p>
      </div>
    </div>
  );
}