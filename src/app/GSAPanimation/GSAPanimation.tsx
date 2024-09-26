import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const usePortfolioGSAP = (ref: RefObject<HTMLElement>) => {
  useGSAP(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { y: 100 },
        {
          scrollTrigger: {
            trigger: ref.current,
            toggleActions: "restart none restart pause",
            start: "-300px 70%",
          },
          y: 0,
          duration: 1,
        }
      );
      gsap.fromTo(
        ref.current,
        { scale: 1 },

        {
          scrollTrigger: {
            trigger: ref.current,
            toggleActions: "restart none restart pause",
            start: "-300px 70%",
          },

          delay: 1,
          yoyo: true,
        }
      );
    }
  }, [ref]);
};

export const DivPortfolioGSAP = (ref: RefObject<HTMLElement>) => {
  useGSAP(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { scale: 1.01 },

        {
          scrollTrigger: {
            trigger: ref.current,
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
  }, [ref]);
};

export const DivPortfolioGSAP2 = (ref: RefObject<HTMLElement>) => {
  useGSAP(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { scale: 1.02 },

        {
          scrollTrigger: {
            trigger: ref.current,
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
  }, [ref]);
};

export const AboutCard = (ref: RefObject<HTMLElement>) => {
  useGSAP(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { scale: 1.02 },

        {
          scrollTrigger: {
            trigger: ref.current,
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
  }, [ref]);
};
