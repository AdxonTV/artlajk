"use client";
import Ss from "./Ss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import TextRev from "./TextRev";
gsap.registerPlugin(ScrollTrigger);

const MalowniaHeader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fixClassRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !fixClassRef.current ||
      !videoRef.current ||
      !imageRef.current
    )
      return;

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        pin: fixClassRef.current,
        pinSpacing: false,
      },
    });

    clipAnimation.to(fixClassRef.current, {});

    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "-18vw",
    });

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      scale: 1.3,
    });

    gsap.to(".cc", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "-1vw",
    });
  }, []);

  return (
    <div
      id="container-head"
      ref={containerRef}
      className="w-full flex relative h-[100vh] md:h-[150vh] justify-center"
    >
      <div className="w-[96vw] h-full ">
        <div className="text-[13vw] md:mb-[10vh] tracking-tighter mb-[5vh] md:text-[10vw] leading-[110%] ">
          <div className="flex">
            {" "}
            <TextRev>Studio</TextRev> &nbsp; <TextRev>Rysunku</TextRev>
          </div>

          <div className="text-violet-300 cc flex">
          
            <TextRev className="text-violet-300 md:text-left text-right ">
           
             i&nbsp;Malarstwa
            </TextRev>
          </div>
        </div>
        <div
          id="fix"
          ref={fixClassRef}
          className="text-[20px] md:text-[25px] z-[10] md:text-left text-center fixclass ml-[1vw] md:w-[30vw] w-[90vw]"
        >
          Malownia to wyjątkowa pracownia kreatywna, w której od 2019 roku
          wspieramy rozwój artystyczny dzieci, młodzieży i dorosłych od 9. roku
          życia wzwyż.
        </div>
        <div className="md:top-[120vh] w-full hidden md:block  top-[103vh] absolute">
          <Image
            id="fix2"
            className="opacity-100"
            src={"/img/Vector.png"}
            width={300}
            height={300}
            alt="xx"
          />
        </div>
        <div className="w-full flex justify-center bg-slate-500 h-fit relative">
          <div className="  md:right-[5vw] h-fit md:h-[90vh] rounded-[20px] overflow-hidden md:rotate-3 mt-[5vh] md:mt-[-20vh] absolute">
            <video
              ref={videoRef}
              className="x md:w-[40vw] hidden md:block w-[80vw] z-[10] rounded-[20px]"
              autoPlay
              muted
              loop
              src="/img/malowniafilm.mp4"
            />
            <Image
              ref={imageRef}
              className="opacity-100  z-[10] object-cover  rounded-[20px] md:hidden"
              src={"/img/header-malownia-mobile.png"}
              width={800}
              height={800}
              alt="xx"
            />
          </div>
        </div>
      </div>
      <div className="xl:top-[-30vh] md:right-[-19vw] opacity-25 xl:opacity-100 top-[-65vh] z-[-20] absolute xl:right-[5vw] right-[10vw]">
        <Ss />
      </div>
    </div>
  );
};

export default MalowniaHeader;
