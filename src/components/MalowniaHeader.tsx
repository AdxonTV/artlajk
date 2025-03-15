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

    const videoAnimation = gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "-18vw",
    });

    const imageAnimation = gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "-18vw",
    });

    const textAnimation = gsap.to(".cc", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "-1vw",
    });

    return () => {
      clipAnimation.kill();
      videoAnimation.kill();
      imageAnimation.kill();
      textAnimation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="container-head"
      ref={containerRef}
      className="w-full flex relative  h-[100dvh] md:h-[150vh] justify-center"
    >
      <div className="w-[94vw] h-full ">
        <div className="text-[13vw] md:mb-[10vh] tracking-tighter mb-[5vh]  md:text-[10vw] leading-[110%] ">
          <div className="flex text-black">
            {" "}
            <TextRev>Studio Rysunku</TextRev>
          </div>

          <div className="  text-violet-300 cc flex w-full md:justify-start justify-end">
            <TextRev className="text-violet-300 md:text-left ">
              i Malarstwa
            </TextRev>
          </div>
        </div>

        <div
          id="fix"
          ref={fixClassRef}
          className="text-[20px] text-black h-fit pb-[10vh]  md:text-[32px] md:text-l  z-[10] text-center leading-[115%]  tracking-tight fixclass ml-[1vw] md:w-[40vw] w-[90vw]"
        >
          Nasza pracownia to miejsce w samym sercu Chojnic, gdzie pasja do
          sztuki łączy pokolenia, a kameralna przestrzeń tętni twórczą energią
          od 2016 roku i cieszy się ogromnym zainteresowaniem.
          <br />
        </div>
        <div className="md:top-[140vh] w-full hidden md:block  top-[110vh] absolute">
          <Image
            id="fix2"
            className="opacity-100"
            src={"/img/Vector.png"}
            width={300}
            height={300}
            alt="xx"
          />
        </div>
        <div className="w-full flex justify-center  h-fit relative">
          <div className="md:right-[5vw] drop-shadow-xl h-fit md:h-[90vh] rounded-[20px] overflow-hidden md:rotate-3 mt-[3vh] md:mt-[-20vh] md:absolute pointer-events-none">
            <video
              ref={videoRef}
              className="x md:w-[40vw] hidden md:block w-[80vw] z-[10] rounded-[20px]"
              autoPlay
              width={700}
              height={700}
              muted
              controls={false}
              loop
              src="/img/malowniafilm.mp4"
            />

            <Image
              ref={imageRef}
              className="opacity-100 z-[10]  object-cover h-[400px] rounded-[20px] md:hidden"
              src={"/img/carusel_4.jpeg"}
              width={1000}
              height={1000}
              alt="xx"
            />
          </div>
        </div>
      </div>
      <div className="xl:top-[-30vh] md:right-[-19vw] opacity-40 xl:opacity-100 top-[-440px] z-[-20] absolute xl:right-[5vw] right-[-10vw]">
        <Ss
          path="M19.4982 17.4986C1367.01 1453 893.504 -603 310 1184.5"
          value={5.5}
        />
      </div>
    </div>
  );
};

export default MalowniaHeader;
