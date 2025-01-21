import Ss from "./Ss";
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
        pin: ".fixclass",
        pinSpacing: false,
      },
    });

    clipAnimation.to(".fixclass", {});
    // gsap.to("#fix2", {
    //   scrollTrigger: {
    //     trigger: "#container-head",
    //     start: "top top",
    //     end: "center 50vh",
    //     scrub: 0.5,

    //   },
    //   opacity: 0,
    // });
    gsap.to(".x", {
      scrollTrigger: {
        trigger: "#container-head",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "-18vw",
    });
  }, [ScrollTrigger]);
  return (
    <div
      id="container-head"
      className=" w-full  flex relative h-[100vh]  md:h-[150vh] justify-center"
    >
      <div className="w-[96vw]  h-full ">
        <div className="text-[13vw] md:mb-[10vh]  mb-[5vh] md:text-[10vw]  leading-[100%]  tracking-normal ">
          <div>Studio Rysunku</div>
          <div className="text-violet-300">i Malarstwa</div>
        </div>
        <div
          id="fix"
          className="text-[20px] md:text-[25px] z-[10] fixclass ml-[1vw] md:w-[30vw]  w-[90vw]"
        >
          Malownia to wyjątkowa pracownia kreatywna, w której od 2019 roku
          wspieramy rozwój artystyczny dzieci, młodzieży i dorosłych od 9. roku
          życia wzwyż.
        </div>
        <div className="top-[120vh]  md:top-[120vh] absolute">
          <Image
            id="fix2"
            className="opacity-100"
            src={"/img/Vector.png"}
            width={300}
            height={300}
            alt="xx"
          ></Image>
        </div>
        <div className="right-[0vw] md:right-[5vw]  h-[90vh] rounded-[20px]  overflow-hidden rotate-3 mt-[0vh] md:mt-[-20vh] absolute ">
        <Image
                  alt="x"
                  width={2000}
                  placeholder="blur"
                  blurDataURL="/img/header-malownia-mobile.png"
                  height={2000}
                  className=" block tracker   md:w-[40vw] md:hidden  w-[80vw]  z-[10]  rounded-[20px]  "
                  src={"/img/header-malownia-mobile.png"}
                />
          <video
            className="x md:w-[40vw] hidden md:block  w-[80vw]  z-[10]  rounded-[20px]  "
            autoPlay
            muted
            loop
            src="/img/malowniafilm.mp4"
          ></video>
           
          
        </div>
      </div>
      <div className="md:top-[-30vh] opacity-25 md:opacity-100 top-[-50vh] z-[-20] absolute   md:right-[5vw] right-[10vw]">

        <Ss></Ss>
      </div>
    </div>
  );
};

export default MalowniaHeader;
