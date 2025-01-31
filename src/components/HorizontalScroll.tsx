"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";


const photos = [
  "/img/carusel_1.jpeg",
  "/img/carusel_2.jpeg",
  "/img/carusel_3.jpeg",
  "/img/carusel_4.jpeg",
  "/img/carusel_5.jpeg",
];
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containersRef = useRef(null);
  const textSkew = useRef(null);
  
  useEffect(() => {
    const cards = [
      { id: "#card-1", idimg: "#img-1",  endTranslateX: -2000, rotate: 45 },
      { id: "#card-2", endTranslateX: -1000, rotate: -30 },
      { id: "#card-3", endTranslateX: -2000, rotate: 45 },
      { id: "#card-4", endTranslateX: -1000, rotate: -30 },
      { id: "#card-5", endTranslateX: -2000, rotate: 45 },
    ];
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 768;
if(isMobile){ScrollTrigger.normalizeScroll(true)}
      
      ScrollTrigger.create({
        trigger: ".wrapper-404",
        start: "top top",
        end: isMobile ? "+=1000dvh" : "+=1500dvh",
        scrub: 1,
        pin: true,
        pinSpacing:false,
        onUpdate: (self) => {
          gsap.to(".wrapper-404", {
            x: `${-250 * self.progress}vw`,
            duration: 0.5,
           
            ease: "power3.out",
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".wrapper-404",
        start: "top top",

        end: isMobile ? "+=1000dvh" : "+=1500dvh",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(textSkew.current, {
            skewX: `${-15 * self.progress}vw`,
            duration: 0.5,
           
            ease: "power3.out",
          });
        },
      })

      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card.id,
          start: "top top",
          end: isMobile ? "+=1200dvh" : "+=1900dvh",
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(card.id, {
              x: `${card.endTranslateX * self.progress}px`,
              rotate: `${card.rotate * self.progress}deg`,
              duration: 0.5,
            });
          },
        });
      });
    }, containersRef);

    return () => {
      ctx.revert();

    };
  }, []);

  return (
    <div ref={containersRef}>
      <div className="w-full m-0  flex items-start flex-col relative  md:mb-[-200px] h-[250dvh] overflow-hidden">
        <section className="wrapper-404 h-[90dvh] w-[400vw]">
         
          <div>
            <h1 ref={textSkew} className="w-full text-[30vw] tracking-tight top-0 absolute text-violet-300">
              Myślimy <b className="opacity-40">Nie</b>szablonowo.
            </h1>
            {photos.map((photo, index) => (
              <div className="card drop-shadow-2xl" key={photo} id={`card-${index + 1}`}>
                <Image
                  className="w-full h-full object-cover"
                  src={photo}
                  alt={photo}
                  width={1000}
                  height={1000}
                  id={`img-${index + 1}`}
                />
              </div>
            ))}
          </div>
        </section>
       
      </div>
    </div>
  );
};

export default HorizontalScroll;
