"use client";
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
interface Props {
    children: React.ReactNode
}
const ComponentAppearSide:React.FC<Props> = ({children}) => {
    const objRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const ctx = gsap.context(()=>{
            ScrollTrigger.create({
                trigger: objRef.current,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
               
                onEnter:()=>{
                    gsap.to(objRef.current, {
                
                        x: 0,
                        delay: 0.2,
                        duration: 0.4,
                        ease: "power2.out",
                    })
                },
                onLeaveBack:()=>{
                    gsap.to(objRef.current, {
                      
                        x: "100vw",
                        duration: 0.4,
                        ease: "power2.out",
                    })
                }
            })
            return () => {
                // Cleanup GSAP context
                ctx.current?.revert();
              };
        })
        
    },[])
  return (
    <div ref={objRef} className='translate-x-[100%]  '>
        {children}
    </div>
  )
}

export default ComponentAppearSide