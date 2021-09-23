import styled from "styled-components";
import {colors, fontSizes} from "./constants/Styles";

export const StyledApp = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

  body {
    font-size: 16px;
  }

  * {
    font-family: Rubik, sans-serif;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      font-weight: 400;
    }

    h1 {
      color: ${colors.TEXT_PRIMARY};
      font-size: ${fontSizes.font24};
      line-height: 43px;
      font-weight: 700;
    }

    h2 {
      color: ${colors.TEXT_PRIMARY};
      font-size: ${fontSizes.font19};
      font-weight: 500;
    }

    h3 {
      color: ${colors.TEXT_PRIMARY};
      font-size: ${fontSizes.font16};
      line-height: 25px;
      font-weight: 500;
    }

    h4 {
      color: ${colors.TEXT_SECONDARY};
      font-size: ${fontSizes.font14};
      line-height: 25px;
    }

    h5 {
      color: ${colors.TEXT_SECONDARY};
      font-size: ${fontSizes.font12};
    }

    h6 {
      color: ${colors.TEXT_PRIMARY};
      font-size: ${fontSizes.font10};
      font-weight: 500;
    }

    a {
      color: ${colors.TEXT_PRIMARY};
      font-size: ${fontSizes.font14};
      font-weight: 400;
      text-decoration: none;
    }
    
    span {
      color: ${colors.TEXT_PRIMARY};
      font-size: ${fontSizes.font14};
      line-height: 25px;
    }

    img {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }
  }

  @media only screen and (max-width: 420px) {
    h1 {
      color: ${colors.TEXT_PRIMARY};
      font-size: ${fontSizes.font16};
      line-height: 30px;
      font-weight: 700;
    }

    h2 {
      color: ${colors.TEXT_PRIMARY};
      font-size: ${fontSizes.font14};
    }

    h3 {
      color: ${colors.TEXT_PRIMARY};
      font-size: ${fontSizes.font12};
      line-height: 25px;
    }

    h4 {
      color: ${colors.TEXT_SECONDARY};
      font-size: ${fontSizes.font12};
      font-weight: 400;
      line-height: 25px;
    }

    h5 {
      color: ${colors.TEXT_SECONDARY};
      font-size: ${fontSizes.font10};
    }

    h6 {
      color: ${colors.TEXT_PRIMARY};
      font-size: ${fontSizes.font14};
    }
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 420px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Title = styled.div`
  color: ${colors.TEXT_PRIMARY};
  font-size: ${fontSizes.font19};
  font-weight: 700;
  text-align: center;
  margin: 100px 0 60px;
  @media only screen and (max-width: 420px) {
    font-size: ${fontSizes.font16};
    margin: 50px 0 30px;
  }
`;