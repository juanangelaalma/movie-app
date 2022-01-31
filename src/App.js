import React from "react";
import { Home } from "./pages";
import { Navbar } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
