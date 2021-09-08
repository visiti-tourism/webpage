import React from "react";
import {
    PopularToursWraper,
    PopularToursDescription,
    PopularToursImg,
    Location,
    DescriptionTop,
} from "./RecommendedTours.styled";
import {Button} from "../../../components/Buttons/Button.styled";
import {Title} from "../../../App.styled";

function RecommendedTours() {
    return (
        <div>
            <Title>Explore the most popular tours</Title>
            <PopularToursWraper>
                <PopularToursImg>
                    <img src="images\tour-img-1.svg" alt="tour"/>
                </PopularToursImg>
                <PopularToursDescription>
                    <DescriptionTop>
                        <div>
                            <Location>
                                <img src="images\icon-location.svg" alt="location-icon"/>
                                <h4>Vatican Museums, Rome, Italy</h4>
                            </Location>
                            <Location>
                                <img src="images\icon-5-stars.svg" alt="5 stars"/>
                                <h5>116 reviews</h5>
                            </Location>
                        </div>
                        <Button>More</Button>
                    </DescriptionTop>
                    <h4>
                        {" "}
                        Vatican Museums – one of the largest museum complexes in the world.
                        Located in the grand and magnificent Vatican Palaces, there are over 7
                        kilometres of galleries to be seen. The museum’s 1300 rooms house some
                        of the most famous artworks in the world by some of the most famous
                        artists of all time including Michelangelo, Leonardo da Vinci,
                        Bernini, Botticelli, Raphael, Caravaggio, Giotto, and hundreds more.
                    </h4>
                </PopularToursDescription>
            </PopularToursWraper>
        </div>
    );
}

export default RecommendedTours;
