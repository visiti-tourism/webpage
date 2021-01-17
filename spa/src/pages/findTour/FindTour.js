import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer  from "../../components/Footer/Footer"
import TourList from "../findTour/components/TourList"
import {Wrapper} from "./components/TourList.styled"
import FilterSection from "./components/FilterSection"


export const FindTour = () => (
  <div style={{backgroundColor: "#F9F5F2"}}>
    <Navbar bgColor='beige'></Navbar>
    <Wrapper>    
    <FilterSection/>
    <TourList/>
    </Wrapper>
    <Footer></Footer>
  </div>
);

export default FindTour;
