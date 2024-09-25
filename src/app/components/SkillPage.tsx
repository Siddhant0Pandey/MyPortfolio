"use client";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BubbleEffect from "../uiEffects/BubbleEffect";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface IconProps {
  component: React.ReactNode;
  name: string;
  initialX: string;
  initialY: string;
  delay: number;
}

const SkillPage = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".skill_text",
      { y: 100 },
      {
        scrollTrigger: {
          trigger: ".skill_text",
          toggleActions: "restart none restart pause",
          start: "-300px 70%",
        },
        y: 0,
        duration: 1,
      }
    );
  });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const icons: IconProps[] = [
    {
      component: (
        <FaReact className="text-6xl sm:text-7xl lg:text-8xl text-accent" />
      ),
      name: "React",
      initialX: "20%",
      initialY: "20%",
      delay: 0,
    },
    {
      component: (
        <FaHtml5 className="text-6xl sm:text-7xl lg:text-8xl text-accent" />
      ),
      name: "HTML5",
      initialX: "40%",
      initialY: "30%",
      delay: 0.2,
    },
    {
      component: (
        <FaCss3 className="text-6xl sm:text-7xl lg:text-8xl text-accent" />
      ),
      name: "CSS3",
      initialX: "85%",
      initialY: "50%",
      delay: 0.4,
    },
    {
      component: (
        <FaJs className="text-6xl sm:text-7xl lg:text-8x text-accent" />
      ),
      name: "JavaScript",
      initialX: "20%",
      initialY: "60%",
      delay: 0.6,
    },
    {
      component: (
        <RiNextjsFill className="text-6xl sm:text-7xl lg:text-8xl text-accent" />
      ),
      name: "Next.js",
      initialX: "70%",
      initialY: "20%",
      delay: 0.8,
    },
    {
      component: (
        <SiTypescript className="text-6xl sm:text-7xl lg:text-8xl text-accent" />
      ),
      name: "TypeScript",
      initialX: "50%",
      initialY: "70%",
      delay: 1.0,
    },
    {
      component: (
        <RiTailwindCssFill className="text-6xl sm:text-7xl lg:text-8xl text-accent" />
      ),
      name: "TailWindCSS",
      initialX: "70%",
      initialY: "70%",
      delay: 1.2,
    },
  ];

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="h-[100vh] w-[100vw] pt-16 sm:my-6">
      <div className="container h-full">
        <div className="overflow-hidden">
          <h1 className="skill_text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center text-white lg:my-6 my-2">
            What <span className="text-accent">Powers</span> my{" "}
            <span className="text-accent">Creation</span>!
          </h1>
        </div>

        <div className="border border-accent h-[80%] relative overflow-hidden">
          <p className="opacity-35 absolute text-accent top-48 left-[-3.5rem] blink skill_p">
            Powerful Technologies ...
          </p>
          <BubbleEffect />

          {icons.map((icon, index) => (
            <div
              key={index}
              className="absolute flex flex-col items-center draggable-icon"
              style={{
                left: icon.initialX,
                top: icon.initialY,
                animationDelay: `${icon.delay}s`,
              }}
            >
              {icon.component}
              <span className="mt-2 text-accent">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
