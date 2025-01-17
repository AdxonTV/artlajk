import React from "react";
import { FaArrowDown } from "react-icons/fa6";
const ScrollBtn = () => {
  return (
    <div className="w-fit  ">
      <div className="px-8 py-4 mb-[4vh]  items-center text-[18px] gap-2 flex rounded-full text-white bg-white/30 backdrop-blur-md w-fit h-fit">
        <FaArrowDown />
        <div>Scroll Down</div>
      </div>
    </div>
  );
};

export default ScrollBtn;

{/* <div className="flex gap-8">
                <div className="w-fit">
                  <div>Kontakt: </div>
                  <div>512 321 664</div>
                </div>
                <div className="w-fit">
                  <div>Prowadzi</div>
                  <div>Ela Jakubowska</div>
                </div>
                <div className="w-fit">
                  <div>Miejsce:</div>
                  <div>Chojnice, ul. 31 Stycznia</div>
                </div>
              </div> */}