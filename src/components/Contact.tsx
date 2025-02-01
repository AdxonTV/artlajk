import React from "react";
import TextRev from "./TextRev";
import Btn from "./Btn";

import ContactFeature from "./ContactFeature";

const Contact = () => {
  return (
    <div className="bg-gradient-to-t ">
      <div className="flex flex-col items-center justify-center gap-[6vh] h-[80dvh]">
        <div>
          <TextRev className="md:text-[128px] text-[68px] tracking-tight md:mb-[3vh] md:leading-[100%]">
            Skontaktuj
          </TextRev>
          <div className="flex mt-[15px] md:mt-0 ">
            <TextRev className="md:text-[128px] text-[68px] md:leading-[20%] tracking-tight">
              się{" "}
            </TextRev>
            <TextRev className="tracking-tight md:leading-[20%] text-violet-300 md:text-[128px] text-[68px]">
              {" "}
              z Nami
            </TextRev>
          </div>
        </div>
        <div className="flex justify-center gap-[2vw]">
          <div className="md:w-[9vw]">
            <ContactFeature
              className="text-left"
              subtitle="Adres"
              title="Chojnice"
              title2="Jana Pawła 29"
            />
          </div>
          <div className="md:w-[9vw]">
            <ContactFeature
              className="text-center"
              subtitle="Email"
              title="Malownia"
              title2="@gmail.com"
            />

          </div>
          <div className="md:w-[9vw]">
            <ContactFeature
              className="text-right"
              subtitle="Number"
              title="+48"
              title2="123 456 789"
            />
          </div>
        </div>
        <Btn id="map" title="Zapisz się"></Btn>
      </div>
    </div>
  );
};

export default Contact;
