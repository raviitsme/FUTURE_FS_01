import React from "react";

const ShinyButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative group overflow-hidden cursor-pointer border border-muted-light px-3 font-medium py-2.5 rounded-lg backdrop-blur-xl transition-all duration-200 hover:scale-105 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] active:scale-95 ${className}`}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_70%)]" />
      <div className="absolute top-0 left-[-200%] h-full w-60 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-[150%]" />
      
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default ShinyButton;
