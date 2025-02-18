import React from "react";
import ComponentAppear from "./ComponentAppear";
interface AboutFeatureProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const AboutFeature: React.FC<AboutFeatureProps> = ({ title, desc, icon }) => {
  return (
    <ComponentAppear>
    <div className=" flex feature-item md:w-fit   my-[20px] md:max-w-[30vw]   h-[15vh] w-full m-2  items-start gap-6 bg-[#ffffff00] rounded-lg ">
      <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full border-[#0000001a] border-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 15 19"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-800"
        >
          {icon}
        </svg>
      </div>
      <div className="space-y-2 w-full md:w-[20vw]">
        <h2 className="md:text-[20px] xl:text-[36px] text-[28px] mt-[13px] font-normal tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="text-sm text-gray-600 leading-tight  md:text-[11px]  xl:text-[16px] h-fit w-[72vw]  md:w-[17vw]  tracking-wide">
          {desc}
        </p>
      </div>
    </div>
    </ComponentAppear>
  );
};

export default AboutFeature;
