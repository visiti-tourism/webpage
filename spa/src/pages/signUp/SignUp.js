import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Buttons/Button.styled";
import { ContentImg, SignUpText, Content, SignUpInputs, RoleRadio, ChooseRole, NameInputs, DontHaveAcc, GoogleButton, BackgroundWrapper, ContentWrapper, LoginBtnLink } from "./SignUp.styled";

export const SignUp = () => (
    <React.Fragment>
        <BackgroundWrapper>
            <ContentWrapper>
                <SignUpText>
                    <h2>Create account</h2>
                </SignUpText>
                <Content>
                    <SignUpInputs>
                        <GoogleButton><img src="\images\icon-google.svg" alt="google icon"></img> Sign In with Google</GoogleButton>
                        <hr data-content="OR"></hr>
                        <label>Choose your role</label>
                        <ChooseRole>
                            <RoleRadio>
                                <input type="radio" name="role" value="tourist"></input>
                                <label>tourist</label>
                            </RoleRadio>
                            <RoleRadio>
                                <input type="radio" name="role" value="agency" ></input>
                                <label>agency</label>
                            </RoleRadio>
                        </ChooseRole>
                        <label>Email adress</label>
                        <input type="email"></input>
                        <NameInputs>
                            <div>
                            <label>Name</label>
                            <input type=""></input>
                            </div>
                            <div>
                            <label>Surname</label>
                            <input type=""></input>
                            </div>
                        </NameInputs>

                        <label>Password</label>
                        <input type="password"></input>
                        <DontHaveAcc>
                            <h5>Already have an account?</h5>
                            <Link to="/sign-in">Log In</Link>
                        </DontHaveAcc>
                        <LoginBtnLink to="/">
                            <Button primary>Create account</Button>
                        </LoginBtnLink>
                    </SignUpInputs>
                    <ContentImg>
                    <img src="images\illustration-1.svg" alt="illustration" />
                    </ContentImg>
                </Content>
            </ContentWrapper>
        </BackgroundWrapper>
    </React.Fragment>
);

export default SignUp;