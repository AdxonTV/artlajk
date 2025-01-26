"use client";
import React from "react";
import AboutFeature from "./AboutFeature";
import { MdAttachMoney } from "react-icons/md";
import TextRev from "./TextRev";
const About = () => {
  return (
    <div className="w-full h-[100vh] mx-[2vw] ">
      <div className="w-full ">
        <div className=" w-full md:w-[50vw] mb-[50px]  flex justify-start md:justify-end">
          <div >
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
              title="Starts from $29,999"
              icon={<MdAttachMoney />}
              desc="Qudrix base set includes solid basement, aluminium full-frame and few options of walls and windows."
            />
          <div className="">
            <AboutFeature
              title="Starts from $29,999"
              icon={<MdAttachMoney />}
              desc="Qudrix base set includes solid basement, aluminium full-frame and few options of walls and windows."
            />
            <AboutFeature
              title="Starts from $29,999"
              icon={<MdAttachMoney />}
              desc="Qudrix base set includes solid basement, aluminium full-frame and few options of walls and windows."
            />
          </div>
          <div>
            <AboutFeature
              title="Starts from $29,999"
              icon={<MdAttachMoney />}
              desc="Qudrix base set includes solid basement, aluminium full-frame and few options of walls and windows."
            />
            <AboutFeature
              title="Starts from $29,999"
              icon={<MdAttachMoney />}
              desc="Qudrix base set includes solid basement, aluminium full-frame and few options of walls and windows."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
