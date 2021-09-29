import styled from "styled-components";
import {colors} from "../../../constants/Styles";

export const Wrapper = styled.div`
  background-color: ${colors.COLOR_WHITE};
  width: 450px;
  border-radius: 30px;
  padding-left:30px;

  h3 {
    margin: 20px 15px 10px;
    font-weight: 500;
  }

  @media screen and (max-width: 420px) {
    width: 80vw;
    margin: 0 auto;
    padding-bottom: 5vh;
  }
`;

export const FilterDesktop = styled.div`

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const FilterMobile = styled.div`
  display: none;
  @media screen and (max-width: 420px) {
    display: inline;
  }
`;
