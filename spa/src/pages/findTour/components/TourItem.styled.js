import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

export const TourImg = styled.div`
  img {
    width: 350px;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    margin-right: 35px;
  }

  @media only screen and (max-width: 420px) {
    margin: 0 auto 10px;
    width: 90%;
    img {
      border-radius: 5px;
    }
  }
`;

export const TourDescription = styled.div`
  padding: 10px 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  h2 {
    width: 300px
  }

  @media only screen and (max-width: 420px) {
    width: 90%;
    margin: 0 auto;
    h2 {
      width: 70vw;
    }
  }
`;

export const DescriptionBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:10px;
`;

export const Review = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top:10px;
  @media only screen and (max-width: 420px) {
    align-items: flex-start;
    margin: 10px 0;
  }
`;