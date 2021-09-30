import React, {useState} from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import Slider from "@material-ui/core/Slider";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import {colors, fontSizes} from "../../../constants/Styles";
import {CounterInput} from "react-rainbow-components";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
        marginTop: "40px",
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const PrettoSlider = withStyles({
    root: {
        color: colors.COLOR_PRIMARY_100,
        height: 8,
        width: "250px",
        marginLeft: "40px",
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: colors.COLOR_PRIMARY_100,
        border: "1px solid colors.COLOR_BORDER_PRIMARY",
        marginTop: -8,
        marginLeft: -12,
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit",
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-60% + 12px)",
        top: -22,
        "& *": {
            background: "transparent",
            color: colors.TEXT_PRIMARY,
            fontSize: fontSizes.font14,
        },
    },
    track: {
        height: 5,
        borderRadius: 4,
    },
    rail: {
        height: 5,
        borderRadius: 4,
        color: colors.COLOR_BORDER_PRIMARY,
    },
})(Slider);

function ValueLabelComponent(props) {
    const {children, open, value} = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

function PriceSlider() {

    const classes = useStyles();
    const [priceRange, setPriceRange] = useState([0, 100]);

    const onRangeChange = (event, value) => {
        setPriceRange(value);
    };

    const onRangeChangeMax = (value) => {
        setPriceRange([priceRange[0], value]);
    };

    const onRangeChangeMin = (value) => {
        setPriceRange([value, priceRange[1]]);
    };

    return (
        <div className={classes.root}>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label=" range-slider pretto slider"
                defaultValue={[0, 100]}
                getAriaLabel={(index) =>
                    index === 0 ? "Minimum price" : "Maximum price"
                }
                value={priceRange}
                onChange={onRangeChange}
            />
            <div
                style={{width: "76%", margin: "0 auto 20px"}}
                className="rainbow-flex rainbow-m-bottom_medium "
            >
                <CounterInput
                    label="min"
                    style={{width: "110px"}}
                    className=" rainbow-m_auto"
                    labelAlignment="center"
                    value={priceRange[0]}
                    onChange={onRangeChangeMin}
                />
                <CounterInput
                    label="max"
                    style={{width: "110px"}}
                    className=" rainbow-m_auto"
                    labelAlignment="center"
                    value={priceRange[1]}
                    onChange={onRangeChangeMax}
                />
            </div>
        </div>
    );
}

export default PriceSlider;
