import React from "react";
import { Navbar, Header, PopularMovies } from "./components";

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="w-100 container mx-auto flex flex-col-reverse md:flex-row pt-24 pb-0 px-0">
        <div className="w-100 md:basis-1/3 m-0 pb-4 px-6 md:px-0">
          <PopularMovies />
        </div>
        <div className="w-100 md:basis-2/3 m-0 pb-4 px-6 md:px-0">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default App;
