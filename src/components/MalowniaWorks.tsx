import React from "react";
import Image from "next/image";
import ComponentAppear from "./ComponentAppear";
import Btn from "./Btn";
const MalowniaWorks = () => {
  return (
    <div className="text-black h-fit mb-0 mx-[2vw] md:mb-[-30vh] mt-[20vh]">
      <div className="flex w-full  items-start  justify-between ">
        <ComponentAppear>
          <div className="w-full md:w-[37vw] md:text-[32px] gap-[4vw]  flex-col flex  leading-[120%]   text-left  ">
            <div className="  text-[32px]">
              W Malowni wierzymy, że sztuka jest dla każdego. Niezależnie od
              wieku czy doświadczenia, każdy znajdzie tu przestrzeń do wyrażania
              siebie. Dbamy o to, żeby w studiu panowała przyjacielska, a wręcz
              rodzinna atmosfera, i żeby uczestnicy zajęć – wszyscy bez wyjątku
              – czuli się równi sobie. Nierzadko w naszej pracowni tworzą się
              przyjaźnie, a uczestnicy w różnym wieku wymieniają się uwagami i
              doświadczeniem.
              <br /> <br />
            </div>
            <div className=" text-[20px] leading-[120%] opacity-50 ">
              Oczywiście wszystko to pod okiem wykwalifikowanej i doświadczonej
              instruktorki – pani Elżbiety Jakubowskiej, która z niesamowitą
              wrażliwością, ogromną pasją i z zaangażowaniem rozwija skrzydła
              swoich podopiecznych. Stara się ona, żeby każdy uczestnik zajęć
              otrzymał indywidualne wsparcie dostosowane do swoich potrzeb i
              artystycznych aspiracji.
            </div>
            <Btn  id="x" title="Dołącz do nas"></Btn>
          </div>
        </ComponentAppear>
        <div className="md:right-[5vw] drop-shadow-xl h-fit  md:h-[90vh] rounded-[20px] overflow-hidden  pointer-events-none">
          <Image
            className="opacity-100 z-[10]   object-cover  rounded-[20px]"
            src={"/img/image00031.jpeg"}
            width={1000}
            height={1000}
            alt="xx"
          />
        </div>
      </div>

      {/* <ImgCarusel></ImgCarusel> */}
    </div>
  );
};

export default MalowniaWorks;
