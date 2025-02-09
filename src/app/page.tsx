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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock the scroll and set initial properties when page is loading
    document.body.style.overflow = "hidden";
    document.body.style.cursor = "default";
    window.scrollTo(0, 0);

    // Unlock after the loading time has completed (1200ms here)
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 1000);

    // Ensure cleanup reverts the overflow so that subsequent page interactions are normal
    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "auto"; // Fixed the assignment here
    };
  }, []);

  useLenisScroll(isLoading);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-hidden relative top-0 h-[1000vh]"
    >
      <Navbar truth="false" />
      <Suspense fallback={<Loading />}>
        <Header />
        <div className="h-[20vh]"></div>
        <Malownia />
        <div className="mt-[20vh]">
          <CirclesSection />
        </div>
        <section id="kontakt">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
}
