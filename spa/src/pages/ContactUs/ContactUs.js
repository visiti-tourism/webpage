import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
    ContactUsBackgroundWrapper,
    ContactUsContentWrapper,
    ContactUsInfo,
    ContactUsWrapper,
    PhoneButton,
    EmailButton,
    ContactUsFormWrapper,
    PhoneIcon,
    EmailIcon,
    Input, TextArea, InputWrapper, SendMessageButton, ErrorMessage, Label,
} from "./ContactUs.styled";
import axios from "axios";
import * as Yup from "yup";
import {useFormik} from "formik";

function ContactUs() {

    const {handleSubmit, handleChange, values, errors, touched} = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Name is required")
                .max(50, "Should not be longer than 50 characters"),
            email: Yup.string()
                .required("Email is required")
                .email("Email is not valid"),
            message: Yup.string()
                .required("Message field is required")
                .min(20, "Should have at least 20 characters")
                .max(2000, "Should not be longer than 2000 characters"),
        }),
        onSubmit: (values) => {
            const apiBaseUrl = "http://127.0.0.1:8000/feedback";
            const payload = {
                name: values.name,
                email: values.email,
                message: values.message,
            };

            axios.post(apiBaseUrl, payload)
                .then(function (response) {
                    console.log(response);
                    if (response.data.code === 200) {
                        console.log("200");
                    } else if (response.data.code === 204) {
                        console.log("F204");
                        alert("204")
                    } else {
                        console.log("????");
                        alert("???");
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
            <ContactUsBackgroundWrapper>
                <ContactUsContentWrapper>
                    <ContactUsWrapper>

                        <ContactUsInfo>
                            <h1>Get in touch</h1>
                            <h4>Hi! Do you have any questions regarding our service or partnership <br/>
                                possibilities? Feel free to adress these in a contact form below and<br/>
                                we’ll shortly provide you with answers via email or phone call. </h4>
                            <PhoneButton><PhoneIcon size={30}/><h3>+380 93 123 45 67</h3>
                            </PhoneButton>
                            <EmailButton><EmailIcon size={30}/><h3>visiti-info@gmail.com</h3>
                            </EmailButton>
                        </ContactUsInfo>

                        <ContactUsFormWrapper>
                            <InputWrapper onSubmit={handleSubmit}>
                                <Label htmlFor="name">Your Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
                                    value={values.name}/>
                                {errors.name && touched.name ? (
                                    <ErrorMessage>{errors.name}</ErrorMessage>
                                ) : null}

                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                    value={values.email}/>
                                {errors.email && touched.email ? (
                                    <ErrorMessage>{errors.email}</ErrorMessage>
                                ) : null}

                                <Label htmlFor="message">Message</Label>
                                <TextArea
                                    id="message"
                                    name="message"
                                    rows={10}
                                    onChange={handleChange}
                                    value={values.message}/>
                                {errors.message && touched.message ? (
                                    <ErrorMessage>{errors.message}</ErrorMessage>
                                ) : null}

                                <SendMessageButton primary htmlType="submit">Send Message</SendMessageButton>
                            </InputWrapper>

                            {/*<Formik*/}
                            {/*    initialValues={initialValues}*/}
                            {/*    validationSchema={validationSchema}*/}
                            {/*    onSubmit={handleClick}>*/}
                            {/*    <InputWrapper>*/}
                            {/*        <label>Your Name</label>*/}
                            {/*        <ContactUsInput type="text" name="name" onChange={handleChange}  />*/}
                            {/*        <ErrorMessage name="name" render={error => <h4>{error}</h4>} />*/}
                            {/*        <label>Email address</label>*/}
                            {/*        <ContactUsInput type="email" name="email" />*/}
                            {/*        <ErrorMessage name="email" render={error => <h4>{error}</h4>} />*/}
                            {/*        <label>Message</label>*/}
                            {/*        <ContactUsTextArea type="text" name="message" rows={10} onChange={handleChange}/>*/}
                            {/*        <ErrorMessage name="message" render={error => <h4>{error}</h4>} />*/}
                            {/*        <SendMessageButton primary htmlType="submit">Send Message</SendMessageButton>*/}
                            {/*    </InputWrapper>*/}
                            {/*</Formik>*/}
                        </ContactUsFormWrapper>
                    </ContactUsWrapper>
                </ContactUsContentWrapper>
            </ContactUsBackgroundWrapper>
            <Footer/>
        </>
    );

}

export default ContactUs;