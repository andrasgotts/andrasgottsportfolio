import { useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import Data from "./Data";

//https://www.youtube.com/watch?v=QAJMRyN9dVk

function Card({ item }) {
  return (
    <>
      <div className="grid grid-cols-3 grid-flow-row gap-4">
        {item.map((val) => (
          <div
            key={val.id}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="size-32 rounded-t-lg">
              <img src={val.img} />
            </div>
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {val.title}
            </div>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              {val.desc}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Star() {
  const [item, setItems] = useState(Data);
  const skillItems = [...new Set(Data.map((val) => val.category))];
  const filterItems = (cat) => {
    const newItems = Data.filter((newval) => newval.category === cat);
    setItems(newItems);
  };
  return (
    <div>
      <div>
        {skillItems.map((val) => (
          <button
            className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            onClick={() => filterItems(val)}
          >
            {val}
          </button>
        ))}
        <button
          className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          onClick={() => setItems(Data)}
        >
          All
        </button>
      </div>
      <div>
        <Card item={item} />
      </div>
    </div>
  );
}

export default Star;
