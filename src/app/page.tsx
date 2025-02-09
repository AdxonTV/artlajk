"use client";
import Contact from "@/components/Contact";
import { useEffect, Suspense} from "react";
import Lenis from "lenis";
import Loading from "./loading";




import CirclesSection from "@/components/CirclesSection";
import Header from "@/components/header";
import Malownia from "@/components/Malownia";

export default function Home() {
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
  useEffect(() => {
   
  })

  return (
    <div className="overflow-x-hidden">     
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
