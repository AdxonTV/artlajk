import { useEffect } from 'react';
import Lenis from 'lenis'; // Assuming this is the library you're using
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const useLenisScroll = (isLoading: boolean) => {

  useEffect(() => {
    if (isLoading) return;

    // Initialize Lenis
    const lenis = new Lenis();

    interface ScrollEvent {
      scroll: number;
      limit: number;
      velocity: number;
      direction: number;
      progress: number;
    }

    const handleScroll = (e: ScrollEvent) => {
      console.log(e);
    };

    lenis.on('scroll', handleScroll);
    lenis.on('scroll', ScrollTrigger.update);

    // Attach Lenis to GSAP's RAF
    const gsapTick = (time: number) => {
      lenis.raf(time * 850);
    };

    gsap.ticker.add(gsapTick);
    gsap.ticker.lagSmoothing(0);

    // Cleanup on unmount or dependency changes
    return () => {
      gsap.ticker.remove(gsapTick);
      lenis.off('scroll', handleScroll);
      lenis.off('scroll', ScrollTrigger.update);
      lenis.destroy();
    };
  }, [isLoading]); // Re-run the effect when isLoading or isMobile changes
};

export default useLenisScroll;