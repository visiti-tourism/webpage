import React from "react";
import { Wrapper } from "./FilterSection.styled.js";
import { Location } from "../../discover/components/RecomendedTours.styled";
import {
  ButtonGroupPicker,
  ButtonOption,
  Slider,
  VisualPicker,
  VisualPickerOption,
  CheckboxGroup,
  RadioButtonGroup,
} from "react-rainbow-components";
import { Application } from "react-rainbow-components";
import { theme } from "../../../constants/StylingConstants";

const options = [
  { value: "checkboxOne", label: "Checkbox One", disabled: false },
  { value: "checkboxTwo", label: "Checkbox Two", disabled: false },
  { value: "checkboxThree", label: "Checkbox Three", disabled: false },
];

const optionsCurrency = [
  { value: "off", label: "Off" },
  { value: "parking", label: "Parking" },
  { value: "auto", label: "Auto" },
];

function FilterSection() {
  return (
    <Wrapper>
      <Location style={{ margin: "35px auto" }}>
        <img src="images\icon-settings.svg" alt="5 stars" />
        <h6>Filters</h6>
      </Location>
      <Application theme={theme}>
        <div className="rainbow-align-content_center rainbow-flex_column">
          <RadioButtonGroup
            id="radio-button-group-component-1"
            options={optionsCurrency}
            variant="brand"
          />

          <Slider
            className="rainbow-m-top_medium"
            label="Choose min price"
            min="100"
            max="400"
            step="10"
            style={{ width: "260px" }}
            // value={value}
            // onChange={this.onChange}
          />
          <Slider
            className="rainbow-m-top_medium"
            label="Coose max price"
            min="100"
            max="400"
            step="50"
            style={{ width: "260px" }}
            // value={value}
            // onChange={this.onChange}
          />
        </div>
        <div className="rainbow-align-content_left  rainbow-m-left_medium">
          <CheckboxGroup
            options={options}
            // value={values}
            // onChange={this.handleOnChange}
          />
        </div>
      </Application>
    </Wrapper>
  );
}

export default FilterSection;
