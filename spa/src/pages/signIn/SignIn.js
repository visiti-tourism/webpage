import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Buttons/Button.styled";
import { ContentImg, SignInText, Content, SignInInputs, DontHaveAcc, GoogleButton, BackgroundWrapper, ContentWrapper, LoginBtnLink } from "./SignIn.styled";

export const SignIn = () => (
    <React.Fragment>
        <BackgroundWrapper>
            <ContentWrapper>
                <SignInText>
                    <h2>Log in</h2>
                </SignInText>
                <Content>
                    <SignInInputs>
                        <GoogleButton><img src="\images\icon-google.svg" alt="google icon"></img> Sign In with Google</GoogleButton>
                        <hr data-content="OR"></hr>
                        <label>Email adress</label>
                        <input type="email"></input>
                        <label>Password</label>
                        <input type="password"></input>
                        <DontHaveAcc>
                            <h5>Don't have an account?</h5>
                            <Link to="/sign-up">
                                Sign Up
                            </Link>
                        </DontHaveAcc>
                        <LoginBtnLink to="/">
                            <Button primary>Log In</Button>
                        </LoginBtnLink>
                    </SignInInputs>
                    <ContentImg>
                    <img src="images\illustration-1.svg" alt="illustration" />
                    </ContentImg>
                </Content>
            </ContentWrapper>
        </BackgroundWrapper>
    </React.Fragment>
);

export default SignIn;