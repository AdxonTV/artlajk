import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);
const MalowniaHeader = () => {
  useGSAP(() => {
   const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#container-head",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        pin: "#fix",
        pinSpacing: false,
      },
    });

    clipAnimation.to("#fix", {
    
    });
    gsap.to("#fix2", {
      scrollTrigger: {
        trigger: "#container-head",
        start: "top top",
        end: "center 50vh",
        scrub: 0.5,
      
    
      },
      opacity: 0,
    });
gsap.to(".x",{scrollTrigger:{
  trigger: "#container-head",
  start: "top bottom",
  end: "bottom top",
  scrub: true,


},
y:"-50vh",
})

    
  }, [ScrollTrigger]);
  return (
    <div id="container-head" className=" w-full flex relative bg-slate-400 h-[150vh] justify-center">
      <div className="w-[96vw]  h-full ">
        <div className="text-[8vw]  mb-[10vh]   leading-[100%]  tracking-normal ">
          <div>Studio Rysunku</div>
          <div className="text-violet-300">i Malarstwa</div>
        </div>
        <div id="fix" className="text-[25px] ml-[1vw] w-[30vw] ">
          Malownia to wyjątkowa pracownia kreatywna, w której od 2019 roku
          wspieramy rozwój artystyczny dzieci, młodzieży i dorosłych od 9. roku
          życia wzwyż.
        </div>
        <div  className="top-[80vh] absolute">
        <Image id="fix2" className="opacity-100" src={"/img/Vector.png"} width={300} height={300} alt="xx"></Image>
        </div>
        <div className="right-[5vw] h-[90vh] rounded-[20px]  overflow-hidden rotate-3 mt-[-20vh] absolute " >
          <div>MALOWNIA WYSTAWA STYCZNIA 04 |  2025 </div>
      <video  className="x w-[40vw]  " autoPlay muted loop  src="/img/malowniafilm.mp4"></video>
      </div>
      </div>
     
    </div>
  );
};

export default MalowniaHeader;
