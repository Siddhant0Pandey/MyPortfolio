import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

function SkillIcon() {
  return (
    <div className="flex flex-wrap text-center  sm:text-2xl  gap-4 sm:gap-4 p-2">
      <div className="hover:scale-105">
        <FaHtml5 fontSize={44} color="#e53170" />
      </div>
      <div className="hover:scale-105">
        <FaCss3 fontSize={44} color="#e53170" />
      </div>
      <div className="hover:scale-105">
        <FaJs fontSize={44} color="#e53170" />
      </div>
      <div className="hover:scale-105">
        <FaReact fontSize={44} color="#e53170" />
      </div>
      <div className="hover:scale-105">
        <RiTailwindCssFill fontSize={44} color="#e53170" />
      </div>
      <div className="hover:scale-105">
        <RiNextjsFill fontSize={44} color="#e53170" />
      </div>
    </div>
  );
}

export default SkillIcon;
