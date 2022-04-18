import React from "react";
import Banner from "./Banner";
import ContinueWatching from "./ContinueWatching";
import Genres from "./Genres";

const Header = () => {
  return (
    <div className="flex pt-2 flex-wrap">
      <Banner />
      <Genres />
    </div>
  );
};

export default Header;
