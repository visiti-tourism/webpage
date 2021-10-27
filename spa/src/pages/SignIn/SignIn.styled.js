import styled from "styled-components"
import {colors} from "../../constants/Styles";
import {BackgroundWrapper, ContentWrapper} from "../../App.styled";
import {Button} from "../../components/Button/Button.styled";
import {Input} from "../../components/Input/Input.styled";

export const SignInBackgroundWrapper = styled(BackgroundWrapper)`
  height: 95vh;
  @media screen and (max-width: 420px) {
    height: 90vh;
  }
`;

export const SignInContentWrapper = styled(ContentWrapper)`
  width: 90%;
  @media screen and (max-width: 420px) {
    background-color: ${colors.COLOR_BEIGE_LIGHT};
    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const SignInWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 14vh 0 5vh 10vh;

  @media screen and (max-width: 420px) {
    padding: 15vh 0 5vh 17vh;
  }

`;

export const HrWrapper = styled.div`
  display: flex;
  width: 370px;
  align-items: center;

  h4 {
    padding: 0 5px;
  }

  @media screen and (max-width: 420px) {
    width: 270px;
  }
`;

export const SignInText = styled.div`
  h2 {
    padding-left: 7vw;
    font-weight: 500;
    font-size: 20px;
  }

  @media screen and (max-width: 420px) {
    justify-content: center;
    h2 {
      padding: 0;
    }
  }
`;

export const SignInInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #9098B1;

  label {
    align-self: flex-start;
    padding-bottom: 5px;

    h3 {
      padding-top: 20px;
      color: ${colors.TEXT_SECONDARY} !important;
    }
  }

  hr {
    width: 369px;
    line-height: 1em;
    position: relative;
    outline: 0;
    border: 0;
    color: black;
    text-align: center;
    height: 1.5em;
    opacity: .8;

    &:before {
      content: '';
      background-color: #9098B1;
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
    }

    &:after {
      content: attr(data-content);
      position: relative;
      display: inline-block;
      padding: 0 .5em;
      line-height: 1.5em;
      color: #9098B1;
      background-color: #fcfcfa;
    }
  }

  @media screen and (max-width: 420px) {

    hr {
      width: 80vw;
    }
  }
`;

export const SignInInput = styled(Input)`
  width: 363px;
  
  @media screen and (max-width: 420px) {
    width: 80vw;
  }

`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9098B1;
  width: 100%;
  height: 45px;
  font-weight: 500;
  background-color: white;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  margin-bottom: 20px;

  img {
    padding-right: 12px;
  }

  &:hover {
    cursor: pointer;
  }
`;
export const ContentImg = styled.div`
  padding-top: 5vh;

  img {
    width: 140%;
  }

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const DontHaveAcc = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  margin-top: 15px;

  h5 {
    padding: 0 10px;
  }

  a {
    font-size: 12px;
    color: #FE862C;
    text-decoration: none;
  }
`;

export const SignInButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 3vh 0 5vh 15vh;
`;