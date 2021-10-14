import styled from "styled-components"
import {Link} from "react-router-dom";
import {colors} from "../../constants/Styles";
import {BackgroundWrapper, ContentWrapper} from "../../App.styled";


export const SignUpBackgroundWrapper = styled(BackgroundWrapper)`
  height: 95vh;
  @media screen and (max-width: 420px) {
    height: 100vh;
  }
`;

export const SignUpContentWrapper = styled(ContentWrapper)`
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

export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 14vh 0 5vh 10vh;

  @media screen and (max-width: 420px) {
    padding: 0 0 5vh 12vh;
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

export const SignUpText = styled.div`

  h2 {
    padding-left: 7vw;
    font-weight: 500;
    font-size: 20px;
  }

  @media screen and (max-width: 420px) {
    justify-content: center;
    padding-top: 15vh;
    h2 {
      padding: 0;
    }
  }
`;

export const SignUpInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #9098B1;

  label {
    align-self: flex-start;
    padding-bottom: 5px;
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
    margin: 3vh 0;

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

    label {
      align-self: center;
      width: 80vw;
    }
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

  &:hover {
    cursor: pointer;
  }

  img {
    padding-right: 12px;
  }

  @media screen and (max-width: 420px) {
    width: 80vw;
  }
`;
export const ChooseRole = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 369px;
  padding: 10px 0;
  @media screen and (max-width: 420px) {
    label {
      padding-left: 0;
    }
  }
`;
export const RoleRadio = styled.div`
  display: flex;
  justify-content: center;

  input {
    width: 10px;
    height: 10px;
    border: 1px solid #E0E0E0;
  }

  @media screen and (max-width: 420px) {
    label {
      padding-left: 0;
      width: 20vw;
    }
  }
`;
export const NameInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 369px;

  input {
    width: 96%;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 420px) {
    input {
      width: 80vw;
    }

    label {
      padding-left: 0;
    }

    flex-direction: column;
    justify-content: flex-start;
`;
export const ContentImg = styled.div`
  padding-top: 15vh;

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

  h5 {
    padding: 0 10px;
  }

  a {
    font-size: 12px;
    color: #FE862C;
    text-decoration: none;
  }

  @media screen and (max-width: 420px) {
    align-self: center;
    width: 80vw;
  }
`;

export const LoginBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 3vh 0 5vh 0;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const StyledInput = styled.input`
  width: 363px;
  height: 40px;
  background-color: white;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    width: 80vw;
  }

`;