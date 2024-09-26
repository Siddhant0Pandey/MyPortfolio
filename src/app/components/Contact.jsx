import React from "react";
import SocialCards from "../uiEffects/SocialCards";

function Contact() {
  return (
    <section className="bg-background h-[70vh] ">
      <div className="container px-6 py-12 mx-auto flex flex-col">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center text-white lg:my-6 my-2">
            Get in <span className="text-accent">touch</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-12 pt-16 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <span className="inline-block p-3 text-accent rounded-full bg-white dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-accent dark:text-white">
              Email
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Always ready to help.
            </p>
            <p className="mt-2 text-accent dark:text-blue-400">
              pandeysiddhant0922@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="inline-block p-3 text-accent rounded-full bg-white dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-accent dark:text-white">
              Get connected
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Namaste!</p>
            <p className="mt-2 text-accent dark:text-blue-400">
              Kathmandu, Nepal
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="inline-block p-3 text-accent rounded-full bg-white  dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-accent dark:text-white">
              Phone
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">say hello</p>
            <p className="mt-2 text-accent dark:text-blue-400">
              +977 9860801266
            </p>
          </div>
          <div></div>
        </div>
        <div className="self-center mt-6 ">
          <h4 className="text-center p-4">
            My <span className="text-accent">Socials</span>
          </h4>
          <SocialCards />
        </div>
      </div>
    </section>
  );
}

export default Contact;
