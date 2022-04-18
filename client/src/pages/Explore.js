import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopularMovies } from "../actions/popularMovies";
import { FormSearch } from "../components";
import CardMovie from "../components/CardMovie";
import getPopularMovies from "../services/getPopularMovies";
import searchMovies from "../services/searchMovies";
import { isEmptyObject } from "../utils/isEmptyObject";
import monthNumberToString from "../utils/monthNumberToString";

const Explore = () => {
  const popularMovies = useSelector((state) => state.popularMovies);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const setPopular = (movies) => {
    dispatch(setPopularMovies(movies));
  };

  useEffect(() => {
    setLoading(true);
    searchMovies(searchInput, setResults, setLoading);
  }, [searchInput]);

  useEffect(() => {
    if (isEmptyObject(popularMovies)) {
      getPopularMovies(setPopular);
    }
  }, []);

  return (
    <div className="bg-black flex flex-wrap justify-center w-full pt-24 pb-4 h-100">
      <FormSearch searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className={`container${searchInput ? " hidden" : ""}`}>
        <h1 className="text-lg text-white block px-5">Popular Movies</h1>
        <div className="flex flex-wrap md:flex-nowrap">
          {!isEmptyObject(popularMovies) &&
            popularMovies.map((movie) => (
              <div key={movie.id} className="w-1/2 px-5 py-2 md:py-5">
                <CardMovie
                  poster={movie.image_url}
                  rating={movie.rating}
                  title={movie.title}
                  dateRelease={movie.release}
                />
              </div>
            ))}
        </div>
      </div>
      <div className={`container${searchInput ? "" : " hidden"}`}>
        <h1 className="text-lg text-white block px-5">Results</h1>
        {loading ? (
          <div className="container mt-12 flex w-full justify-center items-center">
            <div className="text-white">Loading...</div>
          </div>
        ) : results && results.length > 0 ? (
          <div className="flex flex-wrap">
            {results.map((result) => (
              <div className="w-1/2 px-5 py-2 md:py-5 md:w-1/4">
                <CardMovie
                  key={result.id}
                  poster={result.primaryImage?.url}
                  rating="9.0"
                  title={result.titleText.text}
                  dateRelease={`${monthNumberToString(result.releaseDate?.month)} ${result.releaseDate?.year || ""}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="container mt-12 flex w-full justify-center items-center">
            <div className="text-white">Empty found</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
