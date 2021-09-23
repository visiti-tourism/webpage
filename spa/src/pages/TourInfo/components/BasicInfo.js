import React from "react";
import {
    BasicInfoSliderWrapper,
    BasicInfoDescription,
    BasicInfoWrapper,
    Location,
    Reviews,
    Tags,
    Price,
    SeePriceBtnLink, BuyBtnLink, CheckboxIcon,
} from "./BasicInfo.styled";
import ImageGallerySlider from "./ImageGallerySlider";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

function BasicInfo() {
    return (
        <>
            <BasicInfoWrapper>
                <BasicInfoDescription>
                    <Location>
                        <img src="images\icon-location.svg" alt="location-icon"/>
                        <h4>Vatican Museums, Rome, Italy</h4>
                    </Location>
                    <h1>Lorem ipsum dolor sit amet,<br/>
                        consectetur adipiscing elit. </h1>
                    <Tags>
                        <div><h4>Location</h4></div>
                        <div><h4>Tag</h4></div>
                        <div><h4>Tag</h4></div>
                    </Tags>
                    <Reviews>
                        <img src="images\icon-5-stars.svg" alt="5 stars"/>
                        <h4 style={{fontWeight: 500}}>116 reviews</h4>
                    </Reviews>
                    <Price>
                        <img src="images\icon-wallet.svg" alt="wallet"/>
                        <h2>From 10 €</h2>
                    </Price>
                    <BuyBtnLink primary htmlType="submit" fontBig>Buy</BuyBtnLink>
                    <SeePriceBtnLink htmlType="submit" fontBig>See prices</SeePriceBtnLink>
                    <CheckboxIcon icon={<FavoriteBorder fontSize="large" style={{color: "#FE862C"}}/>}
                                  checkedIcon={<Favorite fontSize="large" style={{color: "#FE862C"}}/>}
                    />
                </BasicInfoDescription>
                <BasicInfoSliderWrapper>
                    <ImageGallerySlider/>
                </BasicInfoSliderWrapper>
            </BasicInfoWrapper>
        </>
    )
        ;

}

export default BasicInfo;