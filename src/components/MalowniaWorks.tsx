import React from "react";

import ComponentAppear from "./ComponentAppear";


const MalowniaWorks = () => {
  return (
    <div className="text-black h-fit mb-0 md:mb-[-30vh]">
      <div className="flex-col flex w-full md:flex-row   justify-center px-[2vw]">
        <div className="text-[13vw] md:text-[10vw] text-center mb-[5vh] md:text-left">
          {" "}
       
        </div>
        <ComponentAppear >
        <div className="w-full md:w-[40vw] text-[32px]  text-center mb-[20vh] ">
   
          W naszej pracowni tworzymy atmosferę wzajemnego wsparcia, otwartości i
          inspiracji, gdzie każdy czuje się swobodnie, by rozwijać swoje
          zainteresowania.
         
          <div className="petit mt-[3vh] "> ~Bottom</div>
        </div>
        </ComponentAppear>
      </div>

      {/* <ImgCarusel></ImgCarusel> */}
    </div>
  );
};

export default MalowniaWorks;
