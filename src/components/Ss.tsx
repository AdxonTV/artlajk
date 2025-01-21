import { useEffect, useRef } from "react";
import React from "react";

const Ss = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        const scrollPercentage =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const drawLength = pathLength * scrollPercentage * 1.8;

        pathRef.current.style.strokeDasharray = `${drawLength} ${pathLength}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
  
      <svg
        width="916"
        height="1193"
        viewBox="0 0 916 1193"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M19.4982 17.4986C1367.01 1453 893.504 -603 310 1184.5"
          stroke="#863AF1"
          stroke-width="51"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default Ss;
