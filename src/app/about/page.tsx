"use client";
import ReusablePage from "@/components/ReusablePage";
import { useEffect } from "react";
import Lenis from "lenis";
import Image from "next/image";

import { gsap } from "gsap";
import Contact from "@/components/Contact";
import WorkPresentation from "@/components/WorkPresentation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComponentAppearSide from "@/components/ComponentAppearSide";
import ComponentAppear from "@/components/ComponentAppear";

gsap.registerPlugin(ScrollTrigger);
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
  useEffect(() => {
    gsap.to(".imgparalaxa", {});
  });

  useEffect(() => {
    gsap.to(".imgparalaxa", {
      scrollTrigger: {
        trigger: ".imgparalaxa",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },

      y: "-10vh",
    });
  }, []);
  return (
    <div className="overflow-x-hidden w-[100vw] text-black  flex flex-col items-center justify-center">
    

      <div className="flex w-[96vw]">
        <div>
          <div className="w-[96vw] h-[95vh] flex justify-center items-center">
            <ReusablePage />
          </div>
        </div>
      </div>
      <div className="w-[96vw] mt-[5vh] rounded-xl h-[100vh] overflow-hidden flex justify-center items-center">
        <div className="w-[96vw] h-[120vh] mt-[10vh]">
          <Image
            src="/img/Praca2.jpg"
            className="object-cover rounded-xl imgparalaxa  h-full w-full"
            height={1900}
            alt="dd"
            width={1900}
          ></Image>
        </div>
      </div>
  
      <div className="w-full h-[50vh]  flex flex-col justify-center items-center">
        <div className="text-[3vw] md:text-[26px]">
        <ComponentAppear>
          <div className="mb-[2vh]" >(Artlajks)</div>  </ComponentAppear>
          <ComponentAppear>
          <div className="md:w-[50vw] w-[90vw] ">
            The main idea of these buttons is that they are magnetic and follow
            the mouse pointer. Along with that, there’s lots of room to play
            with some interesting hover animations. A very nice thing to explore
            is the motion of an additional element like a shadow or another
            line. The parallax effect created by moving the button’s elements
            differently, gives a nice twist to the animation.
          </div>
          </ComponentAppear>
        </div>
      </div>
 
     
      <ComponentAppearSide>
    
      <WorkPresentation
        date="2025"
        img="/img/Praca4.jpg"
        title="Castle la Rosce  "
        desc="oglądałem to ale chociaż opacity od 0-100 bym dał na switchu paga
              zobaczyc jak to wygląda"
      ></WorkPresentation>
      </ComponentAppearSide>
      <ComponentAppearSide>
      <WorkPresentation
        date="2005"
        img="/img/Praca1.jpg"
        title="dadada"
        desc="oglądałem to ale chociaż opacity od 0-100 bym dał na switchu paga
              zobaczyc jak to wygląda"
      ></WorkPresentation>
   </ComponentAppearSide>
   <ComponentAppearSide>
      <WorkPresentation
        date="2011"
        img="/img/Praca2.jpg"
        title="Horses-Adventures"
        desc="oglądałem to ale chociaż opacity od 0-100 bym dał na switchu paga
              zobaczyc jak to wygląda"
      ></WorkPresentation>
      </ComponentAppearSide>
      <ComponentAppearSide>
      <WorkPresentation
        date="2025"
        img="/img/Praca3.jpg"
        title="dadada"
        desc="oglądałem to ale chociaż opacity od 0-100 bym dał na switchu paga
              zobaczyc jak to wygląda"
      ></WorkPresentation>
         </ComponentAppearSide>
      <div className="mt-[30vh]">
        <Contact></Contact>
      </div>
    </div>
  );
}
