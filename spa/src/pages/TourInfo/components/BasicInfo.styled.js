import styled from "styled-components";
import {Link} from "react-router-dom";
import {colors} from "../../../constants/Styles";


export const BasicInfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 60px auto;
  height: 900px;

`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    height: 18px;
    margin-right: 10px;
  }
`;

export const BasicInfoDescription = styled.div`
  h1 {
    line-height: 35px;
    margin-bottom: 10px;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  div {
    background-color: ${colors.COLOR_BEIGE};
    width: 100px;
    height: 30px;
    margin: 10px 15px 0 0;

    h4 {
      padding: 4px 16px;
      text-align: center;
    }
  }
`;

export const Reviews = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  img {
    height: 18px;
    margin-right: 10px;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  h2 {
    font-weight: 500;
    margin-left: 10px;
  }
`;

export const BuyBtnLink = styled(Link)`
  margin-right: 20px;
`;

export const SeePriceBtnLink = styled(Link)`
`;

export const BasicInfoSliderWrapper = styled.div`
  width: 660px;
  height: 350px;
  margin-left: 35px;
`;