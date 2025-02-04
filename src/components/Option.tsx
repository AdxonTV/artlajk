"use client";
import React, { useRef } from "react";
import gsap from "gsap";
interface OptionProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
}
const Option: React.FC<OptionProps> = ({ children, shadow, className }) => {
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
      <span
        key={index}
        className={`char ${className}`}
        style={{ display: "inline-block" }}
      >
        {char}
      </span>
    ));

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden px-3 py-2 h-fit  text-lg rounded"
    >
      <div
        ref={textRef}
        className={` relative ${
          shadow ? "text-shadow-white" : "text-shadow-black"
        } `}
      >
        {splitText(children as string)}{" "}
        <span className={`${className}`} style={{ display: "inline-block" }}>
          ,
        </span>
      </div>
    </button>
  );
};

export default Option;
