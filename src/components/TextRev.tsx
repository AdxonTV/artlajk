"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface OptionProps {
  children: React.ReactNode;
  className?: string
}

const TextRev: React.FC<OptionProps> = ({ children, className }) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const gsapContext = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    gsapContext.current = gsap.context(() => {
      const chars = textRef.current?.querySelectorAll(".char");

      if (chars) {
        // Animation with ScrollTrigger and toggleActions
        gsap.fromTo(
          chars,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top 80%", // Adjust based on when you want it to trigger
              end: "top 50%", // Adjust as needed
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, buttonRef);

    return () => {
      // Cleanup GSAP context
      gsapContext.current?.revert();
    };
  }, []);

  // Helper to split text into animated spans
  const splitText = (text: string) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        className="char"
        style={{
          display: "inline-block",
    
        }}
      >
        {char}
      </span>
    ));

  return (
    <div
      ref={buttonRef}
      className="text-[13vw] tracking-tighter  md:text-[10vw] leading-[110%] "
    >
      <div
        ref={textRef}
        className={` relative text-black ${className}`}
       
      >
        {splitText(children as string)}
        <span
          style={{
            display: "inline-block",

          }}
        >
         
        </span>
      </div>
    </div>
  );
};

export default TextRev;
