import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Discover from "../discover/Discover";
import FindTour from "../findTour/FindTour"
import Profile from "../profile/Profile"
import SignIn from "../signIn/SignIn"
import SignUp from "../signUp/SignUp"
import ContactUs from "../contactUs/ContactUs";
import ForAgencies from "../forAgencies/ForAgencies";

function Routing() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Discover}/>
                    <Route path="/find-tour" exact component={FindTour}/>
                    <Route path="/for-agencies" exact component={ForAgencies}/>
                    <Route path="/contact-us" exact component={ContactUs}/>
                    <Route path="/tour-info:id"/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/sign-in" exact component={SignIn}/>
                    <Route path="/sign-up" exact component={SignUp}/>
                </Switch>
            </Router>
        </>
    );
}


export default Routing;
