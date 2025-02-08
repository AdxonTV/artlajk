import React from "react";
import Image from "next/image";

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
        className={`w-[96vw]  rounded-xl flex relative justify-center items-center h-[80vh] mt-[10vh]`}
      >

          <div className="md:w-[40vw] w-full h-full md:h-[50vh] ">
            <Image
              src={img}
              className="object-cover md:ml-[20vw] rounded-xl h-full w-full"
              height={1000}
              alt="dd"
              width={1000}
            ></Image>
            <div className=" md:block hidden absolute text-[15vw] w-fit tracking-tighter top-[20%] left-0   opacity-35 ">
              {date}.
            </div>
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
