import React from "react";
import Navbar from "../../components/Header/Navbar";
import Hero from "./components/Hero";
import RecommendedTours from "./components/RecommendedTours";
import NewTours from "./components/NewTours"
import FindTour from "./components/FindTour";
import Footer from "../../components/Footer/Footer"

function Discover() {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <RecommendedTours></RecommendedTours>
            <NewTours></NewTours>
            <FindTour></FindTour>
            <Footer></Footer>
        </>
    );
}

export default Discover;
