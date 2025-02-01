"use client";
import React from "react";
import Btn from "./Btn";
import Option from "./Option";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import useWindowScroll from "@react-hook/window-scroll";
import { ImCross } from "react-icons/im";
import { useEffect, useState, useRef } from "react";
const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisable, setisVisable] = useState(true);
  const [isMenu, setisMenu] = useState(false);
  const currentScrollY = useWindowScroll();
  useEffect(() => {
    setLastScrollY(scrollY);

    if (currentScrollY === 0) {
      navContainerRef.current?.classList.remove("floating-nav");
    } else {
      navContainerRef.current?.classList.add("floating-nav");
    }

    if (lastScrollY < currentScrollY) {
      setisVisable(false);
      setisMenu(false);
    } else {
      setisVisable(true);
    }
    //jesli currentScroll>lastScroll to nav setvisable false
    //jesli currentScroll<lastScroll to nav setVisable true
  }, [currentScrollY]);

  const handleClick = () => {
    setisMenu(!isMenu);
  };
  return (
    <div
      ref={navContainerRef}
      className={` ${
        isVisable ? "top-4  " : "skew-x-[30deg]  top-[-10vh] "
      } w-full justify-center transition-all delay-[200ms] duration-500 ease-out z-[10000] text-white flex fixed`}
      // className="w-full justify-center absolute  z-[10000] text-white flex"
    >
      <div className=" flex transition-all   rounded-full duration-1000 ease-out  justify-between px-4 items-start w-[95vw] py-[15px]">
        <div className="font-bold mt-[2vh] ml-[1vw]">Malownia</div>
        <div className="nav-elements mt-[2vh] opacity-50">By ArtLajk</div>
        <div className="nav-elements">
          <a href="#malownia">
            <Option>Malownia</Option>
          </a>
          <a href="#Prowadząca">
            <Option>Prowadząca</Option>
          </a>
          <a href="#warsztaty">
            <Option>Warsztaty</Option>
          </a>
          <a href="#kontakt">
            <Option>Kontakt</Option>
          </a>
         
        </div>
        {isMenu && (
        <div className="h-[20vh] w-full justify-center items-end flex flex-col ">
          {["Malownia", "Prowadząca", "Warsztaty", "Kontakt"].map((item, index) => (
            <div key={index} className="flex items-center w-[35vw] justify-between">
              <div className="opacity-40">0{index + 1}</div>
              <a href={`#${item}`}>
                <Option>{item}</Option>
              </a>
            </div>
          ))}
        </div>
      )}
        <div className="md:hidden p-4 scale-[130%] cursor-pointer" onClick={handleClick}>
        
        {isMenu ? <ImCross /> : <HiOutlineMenuAlt4 />}
       
        </div>
        <div className="nav-elements">

          <Btn id="nav-btn" title="Zapisz się" />
        </div>
        
     
      </div>
     
    
     
    </div>
  );
};

export default Navbar;
