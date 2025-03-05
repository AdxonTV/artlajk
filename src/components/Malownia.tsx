import MalowniaHeader from "./MalowniaHeader";
import MalowniaWorks from "./MalowniaWorks";
import About from "./About";
import { Suspense } from "react";
import { lazy } from "react";
const HorizontalScroll = lazy(() => import("./HorizontalScroll"));

const Malownia = () => {
  return (
    <div className="flex mt-[-7vh]  md:gap-[100px] relative flex-col">
      <MalowniaHeader />
      <MalowniaWorks />
      <Suspense fallback={<div>Loading...</div>}>
        <HorizontalScroll />
      </Suspense>
 
      <About />
    </div>
  );
};

export default Malownia;
