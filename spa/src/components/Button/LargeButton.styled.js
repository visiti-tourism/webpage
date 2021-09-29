import styled from "styled-components"
import {colors} from "../../constants/Styles"

export const LargeButton = styled.button`
  background-color: ${colors.COLOR_WHITE};
  outline: none;
  border-radius: 5px;
  width: 285px;
  height: 400px;
  margin-right: 50px;
  background-color: ${colors.COLOR_BEIGE_LIGHT};
  border: 1px solid ${colors.COLOR_BORDER_PRIMARY};

  &:focus {
    transition: all 0.3s ease-out;
    border: 1px solid ${colors.COLOR_PRIMARY_100};
  }

  h3 {
    margin-bottom: 5px;
  }
  
  span {
    color: ${colors.TEXT_PRIMARY};
  }
`;