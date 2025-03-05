"use client";
import React, { useEffect, useRef, Suspense } from "react";
import Btn from "./Btn";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
import ComponentAppear from "./ComponentAppear";
gsap.registerPlugin(ScrollTrigger);

const LazyTextRev = React.lazy(() => import("./TextRev"));
const LazyCircle = React.lazy(() => import("./Circle"));

const CirclesSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const circles = [
    { id: "#circle1", imgid: "#circleimg1", endTranslateY: -140 },
    { id: "#circle2", imgid: "#circleimg2", endTranslateY: -300 },
    { id: "#circle3", imgid: "#circleimg3", endTranslateY: -280 },
    { id: "#circle4", imgid: "#circleimg4", endTranslateY: -100 },

  ];

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: container.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        circles.forEach((circle) => {
          gsap.set(circle.id, {
            y: `${circle.endTranslateY * self.progress}px`,
          });
        });
      },
    });
    return () => trigger.kill();
  }, [circles]);

  return (
    <div
      ref={container}
      className="flex w-full justify-center mt-[50vh] md:mt-[5vh]"
    >
      <div className="w-[94vw]">
        <div>
          <div className="flex justify-between">
            <div>
              <Suspense fallback={<div>Loading text...</div>}>
                <LazyTextRev className="text-[13vw] md:text-[6vw] tracking-tighter leading-[110%]">
                  Prowadzi
                </LazyTextRev>
              </Suspense>
              <Suspense fallback={<div>Loading text...</div>}>
                <LazyTextRev className="text-violet-300 text-[11vw] md:text-[6vw] tracking-tighter leading-[110%]">
                  Elżbieta Jakubowska
                </LazyTextRev>
              </Suspense>
            </div>
      
          </div>

          <div className="mb-[100px] md:my-[5vh] gap-[4vw]  h-fit flex mt-[4vw] md:gap-[3vh] md:mt-[3vh] flex-col-reverse">
            <Btn title="Zobacz więcej" id="searcg" link="/about" />
            <div className="capitalize md:w-[20vw]">
            służy profesjonalnymi wskazówkami, a jednocześnie tworząc atmosferę pełną ciepła i inspiracji. 
            </div>
          </div>
          <ComponentAppear>
            <div className={`] flex md:flex-row md:flex-nowrap flex-wrap md:items-end md:h-fit h-full mt-[30px] items-end md:mt-[-10vh] lg:[-40vh] w-full justify-between`}>
              <Suspense fallback={<div>Loading circle...</div>}>
                <LazyCircle
                  className="md:w-[19vw] w-[20vw] drop-shadow-xl h-[20vw] md:h-[19vw]"
                  img="/img/carusel_1.jpeg"
                  id="circle1"
                  textclass="text-[30px]"
                />
              </Suspense>
              <Suspense fallback={<div>Loading circle...</div>}>
                <LazyCircle
                  className="md:w-[10vw] w-[45vw] drop-shadow-xl h-[45vw] md:h-[10vw]"
                  img="/img/carusel_2.jpeg"
                  id="circle2"
                  textclass="text-[12px]"
                />
              </Suspense>
              <Suspense fallback={<div>Loading circle...</div>}>
                <LazyCircle
                  className="w-[20vw] drop-shadow-xl hidden md:block h-[20vw]"
                  img="/img/carusel_5.jpeg"
                  id="circle3"
                  textclass="text-[30px]"
                />
              </Suspense>
              <Suspense fallback={<div>Loading circle...</div>}>
                <LazyCircle
                  className="md:w-[35vw] drop-shadow-xl w-[70vw] h-[70vw] md:h-[35vw]"
                  img="/img/carusel_4.jpeg"
                  id="circle4"
                  textclass="text-[50px]"
                />
              </Suspense>
            </div>
          </ComponentAppear>
     
        </div>
      </div>
    </div>
  );
};

export default CirclesSection;
