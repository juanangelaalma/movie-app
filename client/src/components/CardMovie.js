import React from "react";

const CardMovie = ({ poster, rating, title, dateRelease }) => {
  return (
    <div className="rounded-[15px] relative overflow-hidden h-full w-full md:mr-6 cursor-pointer">
        <img
          src={poster}
          className="h-full w-full object-cover object-center"
          alt=""
        />
        <div className="flex absolute w-full bottom-0 left-0 bg-glass h-14 md:h-11 lg:h-16">
          <div className="w-5/12 lg:w-4/12 flex items-center justify-center">
            <span className="py-1 px-1 border border-gold flex space-x-1 items-center">
              <svg
                width="0.8rem"
                height="0.8rem"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 0L5.51031 3.10942H8.77975L6.13472 5.03115L7.14503 8.14058L4.5 6.21885L1.85497 8.14058L2.86528 5.03115L0.220246 3.10942H3.48969L4.5 0Z"
                  fill="#FFD700"
                />
              </svg>
              <span className="text-white text-xxs">{rating}</span>
            </span>
          </div>
          <div className="w-7/12 md:text-xxs lg:w-8/12 flex flex-col justify-center">
            <h1 className="text-xs md:text-xxs lg:text-sm text-white overflow-hidden mr-2 whitespace-nowrap text-ellipsis">
              {title}
            </h1>
            <p className="text-xs md:text-xxs lg:text-md font-light text-white">
              {dateRelease}
            </p>
          </div>
        </div>
      </div>
  );
};

export default CardMovie;
