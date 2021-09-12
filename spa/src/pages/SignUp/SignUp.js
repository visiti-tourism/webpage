import React, {useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import {Button} from "../../components/Button/Button.styled";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {
    ContentImg,
    SignUpText,
    Content,
    SignUpInputs,
    DontHaveAcc,
    GoogleButton,
    BackgroundWrapper,
    ContentWrapper,
    LoginBtnLink,
    StyledInput, SignUpWrapper
} from "./SignUp.styled";

function SignUp() {
    const [user, setUser] = useState(
        {
            email: '',
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
        const apiBaseUrl = "http://127.0.0.1:8000/auth/users/";
        const payload = {
            "email": user.email,
            "username": user.username,
            "password": user.password
        }
        console.log(user);
        axios.post(apiBaseUrl, payload)
            .then(function (response) {
                console.log(response);
                if (response.data.code === 200) {
                    console.log("Login successful");
                } else if (response.data.code === 204) {
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <>
            <BackgroundWrapper>
                <ContentWrapper>
                    <SignUpWrapper>
                        <Link to="/">
                            <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
                        </Link>
                        <SignUpText>
                            <h2>Create Account</h2>
                        </SignUpText>
                    </SignUpWrapper>

                    <Content>
                        <SignUpInputs>
                            <a href="http://localhost:8000/accounts/google/login/?process=login">
                                <GoogleButton><img src="/images/icon-google.svg" alt="google icon"></img> Sign Up with
                                    Google</GoogleButton>
                            </a>
                            <hr data-content="OR"></hr>
                            <label>Email address</label>
                            <StyledInput value={user.email} type="email" onChange={handleChange}
                                         name="email"></StyledInput>
                            <label>Username</label>
                            <StyledInput value={user.username} type="name" onChange={handleChange}
                                         name="username"></StyledInput>
                            <label>Password</label>
                            <StyledInput value={user.password} type="password" onChange={handleChange}
                                         name="password"></StyledInput>
                            <DontHaveAcc>
                                <h5>Already have an account?</h5>
                                <Link to="/sign-in">Sign In</Link>
                            </DontHaveAcc>
                            <LoginBtnLink to="/">
                                <Button primary htmlType="submit" onClick={handleClick}>Create account</Button>
                            </LoginBtnLink>
                        </SignUpInputs>
                        <ContentImg>
                            <img src="images/illustration-1.svg" alt="illustration"/>
                        </ContentImg>
                    </Content>
                </ContentWrapper>
            </BackgroundWrapper>
        </>
    );
}

export default SignUp;