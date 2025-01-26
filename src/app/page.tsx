"use client";
import { useEffect, lazy, Suspense } from "react";
import Lenis from "lenis";
import Loading from "./loading";

const Navbar = lazy(() => import("@/components/Navbar"));
const Header = lazy(() => import("@/components/header"));
const Malownia = lazy(() => import("@/components/Malownia"));

export default function Home() {
  useEffect(() => {
    const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);

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
    <div className="overflow-x-hidden">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Header />
        <div className="h-[20vh]"></div>
        <Malownia />
      </Suspense>
    </div>
  );
}
