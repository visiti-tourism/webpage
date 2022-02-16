import styled from "styled-components";

export const HeroDescriptionWrapper = styled.div`
  margin: 45px auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 420px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
  }
`;

export const HeroText = styled.div`
  width: 65%;
  text-align: right;

  h1 {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 420px) {
    width: 80%;
    text-align: center;
  }
`;

export const HeroImg = styled.div`
  width: 30%;
  @media only screen and (max-width: 420px) {
    width: 65%;
  }
`;

export const HeroProsWrapper = styled.div`
  margin: 90px auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 420px) {
    flex-direction: column;
    width: 100%;
    gap: 25px;
  }
`;

export const ProsItem = styled.div`
  img {
    width: 26%;
    margin-bottom: 10px;
    
  }

  width: 28%;
  text-align: center;

  h3 {

    line-height: 25px;
  }

  h4 {
    line-height: 25px;

  }

  @media only screen and (max-width: 420px) {
    img {
      width: 20%;
    }

    width: 90%;
  }
`;
