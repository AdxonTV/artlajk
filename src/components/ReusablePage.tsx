import React from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import StoryTilt from "./StoryTilt";
gsap.registerPlugin(ScrollTrigger);

const ReusablePage = () => {
  return (

    <div className="w-[96vw] relative  h-[90vh] ">
      <div className="bottom-0  overflow-hidden  absolute left-0">
        <div className="">
          <div className="mb-[8vh] text-[7vw] flex leading-[85%] tracking-tight  ">
          <div className="flex flex-col  z-[100] justify-between h-[30vh]">
            <div className="text-[20px] tracking-tight leading-none">
              Właścicielka <br />
              Artlajk
            </div>
            <div>
              <div>Elżbieta</div>
              <div>
                <span className="petit text-[6.8vw] tracking-[-0.15em]">J</span>
                <span>akubowska</span>
              </div>
              </div>
            </div>
            {/* <div className="flex items-center gap-[2vw]">
              <div className="w-[10px] h-[10px] ml-[2vw] rotate-[40deg] bg-black"></div>
              <div className="text-[20px] leading-none tracking-tight">2025</div>
            </div> */}
          </div>
          <div className=" justify-between leading-[110%]  w-[100vw] text-[20px] flex tracking-[-1px] ">
            <div className="flex  gap-[10vw]">
            <div>
              <div className="opacity-50 uppercase">doświadczenie</div>
              <div>Akademia Sztuk Pięknych, Gdańsk</div>
            </div>
            <div>
              <div className="opacity-50 uppercase">doświadczenie</div>
              <div>Akademia Sztuk Pięknych, Gdańsk</div>
            </div>
            </div>
            <div>
              <div className="opacity-50 uppercase">doświadczenie</div>
              <div>Akademia Sztuk Pięknych, Gdańsk</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute m-[2vw] z-10 right-0">
        <StoryTilt>
          <div className="w-[28vw] h-[65vh] overflow-hidden rounded-lg flex justify-center items-center bg-slate-800">
        <Image
          src="/img/Praca2.jpg"
          className="object-fill scale-[1.6]"
          height={1000}
          alt="dd"
          width={1000}
        ></Image>
          </div>
        </StoryTilt>
      </div>

      <div className="absolute m-[3vw] right-0">
        <StoryTilt>
          <div className="w-[28vw] mt-[1.5vh] h-[65vh]  rounded-lg overflow-hidden flex justify-center items-center bg-slate-800">
        <Image
          src="/img/Praca2.jpg"
          className="object-fill scale-[1.6]"
          height={1000}
          alt="dd"
          width={1000}
        ></Image>
          </div>
        </StoryTilt>
      </div>

      <div className="absolute mr-[4vw] z-[-10] right-0">
        <StoryTilt>
          <div className="w-[28vw] overflow-hidden rounded-lg mt-[9vh] h-[57vh] flex justify-center items-center bg-slate-800">
        <Image
          src="/img/Praca2.jpg"
          className="object-fill scale-[1.6]"
          height={1000}
          alt="dd"
          width={1000}
        ></Image>
          </div>
        </StoryTilt>
      </div>
      </div>
    
  
  );
};

export default ReusablePage;
