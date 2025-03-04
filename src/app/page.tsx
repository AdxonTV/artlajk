"use client";
import Contact from "@/components/Contact";
import { useEffect, Suspense, useRef, useState } from "react";
import useLenisScroll from "@/components/Lenis";
import Loading from "./loading";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CirclesSection from "@/components/CirclesSection";
import Header from "@/components/header";
import Malownia from "@/components/Malownia";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(isMobile)
 
    if (window.innerWidth > 700) {
      setIsMobile(false)
      console.log(window.innerWidth);
      console.log("desktop");
      // Lock the scroll and set initial properties when page is loading
    
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);

      // Unlock after the loading time has completed (1000ms here)
      const timeout = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "auto";
      }, 1000);

      // Cleanup: revert styles to normal
      return () => {
        clearTimeout(timeout);
        document.body.style.overflow = "auto";
        document.body.style.overflowY = "default";
      };
    }else{
      setIsLoading(false);
    }
  }, [isLoading, isMobile]);

  // Apply Lenis scroll only if not mobile
  useLenisScroll(isMobile);

  return (
    <div ref={scrollRef} className={isLoading ? `overflow-y-hidden opacity-0 relative h-fit` :  `overflow-hidden relative  h-fit`  }>
      <Navbar truth="false" />
      <Suspense fallback={<Loading />}>
        <Header />
        <div className="h-[20vh]"></div>
        <Malownia />
      
        <div className="mt-[10vh] ">
          <CirclesSection />
        </div>
        <section id="kontakt">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
}