// src/components/ui/Cursor.jsx
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Cursor() {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos   = useRef({ x: -100, y: -100 });
  const raf   = useRef(null);
  const [big, setBig] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = e.clientX - 8;
      mouse.current.y = e.clientY - 8;
    };

    const onOver = (e) => {
      if (e.target.closest("[data-cursor]")) setBig(true);
    };

    const onOut = () => setBig(false);

    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      raf.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout",  onOut);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout",  onOut);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // createPortal renders directly into document.body
  // completely escaping any parent transform/stacking context
  return createPortal(
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "difference",
        willChange: "transform",
      }}
    >
      <div
        style={{
          width:      big ? 48 : 16,
          height:     big ? 48 : 16,
          marginLeft: big ? -16 : 0,
          marginTop:  big ? -16 : 0,
          background:   "white",
          borderRadius: "50%",
          transition: "width 0.3s, height 0.3s, margin 0.3s",
        }}
      />
    </div>,
    document.body  // ← renders here, outside your entire React tree
  );
}