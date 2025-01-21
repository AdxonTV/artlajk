"use client";


import ScrollBtn from "./ScrollBtn";
import Cursor from "./cursor";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Header = () => {
  useGSAP(() => {
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
    
    );
    gsap.to(".tracker", {
      scale: 1.2,
      y: "50%",
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
    <div className="h-screen z-10 relative flex justify-center overflow-hidden text-white">
      <Cursor />
      <div className="w-[96vw] relative">
        <div className="w-full bottom-0 absolute  md:text-left">
     
          <div className="text-[4vh] mb-[5vh] md:w-[40vw] leading-[110%] md:text-[7vh]">Rozwiń się na Zajęciach <br /> z Malartwa i Rysunku</div>
          <div className="flex flex-col gap-[10vh] md:flex-row w-full justify-center items-center md:justify-between">
           <div className="md:block hidden"> <ScrollBtn /></div>
            <div className="flex text-left opacity-90 md:text-[18px] text-[10px] md:w-fit w-full justify-between mb-[2vh] gap-8 md:text-right">
              <div className="w-fit">
                <div className=" font-semibold">Kontakt</div>
                <div className="leading-none">512 321 664</div>
              </div>
              <div className="w-fit text-left md:text-right">
                <div className=" font-semibold">Prowadzi</div>
                <div className="leading-none">Ela Jakubowska</div>
              </div>
              <div className="w-fit  text-right md:text-right">
                <div className=" font-semibold">Miejsce</div>
                <div className="leading-none">Chojnice, ul. 31 Stycznia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute overflow-hidden w-full h-screen object-cover z-[-192]" >
      <video
            className="tracker "
            autoPlay
            muted
            loop
            src="/img/malowniafilm.mp4"
          ></video>
          <div className="bg-black w-[100%] h-[40vh]  absolute bottom-[-20vh] blur-[100px]"> </div>
          </div>
      <Image
        alt="x"
        width={2000}
        placeholder="blur"
        blurDataURL="/public/img/bg_img2.png"
        height={2000}
        className=" md:block hidden tracker absolute overflow-hidden w-full h-screen object-cover z-[-192]"
        src={"/img/bg_img2.png"}
      />
    </div>
  );
};

export default Header;
