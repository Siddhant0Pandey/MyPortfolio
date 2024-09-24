"use client";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { ReactNode, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BubbleEffect from "../uiEffects/BubbleEffect";
import { useGSAP } from "@gsap/react";

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
    <div
      className="draggable-icon flex flex-col items-center "
      style={{
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
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlexIcons: React.FC<{ icons: any[] }> = ({ icons }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-16 sm:gap-[16rem] p-2 pt-12 ">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center draggable-icon  "
        >
          {icon.component}
          <span className="mt-2">{icon.name}</span>
        </div>
      ))}
    </div>
  );
};

function SkillPage() {
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
  }, []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 680;
  const isTablet = windowWidth > 680 && windowWidth <= 756;

  const icons = [
    {
      component: <FaReact fontSize={isMobile ? 60 : isTablet ? 80 : 99} />,
      name: "React",
      initialX: isMobile ? 20 : isTablet ? 80 : 100,
      initialY: isMobile ? 20 : isTablet ? 60 : 100,
      delay: 0,
    },
    {
      component: <FaHtml5 fontSize={isMobile ? 60 : isTablet ? 80 : 99} />,
      name: "HTML5",
      initialX: isMobile ? 100 : isTablet ? 210 : 380,
      initialY: isMobile ? 160 : isTablet ? 120 : 180,
      delay: 0.2,
    },
    {
      component: <FaCss3 fontSize={isMobile ? 60 : isTablet ? 80 : 99} />,
      name: "CSS3",
      initialX: isMobile ? 80 : isTablet ? 130 : 260,
      initialY: isMobile ? 80 : isTablet ? 280 : 350,
      delay: 0.5,
    },
    {
      component: <FaJs fontSize={isMobile ? 60 : isTablet ? 80 : 99} />,
      name: "JavaScript",
      initialX: isMobile ? 50 : isTablet ? 280 : 670,
      initialY: isMobile ? 220 : isTablet ? 260 : 110,
      delay: 0.3,
    },
    {
      component: <RiNextjsFill fontSize={isMobile ? 60 : isTablet ? 80 : 99} />,
      name: "Next.js",
      initialX: isMobile ? 70 : isTablet ? 360 : 899,
      initialY: isMobile ? 150 : isTablet ? 170 : 160,
      delay: 0.6,
    },
    {
      component: <SiTypescript fontSize={isMobile ? 60 : isTablet ? 80 : 99} />,
      name: "TypeScript",
      initialX: isMobile ? 60 : isTablet ? 210 : 640,
      initialY: isMobile ? 320 : isTablet ? 420 : 410,
      delay: 0.3,
    },
    {
      component: (
        <RiTailwindCssFill fontSize={isMobile ? 60 : isTablet ? 80 : 99} />
      ),
      name: "TailWindCSS",
      initialX: isMobile ? 90 : isTablet ? 340 : 860,
      initialY: isMobile ? 240 : isTablet ? 380 : 340,
      delay: 0.6,
    },
  ];

  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="container h-full ">
        <div className="overflow-hidden">
          <h1 className="skill_text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center text-white lg:my-6 my-2">
            What <span className="text-accent">Powers</span> my{" "}
            <span className="text-accent">Creation</span>!{" "}
          </h1>
        </div>

        <div className="border border-accent h-[80%] relative overflow-hidden ">
          <p className="opacity-35 absolute text-accent top-48 left-[-3.5rem] blink skill_p">
            Draggable Icons ....
          </p>
          <BubbleEffect />

          {isMobile ? (
            <FlexIcons icons={icons} />
          ) : (
            icons.map((icon, index) => (
              <DraggableIcon
                key={index}
                icon={icon.component}
                initialX={icon.initialX}
                initialY={icon.initialY}
                name={icon.name}
                delay={icon.delay}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SkillPage;
