"use client";
  import ReusablePage from "@/components/ReusablePage";
  import { useEffect, useRef, useState } from "react";
  import useLenisScroll from "@/components/Lenis";
  import Image from "next/image";
  import Navbar from "@/components/Navbar";
  import { gsap } from "gsap";
  import { usePathname } from "next/navigation";
  import Contact from "@/components/Contact";
  import WorkPresentation from "@/components/WorkPresentation";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import ComponentAppearSide from "@/components/ComponentAppearSide";
  import ComponentAppear from "@/components/ComponentAppear";
import Head from "next/head";


  gsap.registerPlugin(ScrollTrigger);



  export default function About() {
    const container = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Detect mobile viewport
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      }
    }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
      container.current?.scrollTo(0, 0);
    }, [pathname]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      document.body.style.overflow = "hidden";
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);

      const timeout = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "auto";
      }, 1000);

      return () => {
        clearTimeout(timeout);
        document.body.style.overflow = "auto";
      };
    }, []);

    // Pass an extra option to your hook so it can disable smooth scrolling on mobile
    useLenisScroll(isLoading && !isMobile);

    useEffect(() => {
      gsap.to(".imgparalaxa", {});
    });

    useEffect(() => {
      gsap.to(".imgparalaxa", {
        scrollTrigger: {
          trigger: ".imgparalaxa",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: "-10vh",
      });
    }, []);

    return (
      <div
        ref={scrollRef}
        className="overflow-x-hidden relative    w-full text-black h-fit flex flex-col items-center justify-center"
      >
         <Head>
        <title>Elżbieta Jakubowska</title>
        <meta name="description" content="About Elżbieta Jakubowska, designer and artist." />
        <meta name="keywords" content="Elżbieta Jakubowska, design, artist, portfolio" />
        <meta property="og:title" content="Elżbieta Jakubowska" />
        <meta property="og:description" content="Elżbieta Jakubowska's portfolio." />
      </Head>
        <Navbar className="text-black" truth="true" />
        <div className="flex w-[96vw]">
          <div>
            <div className="w-[96vw] h-[95vh] flex justify-center items-center">
              <ReusablePage />
            </div>
          </div>
        </div>
        <div className="w-[96vw] mt-[5vh] rounded-xl h-[100vh] overflow-hidden flex justify-center items-center">
          <div className="w-[96vw] h-[120vh] mt-[10vh]">
            <Image
              src="/img/Praca2.jpg"
              className="object-cover rounded-xl imgparalaxa h-full w-full"
              height={1900}
              alt="dd"
              width={1900}
            />
          </div>
        </div>
        <div className="w-full h-[50vh] flex flex-col justify-center items-center">
          <div className="text-[3vw] md:text-[26px]">
            <ComponentAppear>
              <div className="mb-[2vh] mt-[10vh] ">(o mnie)</div>
            </ComponentAppear>
            <ComponentAppear>
              <div className="md:w-[50vw] w-[90vw]">
              Malarka oraz instruktorka malarstwa i rysunku z wieloletnim doświadczeniem, niesamowitą energią i wrażliwością na drugiego człowieka. Spod jej skrzydeł co roku wyfruwają osoby, które kształcą się na uczelniach artystycznych, a także osiągają sukcesy w świecie sztuki – tak różne, jak tylko różnorodna może być sztuka. W czasie swoich zajęć stara się z pasją i zaangażowaniem wspierać rozwój artystyczny uczestników, służąc profesjonalnymi wskazówkami, a jednocześnie tworząc atmosferę pełną ciepła i inspiracji. 
              </div>
            </ComponentAppear>
          </div>
        </div>
        <ComponentAppearSide>
          <WorkPresentation
            date="2025"
            img="/img/Praca4.jpg"
            title="Castle la Rosce"
            desc="oglądałem to ale chociaż opacity od 0-100 bym dał na switchu paga zobaczyc jak to wygląda"
          />
        </ComponentAppearSide>
        <ComponentAppearSide>
          <WorkPresentation
            date="2005"
            img="/img/Praca1.jpg"
            title="dadada"
            desc="oglądałem to ale chociaż opacity od 0-100 bym dał na switchu paga zobaczyc jak to wygląda"
          />
        </ComponentAppearSide>
        <ComponentAppearSide>
          <WorkPresentation
            date="2011"
            img="/img/Praca2.jpg"
            title="Horses-Adventures"
            desc="oglądałem to ale chociaż opacity od 0-100 bym dał na switchu paga zobaczyc jak to wygląda"
          />
        </ComponentAppearSide>
        <ComponentAppearSide>
          <WorkPresentation
            date="2025"
            img="/img/Praca3.jpg"
            title="dadada"
            desc="oglądałem to ale chociaż opacity od 0-100 bym dał na switchu paga zobaczyc jak to wygląda"
          />
        </ComponentAppearSide>
        <div className="mt-[30vh]" />
        <section id="kontakt">
          <Contact />
        </section>
      </div>
    );
  }
