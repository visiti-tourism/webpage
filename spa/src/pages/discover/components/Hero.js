import React from "react";
import {
    HeroDescriptionWraper,
    HeroText,
    HeroImg,
    HeroProsWraper,
    ProsItem,
} from "./Hero.styled";

function Hero() {
    return (
        <>
            <HeroDescriptionWraper>
                <HeroText>
                    <h1>
                        Brighten your <br/> traveling experience with Visiti!
                    </h1>
                    <h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac
                        dictum tellus diam. Quam tortor diam massa nec eu lobortis eget
                        aenean. Aliquam nascetur purus sed consequat quis nascetur est eget
                        vitae. Nunc suspendisse ac massa eget egestas{" "}
                    </h4>
                </HeroText>
                <HeroImg>
                    <img src="images\illustration-1.svg" alt="illustration"/>
                </HeroImg>
            </HeroDescriptionWraper>
            <HeroProsWraper>
                <ProsItem>
                    <img src="images\tickets-vector.svg" alt="illustration"/>
                    <h3>Discover unique tours!</h3>
                    <h4>
                        All the proposals are elements of complex tours which have never been
                        available separately
                    </h4>
                </ProsItem>
                <ProsItem>
                    <img src="images\money-vector.svg" alt="illustration"/>
                    <h3>Save some money!</h3>
                    <h4>We offer exclusive prices for hot tours</h4>
                </ProsItem>
                <ProsItem>
                    <img src="images\language-vector.svg" alt="illustration"/>
                    <h3>Enjoy your native language!</h3>
                    <h4>
                        Visiti has partnerships with local Ukrainian tour agencies that have
                        their local tour guides abroad
                    </h4>
                </ProsItem>
            </HeroProsWraper>
        </>
    );
}

export default Hero;
