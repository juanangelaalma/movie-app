import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setGenres } from "../actions/genres";
import getGenres from "../services/getGenres";

const colors = [
  "bg-orange hover:bg-orange-hover",
  "bg-blue-500 hover:bg-blue-700",
  "bg-green-500 hover:bg-green-700",
  "bg-red-500 hover:bg-red-700",
  "bg-gray-600 hover:bg-gray-700"
]

const Genres = () => {
  const genres = useSelector(state => state.genres)
  const dispatch = useDispatch()

  let count = 0
  const colorLength = colors.length

  const setGenresGlobal = (data) => {
    dispatch(setGenres(data))
  }

  useEffect(() => {
    if(genres.length === 0){
      getGenres(setGenresGlobal)
    }
  }, [])

  console.log(genres)

  return (
    <div className="flex w-full flex-wrap">
      <h1 className="text-white text-lg font-bold">Genres</h1>
      <div className="whitespace-nowrap overflow-visible md:whitespace-pre-wrap md:overflow-visible space-x-3 md:space-x-0 md:flex md:flex-wrap w-full pt-4 overflow-x-scroll">
        { !(genres.length === 0) && genres.map((genre, key) => {
          count++
          return (
            <div key={key} className="md:pr-2 inline-block md:pb-2">
              <span className={`${colors[(count-1)%colorLength]} px-2 py-1 rounded-xl inline-block`}>
                <p className="text-white md:text-md font-md">{genre.genre}</p>
              </span>
            </div>
          )
        }) }
      </div>
    </div>
  );
};

export default Genres;
