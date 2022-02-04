import React from "react";
import { FormSearch } from "../components";
import CardMovie from "../components/CardMovie";

const Explore = () => {
  return (
    <div className="bg-black flex flex-wrap justify-center w-full pt-24 pb-4 h-100">
      <FormSearch />
      <div className="container">
        <h1 className="text-lg text-white block px-5">Popular Movies</h1>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-1/2 px-5 py-2 md:py-5">  
            <CardMovie poster="https://upload.wikimedia.org/wikipedia/id/5/5c/Who_am_I_movie_poster.jpg" rating="9.0" title="Alading 2019" dateRelease="Dec 2019" />
          </div>
          <div className="w-1/2 px-5 py-2 md:py-5">  
            <CardMovie poster="https://upload.wikimedia.org/wikipedia/id/1/12/Start-Up_2020.jpg" rating="9.0" title="Alading 2019" dateRelease="Dec 2019" />
          </div>
          <div className="w-1/2 px-5 py-2 md:py-5">  
            <CardMovie poster="https://upload.wikimedia.org/wikipedia/id/1/13/Jumanji_Welcome_to_the_Jungle_Poster.jpg" rating="9.0" title="Alading 2019" dateRelease="Dec 2019" />
          </div>
          <div className="w-1/2 px-5 py-2 md:py-5">  
            <CardMovie poster="https://cdn1-production-images-kly.akamaized.net/ByfoNPSMTMfPEtHmnQMFhgGP80Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg" rating="9.0" title="Alading 2019" dateRelease="Dec 2019" />
          </div>
        </div>
      </div>
      <div className="hidden container">
        <h1 className="text-lg text-white block px-5">Results</h1>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-1/2 px-5 py-2 md:py-5">  
            <CardMovie poster="https://upload.wikimedia.org/wikipedia/id/5/5c/Who_am_I_movie_poster.jpg" rating="9.0" title="Alading 2019" dateRelease="Dec 2019" />
          </div>
          <div className="w-1/2 px-5 py-2 md:py-5">  
            <CardMovie poster="https://upload.wikimedia.org/wikipedia/id/1/12/Start-Up_2020.jpg" rating="9.0" title="Alading 2019" dateRelease="Dec 2019" />
          </div>
          <div className="w-1/2 px-5 py-2 md:py-5">  
            <CardMovie poster="https://upload.wikimedia.org/wikipedia/id/1/13/Jumanji_Welcome_to_the_Jungle_Poster.jpg" rating="9.0" title="Alading 2019" dateRelease="Dec 2019" />
          </div>
          <div className="w-1/2 px-5 py-2 md:py-5">  
            <CardMovie poster="https://cdn1-production-images-kly.akamaized.net/ByfoNPSMTMfPEtHmnQMFhgGP80Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3635478/original/025116000_1637133546-253154135_2120128131476179_3401639978712735642_n.jpg" rating="9.0" title="Alading 2019" dateRelease="Dec 2019" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
