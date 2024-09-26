"use client";

import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { projectItems } from "./projects/project";
import Image from "next/image";
import { ProjectItemProps } from "./projects/project";

interface ProjectCardProps {
  project: ProjectItemProps;
  isLargeScreen: boolean;
}

const ProjectCard = ({ project, isLargeScreen }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useGSAP(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { scale: 1.01 },
        {
          scrollTrigger: {
            trigger: cardRef.current,
            toggleActions: "restart none restart pause",
            start: "-300px 70%",
          },
          scale: 1,
          duration: 1,
          yoyo: true,
          ease: "power1.inOut",
          repeat: -1,
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-lg shadow-lg border border-accent p-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={project.image.src}
        alt={project.image.alt || project.name}
        width={project.image.width}
        height={project.image.height}
        className="w-full h-64 object-cover opacity-80"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-background bg-opacity-75 text-white p-2">
        <h3 className="text-xl font-bold text-accent">{project.name}</h3>
      </div>
      {(isHovered || !isLargeScreen) && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center p-4 text-white transition-opacity duration-300">
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="text-sm mb-4">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
          >
            View Project
          </a>
        </div>
      )}
    </div>
  );
};

const Portfolio = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const introTextRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useGSAP(() => {
    if (introTextRef.current) {
      gsap.fromTo(
        introTextRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectItems.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projectItems.length) % projectItems.length
    );
  };

  return (
    <section className="lg:h-screen md:h-screen sm:h-[50vh] bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden text-4xl font-bold tracking-wide text-center text-white mb-12">
          <div ref={introTextRef}>
            My <span className="text-accent">Portfolio</span>
          </div>
        </div>

        {isLargeScreen ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectItems.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isLargeScreen={isLargeScreen}
              />
            ))}
          </div>
        ) : (
          <div className="relative p-4 sm:p-0">
            <ProjectCard
              project={projectItems[currentIndex]}
              isLargeScreen={isLargeScreen}
            />
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-accent bg-opacity-50 text-white p-2 rounded-r"
            >
              &lt;
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-accent bg-opacity-50 text-white p-2 rounded-l"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
