"use client";

import ScrollBtn from "./ScrollBtn";
import Cursor from "./cursor";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Ribbons from "./Ribbons";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const trackerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".tracker",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      });

      trackerAnimation
      .set(".tracker", {
        scale: 1,
        ease: "power2.inOut",
      })
      .to(".tracker", {
        
        
        y: "50%",
        filter: "blur(10px)",
        ease: "power2.inOut",
   
      });

      if (window.innerWidth >= 768) {
        const imageAnimation = gsap.timeline({ repeat: -1, yoyo: true });
        imageAnimation.to(".tracker", {
          scale: 1.05,
          duration: 10,
          ease: "linear",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-[100dvh]  cursor-context-menu z-10 relative flex justify-center overflow-hidden  text-white">
      {/* <Cursor /> */}
      <div className="absolute top-0 left-0 w-full h-full  z-[10000]">
     <Ribbons
    baseThickness={44}
    colors={['#9432F0']}
    speedMultiplier={0.2}
    maxAge={600}
    enableFade={true}
    enableShaderEffect={false}
  /></div>
      <div className="w-[96vw] relative">
        <div className="w-full bottom-0 absolute  md:text-left">
          <div className="text-[8vw] mb-[5vh] md:w-[60vw] leading-[110%] md:text-[7vh]">
            <div>
              <div>Rozwiń się na Zajęciach </div>
              <div className="md:text-left text-right">zMalujmy coś razem.</div>
            </div>
          </div>
          <div className="flex flex-col gap-[10vh] md:flex-row w-full justify-center items-center md:justify-between">
            <div className="md:block hidden">
              <ScrollBtn />
            </div>
            <div className="flex text-left opacity-90 md:text-[18px] text-[10px] md:w-fit w-full justify-between mb-[2vh] gap-8 md:text-right">
              <div className="w-fit">
                <div className="font-semibold">Kontakt</div>
                <div className="leading-none text-[14px] md:text-[20px]">538 329 051</div>
              </div>
              <div className="w-fit text-left md:text-right">
                <div className="font-semibold">Prowadzi</div>
                <div className="leading-none  text-[14px] md:text-[20px]">Elżbieta Jakubowska</div>
              </div>
              <div className="w-fit text-right md:text-right">
                <div className="font-semibold">Miejsce</div>
                <div className="leading-none  text-[14px] md:text-[20px]">Chojnice, ul. Grobelna 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute overflow-hidden w-full h-[100dvh] object-cover z-[-192]">
        <video
          className="tracker md:hidden absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          src="/img/malowniafilm.mp4"
        ></video>
        <div className="bg-black w-[100%] h-[40vh] absolute bottom-[-20vh] blur-[100px]"></div>
      </div>
      <Image
        alt="x"
        width={1200}
        placeholder="blur"
        blurDataURL="/img/bg_img2.png"
        height={1200}
        className="md:block hidden tracker absolute overflow-hidden w-full h-[100dvh] object-cover z-[-192]"
        src={"/img/bg_img2.png"}
      />
    </div>
  );
};

export default Header;
