"use client";

import Image from "next/image";
import { projectItems } from "./projects/project";
import Link from "next/link";
import ProjectDescription from "@/app/uiEffects/ProjectDescription";

function Portfolio() {
  return (
    <section className="h-screen">
      <div className="container flex flex-col">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center text-white lg:my-6 my-2">
          My Portfolio
        </div>
        {/* Apply flex-col for small screens and grid for larger screens */}
        <div className="flex flex-col sm:grid sm:grid-rows-6 sm:grid-cols-6 h-[80vh] w-full  p-4 gap-4">
          <div className="item-1 row-start-1 row-end-3 col-start-1 col-end-3 bg-accent   hover:row-end-6 hover:col-end-6 hover:z-50 transition-[grid-template-rows,grid-template-columns] duration-2000 ease-in-out rounded-md overflow-hidden">
            <div>
              {projectItems.map((detail) => {
                return (
                  <div key={detail.id} className="relative  project_style">
                    {detail.id == 1 ? (
                      <Link href="./google.com" target="_blank" className="">
                        <Image
                          src={detail.image.src}
                          alt={detail.name}
                          width={detail.image.width}
                          height={detail.image.height}
                          objectFit="cover"
                          className=" opacity-90 -z-10 rounded-md "
                        />
                        <div className="absolute top-[40%] left-0 text-accent bg-white w-full  project_style_title">
                          <h1 className="text-center hover:text-2xl">
                            {detail.name}
                          </h1>
                        </div>
                        <div className="absolute w-full h-full bg-black top-[0%] left-0  opacity-0  project_style_description">
                          <ProjectDescription
                            description={detail.description}
                            name={detail.name}
                          />
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row-start-1 overflow-hidden row-end-3 col-start-3 col-end-6 bg-gray-600 hover:row-end-6 hover:col-start-6 hover:col-end-1 hover:z-50 rounded-md">
            <div>
              {projectItems.map((detail) => {
                return (
                  <div key={detail.id} className="relative  project_style">
                    {detail.id == 2 ? (
                      <Link href="./google.com" target="_blank" className="">
                        <Image
                          src={detail.image.src}
                          alt={detail.name}
                          width={detail.image.width}
                          height={detail.image.height}
                          objectFit="cover"
                          className=" opacity-90 -z-10 rounded-md "
                        />
                        <div className="absolute top-[40%] left-0 text-accent bg-white w-full  project_style_title">
                          <h1 className="text-center hover:text-2xl">
                            {detail.name}
                          </h1>
                        </div>
                        <div className="absolute w-full h-full bg-black top-[0%] left-0  opacity-0  project_style_description">
                          <ProjectDescription
                            description={detail.description}
                            name={detail.name}
                          />
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden row-start-1 row-end-6 col-start-6 col-end-7 bg-cyan-600 hover:col-start-7 hover:col-end-2 hover:z-50 rounded-md">
            <div>
              {projectItems.map((detail) => {
                return (
                  <div key={detail.id} className="relative  project_style">
                    {detail.id == 3 ? (
                      <Link href="./google.com" target="_blank" className="">
                        <Image
                          src={detail.image.src}
                          alt={detail.name}
                          width={detail.image.width}
                          height={1000}
                          objectFit="cover"
                          className=" opacity-90 -z-10 rounded-md h-full"
                        />
                        <div className="absolute top-[40%] left-0 text-accent bg-white w-full project_style_title">
                          <h1 className="text-center hover:text-2xl">
                            {detail.name}
                          </h1>
                        </div>
                        <div className="absolute w-full h-full bg-black top-[0%] left-0  opacity-0  project_style_description">
                          <ProjectDescription
                            description={detail.description}
                            name={detail.name}
                          />
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden row-start-6  row-end-7 col-start-3 col-end-7 bg-slate-700 hover:row-end-2 hover:col-start-7 hover:row-start-7 hover:col-end-2 hover:z-50 rounded-md">
            <div>
              {projectItems.map((detail) => {
                return (
                  <div key={detail.id} className="relative  project_style">
                    {detail.id == 4 ? (
                      <Link href="./google.com" target="_blank" className="">
                        <Image
                          src={detail.image.src}
                          alt={detail.name}
                          width={detail.image.width}
                          height={detail.image.height}
                          objectFit="contain"
                          className=" opacity-90 -z-10 rounded-md "
                        />
                        <div className="absolute top-[40%] left-0 text-accent bg-white w-full  project_style_title">
                          <h1 className="text-center hover:text-2xl">
                            {detail.name}
                          </h1>
                        </div>
                        <div className="absolute w-full h-full bg-black top-[0%] left-0  opacity-0  project_style_description">
                          <ProjectDescription
                            description={detail.description}
                            name={detail.name}
                          />
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden row-start-3 row-end-6 col-start-2 col-end-5 bg-green-700 hover:row-start-6 hover:row-end-1 hover:col-end-7 hover:z-50 rounded-md">
            <div>
              {projectItems.map((detail) => {
                return (
                  <div key={detail.id} className="relative  project_style">
                    {detail.id == 5 ? (
                      <Link href="./google.com" target="_blank" className="">
                        <Image
                          src={detail.image.src}
                          alt={detail.name}
                          width={detail.image.width}
                          height={detail.image.height}
                          objectFit="contain"
                          className=" opacity-90 -z-10 rounded-md "
                        />
                        <div className="absolute top-[40%] left-0 text-accent bg-white w-full project_style_title">
                          <h1 className="text-center hover:text-2xl">
                            {detail.name}
                          </h1>
                        </div>
                        <div className="absolute w-full h-full bg-black top-[0%] left-0  opacity-0  project_style_description">
                          <ProjectDescription
                            description={detail.description}
                            name={detail.name}
                          />
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden row-start-3 row-end-6 col-start-5 col-end-6 bg-orange-600 hover:row-start-6 hover:row-end-1 hover:col-start-6 hover:col-end-1 hover:z-50 rounded-md">
            <div>
              {projectItems.map((detail) => {
                return (
                  <div key={detail.id} className="relative  project_style">
                    {detail.id == 6 ? (
                      <Link href="./google.com" target="_blank" className="">
                        <Image
                          src={detail.image.src}
                          alt={detail.name}
                          width={detail.image.width}
                          height={detail.image.height}
                          objectFit="contain"
                          className=" opacity-90 -z-10 rounded-md "
                        />
                        <div className="absolute top-[40%] left-0 text-accent bg-white w-full  project_style_title">
                          <h1 className="text-center hover:text-2xl">
                            {detail.name}
                          </h1>
                        </div>
                        <div className="absolute w-full h-full bg-black top-[0%] left-0  opacity-0  project_style_description">
                          <ProjectDescription
                            description={detail.description}
                            name={detail.name}
                          />
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden row-start-3 row-end-6 col-start-1 col-end-2 bg-zinc-600 hover:row-start-6 hover:row-end-1 hover:col-end-6 hover:z-50 rounded-md">
            <div>
              {projectItems.map((detail) => {
                return (
                  <div key={detail.id} className="relative  project_style">
                    {detail.id == 7 ? (
                      <Link href="./google.com" target="_blank" className="">
                        <Image
                          src={detail.image.src}
                          alt={detail.name}
                          width={detail.image.width}
                          height={detail.image.height}
                          objectFit="contain"
                          className=" opacity-90 -z-10 rounded-md "
                        />
                        <div className="absolute top-[40%] left-0 text-accent bg-white w-full  project_style_title">
                          <h1 className="text-center hover:text-2xl">
                            {detail.name}
                          </h1>
                        </div>
                        <div className="absolute w-full h-full bg-black top-[0%] left-0  opacity-0  project_style_description">
                          <ProjectDescription
                            description={detail.description}
                            name={detail.name}
                          />
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden row-start-6 row-end-7 col-start-1 col-end-3 bg-emerald-700 hover:row-start-7 hover:row-end-2 hover:col-end-6 hover:z-50 rounded-md delay-500">
            <div>
              {projectItems.map((detail) => {
                return (
                  <div key={detail.id} className="relative  project_style">
                    {detail.id == 8 ? (
                      <Link href="./google.com" target="_blank" className="">
                        <Image
                          src={detail.image.src}
                          alt={detail.name}
                          width={detail.image.width}
                          height={detail.image.height}
                          objectFit="contain"
                          className=" opacity-90 -z-10 rounded-md "
                        />
                        <div className="absolute top-[40%] left-0 text-accent bg-white w-full z-50 project_style_title">
                          <h1 className="text-center hover:text-2xl">
                            {detail.name}
                          </h1>
                        </div>
                        <div className="absolute w-full h-full bg-black top-[0%] left-0  opacity-0  project_style_description">
                          <ProjectDescription
                            description={detail.description}
                            name={detail.name}
                          />
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
