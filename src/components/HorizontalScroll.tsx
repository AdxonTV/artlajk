"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const photos = [
  "/img/carusel_1.jpeg",
  "/img/carusel_2.jpeg",
  "/img/carusel_3.jpeg",
  "/img/carusel_4.jpeg",
  "/img/carusel_5.jpeg",
];

const cards = [
  { id: "#card-1", endTranslateX: -2000, rotate: 45 },
  { id: "#card-2", endTranslateX: -1000, rotate: -30 },
  { id: "#card-3", endTranslateX: -2000, rotate: 45 },
  { id: "#card-4", endTranslateX: -1000, rotate: -30 },
  { id: "#card-5", endTranslateX: -2000, rotate: 45 },
];

const HorizontalScroll = () => {
  const containersRef = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const textSkew = useRef<HTMLDivElement>(null);

  const [loaded, setLoaded] = useState(false);
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    if (imageCount === photos.length) {
      setLoaded(true);
    }
  }, [imageCount]);

  useEffect(() => {
    if (!loaded) return;

    const ctx = gsap.context(() => {
      if (typeof window !== "undefined") {
        ScrollTrigger.create({
          trigger: wrapper.current,
          start: "top top",
          end: "+=1500dvh",
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.to(wrapper.current, {
              x: `${-250 * self.progress}vw`,
              duration: 0.5,
              ease: "power3.out",
            });
          },
        });

        ScrollTrigger.create({
          trigger: wrapper.current,
          start: "top top",
          end: "+=1500dvh",
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.to(textSkew.current, {
              skewX: `${-15 * self.progress}vw`,
              duration: 0.5,
              ease: "power3.out",
            });
          },
        });

        cards.forEach((card) => {
          ScrollTrigger.create({
            trigger: card.id,
            start: "top top",
            end: "+=1900dvh",
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.to(card.id, {
                x: `${card.endTranslateX * self.progress}px`,
                rotate: `${card.rotate * self.progress}deg`,
                duration: 0.5,
              });
            },
          });
        });

        ScrollTrigger.refresh();
      }
    }, containersRef);

    return () => {
      ctx.revert();
    };
  }, [loaded]);

  return (
    <div ref={containersRef}>
      {!loaded && (
        <div className="">
      
        </div>
      )}
      <div
        id="wrapper-404"
        className={`h-[270dvh]  w-full mt-[20vh] flex items-start flex-col relative ${
          loaded ? "opacity-100 transition-opacity duration-500" : "opacity-0"
        }`}
      >
        <section ref={wrapper} className="wrapper-404  h-[100vh] w-[400vw]">
          <div>
            <div
              ref={textSkew}
              className="w-full text-[30vw] tracking-tight text-violet-300"
            >
              Myślimy <b className="opacity-40">Nie</b>szablonowo.
            </div>
            {photos.map((photo, index) => (
              <div className="card drop-shadow-2xl" key={photo} id={`card-${index + 1}`}>
                <Image
                  className="w-full h-full object-cover"
                  src={photo}
                  alt={photo}
                  width={500}
                  height={500}
                  onLoad={() => setImageCount((prev) => prev + 1)}
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
