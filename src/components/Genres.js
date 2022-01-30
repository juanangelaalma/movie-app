import React from "react";

const Genres = () => {
  return (
    <div className="flex w-full flex-wrap">
      <h1 className="text-white text-lg font-bold">Genres</h1>
      <div className="whitespace-nowrap overflow-visible md:whitespace-pre-wrap md:overflow-visible space-x-3 md:space-x-0 md:flex md:flex-wrap w-full pt-4 overflow-x-scroll">
        <div className="md:pr-2 inline-block md:pb-2">
          <span className="bg-orange hover:bg-orange-hover px-2 py-1 rounded-xl inline-block">
            <p className="text-white md:text-md font-light">Romance</p>
          </span>
        </div>
        <div className="md:pr-2 inline-block md:pb-2">
          <span className="bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-xl inline-block">
            <p className="text-white md:text-md font-light">Action</p>
          </span>
        </div>
        <div className="md:pr-2 inline-block md:pb-2">
          <span className="bg-green-500 hover:bg-green-700 px-2 py-1 rounded-xl inline-block">
            <p className="text-white md:text-md font-light">Comedy</p>
          </span>
        </div>
        <div className="md:pr-2 inline-block md:pb-2">
          <span className="bg-red-500 hover:bg-red-700 px-2 py-1 rounded-xl inline-block">
            <p className="text-white md:text-md font-light">Drama</p>
          </span>
        </div>
        <div className="md:pr-2 inline-block md:pb-2">
          <span className="bg-gray-600 hover:bg-gray-700 px-2 py-1 rounded-xl inline-block">
            <p className="text-white md:text-md font-light">Horror</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Genres;
