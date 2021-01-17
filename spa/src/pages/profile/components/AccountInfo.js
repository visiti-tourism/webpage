import React from "react";
import { AccountInfoWrapper, UserImg, UserName, UserDetailContainer, UserDetailItem, DetailItemName } from "./AccountInfo.styled";


export const AccountInfo = () => (
    <React.Fragment>
        <AccountInfoWrapper>
            <UserImg><img src="\images\icon-user.svg" alt="user icon"></img></UserImg>
            <UserName><h2>James Lawson</h2> <img src="\images\icon-edit.svg" alt="edit icon"></img></UserName>
            <UserDetailContainer>
                <UserDetailItem>
                    <DetailItemName>
                        <img src="\images\icon-gender.svg" alt="gender icon"></img>
                        <h2>Gender</h2>
                    </DetailItemName>
                    <h4>Male</h4>
                </UserDetailItem>
                <UserDetailItem>
                    <DetailItemName>
                        <img src="\images\icon-birthday.svg" alt="birthday icon"></img>
                        <h2>Birthday</h2>
                    </DetailItemName>
                    <h4>12-12-2000</h4>
                </UserDetailItem>
                <UserDetailItem>
                    <DetailItemName>
                        <img src="\images\icon-email.svg" alt="email icon"></img>
                        <h2>Email</h2>
                    </DetailItemName>
                    <h4>Derlaxy@yahoo.com</h4>
                </UserDetailItem>
                <UserDetailItem>
                    <DetailItemName>
                        <img src="\images\icon-password.svg" alt="password icon"></img>
                        <h2>Password</h2>
                    </DetailItemName>
                    <h4>•••••••••••••••••</h4>
                </UserDetailItem>
            </UserDetailContainer>
        </AccountInfoWrapper>
    </React.Fragment>
);

export default AccountInfo;