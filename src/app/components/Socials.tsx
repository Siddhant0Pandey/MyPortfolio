"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Socials() {
  useEffect(() => {
    gsap.fromTo(
      ".socials li",
      {
        scale: 0.8,
        x: -250,
      },
      {
        stagger: 0.3,
        ease: "power2.out",
        scale: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".socials li",
          toggleActions: "restart none restart none",
        },
      }
    );
  }, []);

  function handleMouseEnter() {
    console.log("mouse entered");
  }

  return (
    <div className="mt-10 overflow-x-hidden">
      <ul className="flex items-center gap-2 socials">
        <li>
          <Link
            href={"https://www.facebook.com/sandesh.pandey.77398"}
            onMouseEnter={handleMouseEnter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-4 hover:text-[#1DA1F2]">
              <FontAwesomeIcon icon={faFacebook} fontSize={22} />
            </div>
          </Link>
        </li>
        <li>
          <Link
            href={"https://github.com/Siddhant0Pandey"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-4 hover:text-[#685252]">
              <FontAwesomeIcon icon={faGithub} fontSize={22} />
            </div>
          </Link>
        </li>
        <li>
          <Link
            href={"https://www.facebook.com/sandesh.pandey.77398"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-4 hover:text-[#C13584]">
              <FontAwesomeIcon icon={faInstagram} fontSize={22} />
            </div>
          </Link>
        </li>
        <li>
          <Link
            href={"https://www.linkedin.com/in/siddhant-pandey-a7895b273/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-4 hover:text-[#0077B5]">
              <FontAwesomeIcon icon={faLinkedin} fontSize={22} />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
