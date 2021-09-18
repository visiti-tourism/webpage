import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Discover from "../Discover/Discover";
import FindTour from "../FindTour/FindTour"
import Profile from "../Profile/Profile"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"
import ContactUs from "../ContactUs/ContactUs";
import ForAgencies from "../ForAgencies/ForAgencies";
import TourInfo from "../TourInfo/TourInfo";

function Routing() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Discover}/>
                    <Route path="/find-tour" exact component={FindTour}/>
                    <Route path="/for-agencies" exact component={ForAgencies}/>
                    <Route path="/contact-us" exact component={ContactUs}/>
                    <Route path="/tour-info" exact component={TourInfo}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/sign-in" exact component={SignIn}/>
                    <Route path="/sign-up" exact component={SignUp}/>
                </Switch>
            </Router>
        </>
    );
}


export default Routing;
