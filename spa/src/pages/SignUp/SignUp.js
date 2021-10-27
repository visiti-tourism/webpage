import React from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import {
    ContentImg,
    SignUpText,
    Content,
    SignUpInputs,
    DontHaveAcc,
    GoogleButton,
    SignUpButton,
    SignUpWrapper,
    SignUpBackgroundWrapper,
    SignUpContentWrapper,
    HrWrapper,
    SignUpInput
} from "./SignUp.styled";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ErrorMessage, InputWrapper} from "../../components/Input/Input.styled";


function SignUp() {

    const {handleSubmit, handleChange, values, errors, touched} = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Email is required")
                .email("Email is not valid"),
            username: Yup.string()
                .required("Username is required"),
            password: Yup.string()
                .required("Password is required")
                .min(8, "Should not be shorter than 8 characters")
                .max(50, "Should not be longer than 50 characters")
                .matches(
                /[A-Za-z]/,
                "Must contain only latin letters")
                .matches(/[0-9]/, "Must contain at least 1 number"),

        }),
        onSubmit: (values) => {
            const apiBaseUrl = "http://127.0.0.1:8000/auth/jwt/create/";
            const payload = {
                "email": values.email,
                "username": values.username,
                "password:": values.password,
            };
            console.log(values);
            axios.post(apiBaseUrl, payload)
                .then(function (response) {
                    console.log(response);
                    if (response.data.code === 200) {
                        console.log("SignUp successful");
                    } else if (response.data.code === 204) {
                        console.log("Username password do not match");
                        alert("username password do not match")
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
            <SignUpBackgroundWrapper>
                <SignUpContentWrapper>
                    <SignUpWrapper>
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
                            <HrWrapper>
                                <hr/>
                                <h4>OR</h4>
                                <hr/>
                            </HrWrapper>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email"><h3>Email address</h3></label>
                                <InputWrapper>
                                    <SignUpInput
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && touched.email ? (
                                        <ErrorMessage>{errors.email}</ErrorMessage>
                                    ) : null}
                                </InputWrapper>
                                <label htmlFor="username"><h3>Username</h3></label>
                                <InputWrapper>
                                    <SignUpInput
                                        id="username"
                                        name="username"
                                        type="text"
                                        value={values.username}
                                        onChange={handleChange}
                                    />
                                    {errors.username && touched.username ? (
                                        <ErrorMessage>{errors.username}</ErrorMessage>
                                    ) : null}
                                </InputWrapper>
                                <label htmlFor="password"><h3>Password</h3></label>
                                <InputWrapper>
                                    <SignUpInput
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && touched.password ? (
                                        <ErrorMessage>{errors.password}</ErrorMessage>
                                    ) : null}
                                </InputWrapper>
                                <DontHaveAcc>
                                    <h5>Already have an account?</h5>
                                    <Link to="/sign-in">Sign In</Link>
                                </DontHaveAcc>
                                <SignUpButton primary htmlType="submit">Create account</SignUpButton>
                            </form>
                        </SignUpInputs>
                        <ContentImg>
                            <img src="images/illustration-1.svg" alt="illustration"/>
                        </ContentImg>
                    </Content>
                </SignUpContentWrapper>
            </SignUpBackgroundWrapper>
            <Footer/>
        </>
    );
}

export default SignUp;