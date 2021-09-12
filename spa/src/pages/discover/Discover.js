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
            <Navbar></Navbar>
            <Hero></Hero>
            <RecommendedTours></RecommendedTours>
            <NewTours></NewTours>
            <SearchTour></SearchTour>
            <Footer></Footer>
        </>
    );
}

export default Discover;
