"use client";
import React from "react";
import AboutFeature from "./AboutFeature";
import { MdAttachMoney } from "react-icons/md";
import TextRev from "./TextRev";
const About = () => {
  return (
    <div className="w-full h-[100vh] mx-[2vw] ">
      <div className="w-full flex flex-col   justify-between">
        <div className=" w-full md:w-[45vw] mb-[50px]  flex justify-start md:justify-end">
          <div className="ml-[10vw]">
            <div className="flex flex-col ">
              <TextRev className="md:text-[5vw] text-[13vw] leading-[100%] tracking-tight">
                Zajęcia w
              </TextRev>
              <div className="flex  gap-[20px]">
                <TextRev className=" text-[13vw] md:text-[5vw] leading-[100%] text-violet-300  tracking-tight">
                  Malowni
                </TextRev>

                <TextRev className="md:text-[5vw] text-[13vw] leading-[100%]  tracking-tight">
                  to:
                </TextRev>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:flex justify-between ">
        <AboutFeature
              title="Od 9 do ∞ roku życia"
              icon={<MdAttachMoney />}
              desc="Od 9 do ∞ roku życia"
            />
            <div className=" flex flex-wrap">
          <div className=" ">
            <AboutFeature
              title="Zajęcia raz w tygodniu"
              icon={<MdAttachMoney />}
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
              icon={<MdAttachMoney />}
              desc="Świetną zabawę i rozwój pasji"
            />
            <AboutFeature
              title="Pomoc Kreatywna"
              icon={<MdAttachMoney />}
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
