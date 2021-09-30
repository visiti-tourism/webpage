import React from "react";
import {DatePicker} from "react-rainbow-components";

function DateInput({label}) {
    const [selectedDate, setSelectedDate] = React.useState(
        new Date("01/13/2020 12:12")
    );

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <DatePicker
            formatStyle="large"
            value={selectedDate}
            label={label}
            labelAlignment="left"
            onChange={handleDateChange}
            style={{width: "250px"}}
        />
    );
}

export default DateInput;
