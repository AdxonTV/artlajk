"use client";
import React, { useState, useRef, useEffect } from "react";
import Btn from "./Btn";
import Option from "./Option";

import useWindowScroll from "@react-hook/window-scroll";

interface NavbarProps {
  className?: string;
  truth?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className, truth }) => {
  const [isShadow, setIsShadow] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentScrollY = useWindowScroll();
  const [isColor, setIsColor] = useState("");
  const [isTruth, setIsTruth] = useState(false);

  useEffect(() => {
    if (truth === "true") {
      setIsTruth(true);
    } else {
      setIsTruth(false);
    }
    setLastScrollY(scrollY);

    if (currentScrollY < 100) {
      setIsColor("text-white");
      setIsShadow(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else {
      setIsColor("text-black");
      setIsShadow(false);
      navContainerRef.current?.classList.add("floating-nav");
    }
    if (lastScrollY < currentScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [currentScrollY]);

  return (
    <div
      ref={navContainerRef}
      className={`fixed w-full z-[10000] text-white flex justify-center transition-all duration-500 ease-out 
      ${isVisible ? "top-4" : "top-[-100px]"}`}
    >
      <div className="flex items-center justify-between w-[95vw] px-4 py-3 bg-opacity-70 rounded-full transition-all duration-700 ease-out">
        <div className="font-bold ml-4 text-white bg-violet-300 p-2 rounded-lg skew-x-[-7deg]">
          Malownia
        </div>
        <div className={`${className} font-bold ml-4 p-2 rounded-lg`}>By Artlajk</div>
        <div className="nav-elements hidden md:flex gap-4">
          <a href="/">
            <Option shadow={isTruth ? false : isShadow} className={`${isTruth ? className : isColor}`}>
              Malownia
            </Option>
          </a>
          <a href="/about">
            <Option shadow={isTruth ? false : isShadow} className={`${isTruth ? className : isColor}`}>
              Prowadząca
            </Option>
          </a>
          <a href="/#warsztaty">
            <Option shadow={isTruth ? false : isShadow} className={`${isTruth ? className : isColor}`}>
              Warsztaty
            </Option>
          </a>
          <a href="/#kontakt">
            <Option shadow={isTruth ? false : isShadow} className={`${isTruth ? className : isColor}`}>
              Kontakt
            </Option>
          </a>
        </div>
        <div className="nav-elements hidden md:flex">
          <Btn id="nav-btn" title="Zapisz się" />
        </div>
        <div
          className={`${menuOpen && "text-black"} z-[50] md:hidden cursor-pointer`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center transition-transform duration-500 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button className="absolute top-6 right-6" onClick={() => setMenuOpen(false)}>
          ✖
        </button>
        <a href="/#Malownia" className="text-2xl my-2 text-black" onClick={() => setMenuOpen(false)}>
          Malownia
        </a>
        <a href="/about" className="text-2xl my-2 text-black" onClick={() => setMenuOpen(false)}>
          Prowadząca
        </a>
        <a href="/#warsztaty" className="text-2xl my-2 text-black" onClick={() => setMenuOpen(false)}>
          Warsztaty
        </a>
        <a href="/#kontakt" className="text-2xl my-2 mb-[10vh] text-black" onClick={() => setMenuOpen(false)}>
          Kontakt
        </a>
        <Btn id="nav-btn" title="Zapisz się" />
      </div> 
    </div>
  );
};

export default Navbar;
