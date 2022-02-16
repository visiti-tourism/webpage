import styled from "styled-components";

export const NewToursWrapper = styled.div`
  width: 90%;
  margin: 60px auto 0;
  display: flex;
  @media only screen and (max-width: 420px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const NewToursLayoutSmall = styled.div`
  width: 42%;
  margin-right: 10%;
  
  @media only screen and (max-width: 420px) {
    width: 90%;
    margin: 35px auto 0;
  }
  
`;

export const NewToursLayoutBig = styled.div`
  width: 58%;
  
  @media only screen and (max-width: 420px) {
    width: 90%;
    margin: 0 auto;
  }
  
`;

export const BigTourImg = styled.div`
  img {
    width: 600px;
    height: 362px;
    object-fit: cover;
    border-radius: 20px;
  }

  @media only screen and (max-width: 420px) {
    margin: 0 auto;
    border-radius: 10px;
    img {
      width: 100%;
      height: 222px;
    }
  }
`;

export const BigTourText = styled.div`
  width: 96%;
  margin: 37px 0 0 10px;

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  h4 {
    margin-top: 22px;
  }
`;

export const SmallTour = styled.div`
  width: 100%;
  height: 175px;
  display: flex;
  margin-bottom: 40px;
`;

export const SmallTourImg = styled.div`
  img {
    width: 140px;
    height: 175px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const SmallTourText = styled.div`
  margin: 10px 0 0 20px;

  h3 {
    margin: 10px 0 22px 0;
  }
`;

export const Location = styled.div`
  margin: 5px 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 25px;

  img {
    height: 18px;
    margin-right: 10px;
  }

  h5 {
    margin-left: 10px;
  }
`;
