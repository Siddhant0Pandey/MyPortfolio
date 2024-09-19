"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Socials from "./Socials";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const container = useRef<HTMLElement | null>(null);
  const professions = ["Web Developer", "Web Designer", "Frontend Developer"];
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);

  useEffect(() => {
    const cycleProfessions = () => {
      setCurrentProfessionIndex(
        (prevIndex) => (prevIndex + 1) % professions.length
      );
    };

    const intervalId = setInterval(cycleProfessions, 2000);

    return () => clearInterval(intervalId);
  }, [currentProfessionIndex, professions.length]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".point",
        {
          y: -120,
          opacity: 0,
          scrollTrigger: {
            trigger: ".point",
            toggleActions: "restart none reverse pause",
          },
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "bounce",
        }
      );

      gsap.fromTo(
        ".my_name",
        {
          y: 100,
        },
        {
          y: 0,
          duration: 1,
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(".intro", { y: 100 }, { y: 0, ease: "power1.inOut" });

      gsap.fromTo(
        ".profession",
        { y: -100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.inOut",
        }
      );
    },
    {
      scope: container,
    }
  );

  return (
    <section ref={container}>
      <div className="container min-h-screen flex flex-col items-center justify-center font-Poppins px-4 sm:px-6 lg:px-8">
        <div>
          <div className="overflow-hidden">
            <h3 className="text-center text-xl sm:text-2xl md:text-3xl leading-4 sm:leading-6 font-medium intro">
              Hi &#44; I<span className="text-accent"> &apos;</span> am
            </h3>
          </div>
          <div className="font-bold overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex items-center justify-center gap-1 pt-4 uppercase my_name">
              <span>S</span>
              <span className="flex flex-col items-center justify-end gap-2">
                <div className="point p-1 rounded-full h-4 w-4 sm:h-6 sm:w-6 border-[2px] sm:border-[3px] border-accent bg-transparent"></div>
                <div className="h-3 w-2 sm:h-4 sm:w-3 p-1 sm:p-2 bg-transparent border-[2px] sm:border-[3px] border-accent"></div>
              </span>
              <span>ddhant</span>
            </h1>
          </div>
        </div>
        <div className="font-bold overflow-hidden mt-4">
          <h3 className="profession tracking-[0.1rem] sm:tracking-[0.2rem] md:tracking-[0.4rem] text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 bg-highlight inline-block font-medium font-Poppins">
            <span className="text-accent">a</span>{" "}
            {professions[currentProfessionIndex]}
          </h3>
        </div>
        <Socials />
      </div>
    </section>
  );
}

export default Hero;
