import React, { useRef } from "react";
import gsap from "gsap";

interface StoryTiltProps {
  children: React.ReactNode;
}

const StoryTiltExp: React.FC<StoryTiltProps> = ({ children }) => {
  const frameRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -2;
    const rotateY = ((xPos - centerX) / centerX) * 1;

    gsap.to(element, {
      duration: 0.1,
      rotateX,
      rotateY,
      transformPerspective: 10000,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      
      className="w-[100vw] flex justify-end h-[100vh]"
      style={{ perspective: "700px" }} // Dodanie perspektywy
    >
      <div ref={frameRef}>{children}</div>
    </div>
  );
};

export default StoryTiltExp;
