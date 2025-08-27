"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
interface MyInterface {
  path: string;
  value: number;
}
const Ss:React.FC<MyInterface> = ({path, value}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleScroll = () => {
        if (pathRef.current) {
          const pathLength = pathRef.current.getTotalLength();
          const scrollPercentage =
            window.scrollY / (document.body.scrollHeight - window.innerHeight);
          const drawLength =  pathLength * scrollPercentage * value ;

          pathRef.current.style.strokeDasharray = `${drawLength} ${pathLength}`;
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [value]);

  return (
    <div>
      <svg
        width="950"
        height="1193"
        viewBox="0 0 916 1193"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#5B4CFF", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#863AF1", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={path}
          stroke="url(#gradient)"
          strokeWidth={isMobile ? 14 : 52}
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default Ss;
