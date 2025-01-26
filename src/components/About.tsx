"use client";
import React from "react";
import AboutFeature from "./AboutFeature";
import { FaRegStar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineChildFriendly } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import TextRev from "./TextRev";

const About = () => {
  return (
    <div className="w-full h-screen mx-[2vw] mt-[-100px]">
      <div className="w-full flex flex-col justify-between">
        <div className="w-full md:w-[45vw] mb-12 flex justify-start md:justify-end">
          <div className="ml-[10vw]">
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
        <div className="w-full md:flex justify-between">
          <AboutFeature
            title="Od 9 do ∞ roku życia"
            icon={<MdOutlineChildFriendly />}
            desc="wspieramy rozwój artystyczny dzieci, młodzieży i dorosłych od 9. roku życia wzwyż."
          />
          <div className="flex flex-wrap">
            <div>
              <AboutFeature
                title="Zajęcia raz w tygodniu"
                icon={<LuCalendar />}
                desc="Qudrix base set includes solid basement, aluminium full-frame and few options of walls and windows."
              />
              <AboutFeature
                title="Płatność 150zł/msc"
                icon={<MdAttachMoney />}
                desc="Qudrix base set includes solid basement, aluminium full-frame and few options of walls and windows."
              />
            </div>
            <div>
              <AboutFeature
                title="Gwarantujemy"
                icon={<FaRegStar />}
                desc="Świetną zabawę i rozwój pasji"
              />
              <AboutFeature
                title="Pomoc Kreatywna"
                icon={<BiBrain />}
                desc="Qudrix base set includes solid basement, aluminium full-frame and few options of walls and windows."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
