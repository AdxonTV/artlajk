"use client";
import ReusablePage from "@/components/ReusablePage";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }, []);

  return (
    <div className="overflow-x-hidden flex justify-center">
      
      <ReusablePage
     
      />
      <div></div>

    </div>
  );
}
