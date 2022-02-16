import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import React from "react";
import BasicInfo from "./components/BasicInfo";
import AdditionalInfo from "./components/AdditionalInfo";
import Reviews from "./components/Reviews";
import PriceOptions from "./components/PriceOptions";
import {TourInfoWrapper} from "./components/TourInfo.styled";


function TourInfo() {
    return (
        <>

            <Navbar/>
            <BasicInfo/>
            <TourInfoWrapper>
                <AdditionalInfo/>
                <Reviews/>
                <PriceOptions/>
            </TourInfoWrapper>
            <Footer/>

        </>
    );
}

export default TourInfo;