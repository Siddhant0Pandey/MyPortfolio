"use client";

import Image from "next/image";
import { projectItems } from "./projects/project";

function Portfolio() {
  return (
    <section className="h-screen">
      <div className="container flex flex-col">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center text-white lg:my-6 my-2">
          My Portfolio
        </div>
        {/* Apply flex-col for small screens and grid for larger screens */}
        <div className="flex flex-col sm:grid sm:grid-rows-6 sm:grid-cols-6 h-[80vh] w-full border border-white p-4 gap-4">
          <div className="item-1 row-start-1 row-end-3 col-start-1 col-end-3 bg-red-600 hover:p-6 hover:row-end-6 hover:col-end-6 hover:z-50 transition-[grid-template-rows,grid-template-columns] duration-2000 ease-in-out rounded-md">
            <div>
              {projectItems.map((detail) => {
                return (
                  <div key={detail.id}>
                    {detail.id == 1 ? (
                      <div className="flex flex-col items-center p-2">
                        {" "}
                        <Image src={detail.image} alt={detail.name} />
                        <h1>{detail.name}</h1>
                        <p>{detail.description}</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row-start-1 row-end-3 col-start-3 col-end-6 bg-gray-600 hover:row-end-6 hover:col-start-6 hover:col-end-1 hover:z-50 rounded-md">
            2
          </div>
          <div className="row-start-1 row-end-6 col-start-6 col-end-7 bg-cyan-600 hover:col-start-7 hover:col-end-2 hover:z-50 rounded-md">
            3
          </div>
          <div className="row-start-6 row-end-7 col-start-3 col-end-7 bg-slate-700 hover:row-end-2 hover:col-start-7 hover:row-start-7 hover:col-end-2 hover:z-50 rounded-md">
            4
          </div>
          <div className="row-start-3 row-end-6 col-start-2 col-end-5 bg-green-700 hover:row-start-6 hover:row-end-1 hover:col-end-7 hover:z-50 rounded-md">
            5
          </div>
          <div className="row-start-3 row-end-6 col-start-5 col-end-6 bg-orange-600 hover:row-start-6 hover:row-end-1 hover:col-start-6 hover:col-end-1 hover:z-50 rounded-md">
            6
          </div>
          <div className="row-start-3 row-end-6 col-start-1 col-end-2 bg-zinc-600 hover:row-start-6 hover:row-end-1 hover:col-end-6 hover:z-50 rounded-md">
            7
          </div>
          <div className="row-start-6 row-end-7 col-start-1 col-end-3 bg-emerald-700 hover:row-start-7 hover:row-end-2 hover:col-end-6 hover:z-50 rounded-md delay-500">
            8
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
