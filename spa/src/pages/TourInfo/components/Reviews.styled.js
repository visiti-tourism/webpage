import styled from "styled-components";
import {colors} from "../../../constants/Styles";

export const ReviewsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ReviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 230px;

  h2 {
    margin-bottom: 50px;
  }

`;

export const UserInfo = styled.div`
  display: flex;
  margin-bottom: 20px;


  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;

    h3 {
      margin-bottom: 3px;
    }
  }
`;

export const ReviewItemWrapper = styled.div`
  margin: 0 0 50px 25px;
`;

export const UserIcon = styled.img`
  width: 65px;
  height: 65px;
`;

export const ReviewGraphicWrapper = styled.div`
  margin: 0;
  padding: 0;

  img {
    margin-top: 70px;
  }

`;

export const LoadMoreBtnWrapper = styled.div`
  margin-top: 25px;
  
  h3 {
    text-align: center;
    color: ${colors.COLOR_PRIMARY_100};
  }
  
`;