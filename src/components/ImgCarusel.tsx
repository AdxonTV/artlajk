"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
const ImgCarusel = () => {
  const photos = [
    "/img/carusel_1.jpeg",
    "/img/carusel_2.jpeg",
    "/img/carusel_3.jpeg",
    // Add more photo URLs as needed
  ];
  const [first, setfirst] = useState(true);
  useEffect(() => {
    if (first) {
      setfirst(false);
    }
  }, []);
  return (
 
      <div className="container relative h-[1200vh]">

       
        




       
        </div>
     
  );
};

export default ImgCarusel;
