"use client";
import React, { useRef } from "react";
import SkillIcon from "../uiEffects/SkillIcon";
import SkillStylishEffect from "../uiEffects/SkillStylishEffect";
import { AboutCard, usePortfolioGSAP } from "../GSAPanimation/GSAPanimation";

function About() {
  const textOnScroll = useRef(null);
  const cardAnimate = useRef(null);
  usePortfolioGSAP(textOnScroll);
  AboutCard(cardAnimate);

  return (
    <section className="h-[100vh] w-[100vw] sm:my-4 my-16">
      <div className="container flex flex-col">
        <div className="overflow-hidden">
          <h1
            ref={textOnScroll}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center text-white lg:my-6 my-2"
          >
            <span className="text-accent">A</span>bout
          </h1>
        </div>

        <h3 className="text-center  text-sm font-light sm:text-base md:text-lg lg:text-xl px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 ">
          Frontend Developer with expertise in React, JavaScript, HTML, and CSS,
          focused on building responsive, user-friendly web applications.
          Passionate about creating clean, efficient code and continuously
          learning new technologies.
        </h3>

        <div className="flex sm:gap-6 gap-10 pt-10 sm:pt-6 items-center justify-center   ">
          <div ref={cardAnimate} className="hover:scale-95">
            <SkillStylishEffect />
          </div>
          <div>
            <div className="flex flex-col ">
              <div className="overflow-hidden ">
                <h2 className="text-large sm:text-2xl md:text-3xl tracking-wide text-center text-white ">
                  A <span className="text-accent">Front</span>end{" "}
                  <span className="text-accent">Dev</span>eloper
                </h2>
              </div>

              {/* <p className="text-center text-white pb-6">
                {" "}
                Experienced in creating dynamic, responsive web applications
                with a passion for clean code and problem-solving.
              </p> */}

              <div className="text-center p-3 text-xl flex flex-col gap-4 ">
                <h3>
                  <span className="text-accent">Name</span> : Siddhant Pandey
                </h3>
                <h3>
                  <span className="text-accent">Address</span> : Kathmandu,
                  Nepal
                </h3>
                <h3>
                  <span className="text-accent">Phone no</span> : +977
                  9860801266
                </h3>
              </div>
            </div>
            <div className="text-center flex flex-col items-center">
              <h5 className="py-4 ">
                about my <span className="text-accent">techstack</span>{" "}
              </h5>
              <SkillIcon />
            </div>
          </div>
        </div>

        <h3 className="text-center  text-sm font-light sm:text-base md:text-lg lg:text-xl px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 ">
          &quot; Push the boundaries of web design and development, craft the
          digital solutions that leave a lasting impression &quot;
        </h3>
      </div>
    </section>
  );
}

export default About;
