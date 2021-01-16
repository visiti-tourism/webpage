import React from "react";
import CustomDatePicker from "./CustomDatePicker";
import {
  ListContainer,
  Banner,
  BannerButton,
  BannerText,
  SearchBar,
  ToursWrapper,
} from "./TourList.styled";
import TourItem from "../components/TourItem";
import { allTours } from "../../../constants/TourInfo";
import { Picklist, Option, Application } from "react-rainbow-components";
import { theme } from "../../../constants/StylingConstants";
import {Button} from "../../../components/Buttons/Button.styled"

function TourList() {
  const [selectedLocation, setSelectedLocation] = React.useState("");

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div>
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
          <img src="images\illustration-2.svg" alt="vector illustration" />
        </Banner>
        <SearchBar>
          <Application theme={theme}>
            <h6>Searcn results for: </h6>
            <div className="rainbow-align-content_space-between rainbow-m-top_medium">
              <Picklist
                id="picklist-1"
                style={{ width: "200px" }}
                value={selectedLocation}
                onChange={handleLocationChange}
                label="Select Location"
                labelAlignment="left"
              >
                <Option name="header" label="Choose Location" variant="header" />
                <Option name="option 4" label="All" />
                <Option name="option 1" label="Rome, Italy" />
                <Option name="option 2" label="Paris, France" />
                <Option name="option 3" label="Prague, Czech Republic" />
              </Picklist>
              <CustomDatePicker label="From date: "></CustomDatePicker>
              <CustomDatePicker label="To date: "></CustomDatePicker>
              <Button style={{marginBottom: "-22px"}} primary onClick={() => {alert('Functionality comming up!')}}><img src='images/icon-search.svg' alt='icon'/></Button>
            </div>
          </Application> 
        </SearchBar>
        <ToursWrapper>
          {allTours.map(
            ({ id, src, name, numberOfReviews, date, price, location }, index) => (
              <TourItem
                index={id}
                src={src}
                name={name}
                numberOfReviews={numberOfReviews}
                date={date}
                price={price}
                location={location}
              />
            )
          )}
        </ToursWrapper>
      </ListContainer>
    </div>
  );
}

export default TourList;
