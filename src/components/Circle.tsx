"use client"
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Magnetics from "./Magnetics";
import gsap from "gsap";


interface Props {
  img: string;
  className: string;
  id: string;
  textclass?: string;
  imgid: string;
}

const Circle: React.FC<Props> = ({ img, imgid, className, textclass, id }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const clipElement = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageEl = imageRef.current;
    const containerEl = containerRef.current;
    const clipEl = clipElement.current;

    if (!imageEl || !containerEl || !clipEl) return;

    const handleMouseEnter = () => {
      gsap.to(imageEl, {
        scale: 1.5,
        duration: 0.7,
        ease: "power2.out"
      });
      gsap.to(containerEl, {
        scale: 1.05,
        boxShadow: "0px 0px 30px white",
        duration: 0.7,
        ease: "power2.out"
      });
      gsap.to(clipEl, {
        clipPath: "circle(100% at 50% 50%)",
        duration: 0.7,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageEl, {
        scale: 1,
        rotate: "0deg",
        duration: 0.6,
        ease: "power2.in"
      });
      gsap.to(clipEl, {
        clipPath: "circle(0% at 50% 50%)",
        duration: 0.7,
        ease: "power2.out"
      });
      gsap.to(containerEl, {
        scale: 1,
        boxShadow: "none",
        duration: 0.7,
        ease: "power2.out"
      });
    };

    imageEl.addEventListener("mouseenter", handleMouseEnter);
    imageEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imageEl.removeEventListener("mouseenter", handleMouseEnter);
      imageEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    
    <div id={id} >
      <div
      
        ref={containerRef}
        className={`${className} rounded-full md:mb-[2vh] overflow-hidden relative`}
       
      >
        <div
          ref={imageRef}
          id={imgid}
          className="w-full rounded-full h-full bg-slate-950 justify-center items-center flex relative"
        >
        
          <div
            ref={clipElement}
            className={`${textclass} tracking-tighter w-full h-full bg-violet-300 text-white font-semibold absolute z-10 flex justify-center items-center circlepath`}
          >
              <Magnetics> <div>  <a href="/about"  className={`${textclass} `}> Zobacz więcej </a> </div>  </Magnetics>
          </div>
        
          <Image
            src={img}
            alt="circle image"
            width={1000}
            height={1000}
            className="object-cover opacity-100 scale-[1.2] w-full h-full"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Circle;
