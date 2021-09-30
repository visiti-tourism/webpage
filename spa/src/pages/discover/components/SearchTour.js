import React from "react";
import {FindTourWrapper, Text} from "./SearchTour.styled";
import {Button} from "../../../components/Button/Button.styled";

function SearchTour() {
    return (
        <FindTourWrapper>
            <img src="images\icon-zoom.svg" alt="illustration"/>
            <Text>
                <h3>Find your perfect tour!</h3>
                <h4>
                    Pick location and use parametrized search to find the best proposals{" "}
                </h4>
            </Text>
            <Button> Try it out</Button>
        </FindTourWrapper>
    );
}

export default SearchTour;
