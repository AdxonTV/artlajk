"use client";
import React, { useRef } from "react";
import gsap from "gsap";
interface OptionProps {
  children: React.ReactNode;
}
const Option: React.FC<OptionProps> = ({ children }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const chars = textRef.current?.querySelectorAll(".char");
    if (chars) {
      gsap.to(chars, {
        y: "-190%",
        duration: 0.2,
        stagger: 0.05,
        ease: "expo.out",
      });
    }
  };

  const handleMouseLeave = () => {
    const chars = textRef.current?.querySelectorAll(".char");
    if (chars) {
      gsap.to(chars, {
        y: "0%",
        duration: 0.2,
        stagger: 0.05,
        ease: "expo.out",
      });
    }
  };

  // Helper to split text into animated spans
  const splitText = (text: string) =>
    text.split("").map((char, index) => (
      <span key={index} className="char inline-block">
        {char}
      </span>
    ));

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden px-3 py-2 h-fit text-white text-lg rounded"
    >
      <div ref={textRef} className="relative text-white" style={{ textShadow: "0px 50px 0px rgba(255, 255, 255, 1)" }}>
        {splitText(children as string)},
      </div>
     
    </button>
  );
};

export default Option;
