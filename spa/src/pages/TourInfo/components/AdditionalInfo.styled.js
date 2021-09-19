import styled from "styled-components";
import {colors, fontSizes} from "../../../constants/Styles";

export const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 60px auto 60px 400px;

  h2 {
    font-weight: 500;
    margin: 30px 0 25px 0;
  }

  h4 {
    margin-left: 25px;
  }

  div {
    display: flex;
    align-items: center;
    margin: 0 0 10px 25px;

    h4 {
      margin-left: 20px;
    }
  }

  ul {
    margin: 0;
    padding-right: 25px;

    li {
      color: ${colors.TEXT_SECONDARY};
      margin: 0;
    }
  }

`;

export const SubTitle = styled.span`
  display: flex;
  color: ${colors.TEXT_PRIMARY};
  font-size: ${fontSizes.font14};
  line-height: 25px;

  h4 {
    margin-left: 5px;
  }
`;

