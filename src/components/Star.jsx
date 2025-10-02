import { useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import Data from "./Data";

//https://www.youtube.com/watch?v=QAJMRyN9dVk

function Card({ item }) {
  return (
    <>
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
        {item.map((val) => (
          <div key={val.id} className="grid grid-cols-4 gap-4">
            <div className="rounded-t-lg">
              <img src={val.img} />
            </div>
            <div className="mb-2 text-xl font-medium leading-tight">
              {val.title}
            </div>
            <div className="mb-4 text-base">{val.desc}</div>
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
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={() => filterItems(val)}
          >
            {val}
          </button>
        ))}
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={() => setItems(Data)}
        >
          All
        </button>
      </div>
      <div className="">
        <Card item={item} />
      </div>
    </div>
  );
}

export default Star;
