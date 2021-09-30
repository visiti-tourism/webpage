import React from "react";
import {
    Wrapper,
    TourImg,
    TourDescription,
    DescriptionBottom,
    Review,
} from "./TourItem.styled";
import {Location} from "../../Discover/components/RecommendedTours.styled"

function TourItem({src, name, numberOfReviews, numberOfStars, date, price}) {
    return (
        <Wrapper>
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
                        <h5>{date}</h5>
                    </Location>
                    <Location>
                        <img src="images\icon-wallet.svg" alt="wallet"/>
                        <h3 style={{fontWeight: 500, paddingTop:"15%;"}}>From {price} €</h3>
                    </Location>
                </DescriptionBottom>
            </TourDescription>
        </Wrapper>
    );
}

export default TourItem;
