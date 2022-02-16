import styled from "styled-components"
import {colors, fontSizes} from "../../constants/Styles"

export const Input = styled.input`
  height: 40px;
  color: ${colors.TEXT_PRIMARY};
  background-color: #FFF;
  border: 1px solid ${colors.COLOR_BORDER_LIGHT};
  border-radius: 7px;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  padding: 0 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.span`
  margin: 0 10px;
  color: #FD465B;
  font-size: 14px !important;
  font-weight: 400;

  @media only screen and (max-width: 420px) {
    font-size: ${fontSizes.font12} !important;
`;
