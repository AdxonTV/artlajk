"use client";
import Contact from "@/components/Contact";
import { useEffect, Suspense,  useRef } from "react";
import Lenis from "lenis";
import Loading from "./loading";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CirclesSection from "@/components/CirclesSection";
import Header from "@/components/header";
import Malownia from "@/components/Malownia";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {

 const container = useRef<HTMLDivElement>(null);

 const pathname = usePathname()

 useEffect(() => {
   // Scroll to top on every route change
   window.scrollTo(0, 0)
   container.current?.scrollTo(0, 0)
 }, [pathname])
  


  useEffect(() => {

    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (typeof window !== "undefined") {
      // kod działający tylko po stronie klienta
    }
    // if (!isMobile) {
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
    // }
  }, []);
  

  return (
    <div ref={container} className="overflow-x-hidden relative top-0 h-[1000vh]">
      <Navbar className="" truth="false"></Navbar>
      <Suspense fallback={<Loading />}>
        <Header />
        <div className="h-[20vh]"></div>
        <Malownia />
        <div className="mt-[20vh]">
          <CirclesSection />
        </div>
        <section id="kontakt">
          <Contact></Contact>
        </section>
      </Suspense>
    </div>
  );
}
