import React from "react";
import {
    BasicInfoSliderWrapper,
    BasicInfoDescription,
    BasicInfoWrapper,
    Location,
    Reviews,
    Tags,
    Price,
    SeePriceBtnLink, BuyBtnLink,
} from "./BasicInfo.styled";
import {Button} from "../../../components/Button/Button.styled";
import ImageGallerySlider from "./ImageGallerySlider";


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
                        <BuyBtnLink>
                            <Button primary htmlType="submit" fontBig>Buy</Button>
                        </BuyBtnLink>
                        <SeePriceBtnLink>
                            <Button htmlType="submit" fontBig>See prices</Button>
                        </SeePriceBtnLink>
                </BasicInfoDescription>
                <BasicInfoSliderWrapper>
                    <ImageGallerySlider></ImageGallerySlider>
                </BasicInfoSliderWrapper>
            </BasicInfoWrapper>
        </>
    )
        ;

}

export default BasicInfo;