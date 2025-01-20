"use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/header";
import Artlajk from "@/components/Artlajk";
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
    <div>
      <Navbar />
      <Header />
      <Malownia/>
      <Artlajk />
    </div>
  );
}
