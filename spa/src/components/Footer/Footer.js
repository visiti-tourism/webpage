import React from "react";
import {FooterStyled, IconSet, TextColumn, Divider} from "./Footer.styled";

function Footer() {
    return (
        <>
            <Divider></Divider>
            <FooterStyled>
                <TextColumn>
                    <h5 style={{fontWeight: "500"}}>Social Media</h5>
                    <IconSet>
                        <img src="\images\icon-instagram.svg" alt="imstagtram icon"></img>
                        <img src="\images\icon-facebook.svg" alt="facebook icon"></img>
                        <img src="\images\icon-telegram.svg" alt="telegram icon"></img>
                    </IconSet>
                    <h5>© Copyright ipsum dolor Lore </h5>
                </TextColumn>
                <TextColumn>
                    <h5 style={{fontWeight: "500"}}>Lorem ipsum dolor</h5>
                    <h5>Lorem ipsum dolor</h5>
                    <h5>Lorem ipsum dolor</h5>
                </TextColumn>
                <TextColumn>
                    <h5 style={{fontWeight: "500"}}>Lorem ipsum dolor</h5>
                    <h5>FAQ</h5>
                    <h5>Privacy policy</h5>
                </TextColumn>
            </FooterStyled>
        </>
    );
}

export default Footer;
