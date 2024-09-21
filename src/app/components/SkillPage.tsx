"use client";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { ReactNode, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BubbleEffect from "../uiEffects/BubbleEffect";

gsap.registerPlugin(ScrollTrigger);

interface DraggableIconProps {
  icon: ReactNode;
  initialX: number;
  initialY: number;
  name: string;
  delay: number;
}

const DraggableIcon: React.FC<DraggableIconProps> = ({
  icon,
  initialX,
  initialY,
  name,
  delay,
}) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ offsetX: 0, offsetY: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setOffset({
      offsetX: e.clientX - position.x,
      offsetY: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.offsetX,
        y: e.clientY - offset.offsetY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="">
      <div
        className="draggable-icon flex flex-col items-center justify-center "
        style={{
          //   color: "#5fdd9d",
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? "grabbing" : "grab",
          animationDelay: `${delay}s`,
        }}
        onMouseDown={handleMouseDown}
        data-name={name}
      >
        {icon}
        <div
          className="tooltip"
          style={{ display: isDragging ? "none" : "none" }}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

function SkillPage() {
  useEffect(() => {
    gsap.fromTo(
      ".skill_text",
      { y: 100 },
      {
        scrollTrigger: {
          trigger: ".skill_text",
          toggleActions: "play restart play pause",
        },
        y: 0,
      }
    );
  }, []);

  const icons = [
    {
      component: <FaReact fontSize={99} />,
      name: "React",
      initialX: 100,
      initialY: 100,
      delay: 0,
    },
    {
      component: <FaHtml5 fontSize={99} />,
      name: "HTML5",
      initialX: 380,
      initialY: 180,
      delay: 0.2,
    },
    {
      component: <FaCss3 fontSize={99} />,
      name: "CSS3",
      initialX: 260,
      initialY: 350,
      delay: 0.5,
    },
    {
      component: <FaJs fontSize={99} />,
      name: "JavaScript",
      initialX: 670,
      initialY: 110,
      delay: 0.3,
    },
    {
      component: <RiNextjsFill fontSize={99} />,
      name: "Next.js",
      initialX: 899,
      initialY: 160,
      delay: 0.6,
    },
    {
      component: <SiTypescript fontSize={99} />,
      name: "TypeScript",
      initialX: 640,
      initialY: 410,
      delay: 0.3,
    },
    {
      component: <RiTailwindCssFill fontSize={99} />,
      name: "TailWindCSS",
      initialX: 860,
      initialY: 340,
      delay: 0.6,
    },
  ];

  return (
    <div className="h-[100vh] w-[100vw] pt-4">
      <div className="container h-full">
        <div className="overflow-hidden">
          <h1 className="skill_text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center text-white lg:my-6 my-2">
            What <span className="text-accent">Powers</span> my{" "}
            <span className="text-accent">Creation</span>!{" "}
          </h1>
        </div>

        <div className="border border-accent h-[80%] relative overflow-hidden">
          <p className="opacity-35 absolute text-accent top-48 left-[-3.5rem] blink ">
            Draggable Icons ....
          </p>
          <BubbleEffect />
          {icons.map((icon, index) => (
            <DraggableIcon
              key={index}
              icon={icon.component}
              initialX={icon.initialX}
              initialY={icon.initialY}
              name={icon.name}
              delay={icon.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillPage;
