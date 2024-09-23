"use client";

import { useRef } from "react";

// import { projectItems } from "./projects/project";

function Portfolio() {
  const gridItemRef1 = useRef < HTMLDivElement > null;
  const gridItemRef2 = useRef < HTMLDivElement > null;
  const gridItemRef3 = useRef < HTMLDivElement > null;
  const gridItemRef4 = useRef < HTMLDivElement > null;
  const gridItemRef5 = useRef < HTMLDivElement > null;
  const gridItemRef6 = useRef < HTMLDivElement > null;
  const gridItemRef7 = useRef < HTMLDivElement > null;
  const gridItemRef8 = useRef < HTMLDivElement > null;
  return (
    <section className="h-screen">
      <div className="container flex flex-col">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center text-white lg:my-6 my-2">
          My Portfolio
        </div>
        {/* Apply flex-col for small screens and grid for larger screens */}
        <div className="flex flex-col sm:grid sm:grid-rows-6 sm:grid-cols-6 h-[80vh] w-full border border-white p-4 gap-4">
          <div
            className="bg-red-600 rounded-md"
            ref={gridItemRef1}
            style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}
            onMouseEnter={() => {
              setTimeout(() => {
                if (gridItemRef1.current) {
                  gridItemRef1.current.style.gridColumn = "1 / 6";
                  gridItemRef1.current.style.gridRow = "1 / 6";
                  gridItemRef1.current.style.zIndex = "50";
                }
              }, 100);
            }}
            onMouseLeave={() => {
              if (gridItemRef1.current) {
                gridItemRef1.current.style.gridColumn = "1 / 3";
                gridItemRef1.current.style.gridRow = "1 / 3";
              }
            }}
          >
            1
          </div>
          <div
            className="bg-gray-600 rounded-md"
            ref={gridItemRef2}
            style={{ gridColumn: "3 / 6", gridRow: "1 / 3" }}
            onMouseEnter={() => {
              setTimeout(() => {
                if (gridItemRef2.current) {
                  gridItemRef2.current.style.gridColumn = "1 / 6";
                  gridItemRef2.current.style.gridRow = "1 / 3";
                  gridItemRef2.current.style.zIndex = "50";
                }
              }, 100);
            }}
            onMouseLeave={() => {
              if (gridItemRef2.current) {
                gridItemRef2.current.style.gridColumn = "3 / 6";
                gridItemRef2.current.style.gridRow = "1 / 3";
              }
            }}
          >
            2
          </div>
          <div
            className="bg-cyan-600 rounded-md"
            ref={gridItemRef3}
            style={{ gridColumn: "6 / 7", gridRow: "1 / 6" }}
            onMouseEnter={() => {
              setTimeout(() => {
                if (gridItemRef3.current) {
                  gridItemRef3.current.style.gridColumn = "6 / 7";
                  gridItemRef3.current.style.gridRow = "1 / 6";
                  gridItemRef3.current.style.zIndex = "50";
                }
              }, 100);
            }}
            onMouseLeave={() => {
              if (gridItemRef3.current) {
                gridItemRef3.current.style.gridColumn = "6 / 7";
                gridItemRef3.current.style.gridRow = "1 / 6";
              }
            }}
          >
            3
          </div>
          <div
            className="bg-slate-700 rounded-md"
            ref={gridItemRef4}
            style={{ gridColumn: "3 / 7", gridRow: "6 / 7" }}
            onMouseEnter={() => {
              setTimeout(() => {
                if (gridItemRef4.current) {
                  gridItemRef4.current.style.gridColumn = "3 / 7";
                  gridItemRef4.current.style.gridRow = "1 / 6";
                  gridItemRef4.current.style.zIndex = "50";
                }
              }, 100);
            }}
            onMouseLeave={() => {
              if (gridItemRef4.current) {
                gridItemRef4.current.style.gridColumn = "3 / 7";
                gridItemRef4.current.style.gridRow = "6 / 7";
              }
            }}
          >
            4
          </div>
          <div
            className="bg-green-700 rounded-md"
            ref={gridItemRef5}
            style={{ gridColumn: "2 / 5", gridRow: "3 / 6" }}
            onMouseEnter={() => {
              setTimeout(() => {
                if (gridItemRef5.current) {
                  gridItemRef5.current.style.gridColumn = "2 / 5";
                  gridItemRef5.current.style.gridRow = "1 / 6";
                  gridItemRef5.current.style.zIndex = "50";
                }
              }, 100);
            }}
            onMouseLeave={() => {
              if (gridItemRef5.current) {
                gridItemRef5.current.style.gridColumn = "2 / 5";
                gridItemRef5.current.style.gridRow = "3 / 6";
              }
            }}
          >
            5
          </div>
          <div
            className="bg-orange-600 rounded-md"
            ref={gridItemRef6}
            style={{ gridColumn: "5 / 6", gridRow: "3 / 6" }}
            onMouseEnter={() => {
              setTimeout(() => {
                if (gridItemRef6.current) {
                  gridItemRef6.current.style.gridColumn = "5 / 6";
                  gridItemRef6.current.style.gridRow = "1 / 6";
                  gridItemRef6.current.style.zIndex = "50";
                }
              }, 100);
            }}
            onMouseLeave={() => {
              if (gridItemRef6.current) {
                gridItemRef6.current.style.gridColumn = "5 / 6";
                gridItemRef6.current.style.gridRow = "3 / 6";
              }
            }}
          >
            6
          </div>
          <div
            className="bg-zinc-600 rounded-md"
            ref={gridItemRef7}
            style={{ gridColumn: "1 / 2", gridRow: "3 / 6" }}
            onMouseEnter={() => {
              setTimeout(() => {
                if (gridItemRef7.current) {
                  gridItemRef7.current.style.gridColumn = "1 / 2";
                  gridItemRef7.current.style.gridRow = "1 / 6";
                  gridItemRef7.current.style.zIndex = "50";
                }
              }, 100);
            }}
            onMouseLeave={() => {
              if (gridItemRef7.current) {
                gridItemRef7.current.style.gridColumn = "1 / 2";
                gridItemRef7.current.style.gridRow = "3 / 6";
              }
            }}
          >
            7
          </div>
          <div
            className="bg-emerald-700 rounded-md"
            ref={gridItemRef8}
            style={{ gridColumn: "1 / 3", gridRow: "6 / 7" }}
            onMouseEnter={() => {
              setTimeout(() => {
                if (gridItemRef8.current) {
                  gridItemRef8.current.style.gridColumn = "1 / 3";
                  gridItemRef8.current.style.gridRow = "1 / 6";
                  gridItemRef8.current.style.zIndex = "50";
                }
              }, 100);
            }}
            onMouseLeave={() => {
              if (gridItemRef8.current) {
                gridItemRef8.current.style.gridColumn = "1 / 3";
                gridItemRef8.current.style.gridRow = "6 / 7";
              }
            }}
          >
            8
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
