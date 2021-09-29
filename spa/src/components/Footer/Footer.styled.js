import styled from "styled-components";
import {colors} from "../../constants/Styles";

export const FooterStyled = styled.div`
  box-sizing: border-box;
  width: 70%;
  height: 190px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 50px 60px 35px 60px;
  background: ${colors.COLOR_BEIGE};
  border-radius: 30px 30px 0 0;

  @media only screen and (max-width: 420px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
    padding: 25px 0 15px;
    height: max-content;
  }
`;

export const IconSet = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;

  @media only screen and (max-width: 420px) {
    margin: 10px auto;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right:50px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 90%;
  background-color: ${colors.TEXT_SECONDARY};
  margin: auto;
`;
