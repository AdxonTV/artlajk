import Image from "next/image";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import ComponentAppear from "@/components/ComponentAppear";
import SsAuto from "@/components/SsAuto";
import StoryTilt from "@/components/StoryTilt";
gsap.registerPlugin(ScrollTrigger);

const ReusablePage = () => {
  return (
    <div className=" overflow-hidden h-[100vh]  ">
      <div className="absolute  top-[-10vh] left-[10vw] w-full h-full">
        <SsAuto
          path="M6.08558 -153.12C6.08558 -153.12 1014.15 802.335 1567.36 638.536C1849.77 554.919 1520.04 245.404 1411.72 499.512L1100.5 1273.5"
          value={0.8}
        ></SsAuto>
      </div>
      <div className="absolute top-[-10vh] left-[10vw]  opacity-20  w-full h-full">
        <SsAuto
          path="M6.08558 -153.12C6.08558 -153.12 1014.15 802.335 1567.36 638.536C1849.77 554.919 1520.04 245.404 1411.72 499.512L1100.5 1273.5"
          value={0.6}
        ></SsAuto>
      </div>{" "}
      <ComponentAppear>
        <div className="w-[96vw] mb-[10vh] flex items-center  h-[100vh] ">
          <div className="w-full absolute h-full"></div>
          <div className=" w-full  h-full  flex items-center justify-center">
            <div className="flex flex-col items-end md:items-center  z-[100] h-fit md:text-[7vw] text-[15vw]  mb-[10vh]   leading-[85%] tracking-tight">
              <div className="text-[20px] tracking-tight  absolute leading-none">
                Właścicielka <br />
                Artlajk
              </div>
              <div>
                <div className="flex   h-[30vh]   w-[40vw] relative items-end">
                  <div >Elżbieta</div>
                  <div className="md:w-[15vw]  w-[40vw]  h-[35vw] rounded-xl md:h-[15vw] top-0 b-[10vh] absolute right-0 bottom-[-100%] overflow-hidden">
                    <StoryTilt>
                      <Image
                        src="/img/Praca2.jpg"
                        className="object-fill rounded-xl  z-[50] scale-[1.6]"
                        height={1000}
                        alt="dd"
                        width={1000}
                      ></Image>
                    </StoryTilt>
                  </div>
                </div>
                <div>
                  <span className="petit ml-[-1vw] text-[15vw] md:text-[6.8vw] tracking-[-0.15em]">
                    J
                  </span>
                  <span className="italic">akubowska</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-[2vh] text-[3vw] justify-between leading-[110%] top  w-[100vw] md:text-[20px] flex tracking-[-1px] ">
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
              <div>Akademia Sztuk Pięknych, Gdańsxk</div>
            </div>
          </div>
          \
        </div>
      </ComponentAppear>
    </div>
  );
};

export default ReusablePage;
