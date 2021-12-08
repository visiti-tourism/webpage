import React, {useEffect, useState} from "react";
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
import axios from "axios";

function TourList() {
    const [selectedLocation, setSelectedLocation] = React.useState({});

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    }

    const [excursions, setExcursions] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/excursions')
            .then(response => setExcursions(response.data.excursions))
            .catch(error => console.log(error.message))

    }, []);

    console.log(excursions);
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
                                labelAlignment="left">

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
                    {excursions.map(
                        ({id, name, price, date, src, numberOfReviews,location}) => (
                            <TourItem
                                key={id}
                                name={name}
                                price={price}
                                date={date}
                                src={src}
                                numberOfReviews={numberOfReviews}
                                location={location}
                            />
                        )
                    )}
                </ToursWrapper>
            </ListContainer>
        </>
    );
}

export default TourList;
