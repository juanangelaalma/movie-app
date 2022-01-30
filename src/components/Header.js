import React from "react";
import Banner from "./Banner";
import ContinueWatching from "./ContinueWatching";

const Header = () => {
  return (
    <div className="flex pt-2 flex-wrap">
      <Banner />
      <ContinueWatching />
    </div>
  );
};

export default Header;
