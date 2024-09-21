import React from "react";
import "./BubbleEffect.css";

const BubbleEffect = () => {
  return (
    <div className="wrapper">
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index}>
          <span className="dot"></span>
        </div>
      ))}
    </div>
  );
};

export default BubbleEffect;
