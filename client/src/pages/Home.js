import React from "react";
import { Header, PopularMovies, Genres, BestArtists } from "../components";

const Home = () => {
  return (
    <div className="bg-black">
      <div className="w-100 container mx-auto flex flex-col-reverse md:flex-row pt-24 pb-0 px-0">
        <div className="w-100 md:basis-1/3 m-0 pb-4 px-6 md:px-0">
          <PopularMovies />
        </div>
        <div className="w-100 md:basis-2/3 m-0 pb-4 px-6 md:px-0">
          <Header />
        </div>
      </div>
      {/* <div className="w-100 container mx-auto flex flex-col md:flex-row pb-0 px-0">
        <div className="w-100 md:basis-1/3 m-0 pb-4 px-6 md:px-0">
          <Genres />
        </div>
        <div className="w-100 md:basis-2/3 m-0 pb-4 px-6 md:px-0">
          <BestArtists />
        </div>
      </div> */}
    </div>
    
  );
};

export default Home;
