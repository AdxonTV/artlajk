"use client";
import React, { useState, useRef, useEffect } from "react";
import Btn from "./Btn";
import Option from "./Option";
import Link from "next/link";

interface NavbarProps {
  className?: string;
  truth?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "", truth }) => {
  const [isShadow, setIsShadow] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const [isColor, setIsColor] = useState("text-white");
  const [isTruth, setIsTruth] = useState(false);

  // Handle scroll event
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setCurrentScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    setIsTruth(truth === "true");
    setLastScrollY(currentScrollY);

    if (currentScrollY === 0) {
      setIsColor("text-white");
      setIsShadow(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else {
      setIsColor("text-black");
      setIsShadow(false);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setIsVisible(lastScrollY > currentScrollY);
  }, [currentScrollY, lastScrollY, truth]);

  return (
    <div
      ref={navContainerRef}
      className={`fixed w-full z-[10000] flex justify-center transition-all duration-500 ease-out 
      ${isVisible ? "top-4" : "top-[-100px]"}`}
    >
      <div className="flex items-center justify-between w-[95vw] px-4 py-3 bg-opacity-70 rounded-full transition-all duration-700 ease-out">
        <div className="font-bold ml-4 text-white bg-violet-300 p-2 rounded-lg skew-x-[-7deg]">
          Malownia
        </div>
        <div className={`font-bold ml-4 p-2 rounded-lg ${className}`}>By Artlajk</div>
        <div className="nav-elements hidden md:flex gap-4">
          <Link href="/">
            <Option shadow={isTruth ? false : isShadow} className={`${isTruth ? className : isColor}`}>
              Malownia
            </Option>
          </Link>
          <Link href="/about">
            <Option shadow={isTruth ? false : isShadow} className={`${isTruth ? className : isColor}`}>
              Prowadząca
            </Option>
          </Link>
          <Link href="/#warsztaty">
            <Option shadow={isTruth ? false : isShadow} className={`${isTruth ? className : isColor}`}>
              Warsztaty
            </Option>
          </Link>
          <Link href="/#kontakt">
            <Option shadow={isTruth ? false : isShadow} className={`${isTruth ? className : isColor}`}>
              Kontakt
            </Option>
          </Link>
        </div>
        <div className="nav-elements hidden md:flex">
          <Btn id="nav-btn" title="Zapisz się" />
        </div>
        <div
          className={`z-[50] md:hidden cursor-pointer ${menuOpen ? "text-black" : ""}`}
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
        <Link href="/#Malownia" className="text-2xl my-2 text-black">
          Malownia
        </Link>
        <Link href="/#Prowadząca" className="text-2xl my-2 text-black">
          Prowadząca
        </Link>
        <Link href="/#warsztaty" className="text-2xl my-2 text-black">
          Warsztaty
        </Link>
        <Link href="/#kontakt" className="text-2xl my-2 mb-[10vh] text-black">
          Kontakt
        </Link>
        <Btn id="nav-btn" title="Zapisz się" />
      </div>
    </div>
  );
};

export default Navbar;
