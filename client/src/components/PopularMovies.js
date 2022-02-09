import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CardMovie from "./CardMovie";

import getPopularMovies from "../services/getPopularMovies";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPopularMovies } from "../actions/popularMovies";
import { isEmptyObject } from "../utils/isEmptyObject";

const PopularMovies = () => {
  const popularMovies = useSelector(state => state.popularMovies)
  const dispatch = useDispatch()

  const setPopular = (movies) => {
    dispatch(setPopularMovies(movies))
  }

  useEffect(() => {
    if(popularMovies.length === 0) {
      getPopularMovies(setPopular)
    }
  }, [])

  return (
    <div className="flex flex-col md:pr-0">
      <div className="flex justify-between w-full items-center pb-4">
        <h1 className="text-white text-lg font-bold">Popular Movies</h1>
        <a className="text-gray-red hover:text-white text-light transition-all md:mr-6" href="#">More movies</a>
      </div>
      <div className="whitespace-nowrap pb-0 md:flex md:overflow-visible md:flex-wrap space-x-2 md:space-x-0 md:whitespace-pre-wrap w-full text-white max-h-25 overflow-x-scroll">
        { !(popularMovies.length === 0) && popularMovies.map((movie) => (
          <div key={movie.id} className="w-40 h-52 md:w-2/4 md:h-40 lg:h-64 md:mb-6 inline-block md:flex md:items-center overflow-hidden">
            <CardMovie poster={movie.image_url} rating={movie.rating} title={movie.title} dateRelease={movie.release} />
          </div>
        )) }
      </div>
    </div>
  );
};

export default PopularMovies;
