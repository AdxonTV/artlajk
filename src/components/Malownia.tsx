
import MalowniaHeader from "./MalowniaHeader";
import MalowniaWorks from "./MalowniaWorks";
import About from "./About";
import { lazy } from "react";
const HorizontalScroll = lazy(() => import("./HorizontalScroll"))


const Malownia = () => {
 

  return (
    <div className="flex mt-[-7vh]  md:gap-[100px] relative flex-col">
      <MalowniaHeader />
      <MalowniaWorks />
      <HorizontalScroll />
      <About />
   
    </div>
  );
};

export default Malownia;
