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
    <section className="min-h-screen w-full py-16 bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="overflow-hidden mb-8">
          <h1
            ref={textOnScroll}
            className="text-3xl sm:text-4xl md:text-5xl font-bold  text-center text-white"
          >
            About <span className="text-accent">Me</span>
          </h1>
        </div>

        <p className="text-center text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mb-12">
          Frontend Developer with expertise in React, JavaScript, HTML, and CSS,
          focused on building responsive, user-friendly web applications.
          Passionate about creating clean, efficient code and continuously
          learning new technologies.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center w-full">
          <div
            ref={cardAnimate}
            className="w-full max-w-md lg:w-1/2 transition-transform duration-300 hover:scale-105"
          >
            <SkillStylishEffect />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
              A <span className="text-accent">Frontend</span> Developer
            </h2>

            <div className="text-gray-300 text-lg sm:text-xl space-y-4 mb-8">
              <p>
                <span className="text-accent font-semibold">Name:</span>{" "}
                Siddhant Pandey
              </p>
              <p>
                <span className="text-accent font-semibold">Address:</span>{" "}
                Kathmandu, Nepal
              </p>
              <p>
                <span className="text-accent font-semibold">Phone:</span> +977
                9860801266
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-white mb-4">
                My <span className="text-accent">Tech Stack</span>
              </h3>
              <SkillIcon />
            </div>
          </div>
        </div>

        <blockquote className="text-center text-gray-300 text-xl sm:text-2xl italic mt-16 max-w-3xl">
          &ldquo;Push the boundaries of web design and development, craft the
          digital solutions that leave a lasting impression.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}

export default About;
