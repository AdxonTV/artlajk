"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { SlArrowLeftCircle } from "react-icons/sl";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const photos = [
  "/img/carusel_1.jpeg",
  "/img/carusel_2.jpeg",
  "/img/carusel_3.jpeg",
  "/img/carusel_4.jpeg",
  "/img/carusel_5.jpeg",
];

const HorizontalScroll = () => {
  const cards = [
    { id: "#card-1", endTranslateX: -2000, rotate: 45 },
    { id: "#card-2", endTranslateX: -1000, rotate: -30 },
    { id: "#card-3", endTranslateX: -2000, rotate: 45 },
    { id: "#card-4", endTranslateX: -1000, rotate: -30 },
    { id: "#card-5", endTranslateX: -2000, rotate: 45 },
  ];

  const containersRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".wrapper-404",
        start: "top top",
        end: "+=1500vh",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          gsap.to(".wrapper-404", {
            x: `${-250 * self.progress}vw`,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      });

      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card.id,
          start: "top top",
          end: "+=1900vh",
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

    return () => ctx.revert();
  }, [cards]);

  return (
    <div ref={containersRef}>
      <div className="w-full flex justify-start items-start flex-col relative h-[400vh]  overflow-hidden ">
        <section className="wrapper-404  h-[100vh] w-[400vw]">
          <div className="md:hidden">
            <div className="w-full bg-violet-300 h-[2px] absolute opacity-20 bottom-[20vh]"></div>
            <div className="w-full bg-violet-300 h-[2px] absolute opacity-20 bottom-[40vh]"></div>
            <div className="w-full bg-violet-300 h-[2px] absolute opacity-20 bottom-[60vh]"></div>
            <div className="w-full bg-violet-300 h-[2px] absolute opacity-20 bottom-[80vh]"></div>
          </div>
          <div>
            <h1 className="w-full text-[30vw] tracking-tight bottom-0 absolute  text-violet-500">
              Działamy <b className="opacity-40">Nie</b>szablonowo 
            </h1>
            {photos.map((photo, index) => (
              <div className="card" key={photo} id={`card-${index + 1}`}>
                <Image
                  className="w-full h-full object-cover"
                  src={photo}
                  alt={photo}
                  width={1000}
                  height={1000}
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
