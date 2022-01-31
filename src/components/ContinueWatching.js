import React from "react";

const ContinueWatching = () => {
  return (
    <div className="flex w-full pt-5 flex-wrap">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-white text-lg">Continue Watching</h1>
        <a
          className="text-gray-red hover:text-white text-light transition-all"
          href="#"
        >
          More movies
        </a>
      </div>
      <div className="flex w-full flex-wrap pt-4 space-y-4 md:space-y-0 md:space-x-6 md:flex-nowrap">
        <div className="w-full md:w-1/2">
          <div className="flex w-full relative h-48 overflow-hidden rounded-[15px] md:h-64">
            <img className="w-full h-auto object-cover object-center" src="https://cdn2.geeq.id/media/post/medium/5863-ada-hulkbuster-di-poster-baru-avengers-end-game-begini-penampakannya.jpg" alt="" />
            <div className="flex flex-nowrap flex-row px-7 absolute w-full bottom-0 left-0 items-center bg-glass h-14 md:h-11 lg:h-16">
              <div className="bg-red-500 absolute top-0 left-0" style={{ height: '3px', width: '40%' }}></div>
              <div className="w-1/9">
                <div className="flex-1 w-8 md:w-6 lg:w-10 h-8 md:h-6 lg:h-10 flex items-center justify-center rounded-full bg-gray-400">
                  <svg width="1.3rem" height="1.3rem" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8.5L4.25 15.8612L4.25 1.13878L17 8.5Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="flex w-4/5 flex-col px-2">
                <h1 className="text-xs md:text-xxs lg:text-lg text-white">Aladin 2019</h1>
                <p className="text-xs md:text-xxs lg:text-md font-light text-white">Dec 2019</p>
              </div>
              <div className="flex w-4/5 justify-end">
                <span className="bg-orange px-2 py-1 rounded-xl">
                  <p className="text-white md:text-xxs">02:10:05</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex w-full relative h-48 overflow-hidden rounded-[15px] md:h-64">
            <img className="w-full h-auto object-cover object-center" src="https://i.pinimg.com/originals/f2/73/18/f273186ebd6cf32a8c8cd9ccc796679e.jpg" alt="" />
            <div className="flex flex-nowrap flex-row px-7 absolute w-full bottom-0 left-0 items-center bg-glass h-14 md:h-11 lg:h-16">
              <div className="bg-red-500 absolute top-0 left-0" style={{ height: '3px', width: '70%' }}></div>
              <div className="w-1/9">
                <div className="flex-1 w-8 md:w-6 lg:w-10 h-8 md:h-6 lg:h-10 flex items-center justify-center rounded-full bg-gray-400">
                  <svg width="1.3rem" height="1.3rem" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8.5L4.25 15.8612L4.25 1.13878L17 8.5Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="flex w-4/5 flex-col px-2">
                <h1 className="text-xs md:text-xxs lg:text-lg text-white">Aladin 2019</h1>
                <p className="text-xs md:text-xxs lg:text-md font-light text-white">Dec 2019</p>
              </div>
              <div className="flex w-4/5 justify-end">
                <span className="bg-orange px-2 py-1 rounded-xl">
                  <p className="text-white md:text-xxs">02:10:05</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
