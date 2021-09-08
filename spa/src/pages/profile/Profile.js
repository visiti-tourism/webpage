import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import AccountInfo from "./components/AccountInfo";
import ToursContainer from "./components/ToursContainer";
import {MainContainer} from "./Profile.styled";

function Profile() {
    return (
        <>
            <Navbar></Navbar>
            <MainContainer>
                <AccountInfo></AccountInfo>
                <ToursContainer></ToursContainer>
            </MainContainer>
            <Footer></Footer>
        </>
    );
}


export default Profile;