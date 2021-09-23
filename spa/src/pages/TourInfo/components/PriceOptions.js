import React from "react";
import {
    DescriptionItemsWrapper,
    PriceOptionsBtnWrapper,
    PriceOptionsWrapper, PriceTitle
} from "./PriceOptions.styled";
import {LargeButton} from "../../../components/Button/LargeButton.styled";

function PriceOptions() {
    let isLoggedIn = true;
    return (
        <>
            <PriceOptionsWrapper>
                <div>
                    <h3>Price Options</h3>
                    <br/>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac dictum tellus diam.
                        Quam tortor diam massa nec eu lobortis eget<br/> aenean. Aliquam nas</h4>
                </div>
                <PriceOptionsBtnWrapper>
                    <LargeButton>
                        <h3>Individual</h3>
                        <span>3 places avaliable</span>
                        <DescriptionItemsWrapper>
                            <div>{isLoggedIn ? <img src="images\checkbox-true.svg" alt="checkbox True"/> :
                                <img src="images\checkbox-true.svg" alt="checkbox True"/>}
                                <h4>Full tour</h4>
                            </div>
                            <div>{isLoggedIn ? <img src="images\checkbox-false.svg" alt="checkbox False"/> :
                                <img src="images\checkbox-true.svg" alt="checkbox True"/>}
                                <h4>Transfer from Termini</h4>
                            </div>
                            <div>{isLoggedIn ? <img src="images\checkbox-false.svg" alt="checkbox False"/> :
                                <img src="images\checkbox-true.svg" alt="checkbox True"/>}
                                <h4>Drop off by the ship</h4>
                            </div>
                            <div>{isLoggedIn ? <img src="images\checkbox-true.svg" alt="checkbox True"/> :
                                <img src="images\checkbox-true.svg" alt="checkbox True"/>}
                                <h4> Gratuities</h4>
                            </div>
                            <div>{isLoggedIn ? <img src="images\checkbox-true.svg" alt="checkbox True"/> :
                                <img src="images\checkbox-true.svg" alt="checkbox True"/>}
                                <h4>Excess luggage charges</h4>
                            </div>
                        </DescriptionItemsWrapper>
                        <PriceTitle>12€<span> /person</span></PriceTitle>
                    </LargeButton>
                    <LargeButton>
                        <h3>Group</h3>
                        <span>10 places avaliable</span>
                        <DescriptionItemsWrapper>
                            <div>{isLoggedIn ? <img src="images\checkbox-true.svg" alt="checkbox True"/> :
                                <img src="images\checkbox-true.svg" alt="checkbox True"/>}
                                <h4>Full tour</h4>
                            </div>
                            <div>{isLoggedIn ? <img src="images\checkbox-false.svg" alt="checkbox False"/> :
                                <img src="images\checkbox-true.svg" alt="checkbox True"/>}
                                <h4>Transfer from Termini</h4>
                            </div>
                            <div>{isLoggedIn ? <img src="images\checkbox-false.svg" alt="checkbox False"/> :
                                <img src="images\checkbox-true.svg" alt="checkbox True"/>}
                                <h4>Drop off by the ship</h4>
                            </div>
                            <div>{isLoggedIn ? <img src="images\checkbox-true.svg" alt="checkbox True"/> :
                                <img src="images\checkbox-true.svg" alt="checkbox True"/>}
                                <h4> Gratuities</h4>
                            </div>
                            <div>{isLoggedIn ? <img src="images\checkbox-true.svg" alt="checkbox True"/> :
                                <img src="images\checkbox-true.svg" alt="checkbox True"/>}
                                <h4>Excess luggage charges</h4>
                            </div>
                        </DescriptionItemsWrapper>
                        <PriceTitle>10€<span> /person</span></PriceTitle>
                    </LargeButton>
                </PriceOptionsBtnWrapper>
            </PriceOptionsWrapper>
        </>
    );
}

export default PriceOptions;