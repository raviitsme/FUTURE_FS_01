import { useEffect, useRef, useState } from "react";

export default function Cursor() {
    const cusorRef = useRef(null);
    const mouse = useRef({ x : -100, y : -100 });
    const posi = useRef({ x : -100, y : -100 });
    const raf = useRef(null);
    const [big, setBig] = useState(false);

    useEffect(() => {
        const onMove = (e) => {
            mouse.current.x = e.clientX - 8;
            mouse.current.y = e.clientY - 8;
        };

        const onOver = (e) => {
            if(e.target.closest("[data-cursor]")) setBig(true);
        }

        const onOut = () => setBig(false);
        
        const loop = () => {
            posi.current.x += (mouse.current.x - posi.current.x) * 0.15;
            posi.current.y += (mouse.current.y - posi.current.y) * 0.15;

            if(cusorRef.current) {
                cusorRef.current.style.transform = `translate(${posi.current.x}px), (${posi.current.y}px)`;
            }
            raf.current = requestAnimationFrame(loop);
        }
    })
}