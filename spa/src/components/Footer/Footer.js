import React from "react";
import {FooterStyled, IconSet, TextColumn} from "./Footer.styled";

function Footer() {
    return (
        <>
            <FooterStyled>
                <TextColumn>
                    <h4 style={{fontWeight: "500"}}>Social Media</h4>
                    <IconSet>
                        <img src="\images\icon-instagram.svg" alt="imstagtram icon"></img>
                        <img src="\images\icon-facebook.svg" alt="facebook icon"></img>
                        <img src="\images\icon-telegram.svg" alt="telegram icon"></img>
                    </IconSet>
                    <h4>© Copyright ipsum dolor Lore </h4>
                </TextColumn>
                <TextColumn>
                    <h4 style={{fontWeight: "500"}}>Lorem ipsum dolor</h4>
                    <h4>Lorem ipsum dolor</h4>
                    <h4>Lorem ipsum dolor</h4>
                </TextColumn>
                <TextColumn>
                    <h4 style={{fontWeight: "500"}}>Lorem ipsum dolor</h4>
                    <h4>FAQ</h4>
                    <h4>Privacy policy</h4>
                </TextColumn>
            </FooterStyled>
        </>
    );
}

export default Footer;
