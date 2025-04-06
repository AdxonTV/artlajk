import React from "react";
import Image from "next/image";
import ComponentAppear from "./ComponentAppear";
import Btn from "./Btn";

const MalowniaWorks = () => {
  return (
    <div className="text-black h-fit mb-0 mx-[5vw] md:mb-[-30vh] mt-[5vh]">
            <div className=" text-[2.8vw] mb-[5vh]  tracking-tight leading-[135%] text-left  w-full ">
              W Malowni wierzymy, że sztuka jest dla każdego. Niezależnie od
              wieku czy doświadczenia, każdy znajdzie tu przestrzeń do wyrażania
              siebie. Dbamy o to, żeby w studiu panowała przyjacielska, a wręcz
              rodzinna atmosfera, i żeby uczestnicy zajęć – wszyscy bez wyjątku
              – czuli się równi sobie. 
          
            </div>
            <div className="w-full b h-[1px] opacity-20 my-[5vh] "></div>
      <div className="flex w-full h-full  items-center  mt-[2vh] justify-between ">

        <ComponentAppear>
        <div className="flex-col h-[50vh] j   ">
          <div className="w-full md:w-[40vw] md:text-[30px] text-[18px]    gap-[6vh]   relative flex-col flex  leading-tight  text-left  ">
       
            {/* <div className="w-full bg-black h-[1px] opacity-20 "></div> */}
            <div>Nierzadko w naszej pracowni tworzą się
              przyjaźnie, a uczestnicy w różnym wieku wymieniają się uwagami i
              doświadczeniem.</div>
         <div className="flex    gap-[2vh] mt-[1vh]">
            <div className=" md:text-[18px] w-[50%] text-[15px] leading-[120%] opacity-70 ">
              Oczywiście wszystko to pod okiem wykwalifikowanej i doświadczonej
              instruktorki – pani Elżbiety Jakubowskiej, która z niesamowitą
              wrażliwością, ogromną pasją i z zaangażowaniem rozwija skrzydła
              swoich podopiecznych.
            </div>
            <div className=" md:text-[18px] w-[35%] text-[15px] leading-[120%] opacity-70 ">
            Stara się ona, żeby każdy uczestnik zajęć
              otrzymał indywidualne wsparcie dostosowane do swoich potrzeb i
              artystycznych aspiracji.
            </div></div>
           
          </div>
         
          <div className="mt-[10vh] ">
          <Btn title="zapisz się" id="xx"></Btn></div>

     </div>
        </ComponentAppear>
        <ComponentAppear>
          <div className="overflow-hidden rounded-xl md:w-[47 vw] bg-slate-500 w-full h-[50vh]   ">
        <div className="   md:block hidden w-[130%] h-[130%]   ">
          <Image
            className=" object-cover rounded-xl drop-shadow-xl"
            src={"/img/bg_img2.png"}
            width={1000}
            height={1000}
            alt="xx"
          />
        </div></div>
        </ComponentAppear>
      </div>

      {/* <ImgCarusel></ImgCarusel> */}
    </div>
  );
};

export default MalowniaWorks;
