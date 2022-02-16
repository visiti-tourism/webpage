import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AccountInfo from "./components/AccountInfo";
import ToursContainer from "./components/ToursContainer";
import {MainContainer} from "./Profile.styled";

function Profile() {
    return (
        <>
            <Navbar/>
            <MainContainer>
                <AccountInfo/>
                <ToursContainer/>
            </MainContainer>
            <Footer/>
        </>
    );
}


export default Profile;