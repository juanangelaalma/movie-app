import React from "react";

const PopularMovies = () => {
  return (
    <div className="flex flex-col md:pr-0">
      <div className="flex justify-between w-full items-center pb-4">
        <h1 className="text-white text-lg font-bold">Popular Movies</h1>
        <a className="text-gray-red hover:text-white text-light transition-all md:mr-6" href="#">More movies</a>
      </div>
      <div className="whitespace-nowrap pb-0 md:flex md:overflow-visible md:flex-wrap space-x-2 md:space-x-0 md:whitespace-pre-wrap w-full text-white max-h-25 overflow-x-scroll">
        <div className="w-40 h-52 md:w-2/4 md:h-40 lg:h-64 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <div className="rounded-xl relative overflow-hidden h-full w-full md:mr-6">
            <img src="https://upload.wikimedia.org/wikipedia/id/5/5c/Who_am_I_movie_poster.jpg" className="h-full w-full object-cover object-center" alt="" />
            <div className="flex absolute w-full bottom-0 left-0 bg-glass h-14 md:h-11 lg:h-16">
              <div className="w-5/12 lg:w-4/12 flex items-center justify-center">
                <span className="py-1 px-1 border border-gold flex space-x-1 items-center">
                  <svg width="0.8rem" height="0.8rem" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 0L5.51031 3.10942H8.77975L6.13472 5.03115L7.14503 8.14058L4.5 6.21885L1.85497 8.14058L2.86528 5.03115L0.220246 3.10942H3.48969L4.5 0Z" fill="#FFD700"/>
                  </svg>
                  <span className="text-white text-xxs">9.0</span>
                </span>
              </div>
              <div className="w-7/12 md:text-xxs lg:w-8/12 flex flex-col justify-center">
                <h1 className="text-xs md:text-xxs lg:text-lg text-white">Aladin 2019</h1>
                <p className="text-xs md:text-xxs lg:text-md font-light text-white">Dec 2019</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-40 h-52 md:w-2/4 md:h-40 lg:h-64 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <div className="rounded-xl relative overflow-hidden h-full w-full md:mr-6">
            <img src="https://upload.wikimedia.org/wikipedia/id/1/12/Start-Up_2020.jpg" className="h-full w-full object-cover object-center" alt="" />
            <div className="flex absolute w-full bottom-0 left-0 bg-glass h-14 md:h-11 lg:h-16">
              <div className="w-5/12 lg:w-4/12 flex items-center justify-center">
                <span className="py-1 px-1 border border-gold flex space-x-1 items-center">
                  <svg width="0.8rem" height="0.8rem" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 0L5.51031 3.10942H8.77975L6.13472 5.03115L7.14503 8.14058L4.5 6.21885L1.85497 8.14058L2.86528 5.03115L0.220246 3.10942H3.48969L4.5 0Z" fill="#FFD700"/>
                  </svg>
                  <span className="text-white text-xxs">9.0</span>
                </span>
              </div>
              <div className="w-7/12 md:text-xxs lg:w-8/12 flex flex-col justify-center">
                <h1 className="text-xs md:text-xxs lg:text-lg text-white">Aladin 2019</h1>
                <p className="text-xs md:text-xxs lg:text-md font-light text-white">Dec 2019</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-40 h-52 md:w-2/4 md:h-40 lg:h-64 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <div className="rounded-xl relative overflow-hidden h-full w-full md:mr-6">
            <img src="https://upload.wikimedia.org/wikipedia/id/1/13/Jumanji_Welcome_to_the_Jungle_Poster.jpg" className="h-full w-full object-cover object-center" alt="" />
            <div className="flex absolute w-full bottom-0 left-0 bg-glass h-14 md:h-11 lg:h-16">
              <div className="w-5/12 lg:w-4/12 flex items-center justify-center">
                <span className="py-1 px-1 border border-gold flex space-x-1 items-center">
                  <svg width="0.8rem" height="0.8rem" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 0L5.51031 3.10942H8.77975L6.13472 5.03115L7.14503 8.14058L4.5 6.21885L1.85497 8.14058L2.86528 5.03115L0.220246 3.10942H3.48969L4.5 0Z" fill="#FFD700"/>
                  </svg>
                  <span className="text-white text-xxs">9.0</span>
                </span>
              </div>
              <div className="w-7/12 md:text-xxs lg:w-8/12 flex flex-col justify-center">
                <h1 className="text-xs md:text-xxs lg:text-lg text-white">Aladin 2019</h1>
                <p className="text-xs md:text-xxs lg:text-md font-light text-white">Dec 2019</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-40 h-52 md:w-2/4 md:h-40 lg:h-64 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <div className="rounded-xl relative overflow-hidden h-full w-full md:mr-6">
            <img src="https://cdn1-production-images-kly.akamaized.net/ByfoNPSMTMfPEtHmnQMFhgGP80Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg" className="h-full w-full object-cover object-center" alt="" />
            <div className="flex absolute w-full bottom-0 left-0 bg-glass h-14 md:h-11 lg:h-16">
              <div className="w-5/12 lg:w-4/12 flex items-center justify-center">
                <span className="py-1 px-1 border border-gold flex space-x-1 items-center">
                  <svg width="0.8rem" height="0.8rem" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 0L5.51031 3.10942H8.77975L6.13472 5.03115L7.14503 8.14058L4.5 6.21885L1.85497 8.14058L2.86528 5.03115L0.220246 3.10942H3.48969L4.5 0Z" fill="#FFD700"/>
                  </svg>
                  <span className="text-white text-xxs">9.0</span>
                </span>
              </div>
              <div className="w-7/12 md:text-xxs lg:w-8/12 flex flex-col justify-center">
                <h1 className="text-xs md:text-xxs lg:text-lg text-white">Aladin 2019</h1>
                <p className="text-xs md:text-xxs lg:text-md font-light text-white">Dec 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
