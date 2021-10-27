import React, {useState} from "react";
import {FilterSectionWrapper, FilterMobile, FilterDesktop} from "./FilterSection.styled.js";
import {Location} from "../../Discover/components/RecommendedTours.styled";
import FilterItems from "./FilterItems";


function FilterSection() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <FilterSectionWrapper>
            <FilterDesktop>
                <Location style={{margin: "35px auto"}}>
                    <img src="images\icon-settings.svg" alt="Settings"/>
                    <h3>Filters</h3>
                </Location>
                <FilterItems/>
            </FilterDesktop>
            <FilterMobile onClick={handleClick}>
                <Location style={{margin: "35px auto"}}>
                    <img src="images\icon-settings.svg" alt="Settings"/>
                    <h6>Filters</h6>
                </Location>
                {click ? <FilterItems/> : null}
            </FilterMobile>
        </FilterSectionWrapper>
    );
}

export default FilterSection;
