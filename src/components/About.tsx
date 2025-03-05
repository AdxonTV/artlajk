"use client";
import React, { lazy, Suspense, useRef } from "react";
const AboutFeature = lazy(() => import("./AboutFeature"));
import { FaRegStar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineChildFriendly } from "react-icons/md";

import TextRev from "./TextRev";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { BsPeople } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <div className="w-full h-screen  md:h-fit bg mx-[2vw]">
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
                title="Od 7 do ∞ roku życia"
                icon={<MdOutlineChildFriendly />}
                desc="Nasze zajęcia skierowane są do dzieci od 7 roku życia, młodzieży oraz dorosłych. "
              />
            </div>
            <div className="flex md:flex-nowrap flex-wrap ">
              <div className="" >
                <div >
                  <AboutFeature
                    title="90 min raz w tygodniu"
                    icon={<LuCalendar />}
                    desc="Podczas których każdy uczestnik ma szansę rozwijać swoje umiejętności w dziedzinie malarstwa i rysunku. 
"
                  />
                </div>
                <div >
                  <AboutFeature
                    title="Płatność 150zł/msc"
                    icon={<MdAttachMoney />}
                    desc="...(Wpisz np. że zależnie od liczby zajęć w miesiacu)"
                  />
                </div>
              </div>
              <div className=" ">
                <div >
                  <AboutFeature
                    title="Naucz się Rysunku"
                    icon={<FaRegStar />}
                    desc="Czekamy na Ciebie – tu, gdzie pędzlem i ołówkiem tworzy się magia! 
"
                  />
                </div>
                <div >
                  <AboutFeature
                    title="Dziel pasję z innymi"
                    icon={<BsPeople />}
                    desc="Nierzadko w naszej pracowni tworzą się przyjaźnie, a uczestnicy w różnym wieku wymieniają się uwagami i doświadczeniem. 
"
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
