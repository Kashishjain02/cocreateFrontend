import React from "react";
import Navbars from "./components/Navbars";
import "./App.css";
import { Landing } from "./pages/Landing";
import { Mentor } from "./pages/Mentor";
import { About } from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbars />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/mentor" element={<Mentor />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
