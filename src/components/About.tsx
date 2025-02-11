"use client";
import React, { lazy, Suspense, useRef } from "react";
const AboutFeature = lazy(() => import("./AboutFeature"));
import { FaRegStar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineChildFriendly } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import TextRev from "./TextRev";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <div className="w-full h-screen md:h-fit bg mx-[2vw]">
      <div className="w-full flex flex-col justify-between">
        <div className="w-full md:w-[45vw] mb-12 flex justify-start md:justify-end">
          <div className="ml-[82px]">
            <div className="flex flex-col">
              <TextRev className="aboutrev">Zajęcia w</TextRev>
              <div className="flex gap-5">
                <TextRev className="text-[13vw] md:text-[5vw] leading-none text-violet-300 tracking-tight">
                  Malowni
                </TextRev>
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div ref={containerRef} className="w-full  md:flex justify-between">
            <div className="box-f">
              <AboutFeature
                title="Od 9 do ∞ roku życia"
                icon={<MdOutlineChildFriendly />}
                desc="wspieramy rozwój artystyczny dzieci, młodzieży i dorosłych od 9. roku życia wzwyż."
              />
            </div>
            <div className="flex md:flex-nowrap flex-wrap ">
              <div className="" >
                <div >
                  <AboutFeature
                    title="Zajęcia raz w tygodniu"
                    icon={<LuCalendar />}
                    desc="Qudrix base set includes solid basement, aluminium full-frame and few options of walls and windows."
                  />
                </div>
                <div >
                  <AboutFeature
                    title="Płatność 150zł/msc"
                    icon={<MdAttachMoney />}
                    desc="Qudrix base set includes solid basement, aluminium full-frame and few options of walls and windows."
                  />
                </div>
              </div>
              <div className=" ">
                <div >
                  <AboutFeature
                    title="Trwają 90 minut"
                    icon={<FaRegStar />}
                    desc="Świetną zabawę i rozwój pasji"
                  />
                </div>
                <div >
                  <AboutFeature
                    title="Grupy na Zajęciach"
                    icon={<BiBrain />}
                    desc="Zajęcia podzielone są grupami set includes solid basement, aluminium full-frame and few options of walls and windows."
                  />
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default About;
