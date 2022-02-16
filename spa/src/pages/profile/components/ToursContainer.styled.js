import styled from "styled-components"


export const TourContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 420px) {
    align-self: center;
  }
`;

export const ToursList = styled.div`

  padding: 40px 0;
  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ListTitle = styled.div`
  h2 {
    font-weight: 600;
  }

  @media screen and (max-width: 420px) {
    width: 80vw;
    margin: 0 auto;
  }
`;

export const ListItemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 25px;
  @media screen and (max-width: 420px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;


export const TourItem = styled.div`
  margin-right: 75px;
  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 35px;
  }
`;
export const TourItemImg = styled.div`
  background-color: orange;
  width: 233px;
  height: 156px;
  border-radius: 15px;
  @media screen and (max-width: 420px) {
    margin: 0 auto;
  }
`;
export const TourItemTitle = styled.h2`
  padding: 15px 0 0 5px;
  width: 220px;
  @media screen and (max-width: 420px) {
    padding: 5px 0 0 5px;
  }
`;

export const TourItemDetails = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 10px;
  @media screen and (max-width: 420px) {
  }
`;

export const TourItemTime = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;

  img {
    padding-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 12px;
    color: #FE862C;
    margin: 3px 0 0 0;
  }

  @media screen and (max-width: 420px) {
  }
`;
export const TourItemLocation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;

  img {
    padding-right: 10px;
  }

  @media screen and (max-width: 420px) {
  }
`;