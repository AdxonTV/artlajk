"use client";
import React from "react";
import Btn from "./Btn";
import Option from "./Option";
import useWindowScroll from "@react-hook/window-scroll";
import { useEffect, useState, useRef } from "react";
const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisable, setisVisable] = useState(true);
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
    } else {
      setisVisable(true);
    }
    //jesli currentScroll>lastScroll to nav setvisable false
    //jesli currentScroll<lastScroll to nav setVisable true
  }, [currentScrollY]);

  return (
    <div
      ref={navContainerRef}
      className={` ${
        isVisable ? "top-4 " : "skew-x-[30deg]  top-[-10vh] "
      } w-full justify-center  transition-all duration-500 ease-out z-[10000] text-white flex fixed`}  
      // className="w-full justify-center absolute  z-[10000] text-white flex"
    >
      <div  className=" flex transition-all duration-1000 ease-out justify-between px-4 items-center w-[95vw] py-[15px]">
        <div className="font-bold ml-[1vw]">Malownia</div>
        <div className="nav-elements opacity-50">By ArtLajk</div>
        <div className="nav-elements">
          <a  href="#malownia">
          <Option >Malownia</Option>
          </a>
          <a href="#onas">
          <Option>O nas</Option>
          </a>
          <a href="#warsztaty">
          <Option>Warsztaty</Option>
          </a>
          <a href="#kontakt">
          <Option>Kontakt</Option>
          </a>
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
