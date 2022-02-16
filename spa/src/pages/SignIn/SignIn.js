import React from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import {
    Content,
    ContentImg,
    DontHaveAcc,
    GoogleButton,
    HrWrapper,
    SignInButton,
    SignInBackgroundWrapper,
    SignInContentWrapper,
    SignInInputs,
    SignInText,
    SignInWrapper,
    SignInInput
} from "./SignIn.styled";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ErrorMessage, InputWrapper} from "../../components/Input/Input.styled";

function SignIn() {

    const {handleSubmit, handleChange, values, errors, touched} = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Email is required")
                .email("Email is not valid"),
            password: Yup.string()
                .required("Password is required")
        }),
        onSubmit: (values) => {
            const apiBaseUrl = "http://127.0.0.1:8000/auth/jwt/create/";
            const payload = {
                "email": values.email,
                "password": values.password,
            };
            console.log(values);
            axios.post(apiBaseUrl, payload)
                .then(function (response) {
                    console.log(response);
                    if (response.data.code === 200) {
                        console.log("SignIn successful");
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
        }
    });

    return (
        <>
            <Navbar/>
            <SignInBackgroundWrapper>
                <SignInContentWrapper>
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
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email"><h3>Email address</h3></label>
                                <InputWrapper>
                                    <SignInInput wide id="email"
                                                 name="email"
                                                 type="email"
                                                 value={values.email}
                                                 onChange={handleChange}/>
                                    {errors.email && touched.email ? (
                                        <ErrorMessage>{errors.email}</ErrorMessage>
                                    ) : null}
                                </InputWrapper>
                                <label htmlFor="password"><h3>Password</h3></label>
                                <InputWrapper>
                                    <SignInInput id="password"
                                                 name="password"
                                                 type="password"
                                                 value={values.password}
                                                 onChange={handleChange}/>
                                    {errors.password && touched.password ? (
                                        <ErrorMessage>{errors.password}</ErrorMessage>
                                    ) : null}
                                </InputWrapper>
                                <DontHaveAcc>
                                    <h5>Don't have an account?</h5>
                                    <Link to="/sign-up">
                                        Sign Up
                                    </Link>
                                </DontHaveAcc>
                                <SignInButton primary htmlType="submit">Log In</SignInButton>
                            </form>
                        </SignInInputs>
                        <ContentImg>
                            <img src="images/illustration-1.svg" alt="illustration"/>
                        </ContentImg>
                    </Content>
                </SignInContentWrapper>
            </SignInBackgroundWrapper>
            <Footer/>
        </>
    );
}

export default SignIn;