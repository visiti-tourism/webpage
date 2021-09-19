import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import React from "react";
import BasicInfo from "./components/BasicInfo";
import AdditionalInfo from "./components/AdditionalInfo";

function TourInfo() {
    return (
        <>
            <Navbar/>
            <BasicInfo/>
            <AdditionalInfo/>
            <Footer/>
        </>
    );
}

export default TourInfo;