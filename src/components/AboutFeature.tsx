import React from "react";

interface AboutFeatureProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const AboutFeature: React.FC<AboutFeatureProps> = ({ title, desc, icon }) => {
  return (
    <div className="flex md:w-[25vw] w-[96vw] my-[20px]   items-start gap-6 bg-[#ffffff00] rounded-lg max-w-2xl">
      <div className="w-16 h-16 flex items-center justify-center rounded-full border-[#0000001a] border-2 ">
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
      <div className="space-y-2 w-[300px]">
        <h2 className="md:text-4xl text-[28px] mt-[13px] font-normal tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="text-sm text-gray-600 leading-tight max-w-lg  md:w-fit  tracking-wide">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default AboutFeature;
