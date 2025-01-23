"use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/header";

import Malownia from "@/components/Malownia";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
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
  }, []);
  return (

    <div className="overflow-x-hidden">
      <Navbar />

      <Header />
      <div className="h-[20vh]"></div>
      <Malownia />
    </div>
    
  );
}
