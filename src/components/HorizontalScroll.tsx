"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const photos = [
    "/img/carusel_1.jpeg",
    "/img/carusel_2.jpeg",
    "/img/carusel_3.jpeg",
];

const HorizontalScroll = () => {
    const cards = [
        { id: "#card-1", endTranslateX: -2000, rotate: 45 },
        { id: "#card-2", endTranslateX: -1000, rotate: -30 },
        { id: "#card-3", endTranslateX: -2000, rotate: 45 },
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".wrapper-404",
                start: "top top",
                end: "+=900vh",
                scrub: 1,
                pin: true,
                onUpdate: (self) => {
                    gsap.to(".wrapper-404", {
                        x: `${-350 * self.progress}vw`,
                        duration: 0.5,
                        ease: "power3.out",
                    });
                },
            });

            cards.forEach((card) => {
                ScrollTrigger.create({
                    trigger: card.id,
                    start: "top top",
                    end: "+=1200vh",
                    scrub: 1,
                    onUpdate: (self) => {
                        gsap.to(card.id, {
                            x: `${card.endTranslateX * self.progress}px`,
                            rotate: `${card.rotate * self.progress}deg`,
                            duration: 0.5,
                        });
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, [cards]);

    return (
        <div ref={containerRef}>
            <div className="w-full relative h-[1200vh]">
                <section className="wrapper-404 h-[100vh] w-[400vw]">
                    <h1 className="w-full text-[40vw]">Page Not Found</h1>
                    {photos.map((photo, index) => (
                        <div className="card" key={photo} id={`card-${index + 1}`}>
                            <Image
                                className="w-full h-full object-cover"
                                src={photo}
                                alt={photo}
                                width={1000}
                                height={1000}
                            />
                        </div>
                    ))}
                </section>
                <section className="outro w-full h-[100dvh] bg-black text-white">
                    <h1>OUTRO</h1>
                </section>
            </div>
        </div>
    );
};

export default HorizontalScroll;
