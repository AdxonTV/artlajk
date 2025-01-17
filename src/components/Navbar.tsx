import React from "react";
import Btn from "./Btn";
import Option from "./Option";
const Navbar = () => {
  return (
    <div className="w-full justify-center absolute  z-[10000] text-white flex">
      <div className=" flex justify-between w-[95vw] mt-[3vh]">
        <div className="text-git">ARTLAJK</div>
        <div className="nav-elements font-bold">Chojnice</div>
        <div className="nav-elements">
          <Option>Malownia</Option>
          <Option>O nas</Option>
          <Option>Warsztaty</Option>
          <Option>Kontakt</Option>
        </div>
        <div className="md:hidden">MENU</div>
        <div className="nav-elements">
          <Btn id="nav-btn" title="Zapisz się" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
