import React from "react";
import Image from "next/image";
import { Suspense } from "react";
interface Props {
  img: string;
  desc: string;
  date: string;
  title: string;
}
const WorkPresentation: React.FC<Props> = ({ img, desc, title, date }) => {
  return (
    <div>
    
      <div
        className={`w-[96vw] rounded-xl flex relative justify-between items-center h-[80vh] mt-[10vh]`}
      >

          <div className="w-full h-full justify-between flex items-center md:h-[60vh] ">
            <div className=" md:block hidden text-[15vw] w-fit tracking-tighter opacity-35 ">
              {date}.
              </div>
              <Suspense fallback={<div>loading...</div>}>
              <Image
              src={img}
              className="object-cover  rounded-xl h-full md:w-[48vw] w-full"
              height={500}
              alt="dd"
              width={500}
              ></Image>
           </Suspense>
          </div>

      </div>
 
      <div className="flex items-start mt-[2vh] justify-between">
        <div className=" text-[5vw] md:text-[2vw] leading-[110%] w-[30vw]">
          {title} <span className="opacity-30">(Painting)</span>
        </div>{" "}
        <div className="text-[1vw] opacity-50">
          {" "}
          <div className="w-[25vw] md:text-[1.2vw]   text-[3vw] leading-[120%]">{desc}</div>
        </div>{" "}
        <div className="md:text-[1vw]   text-[3vw] leading-[120%]">(Oil Paint)</div>
      </div>
   
    </div>
  );
};

export default WorkPresentation;
