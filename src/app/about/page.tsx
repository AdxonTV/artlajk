"use client";
import ReusablePage from "@/components/ReusablePage";
import { useEffect } from "react";
import Lenis from "lenis";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import Contact from "@/components/Contact";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    <div className="overflow-x-hidden w-full text-black  flex flex-col items-center justify-center">
      <Navbar className="text-black" truth="true" />

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
        <div>
          <div>(Artlajks)</div>
          <div className="w-[50vw] text-[24px]">
            The main idea of these buttons is that they are magnetic and follow
            the mouse pointer. Along with that, there’s lots of room to play
            with some interesting hover animations. A very nice thing to explore
            is the motion of an additional element like a shadow or another
            line. The parallax effect created by moving the button’s elements
            differently, gives a nice twist to the animation.
          </div>
        </div>
      </div>
      
  
      <div>
        <div className="w-[96vw] bg-[#445885] rounded-xl flex justify-center items-center h-[80vh] mt-[10vh]">
          <div className="w-[30vw]  h-[65vh]">
            <Image
              src="/img/Praca3.jpg"
              className="object-cover rounded-xl  h-full w-full"
              height={1900}
              alt="dd"
              width={1900}
            ></Image>
          </div>
        </div>
        <div className="flex items-start mt-[2vh] justify-between">
          <div className="text-[2vw]">Tytuł Pracy</div>{" "}
          <div className="text-[1vw] opacity-50">
            {" "}
            <div>Wymiary 20cm x 20cm</div>
            <div className="w-[25vw]">
              oglądałem to ale chociaż opacity od 0-100 bym dał na switchu paga
              zobaczyc jak to wygląda
            </div>
          </div>{" "}
          <div className="text-[1vw] ">(2012)</div>
        </div>
        
      </div>
      <div>
        <div className="w-[96vw] bg-[#a4d3e9] rounded-xl flex justify-center items-center h-[80vh] mt-[10vh]">
          <div className="w-[30vw] h-[70vh]">
            <Image
              src="/img/Praca5.jpg"
              className="object-cover rounded-xl h-full w-full"
              height={1900}
              alt="dd"
              width={1900}
            ></Image>
          </div>
        </div>
        <div className="flex items-start mt-[2vh] justify-between">
          <div className="text-[2vw]">Tytuł Pracy</div>{" "}
          <div className="text-[1vw] opacity-50">
            {" "}
            <div>Wymiary 20cm x 20cm</div>
            <div className="w-[25vw]">
              oglądałem to ale chociaż opacity od 0-100 bym dał na switchu paga
              zobaczyc jak to wygląda
            </div>
          </div>{" "}
          <div className="text-[1vw] ">(2012)</div>
        </div>
        
      </div>
      <div>
        <div className="w-[96vw] bg-[#b561e2] rounded-xl flex justify-center items-center h-[80vh] mt-[10vh]">
          <div className="w-[40vw] h-[50vh] ">
            <Image
              src="/img/Praca4.jpg"
              className="object-cover rounded-xl h-full w-full"
              height={1900}
              alt="dd"
              width={1900}
            ></Image>
          </div>
        </div>
        <div className="flex items-start mt-[2vh] justify-between">
          <div className="text-[2vw]">Tytuł Pracy</div>{" "}
          <div className="text-[1vw] opacity-50">
            {" "}
         
            <div className="w-[25vw]">
              oglądałem to ale chociaż opacity od 0-100 bym dał na switchu paga
              zobaczyc jak to wygląda
            </div>
          </div>{" "}
          <div className="text-[1vw] ">(2012)</div>
        </div>
      </div>
      <div className="mt-[30vh]">
        <Contact></Contact>
      </div>
    </div>
  );
}
