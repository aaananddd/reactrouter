import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"; 

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className="flex space-x-4 p-4 font-semibold">
          <Link to="/" className="text-2xl">
            Home
          </Link>
          <Link to="/about" className="text-2xl">
            About
          </Link>
          <Link to="/contact" className="text-2xl">
            Contact
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
