  "use client";
import ReusablePage from "@/components/ReusablePage";
import { useEffect, useRef, useState } from "react";
import useLenisScroll from "@/components/Lenis";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

import WorkPresentation from "@/components/WorkPresentation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComponentAppearSide from "@/components/ComponentAppearSide";
import ComponentAppear from "@/components/ComponentAppear";

gsap.registerPlugin(ScrollTrigger);
export default function About() {

   const container = useRef<HTMLDivElement>(null);

 

   const pathname = usePathname()

   useEffect(() => {

     window.scrollTo(0, 0)
     container.current?.scrollTo(0, 0)
   }, [pathname])

   const [isLoading, setIsLoading] = useState(true);
   const scrollRef = useRef<HTMLDivElement>(null);
 
   useEffect(() => {

     document.body.style.overflow = "hidden";
     document.body.style.cursor = "default";
     window.scrollTo(0, 0);
 

     const timeout = setTimeout(() => {
       setIsLoading(false);
       document.body.style.overflow = "auto";
     }, 1000);
 
     return () => {
       clearTimeout(timeout);
       document.body.style.overflow = "auto"; 

     };
   }, []);
 
   useLenisScroll(isLoading);

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
    <div ref={scrollRef} className="overflow-x-hidden relative w-full text-black h-fit  flex flex-col items-center justify-center">
    <Navbar className="text-black" truth="true" ></Navbar>

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
     
      </div>
    </div>
  );
}
