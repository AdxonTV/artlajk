"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Magnetics from "./Magnetics";
import gsap from "gsap";

interface Props {
  img: string;
  className: string;
  id: string;
  textclass?: string;
}

const Circle: React.FC<Props> = ({ img, className, textclass, id }) => {
  const router = useRouter();
  const imageRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLButtonElement>(null);
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
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/about");
    window.scrollTo(0, 0);
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
          className="w-full h-full bg-slate-950 flex justify-center items-center"
        >
          <button
            ref={clipRef}
            onClick={handleClick}
            className={`${textclass || ""} tracking-tighter w-full h-full bg-violet-300 text-white font-semibold absolute z-10 flex justify-center items-center circlepath`}
          >
            <Magnetics>
              Zobacz więcej
            </Magnetics>
          </button>

          <Image
            src={img}
            alt="circle"
            width={700}
            height={700}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Circle;
