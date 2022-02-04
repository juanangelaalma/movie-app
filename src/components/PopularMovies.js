import React from "react";
import CardMovie from "./CardMovie";

const PopularMovies = () => {
  return (
    <div className="flex flex-col md:pr-0">
      <div className="flex justify-between w-full items-center pb-4">
        <h1 className="text-white text-lg font-bold">Popular Movies</h1>
        <a className="text-gray-red hover:text-white text-light transition-all md:mr-6" href="#">More movies</a>
      </div>
      <div className="whitespace-nowrap pb-0 md:flex md:overflow-visible md:flex-wrap space-x-2 md:space-x-0 md:whitespace-pre-wrap w-full text-white max-h-25 overflow-x-scroll">
        <div className="w-40 h-52 md:w-2/4 md:h-40 lg:h-64 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <CardMovie poster="https://upload.wikimedia.org/wikipedia/id/5/5c/Who_am_I_movie_poster.jpg" rating="9.0" title="Alading 2019" dateRelease="Dec 2019" />
        </div>
        <div className="w-40 h-52 md:w-2/4 md:h-40 lg:h-64 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <CardMovie poster="https://upload.wikimedia.org/wikipedia/id/1/12/Start-Up_2020.jpg" rating="9.0" title="Alading 2019" dateRelease="Dec 2019" />
        </div>

        <div className="w-40 h-52 md:w-2/4 md:h-40 lg:h-64 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <CardMovie poster="https://upload.wikimedia.org/wikipedia/id/1/13/Jumanji_Welcome_to_the_Jungle_Poster.jpg" rating="9.0" title="Alading 2019" dateRelease="Dec 2019" />
        </div>

        <div className="w-40 h-52 md:w-2/4 md:h-40 lg:h-64 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
          <CardMovie poster="https://cdn1-production-images-kly.akamaized.net/ByfoNPSMTMfPEtHmnQMFhgGP80Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg" rating="9.0" title="Alading 2019" dateRelease="Dec 2019" />
        </div>
        
      </div>
    </div>
  );
};

export default PopularMovies;
