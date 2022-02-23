import React, { createRef, useState, useMemo } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const banners = [
  "https://i.pinimg.com/originals/f2/73/18/f273186ebd6cf32a8c8cd9ccc796679e.jpg",
  "https://cdn2.geeq.id/media/post/medium/5863-ada-hulkbuster-di-poster-baru-avengers-end-game-begini-penampakannya.jpg",
];

const Banner = () => {

  return (
    <div className="w-full h-40 md:h-60 bg-orange-600 overflow-hidden rounded-xl relative">
      <Carousel className="h-40 md:h-60" autoPlay={true} showThumbs={false} showStatus={false}>
        <div className="carousel w-ful h-40 md:h-60 relative">
          <img src={banners[0]} className='w-full h-full transition-all object-cover object-center' alt="Banner"  />
          <button className="px-4 py-2 absolute bottom-3 right-3 rounded-lg bg-orange hover:bg-orange-hover text-white font-bold">Watch now</button>
        </div>
        <div className="carousel w-full h-40 md:h-60 relative">
          <img src={banners[1]} className='w-full h-full transition-all object-cover object-center' alt="Banner"  />
          <button className="px-4 py-2 absolute bottom-3 right-3 rounded-lg bg-orange hover:bg-orange-hover text-white font-bold">Watch now</button>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
