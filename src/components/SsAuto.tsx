"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";

interface MyInterface {
  path: string;
  value: number;
}

const SsAuto: React.FC<MyInterface> = ({ path, value }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
    const pathEl = pathRef.current;
    if (!pathEl) return;

    // Get the total length of the path
    const totalLength = pathEl.getTotalLength();

    // Prepare the path for drawing animation
    pathEl.style.strokeDasharray = `${totalLength}`;
    pathEl.style.strokeDashoffset = `${totalLength}`;

    // Trigger a reflow so that the starting position is applied
    pathEl.getBoundingClientRect();

    // Animate the path: adjust the transition duration as needed
    // Optionally using the "value" prop to modify duration (multiplied by a constant)
    pathEl.style.transition = `stroke-dashoffset ${2 * value}s ease-in-out`;
    pathEl.style.strokeDashoffset = "0";
  }, [value]);

  return (
    <div>
      <svg
        width="100vw"
        height="120vh"
        viewBox="0 0 100vh 100vw"
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
          strokeWidth={isMobile ? 14 : 26}
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default SsAuto;
