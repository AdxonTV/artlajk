"use client";
import React, { useEffect } from "react";
import ScrollBtn from "./ScrollBtn";
import Cursor from "./cursor";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Header = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".tracker", {
      scale: 1,

      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".tracker",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".tracker", {
      scale: 1.2,
      filter: "blur(20px)",

      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".tracker",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });
  return (
    <div className="  h-screen relative overflow-hidden text-white ">
      <Cursor></Cursor>
      <div className="flex">
        <div className="bottom-0 absolute mx-[1.5vw] z-[100]">
          <div className="text-[20vw] text-center md:text-left sm:text-[9vw]   font-semibold">
            ARTLAJK
          </div>
          <div className="text-[6vw] md:mb-[16vh] text-center md:text-left mb-[25vh] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.5vw] mt-[-2vw] ">
            ZAJĘCIA Z RYSUNKU I MALARSTWA
          </div>

          <ScrollBtn></ScrollBtn>
        </div>
        <div className="md:w-[30vw] absolute bottom-0 mb-[6vh] md:flex gap-[2vw] justify-end right-0 m-4 hidden sm:block">
          <div className="w-fit">
            <div>Kontakt: </div>
            <div>512 321 664</div>
          </div>
          <div className="w-fit">
            <div>Prowadzi</div>
            <div>Ela Jakubowska</div>
          </div>
          <div className="w-fit">
            <div>Miejsce:</div>
            <div>Chojnice, ul. 31 Stycznia</div>
          </div>
        </div>
      </div>
      <Image
        alt="x"
        width={2000}
        height={2000}
        className="tracker absolute overflow-hidden w-full h-screen object-cover z-[-192]"
        src={"/img/bgimg.png"}
      ></Image>
    </div>
  );
};

export default Header;
