import styled from "styled-components";
import {colors} from "../../../constants/Styles";
import {Button} from "../../../components/Button/Button.styled";

export const PriceOptionsWrapper = styled.div`

`;

export const TitleWrapper = styled.div`
    margin:25px 0 0 85px;
`;

export const PriceOptionsBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 22px 0 53px 40px;
`;

export const DescriptionItemsWrapper = styled.div`
  margin: 25px 0;

  div {
    display: flex;
    align-items: center;
    margin: 0 0 8px 50px;

    h4 {
      margin-left: 10px;
    }
  }
`;

export const PriceTitle = styled.h1`
  color: ${colors.COLOR_PRIMARY_100} !important;
  margin-top: 20px !important;

  span {
    font-weight: 300;
    color: ${colors.TEXT_SECONDARY};
  }
`;

export const SelectBtn = styled(Button)`
  height: auto;
  padding: 13px 65px;
`;

export const SelectBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px ;
`;


