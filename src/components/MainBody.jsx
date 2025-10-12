import { useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import Star from "./Star";

//react bits

//import { NavLink } from "react-router";
//https://merakiui.com/components/marketing/portfolio
//https://tailkits.com/components/tailwind-background-snippets/
//https://dev.to/laurentyson85/constructing-search-filter-functionality-in-react-dnd

function MainThis() {
  return (
    <div>
      <body>
        {/*className="bg-[#313178]"*/}
        <section>
          {/*className="bg-[#4e4e94] dark:bg-gray-900"*/}
          <div className="container px-6 py-12 mx-auto">
            <Star />

            <h1 className="text-2xl font-semibold text-white lg:text-3xl dark:text-white">
              Portfolio
            </h1>

            <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
              <div className="lg:mx-12">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Table of Content
                </h1>

                <div className="mt-4 space-y-4 lg:mt-8">
                  <a
                    href="#"
                    className="block text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    Web design
                  </a>
                  <a
                    href="#"
                    className="block text-gray-500 dark:text-gray-300 hover:underline"
                  >
                    App design
                  </a>
                  <a
                    href="#"
                    className="block text-gray-500 dark:text-gray-300 hover:underline"
                  >
                    Branding
                  </a>
                  <a
                    href="#"
                    className="block text-gray-500 dark:text-gray-300 hover:underline"
                  >
                    Animation
                  </a>
                </div>
              </div>

              <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                  <div>
                    <img
                      className="object-cover w-full rounded-lg h-96 "
                      src="/favicon.svg"
                      alt=""
                    />
                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                      Best website collections
                    </h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                      Website
                    </p>
                  </div>

                  <div>
                    <img
                      className="object-cover w-full rounded-lg h-96 "
                      src="/favicon.svg"
                      alt=""
                    />
                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                      Block of Ui kit collections
                    </h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                      Ui kit
                    </p>
                  </div>

                  <div>
                    <img
                      className="object-cover w-full rounded-lg h-96 "
                      src="/favicon.svg"
                      alt=""
                    />
                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                      Ton’s of mobile mockup
                    </h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                      Mockups
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}
export default MainThis;
