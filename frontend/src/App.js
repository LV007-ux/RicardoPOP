import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import Trajectory from "./components/Trajectory";
import Discography from "./components/Discography";
import Shows from "./components/Shows";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Biography />
      <Trajectory />
      <Discography />
      <Shows />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}