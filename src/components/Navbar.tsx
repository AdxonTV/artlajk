"use client";
import React, { useState, useRef, useEffect } from "react";
import Btn from "./Btn";
import Option from "./Option";
import useWindowScroll from "@react-hook/window-scroll";

const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentScrollY = useWindowScroll();

  useEffect(() => {
    setLastScrollY(scrollY);

    if (currentScrollY === 0) {
      navContainerRef.current?.classList.remove("floating-nav");
    } else {
      navContainerRef.current?.classList.add("floating-nav");
    }

    setIsVisible(lastScrollY > currentScrollY);
  }, [currentScrollY]);

  return (
    <div
      ref={navContainerRef}
      className={`fixed w-full z-[10000] text-white flex justify-center transition-all duration-500 ease-out 
      ${isVisible ? "top-4" : "top-[-100px]"} `}
    >
      <div className="flex items-center justify-between w-[95vw] px-4 py-3 bg-opacity-70 rounded-full transition-all duration-700 ease-out">
        <div className="font-bold ml-4 text-white bg-violet-300 p-2 rounded-lg">Malownia</div>
        <div className="font-bold ml-4 text-white  p-2 rounded-lg">By Artlajk</div>
        <div className="nav-elements hidden md:flex gap-4">
          <a href="#malownia"><Option>Malownia</Option></a>
          <a href="#Prowadząca"><Option>Prowadząca</Option></a>
          <a href="#warsztaty"><Option>Warsztaty</Option></a>
          <a href="#kontakt"><Option>Kontakt</Option></a>
        </div>
        <div className="nav-elements hidden md:flex">
          <Btn id="nav-btn" title="Zapisz się" />
        </div>
        <div className={`${menuOpen && "text-black"} z-[50] md:hidden cursor-pointer`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white  flex flex-col items-center justify-center transition-transform duration-500 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button className="absolute top-6 right-6 " onClick={() => setMenuOpen(false)}>
          ✖
        </button>
        <a href="#malownia" className="text-2xl my-4 text-black " onClick={() => setMenuOpen(false)}>Malownia</a>
        <a href="#Prowadząca" className="text-2xl my-4 text-black " onClick={() => setMenuOpen(false)}>Prowadząca</a>
        <a href="#warsztaty" className="text-2xl my-4 text-black " onClick={() => setMenuOpen(false)}>Warsztaty</a>
        <a href="#kontakt" className="text-2xl my-4 text-black " onClick={() => setMenuOpen(false)}>Kontakt</a>
        <Btn id="nav-btn" title="Zapisz się" />
      </div>
    </div>
  );
};

export default Navbar;
