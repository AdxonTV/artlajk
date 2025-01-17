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
    gsap.set(
      ".tracker",
      {
        scale: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".tracker",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
      []
    );
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
    <div className="h-screen relative flex justify-center overflow-hidden text-white">
      <Cursor />
      <div className="w-[96vw] relative">
        <div className="w-full bottom-0 absolute text-center md:text-left">
          <div className="text-[10vh] md:text-[20vh] leading-none">ARTLAJK</div>
          <div className="text-[4vh] mb-[5vh] md:text-[6vh]">ZAJĘCIA Z MALATSTWA I RYSNKU</div>
          <div className="flex flex-col gap-[10vh] md:flex-row w-full justify-center items-center md:justify-between">
            <ScrollBtn />
            <div className="flex text-left gap-8 md:text-right">
              <div className="w-fit">
                <div>Kontakt</div>
                <div>512 321 664</div>
              </div>
              <div className="w-fit text-center md:text-right">
                <div>Prowadzi</div>
                <div>Ela Jakubowska</div>
              </div>
              <div className="w-fit  text-right md:text-right">
                <div>Miejsce</div>
                <div>Chojnice, ul. 31 Stycznia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="x"
        width={2000}
        height={2000}
        className="tracker absolute overflow-hidden w-full h-screen object-cover z-[-192]"
        src={"/img/bgimg.png"}
      />
    </div>
  );
};

export default Header;
