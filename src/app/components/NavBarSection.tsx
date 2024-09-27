"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faListCheck,
  faGear,
  faMessage,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function NavBarSection() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    setActiveHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setActiveHash("");
    }
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && activeHash === "";
    }
    return activeHash === href;
  };

  const getLinkStyle = (href: string) => {
    return isActive(href) ? "bg-white" : "bg-accent";
  };

  const getIconColor = (href: string) => {
    return isActive(href) ? "#1cd673" : "#fff";
  };

  const getTooltipStyle = (href: string) => {
    return isActive(href)
      ? "text-accent bg-white border border-accent"
      : "text-white bg-accent border border-white";
  };

  const links = [
    { href: "/", icon: faHouse, tooltip: "Home" },
    { href: "#about", icon: faUser, tooltip: "About" },
    { href: "#skills", icon: faGear, tooltip: "Skills" },
    { href: "#portfolio", icon: faListCheck, tooltip: "Portfolio" },
    { href: "#contact", icon: faMessage, tooltip: "Contact" },
  ];

  // const getActiveTooltip = () => {
  //   const activeLink = links.find((link) => isActive(link.href));
  //   return activeLink ? activeLink.tooltip : "";
  // };

  return (
    <nav className="fixed right-3 top-[20%] ">
      <div className=" flex flex-col items-center gap-7">
        <div
          className="md:hidden text-white absolute bottom-[5rem] right-[84vw] rounded-md z-50 bg-accent  p-2 text-center "
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FontAwesomeIcon
            icon={isSidebarOpen ? faTimes : faBars}
            fontSize={22}
          />
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed top-0 right-0 bg-accent h-full w-1/2 shadow-lg  flex flex-col gap-6 items-start text-left p-4 z-50">
            {/* <div className="text-white text-lg mb-4 ">{getActiveTooltip()}</div> */}
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => {
                  setIsSidebarOpen(false);
                  if (link.href === "/") {
                    setActiveHash("");
                  } else if (link.href.startsWith("#")) {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                      setActiveHash(link.href);
                    }
                  }
                }}
                className={`transition-colors duration-300 z-[99] w-full ${getLinkStyle(
                  link.href
                )} ${getIconColor(link.href)} link_detail z-[99]`}
              >
                <div className="flex items-center gap-2 z-[99]">
                  <div
                    className={`p-4 rounded-lg w-full ${getLinkStyle(
                      link.href
                    )} ${getIconColor(link.href)}`}
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      fontSize={22}
                      color={getIconColor(link.href)}
                    />
                  </div>
                  <div className={`${getIconColor(link.href)} `}>
                    {link.tooltip}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="hidden md:flex flex-col items-center gap-7">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => {
                if (link.href === "/") {
                  setActiveHash("");
                } else if (link.href.startsWith("#")) {
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setActiveHash(link.href);
                  }
                }
              }}
              className={`transition-colors duration-300 rounded-md  ${getLinkStyle(
                link.href
              )} link_detail`}
            >
              <div className={`p-3 icon_round ${getLinkStyle(link.href)}`}>
                <FontAwesomeIcon
                  icon={link.icon}
                  fontSize={22}
                  color={getIconColor(link.href)}
                />
              </div>
              <span className={`tooltip-text ${getTooltipStyle(link.href)}`}>
                {link.tooltip}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBarSection;
