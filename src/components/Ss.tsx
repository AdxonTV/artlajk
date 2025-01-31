import { useEffect, useRef } from "react";
import React from "react";

const Ss = () => {
  const pathRef = useRef<SVGPathElement>(null);
const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        const scrollPercentage =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const drawLength = pathLength * scrollPercentage * 6.5;

        pathRef.current.style.strokeDasharray = `${drawLength} ${pathLength}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          d="M19.4982 17.4986C1367.01 1453 893.504 -603 310 1184.5"
          stroke="url(#gradient)"
          strokeWidth={isMobile ? 14 : 52 }
          fill="transparent"
        />
      </svg>
    
    </div>
  );
};

export default Ss;
