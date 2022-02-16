import React from "react";
import {
    ReviewListWrapper,
    ReviewGraphicWrapper,
    ReviewsWrapper,
    UserIcon,
    UserInfo,
    ReviewItemWrapper, LoadMoreBtnWrapper
} from "./Reviews.styled";

function Reviews() {
    return (
        <>
            <ReviewsWrapper>
                <ReviewListWrapper>
                    <h2>Reviews ( 36 )</h2>
                    <ReviewItemWrapper>
                        <UserInfo>
                            <UserIcon src="\images\icon-user.svg" alt="user icon"/>
                            <div>
                                <h3>James Lawson</h3>
                                <img src="images/icon-4-stars.svg" alt="4 stars"/>
                            </div>
                        </UserInfo>
                        <h4>December 10, 2016</h4>
                        <br/>
                        <h4>I was picked up at my hotel and taken to meet my guide. Davide is a superb<br/> guide. His
                            knowledge is great and explains things in an easy way to<br/> understand . The tour exceeded
                            my
                            expirations. Ask for Davide!
                        </h4>
                    </ReviewItemWrapper>
                    <ReviewItemWrapper>
                        <UserInfo>
                            <UserIcon src="\images\icon-user.svg" alt="user icon"/>
                            <div>
                                <h3>James Lawson</h3>
                                <img src="images/icon-4-stars.svg" alt="4 stars"/>
                            </div>
                        </UserInfo>
                        <h4>December 10, 2016</h4>
                        <br/>
                        <h4>I was picked up at my hotel and taken to meet my guide. Davide is a superb<br/> guide. His
                            knowledge is great and explains things in an easy way to<br/> understand . The tour exceeded
                            my
                            expirations. Ask for Davide!
                        </h4>
                    </ReviewItemWrapper>
                    <ReviewItemWrapper>
                        <UserInfo>
                            <UserIcon src="\images\icon-user.svg" alt="user icon"/>
                            <div>
                                <h3>James Lawson</h3>
                                <img src="images/icon-4-stars.svg" alt="4 stars"/>
                            </div>
                        </UserInfo>
                        <h4>December 10, 2016</h4>
                        <br/>
                        <h4>I was picked up at my hotel and taken to meet my guide. Davide is a superb<br/> guide. His
                            knowledge is great and explains things in an easy way to<br/> understand . The tour exceeded
                            my
                            expirations. Ask for Davide!
                        </h4>
                    </ReviewItemWrapper>
                    <ReviewItemWrapper>
                        <UserInfo>
                            <UserIcon src="\images\icon-user.svg" alt="user icon"/>
                            <div>
                                <h3>James Lawson</h3>
                                <img src="images/icon-4-stars.svg" alt="4 stars"/>
                            </div>
                        </UserInfo>
                        <h4>December 10, 2016</h4>
                        <br/>
                        <h4>I was picked up at my hotel and taken to meet my guide. Davide is a superb<br/> guide. His
                            knowledge is great and explains things in an easy way to<br/> understand . The tour exceeded
                            my
                            expirations. Ask for Davide!
                        </h4>
                    </ReviewItemWrapper>
                    <ReviewItemWrapper>
                        <UserInfo>
                            <UserIcon src="\images\icon-user.svg" alt="user icon"/>
                            <div>
                                <h3>James Lawson</h3>
                                <img src="images/icon-4-stars.svg" alt="4 stars"/>
                            </div>
                        </UserInfo>
                        <h4>December 10, 2016</h4>
                        <br/>
                        <h4>I was picked up at my hotel and taken to meet my guide. Davide is a superb<br/> guide. His
                            knowledge is great and explains things in an easy way to<br/> understand . The tour exceeded
                            my
                            expirations. Ask for Davide!
                        </h4>
                    </ReviewItemWrapper>
                </ReviewListWrapper>
                <ReviewGraphicWrapper>
                    <img src="images/reviews-graphic.svg" alt="reviews graphic"/>
                </ReviewGraphicWrapper>
            </ReviewsWrapper>
            <LoadMoreBtnWrapper>
                <h3>Load more reviews</h3>
            </LoadMoreBtnWrapper>
        </>
    );
}

export default Reviews;