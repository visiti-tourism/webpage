import React from "react";
import {
    NewToursWrapper,
    NewToursLayoutSmall,
    NewToursLayoutBig,
    SmallTour,
    SmallTourImg,
    SmallTourText,
    Location,
    BigTourImg,
    BigTourText,
} from "./NewTours.styled.js";
import {Button} from "../../../components/Buttons/Button.styled";
import {Title} from "../../../App.styled";

function NewTours() {
    return (
        <div>
            <Title>Discover our newest tours</Title>
            <NewToursWrapper>
                <NewToursLayoutSmall>
                    <SmallTour>
                        <SmallTourImg>
                            <img src="images\tour-img-2.svg" alt="tour"/>
                        </SmallTourImg>
                        <SmallTourText>
                            <h3>Prague Half-Day City Tour Including Vltava River Cruise</h3>
                            <Location>
                                <img src="images\icon-clock.svg" alt="clock-icon"/>
                                <h5>3 PM Sunday, 12-12-2000</h5>
                            </Location>
                            <Location>
                                <img src="images\icon-location.svg" alt="clock-icon"/>
                                <h5>Prague, Czech Republic</h5>
                            </Location>
                        </SmallTourText>
                    </SmallTour>

                    <SmallTour>
                        <SmallTourImg>
                            <img src="images\tour-img-4.svg" alt="tour"/>
                        </SmallTourImg>
                        <SmallTourText>
                            <h3>Prague Half-Day City Tour Including Vltava River Cruise</h3>
                            <Location>
                                <img src="images\icon-clock.svg" alt="clock-icon"/>
                                <h5>3 PM Sunday, 12-12-2000</h5>
                            </Location>
                            <Location>
                                <img src="images\icon-location.svg" alt="clock-icon"/>
                                <h5>Prague, Czech Republic</h5>
                            </Location>
                        </SmallTourText>
                    </SmallTour>

                    <SmallTour>
                        <SmallTourImg>
                            <img src="images\tour-img-5.svg" alt="tour"/>
                        </SmallTourImg>

                        <SmallTourText>
                            <h3>Prague Half-Day City Tour Including Vltava River Cruise</h3>
                            <Location>
                                <img src="images\icon-clock.svg" alt="clock-icon"/>
                                <h5>3 PM Sunday, 12-12-2000</h5>
                            </Location>
                            <Location>
                                <img src="images\icon-location.svg" alt="clock-icon"/>
                                <h5>Prague, Czech Republic</h5>
                            </Location>
                        </SmallTourText>
                    </SmallTour>
                </NewToursLayoutSmall>
                <NewToursLayoutBig>
                    <BigTourImg>
                        <img src="images\tour-img-3.svg" alt="tour"/>
                    </BigTourImg>
                    <BigTourText>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div>
                                <h6>A Tour of Bernini's Masterpieces </h6>
                                <Location>
                                    <img src="images\icon-5-stars.svg" alt="5 stars"/>
                                    <h5>116 reviews</h5>
                                </Location>
                            </div>
                            <Button>More</Button>
                        </div>
                        <h4>
                            The works of the sculptor and architect Gian Lorenzo Bernini can
                            be found around every corner of the Italian capital, from
                            awe-inspiring statues to the design of some of the most famous
                            fountains and piazzas. Here is a guide to some of the most
                            important and recognizable masterpieces of Rome’s Baroque genius.
                        </h4>
                    </BigTourText>
                </NewToursLayoutBig>
            </NewToursWrapper>
        </div>
    );
}

export default NewTours;
