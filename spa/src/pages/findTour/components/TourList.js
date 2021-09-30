import React from "react";
import DateInput from "./DateInput";
import {
    ListContainer,
    Banner,
    BannerButton,
    BannerText,
    SearchBar,
    ToursWrapper,
} from "./TourList.styled";
import TourItem from "../components/TourItem";
import {allTours} from "../../../constants/AllTours";
import {
    Picklist,
    Option,
    Application,
} from "react-rainbow-components";
import {theme} from "../../../constants/Styles";

function TourList() {
    const [selectedLocation, setSelectedLocation] = React.useState("");

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };
    return (
        <>
            <ListContainer>
                <Banner>
                    <BannerText>
                        <h1>Lorem ipsum, elit 50% </h1>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
                            vel, integer facilisi ultricies auctor quis in mattis.{" "}
                        </h3>
                        <BannerButton>Browse flash deals</BannerButton>
                    </BannerText>
                    <img src="images\illustration-2.svg" alt="vector illustration"/>
                </Banner>
                <SearchBar>
                    <Application theme={theme}>
                        <h3>Search results for: </h3>
                        <div className="rainbow-align-content_space-between rainbow-m-top_medium">
                            <Picklist
                                id="picklist-1"
                                style={{width: "200px"}}
                                value={selectedLocation}
                                onChange={handleLocationChange}
                                label="Select Location"
                                labelAlignment="left"
                            >
                                <Option name="header" label="Your Buildings" variant="header"/>
                                <Option name="option 1" label="Experimental Building"/>
                                <Option name="option 2" label="Empire State"/>
                                <Option name="option 3" label="Central Park"/>
                            </Picklist>
                            <DateInput label="From Date "/>
                            <DateInput label="To Date "/>
                        </div>
                    </Application>
                </SearchBar>
                <ToursWrapper>
                    {allTours.map(
                        ({id, src, name, numberOfReviews, numberOfStars, date, price}) => (
                            <TourItem
                                key={id}
                                src={src}
                                name={name}
                                numberOfReviews={numberOfReviews}
                                numberOfStars={numberOfStars}
                                date={date}
                                price={price}
                            />
                        )
                    )}
                </ToursWrapper>
            </ListContainer>
        </>
    );
}

export default TourList;
