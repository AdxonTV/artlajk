import React from "react";
import Image from "next/image";
import ComponentAppear from "./ComponentAppear";

const MalowniaWorks = () => {
  return (
    <div className="text-black h-fit mb-0 mx-[5vw] md:mb-[-30vh] mt-[20vh]">
      <div className="flex w-full  items-center  flex-row-reverse  justify-between ">
        <ComponentAppear>
          <div className="w-full md:w-[40vw] md:text-[32px]   gap-[6vh]   relative flex-col flex  leading-tight  text-left  ">
            <div className="  text-[32px] ">
              W Malowni wierzymy, że sztuka jest dla każdego. Niezależnie od
              wieku czy doświadczenia, każdy znajdzie tu przestrzeń do wyrażania
              siebie. Dbamy o to, żeby w studiu panowała przyjacielska, a wręcz
              rodzinna atmosfera, i żeby uczestnicy zajęć – wszyscy bez wyjątku
              – czuli się równi sobie. Nierzadko w naszej pracowni tworzą się
              przyjaźnie, a uczestnicy w różnym wieku wymieniają się uwagami i
              doświadczeniem.
          
            </div>
            <div className="w-full bg-black h-[1px] opacity-20 "></div>
            <div className=" text-[20px] leading-[120%] opacity-50 ">
              Oczywiście wszystko to pod okiem wykwalifikowanej i doświadczonej
              instruktorki – pani Elżbiety Jakubowskiej, która z niesamowitą
              wrażliwością, ogromną pasją i z zaangażowaniem rozwija skrzydła
              swoich podopiecznych. Stara się ona, żeby każdy uczestnik zajęć
              otrzymał indywidualne wsparcie dostosowane do swoich potrzeb i
              artystycznych aspiracji.
            </div>
         
          </div>
        </ComponentAppear>
        <ComponentAppear>
        <div className="   md:block hidden w-[45vw] h-full   ">
          <Image
            className=" object-cover rounded-xl drop-shadow-xl"
            src={"/img/carusel_5.jpeg"}
            width={1000}
            height={1000}
            alt="xx"
          />
        </div>
        </ComponentAppear>
      </div>

      {/* <ImgCarusel></ImgCarusel> */}
    </div>
  );
};

export default MalowniaWorks;
