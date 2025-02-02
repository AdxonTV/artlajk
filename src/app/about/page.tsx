"use client";
import ReusablePage from "@/components/ReusablePage";
import { useEffect} from "react";
import Lenis from "lenis";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
      y: "-20vh",
    });
  }, []);
  return (
    <div className="overflow-x-hidden w-full  flex flex-col items-center justify-center">
      <Navbar></Navbar>
      <div className="flex w-[96vw]">
        <div>
          <div className="w-[96vw] h-[100vh] flex justify-center items-center">
            <ReusablePage />
          </div>
        </div>
      </div>
      <div className="w-[96vw] mt-[5vh] h-[100vh] overflow-hidden flex justify-center items-center">
        <div className="w-[96vw] h-[120vh] mt-[22vh]">
          <Image
            src="/img/Praca2.jpg"
            className="object-cover imgparalaxa  h-full w-full"
            height={1900}
            alt="dd"
            width={1900}
          ></Image>
          
        </div>
      </div>
      <div className="w-full h-[50vh] flex flex-col justify-center items-center">
        <div>
          <div>
          (Artlajks)
          </div>
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
  
    </div>
  );
}
