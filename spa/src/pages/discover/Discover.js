import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./components/Hero";
import RecommendedTours from "./components/RecommendedTours";
import NewTours from "./components/NewTours"
import SearchTour from "./components/SearchTour";
import Footer from "../../components/Footer/Footer"

function Discover() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <RecommendedTours/>
            <NewTours/>
            <SearchTour/>
            <Footer/>
        </>
    );
}

export default Discover;
