"use client";
import React from "react";
import Btn from "./Btn";
import Option from "./Option";
import gsap from "gsap";
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
      gsap.to(navContainerRef.current, {
        height: "10vh",
        duration: 0.2,
      })
      setisVisable(false);
      setisMenu(false);
    } else {
      setisVisable(true);
    }
    //jesli currentScroll>lastScroll to nav setvisable false
    //jesli currentScroll<lastScroll to nav setVisable true
  }, [currentScrollY]);

  const handleClick = () => {
    setisMenu((prev)=>!prev);
    if(isMenu === false){
      gsap.to(navContainerRef.current, {
        height: "50vh",
        duration: 0.2,
      })

  }else
  gsap.to(navContainerRef.current, {
    height: "10vh",
    duration: 0.2,
  })
  }
  
  return (
    <div
      ref={navContainerRef}
      className={` ${
        isVisable ? "top-4  " : " top-[-10vh] "
      } w-full justify-center transition-all h-fit delay-[200ms] overflow-hidden duration-500 ease-out z-[10000] text-white flex fixed`}
      // className="w-full justify-center absolute  z-[10000] text-white flex"
    >
      <div className={`${isMenu ? "items-start" : "items-center"}  flex transition-all   rounded-full duration-1000 ease-out  justify-between px-4  w-[95vw] py-[15px]`}>
        <div className="font-bold ml-[1vw] h-full py-[1vh]">Malownia</div>
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
        <div className="h-[50vh] w-full justify-center items-end flex flex-col ">
          {["Malownia", "Prowadząca", "Warsztaty", "Kontakt"].map((item, index) => (
            <div key={index} className="flex items-center w- justify-between">
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
