import React, { createRef, useState, useMemo } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import getBanners from "../services/getBanners";
import { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";


const Banner = () => {
  const [banners, setBanners] = useState([])
  const [videoOpened, setVideoOpened] = useState("")

  const getData = () => {
    getBanners(setBanners)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleOpenVideoPlayer = (url) => {
    setVideoOpened(url)
  }

  const handleClose = () => {
    setVideoOpened("")
  }

  return (
    <div className="w-full h-40 md:h-60 bg-orange-600 overflow-hidden rounded-xl">
      { videoOpened !== "" && <VideoPlayer url={videoOpened} handleClose={handleClose} /> }
      <Carousel className="h-40 md:h-60" autoPlay={true} showThumbs={false} showStatus={false}>
        { banners.map((item) => (
          <div key={item.id} className="carousel w-ful h-40 md:h-60 relative">
            <img src={item.banner} className='w-full h-full transition-all object-cover object-center' alt="Banner"  />
            <button onClick={() => handleOpenVideoPlayer(item.trailer)} className="px-4 py-2 absolute bottom-5 right-5 rounded-lg bg-orange hover:bg-orange-hover text-white font-bold">Watch now</button>
          </div>
        )) }
      </Carousel>
    </div>
  );
};

export default Banner;
