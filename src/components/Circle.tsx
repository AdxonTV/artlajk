import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

interface Props {
  img: string;
  className: string;
  id: string;
  imgid: string;
}

const Circle: React.FC<Props> = ({ img, imgid, className, id }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (imageRef.current) {
      const element = imageRef.current;

      // GSAP Hover Animation
      const handleMouseEnter = () => {
        gsap.to(element, {
          scale: 1.2, // Zoom in

          duration: 0.7,
          ease: "power2.out",
        });
        gsap.to(containerRef.current, {
          scale: 1.05, // Zoom in

          duration: 0.7,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          scale: 1, // Reset scale (match initial scale)
          rotate: "0deg",

          duration: 0.6,
          ease: "power2.in",
        });
        gsap.to(containerRef.current, {
          scale: 1, // Zoom in

          duration: 0.7,
          ease: "power2.out",
        });
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div id={id}>
      <div ref={containerRef} className={`${className} rounded-full md:mb-[2vh] overflow-hidden`}>
        <div
          ref={imageRef}
          id={imgid}
          className="w-full rounded-full h-full bg-slate-950 "
        >
          <Image
            src={img}
            alt={img}
            width={1200}
            height={1200}
            className="object-cover  scale-[1.2] w-full h-full klaza"
          />
        </div>
      </div>
    </div>
  );
};

export default Circle;
