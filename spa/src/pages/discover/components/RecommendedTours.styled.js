import styled from "styled-components";

export const PopularToursWraper = styled.div`
  width: 85%;
  margin: 45px auto;
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 420px) {
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const PopularToursDescription = styled.div`
  width: 53%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 68px;
  @media only screen and (max-width: 420px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const DescriptionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const PopularToursImg = styled.div`
  width: 35%;
  img {
    width: 100%;
    border-radius: 40px;
  }
  @media only screen and (max-width: 420px) {
    margin: 0 auto 10px;
    width: 90%;
    img {
      border-radius: 20px;
    }
  }
`;

export const Location = styled.div`
  margin: 5px 0;
  width: max-content;
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
