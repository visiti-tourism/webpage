import React from "react";
import {AdditionalInfoWrapper, SubTitle} from "./AdditionalInfo.styled";

function AdditionalInfo() {
    let isLoggedIn = true;
    return (
        <>
            <AdditionalInfoWrapper>
                <h2>Overview</h2>
                <h4>General admission entrance queues at the Vatican are<br/> notoriously long.
                    With a VIP admission ticket and early<br/> departure time, beat the crowds and head straight in
                    before<br/> the
                    Vatican is open to the general public. In addition to <br/> pointing out works of art often
                    missed by
                    visitors,
                    your guide<br/> provides little-known facts, anecdotes, and background<br/> information.
                    Personal headsets
                    and a
                    small group size ensure<br/> an intimate experience.
                </h4>
                <h2>What's included</h2>
                <div>{isLoggedIn ? <img src="images\checkbox-true.svg" alt="Checkbox True"/> :
                    <img src="images\checkbox-true.svg" alt="Checkbox True"/>}
                    <h4>One-way private transfer</h4>
                </div>
                <div>{isLoggedIn ? <img src="images\checkbox-false.svg" alt="Checkbox False"/> :
                    <img src="images\checkbox-true.svg" alt="Checkbox True"/>}
                    <h4>Meet and assist at your hotel</h4>
                </div>
                <div>{isLoggedIn ? <img src="images\checkbox-false.svg" alt="Checkbox False"/> :
                    <img src="images\checkbox-true.svg" alt="Checkbox True"/>}
                    <h4>1 to 8 people transferred in a private vehicle</h4>
                </div>
                <div>{isLoggedIn ? <img src="images\checkbox-true.svg" alt="Checkbox True"/> :
                    <img src="images\checkbox-true.svg" alt="Checkbox True"/>}
                    <h4>Private Tranportation</h4>
                </div>
                <div>{isLoggedIn ? <img src="images\checkbox-true.svg" alt="Checkbox True"/> :
                    <img src="images\checkbox-true.svg" alt="Checkbox True"/>}
                    <h4>Driver will assist with the luggages</h4>
                </div>
                <div>{isLoggedIn ? <img src="images\checkbox-false.svg" alt="Checkbox False"/> :
                    <img src="images\checkbox-true.svg" alt="Checkbox True"/>}
                    <h4>Drop off by the ship</h4>
                </div>
                <div>{isLoggedIn ? <img src="images\checkbox-true.svg" alt="Checkbox True"/> :
                    <img src="images\checkbox-true.svg" alt="Checkbox True"/>}
                    <h4>Gratuities</h4>
                </div>
                <div>{isLoggedIn ? <img src="images\checkbox-true.svg" alt="Checkbox True"/> :
                    <img src="images\checkbox-true.svg" alt="Checkbox True"/>}
                    <h4>Excess luggage charges (where applicable)</h4>
                </div>
                <h2>Departure and return</h2>
                <h4><SubTitle>Departure Point</SubTitle>
                    Viale Vaticano, 102, 00192 Roma RM, Italy
                    <br/>
                    <br/>
                    Traveler pickup is offered Hotel pickup can be arranged for up to 7 guests. The cost of 55 Euro
                    is payable directly to your<br/> driver. We will send you your driver's phone number at the time of
                    booking. Please wait in your hotel lobby 45 min prior to your<br/> tour time.
                    <br/>
                    <br/>
                    <SubTitle>Departure Time <h4>7:30 AM</h4></SubTitle>
                    <SubTitle>Return Details</SubTitle>
                    Guardia Svizzera Arco delle Campane, Piazza del Sant'uffizio 2-8 00193 Roma Italy, 00120 Città
                    del Vaticano, Vatican City
                </h4>
                <h2>Additional info</h2>
                <ul>
                    <li><h4>Confirmation will be received at time of booking</h4></li>
                    <li><h4>Not wheelchair accessible</h4></li>
                    <li><h4>Confirmation will be received at time of booking</h4></li>
                    <li><h4>English Speaking Guide</h4></li>
                    <li><h4>Children must be accompanied by an adult</h4></li>
                    <li><h4>A dress code is required to enter places of worship and selected museums.</h4></li>
                    <li><h4>No shorts or sleeveless tops allowed.</h4></li>
                    <li><h4>Knees and shoulders MUST be covered for both men and women.</h4></li>
                    <li><h4>You may risk refused entry if you fail to comply with these dress requirements</h4></li>
                    <li><h4>A maximum of 10 people per booking</h4></li>
                    <li><h4>Near public transportation</h4></li>
                    <li><h4>This tour/activity will have a maximum of 10 travelers</h4></li>
                </ul>
            </AdditionalInfoWrapper>
        </>
    );
}

export default AdditionalInfo;