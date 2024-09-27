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
        <FaReact className="text-4xl sm:text-5xl lg:text-6xl text-accent" />
      ),
      name: "React",
      initialX: "20%",
      initialY: "20%",
      delay: 0,
    },
    {
      component: (
        <FaHtml5 className="text-4xl sm:text-5xl lg:text-6xl text-accent" />
      ),
      name: "HTML5",
      initialX: "40%",
      initialY: "30%",
      delay: 0.2,
    },
    {
      component: (
        <FaCss3 className="text-4xl sm:text-5xl lg:text-6xl text-accent" />
      ),
      name: "CSS3",
      initialX: "85%",
      initialY: "50%",
      delay: 0.4,
    },
    {
      component: (
        <FaJs className="text-4xl sm:text-5xl lg:text-6xl text-accent" />
      ),
      name: "JavaScript",
      initialX: "20%",
      initialY: "60%",
      delay: 0.6,
    },
    {
      component: (
        <RiNextjsFill className="text-4xl sm:text-5xl lg:text-6xl text-accent" />
      ),
      name: "Next.js",
      initialX: "70%",
      initialY: "20%",
      delay: 0.8,
    },
    {
      component: (
        <SiTypescript className="text-4xl sm:text-5xl lg:text-6xl text-accent" />
      ),
      name: "TypeScript",
      initialX: "50%",
      initialY: "70%",
      delay: 1.0,
    },
    {
      component: (
        <RiTailwindCssFill className="text-4xl sm:text-5xl lg:text-6xl text-accent" />
      ),
      name: "TailWindCSS",
      initialX: "70%",
      initialY: "65%",
      delay: 1.2,
    },
  ];

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="min-h-screen w-full py-16">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden mb-8">
          <h1 className="skill_text text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-center text-white">
            What <span className="text-accent">Powers</span> my{" "}
            <span className="text-accent">Creation</span>!
          </h1>
        </div>

        <div className="border border-accent min-h-[60vh] relative overflow-hidden -z-10">
          <p className="opacity-35 absolute text-accent top-48 left-[-3.5rem] blink skill_p hidden md:block">
            My Techstacks ...
          </p>
          <BubbleEffect />

          <div className="grid grid-cols-2 gap-8 p-8 md:hidden">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                {icon.component}
                <span className="mt-2 text-accent text-sm">{icon.name}</span>
              </div>
            ))}
          </div>

          <div className="hidden md:block">
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
    </div>
  );
};

export default SkillPage;
