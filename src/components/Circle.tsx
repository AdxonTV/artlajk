"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Magnetics from "./Magnetics";
import gsap from "gsap";

interface Props {
  img: string;
  className: string;
  id: string;
  textclass?: string;
}

const Circle: React.FC<Props> = ({ img, className, textclass, id }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!imageRef.current || !clipRef.current || !containerRef.current) return;
    gsap.to(imageRef.current, {
      scale: 1.4,
      duration: 0.7,
      ease: "power2.out",
    });
    gsap.to(containerRef.current, {
      scale: 1.05,

      duration: 0.7,
      ease: "power2.out",
    });
    gsap.to(clipRef.current, {
      clipPath: "circle(100% at 50% 50%)",

      duration: 0.7,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current || !clipRef.current || !containerRef.current) return;
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.6,
      ease: "power2.in",
    });
    gsap.to(containerRef.current, {
      scale: 1,
      boxShadow: "none",
      duration: 0.7,
      ease: "power2.out",
    });
    gsap.to(clipRef.current, {
      clipPath: "circle(0% at 50% 50%)",
      duration: 0.7,
      ease: "power2.out",
    });
  };

  return (
    <div id={id}>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${className} rounded-full md:mb-[2vh] overflow-hidden relative`}
      >
        <div
          ref={imageRef}
          className="w-full rounded-full h-full bg-slate-950 flex justify-center items-center relative"
        >
          
          <a
            ref={clipRef}
            className={`${textclass} tracking-tighter w-full h-full bg-violet-300 text-white font-semibold absolute z-10 flex justify-center items-center circlepath`}
            href="/about"
         
          >
          <Magnetics>
            Zobacz więcej
            </Magnetics>
          </a>

          <Image
            src={img}
            alt="circle"
            width={800}
            height={800}
            unoptimized
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Circle;
