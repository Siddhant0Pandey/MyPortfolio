"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faListCheck,
  faGear,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
// import { useState } from "react";
//

//
function NavBarSection() {
  //   const [linkDetail, setLinkDetail] = useState(true);
  function handleMouseEnter() {
    // setLinkDetail(!linkDetail);
    console.log("mouse entered");
  }
  return (
    <nav className="fixed right-2 top-[20%] ">
      <div className="flex flex-col items-center gap-7 ">
        <Link href={"/"} onMouseEnter={handleMouseEnter}>
          <div className="flex flex-row-reverse items-center link_detail">
            <div className=" p-4 bg-accent rounded-full">
              <FontAwesomeIcon icon={faHouse} fontSize={22} color="#ffffff" />
            </div>
          </div>
        </Link>
        <Link href={"/home"}>
          <div className=" p-4 ">
            <FontAwesomeIcon icon={faUser} fontSize={22} />
          </div>
        </Link>
        <Link href={"/"}>
          <div className=" p-4 ">
            <FontAwesomeIcon icon={faListCheck} fontSize={22} />
          </div>
        </Link>
        <Link href={"/"}>
          <div className=" p-4 ">
            <FontAwesomeIcon icon={faGear} fontSize={22} />
          </div>
        </Link>
        <Link href={"/"}>
          <div className=" p-4  ">
            <FontAwesomeIcon icon={faMessage} fontSize={22} />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBarSection;
