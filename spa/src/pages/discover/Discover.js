import React from "react";
import Navbar from "../../components/Header/Navbar";
import Hero from "./components/Hero";
import RecomendedTours from "./components/RecomendedTours";
import NewTours from "./components/NewTours"
import FindTour from "./components/FindTour";
import Footer  from "../../components/Footer/Footer"

export const Discover = () => (
  <React.Fragment>
    <Navbar></Navbar>
    <Hero></Hero>
    <RecomendedTours></RecomendedTours>
    <NewTours></NewTours>
    <FindTour></FindTour> 
    <Footer></Footer>
  </React.Fragment>
);

export default Discover;
