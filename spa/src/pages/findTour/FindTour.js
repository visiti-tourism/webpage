import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import TourList from "../FindTour/components/TourList"
import FilterSection from "./components/FilterSection"
import {Wrapper} from "./components/TourList.styled"

function FindTour() {
    return (
        <>
            <Navbar/>
            <Wrapper>
                <FilterSection/>
                <TourList/>
            </Wrapper>
            <Footer/>
        </>
    );
}

export default FindTour;
