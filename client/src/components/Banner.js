import React, { createRef, useState, useMemo } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import getBanners from "../services/getBanners";
import { useEffect } from "react";


const Banner = () => {
  const [banners, setBanners] = useState([])

  const getData = () => {
    getBanners(setBanners)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="w-full h-40 md:h-60 bg-orange-600 overflow-hidden rounded-xl relative">
      <Carousel className="h-40 md:h-60" autoPlay={true} showThumbs={false} showStatus={false}>
        { banners.map((item) => (
          <div className="carousel w-ful h-40 md:h-60 relative">
            <img src={item.banner} className='w-full h-full transition-all object-cover object-center' alt="Banner"  />
            <a href={item.trailer} className="px-4 py-2 absolute bottom-5 right-5 rounded-lg bg-orange hover:bg-orange-hover text-white font-bold">Watch now</a>
          </div>
        )) }
      </Carousel>
    </div>
  );
};

export default Banner;
