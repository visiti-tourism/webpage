import React, {useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import {Button} from "../../components/Button/Button.styled";
import {
    BackgroundWrapper,
    Content,
    ContentImg,
    ContentWrapper,
    DontHaveAcc,
    GoogleButton, HrWrapper,
    LoginBtnLink,
    SignInInputs,
    SignInText, SignInWrapper,
    StyledInput
} from "./SignIn.styled";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function SignIn() {
    const [user, setUser] = useState(
        {
            username: '',
            password: ''
        }
    );
    const handleChange = e => {
        const {name, value} = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleClick = () => {
        const apiBaseUrl = "http://127.0.0.1:8000/auth/jwt/create/";
        const payload = {
            "username": user.username,
            "password": user.password
        };
        console.log(user);
        axios.post(apiBaseUrl, payload)
            .then(function (response) {
                console.log(response);
                if (response.data.code === 200) {
                    console.log("Login successful");
                } else if (response.data.code === 204) {
                    console.log("Username password do not match");
                    alert("username password do not match")
                } else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <Navbar/>
            <BackgroundWrapper>
                <ContentWrapper>
                    <SignInWrapper>
                        <SignInText>
                            <h2>Log in</h2>
                        </SignInText>
                    </SignInWrapper>
                    <Content>
                        <SignInInputs>
                            <a href="http://localhost:8000/accounts/google/login/?process=login">
                                <GoogleButton><img src="/images/icon-google.svg" alt="google icon"></img> Sign In with
                                    Google</GoogleButton>
                            </a>
                            <HrWrapper>
                                <hr/>
                                <h4>OR</h4>
                                <hr/>
                            </HrWrapper>
                            <label>Email address</label>
                            <StyledInput value={user.email} type="email" onChange={handleChange}
                                         name="email"></StyledInput>
                            <label>Password</label>
                            <StyledInput value={user.password} type="password" onChange={handleChange}
                                         name="password"></StyledInput>
                            <DontHaveAcc>
                                <h5>Don't have an account?</h5>
                                <Link to="/sign-up">
                                    Sign Up
                                </Link>
                            </DontHaveAcc>
                            <LoginBtnLink to="/">
                                <Button primary htmlType="submit" onClick={handleClick}>Log In</Button>
                            </LoginBtnLink>
                        </SignInInputs>
                        <ContentImg>
                            <img src="images/illustration-1.svg" alt="illustration"/>
                        </ContentImg>
                    </Content>
                </ContentWrapper>
            </BackgroundWrapper>
            <Footer/>
        </>
    );
}

export default SignIn;