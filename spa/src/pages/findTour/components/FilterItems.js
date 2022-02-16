import React, {useState} from "react";
import {
    CheckboxGroup,
    RadioButtonGroup,
    MultiSelect,
    Option,
} from "react-rainbow-components";
import PriceSlider from "./PriceSlider";
import {Application} from "react-rainbow-components";
import {theme} from "../../../constants/Styles";

const options1 = [
    {
        value: "checkboxOne",
        label: "Only tours with student discounts",
        disabled: false,
    },
    {
        value: "checkboxTwo",
        label: "Only tours free for children",
        disabled: false,
    },
    {
        value: "checkboxThree",
        label: "Only reduced price tours",
        disabled: false,
    },
];

const options2 = [
    {value: "checkboxOne", label: "Morning 6 AM - 12 PM", disabled: false},
    {value: "checkboxTwo", label: "Afternoon 12 PM - 5PM", disabled: false},
    {value: "checkboxThree", label: "Evening 6 PM - 12 AM", disabled: false},
    {value: "checkboxFour", label: "Night 1 AM - 5AM", disabled: false},
];

const options3 = [
    {value: "checkboxOne", label: <img src="images/icon-1-stars.svg" alt="star"/>},
    {value: "checkboxTwo", label: <img src="images/icon-2-stars.svg" alt="star"/>},
    {value: "checkboxThree", label: <img src="images/icon-3-stars.svg" alt="star"/>},
    {value: "checkboxFour", label: <img src="images/icon-4-stars.svg" alt="star"/>},
    {value: "checkboxFive", label: <img src="images/icon-5-stars.svg" alt="star"/>},
];

const optionsCurrency = [
    {value: "USD", label: "USD"},
    {value: "EUR", label: "EUR"},
    {value: "UAH", label: "UAH"},
];

function FilterItems() {
    const [currency, setCurrency] = useState("USD");

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    const [duration, setDuration] = useState([]);

    const [priceOptions, SetPriceOptions] = useState([]);

    const [timingOptions, SetTimingOptions] = useState([]);

    const [ratingOptions, SetRatingOptions] = useState([]);

    const [attendants, setAttendants] = useState([]);
    return (
        <Application theme={theme}>
            <h3>Price: </h3>
            <div className="rainbow-align-content_center rainbow-flex_column">
                <RadioButtonGroup
                    id="radio-button-group-component-1"
                    options={optionsCurrency}
                    variant="default"
                    value={currency}
                    onChange={handleCurrencyChange}
                />
                <PriceSlider/>
            </div>
            <div className="rainbow-align-content_left  rainbow-m-left_large ">
                <CheckboxGroup
                    className="rainbow-m-bottom_large"
                    options={options1}
                    value={priceOptions}
                    onChange={SetPriceOptions}
                />
            </div>
            <h3>Duration: </h3>
            <MultiSelect
                id="multiselect-component-1"
                style={{width: "250px"}}
                className=" rainbow-m_auto"
                value={duration}
                onChange={setDuration}
                bottomHelpText="You can select several options"
                variant="chip"
                showCheckbox
            >
                <Option name="header" label="Select duration" variant="header"/>
                <Option name="option-1" label="Up to 1 hour"/>
                <Option name="option-2" label="1 to 5 hours"/>
                <Option name="option-3" label="4 hours to 1 day"/>
            </MultiSelect>
            <h3>Timing: </h3>
            <div className="rainbow-align-content_left  rainbow-m-left_large">
                <CheckboxGroup
                    options={options2}
                    value={timingOptions}
                    onChange={SetTimingOptions}
                />
            </div>

            <h3>Rating: </h3>
            <div className="rainbow-align-content_left  rainbow-m-left_large">
                <CheckboxGroup
                    options={options3}
                    value={ratingOptions}
                    onChange={SetRatingOptions}
                />
            </div>
            <h3>Number of attendants: </h3>
            <MultiSelect
                id="multiselect-component-1"
                style={{width: "250px"}}
                className=" rainbow-m_auto"
                value={attendants}
                onChange={setAttendants}
                bottomHelpText="You can select several options"
                variant="chip"
                showCheckbox>
                <Option
                    name="header"
                    label="Select number of attendants"
                    variant="header"
                />
                <Option name="option-1" label="1-200"/>
                <Option name="option-2" label="201-1000"/>
                <Option name="option-3" label="1000+"/>
                <Option name="option-4" label="3000+"/>
            </MultiSelect>
        </Application>
    )
        ;
}

export default FilterItems;
    