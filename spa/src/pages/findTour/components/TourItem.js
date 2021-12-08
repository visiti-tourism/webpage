import React from "react";
import {
    ToutItemWrapper,
    TourImg,
    TourDescription,
    DescriptionBottom,
    Review,
} from "./TourItem.styled";
import {Location} from "../../Discover/components/RecommendedTours.styled"

function TourItem({id, name, price, date, src, numberOfReviews, location}) {
    return (
        <ToutItemWrapper>
            <TourImg>
                <img src={src} alt="city"/>
            </TourImg>
            <TourDescription>
                <h3 style={{fontWeight: 500}}>{name}</h3>
                <Review>
                    <Location>
                        <img src="images\icon-5-stars.svg" alt="5 stars"/>
                        <h5>{numberOfReviews} reviews</h5>
                    </Location>
                </Review>
                <DescriptionBottom>
                    <Location>
                        <img src="images\icon-location.svg" alt="location"/>
                        <h5>{location}</h5>
                    </Location>

                    <Location>
                        <img src="images\icon-wallet.svg" alt="wallet"/>
                        <h3 style={{fontWeight: 500, paddingTop: "15%"}}>From {price} €</h3>
                    </Location>
                </DescriptionBottom>
                <Location>
                    <img src="images\icon-clock.svg" alt="clock"/>
                    <h5>{date}</h5>
                </Location>
            </TourDescription>
        </ToutItemWrapper>
    );
}

export default TourItem;
