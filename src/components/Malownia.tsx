
import MalowniaHeader from "./MalowniaHeader";
import MalowniaWorks from "./MalowniaWorks";

import About from "./About";

const Malownia = () => {
 

  return (
    <div className="flex mt-[-7vh] md:gap-[100px] relative flex-col">
      <MalowniaHeader />
      <MalowniaWorks />

      <About />
   
    </div>
  );
};

export default Malownia;
