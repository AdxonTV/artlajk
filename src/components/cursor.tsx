"use client"
import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [mousePositions, setMousePositions] = useState<{ x: number; y: number; time: number; opacity: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newPosition = {
        x: event.pageX,
        y: event.pageY,
        time: Date.now(),
        opacity: 1,
      };
      setMousePositions((prevPositions) => [...prevPositions, newPosition]);
    };

    const updatePositions = () => {
      setMousePositions((prevPositions) =>
        prevPositions
          .map((pos) => ({
            ...pos,
            opacity: Math.max(0, pos.opacity - 0.1),
          }))
          .filter((pos) => pos.opacity > 0)
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    const intervalId = setInterval(updatePositions, 40);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {mousePositions.map((pos, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: pos.y,
            left: pos.x,
            width: '44px',
            height: '44px',
            transform: 'translate(-50%, -50%)',
            filter: `blur(${pos.opacity * 2}px)`,
            backgroundColor: '#863AF1',
            borderRadius: '50%',
            pointerEvents: 'none',
            opacity: pos.opacity,
          }}
        />
      ))}
    </>
  );
};

export default Cursor;
