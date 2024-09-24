import React from "react";

function ProjectDescription({ description, name }) {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 translate-y-52 opacity-100 project_style_inner ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="20"
        height="20"
        id="browser"
      >
        <g>
          <path
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M44 24A20 20 0 0 1 30.26 43a19.9 19.9 0 0 1-12.52 0 20 20 0 0 1 0-38A19.9 19.9 0 0 1 30.26 5 20 20 0 0 1 44 24zM30.26 43a20 20 0 0 0 0-38M17.74 5h0M17.74 43h0"
          ></path>
          <line
            x1="24"
            x2="24"
            y1="5"
            y2="43"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></line>
          <path
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.78 11a33.13 33.13 0 0 0 5.82 2.28A33.41 33.41 0 0 0 24 14.64a33.47 33.47 0 0 0 9.15-1.28 34.09 34.09 0 0 0 6-2.37M9.11 37.35a33.69 33.69 0 0 1 5.72-2.19 33.74 33.74 0 0 1 24 2.22"
          ></path>
          <line
            x1="5"
            x2="43"
            y1="24"
            y2="24"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></line>
          <path
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M29.49 5l.16.28a36.83 36.83 0 0 1 0 37.26h0M18.25 5l-.16.28a36.79 36.79 0 0 0 .05 37.26h0"
          ></path>
        </g>
      </svg>

      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <a
        href="#"
        className="inline-flex font-medium items-center text-blue-600 hover:underline"
      >
        Visit the site
        <svg
          className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>
  );
}

export default ProjectDescription;
