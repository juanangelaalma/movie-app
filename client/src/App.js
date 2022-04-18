import React, { useEffect } from "react";
import { Explore, Home } from "./pages";
import { Navbar } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Try from "./pages/Try";

const App = () => {
  useEffect(() => {
    document.body.classList.add("bg-black")
  })
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/try' element={<Try />} />
      </Routes>
    </Router>
  );
};

export default App;
