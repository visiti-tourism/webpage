import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer  from "../../components/Footer/Footer";
import AccountInfo  from "./components/AccountInfo";
import ToursContainer  from "./components/ToursContainer";
import { MainContainer } from "./Profile.styled";

export const Profile = () => (
    <React.Fragment>
        <Navbar></Navbar>
        <MainContainer>
            <AccountInfo></AccountInfo>
            <ToursContainer></ToursContainer>
        </MainContainer>
        <Footer></Footer>
    </React.Fragment>
);

export default Profile;