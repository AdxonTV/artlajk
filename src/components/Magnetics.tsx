"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

type MagneticProps = {
    children: React.ReactNode;
};

const Magnetics: React.FC<MagneticProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Użyj GSAP QuickTo
        const xTo = gsap.quickTo(ref.current, "x", { duration: 1, ease: "circ.out(1, 0.3)" });
        const yTo = gsap.quickTo(ref.current, "y", { duration: 1, ease: "circ.out(1, 0.3)" });

        const mouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const { clientX, clientY } = e;
            const { width, height, left, top } = ref.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x);
            yTo(y);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const current = ref.current; // Zapisz `ref.current` w zmiennej
        if (!current) return; // Sprawdź, czy istnieje

        current.addEventListener("mousemove", mouseMove);
        current.addEventListener("mouseleave", mouseLeave);

        return () => {
            if (!current) return; // Sprawdź przed usunięciem
            current.removeEventListener("mousemove", mouseMove);
            current.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return <div ref={ref}>{children}</div>;
};

export default Magnetics;
