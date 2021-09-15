import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import TourList from "../FindTour/components/TourList"
import {Wrapper} from "./components/TourList.styled"
import FilterSection from "./components/FilterSection"

function FindTour() {
    return (
        <div style={{backgroundColor: "#F9F5F2"}}>
            <Navbar bgColor='beige'></Navbar>
            <Wrapper>
                <FilterSection/>
                <TourList/>
            </Wrapper>
            <Footer bgColor='beige'></Footer>
        </div>
    );
}

export default FindTour;
