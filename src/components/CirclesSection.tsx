import React, { useEffect, useRef } from "react";
import Circle from "./Circle";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
import TextRev from "./TextRev";
gsap.registerPlugin(ScrollTrigger);

const CirclesSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const circles = [
    { id: "#circle1", imgid: "#circleimg1", endTranslateY: -240 },
    { id: "#circle2", imgid: "#circleimg2", endTranslateY: -200 },
    { id: "#circle3", imgid: "#circleimg3", endTranslateY: -350 },
    { id: "#circle4", imgid: "#circleimg4", endTranslateY: -100 },
    { id: "#circle5", imgid: "#circleimg5", endTranslateY: -120 },
  ];

  useEffect(() => {
    circles.forEach((circle) => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(circle.id, {
            y: `${circle.endTranslateY * self.progress}px`,
          });
        },
      });
   
    });
  }, []);

  return (
    <div
      ref={container}
      className="flex w-full justify-center mt-[30vh] md:mt-[5vh]"
    >
      <div className="w-[96vw]">
        <div className="b">
          <div className=" w-full bg">
            <TextRev className="text-[13vw] md:text-[6vw] tracking-tighter leading-[110%]">
              Prowadzi
            </TextRev>
            <TextRev className="text-violet-300 text-[13vw] md:text-[6vw] tracking-tighter leading-[110%]">
              Ela Jakubowska
            </TextRev>
          </div>
          <div className="w-full md:w-[33vw] mt-[50px] md:text-[32px] text-black leading-[130%] md:block hidden text-[24px]">
            W naszej pracowni tworzymy atmosferę wzajemnego wsparcia, otwartości
            i inspiracji, gdzie każdy czuje się swobodnie, by rozwijać swoje
            zainteresowania.
          </div>

          <div className="flex md:flex-row flex-wrap  md:items-end md:h-[100vh] h-full  mt-[30px] md:overflow-hidden items-end md:mt-[-420px] 2xl:mt-[-450px] w-full justify-between">
          <Circle
            className="md:w-[19vw] w-[20vw] drop-shadow-xl h-[20vw] md:h-[19vw]"
            imgid="#circleimg1"
            img="/img/carusel_1.jpeg"
            id="circle1"
          />
          <Circle
            className="md:w-[10vw] w-[45vw] drop-shadow-xl h-[45vw] md:h-[10vw]"
            imgid="#circleimg2"
            img="/img/carusel_2.jpeg"
            id="circle2"
          />
          <Circle
            className="md:w-[5vw] hidden drop-shadow-xl md:block md:h-[5vw]"
            imgid="#circleimg3"
            img="/img/carusel_3.jpeg"
            id="circle3"
          />
          <Circle
            className="md:w-[35vw] drop-shadow-xl w-[70vw] h-[70vw] md:h-[35vw]"
            imgid="#circleimg4"
            img="/img/carusel_4.jpeg"
            id="circle4"
          />
          <Circle
            className="w-[20vw] drop-shadow-xl hidden md:block h-[20vw]"
            imgid="#circleimg5"
            img="/img/carusel_5.jpeg"
            id="circle5"
          />
        </div>
          <div className="w-full md:w-[33vw] mt-[50px] md:hidden   text-left text-[24px]">
            W naszej pracowni tworzymy atmosferę wzajemnego wsparcia, otwartości
            i inspiracji, gdzie każdy czuje się swobodnie, by rozwijać swoje
            zainteresowania.
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default CirclesSection;
