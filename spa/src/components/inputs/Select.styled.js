import styled from "styled-components";
import {colors} from "../../constants/StylingConstants"

export const Select = styled.select`
  height: 50px;
  width: 200px;
  padding: 16px;
  border-radius: 5px;
  border-color: ${colors.COLOR_BORDER_LIGHT};
  color: ${colors.TEXT_SECONDARY};

  &::selection {
    border-color: inherit;
  }
`;