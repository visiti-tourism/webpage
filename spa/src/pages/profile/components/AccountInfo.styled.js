import styled from "styled-components"

export const UserImg = styled.div`

  @media screen and (max-width: 420px) {
  }
`;

export const AccountInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 420px) {
  }
`;
export const UserName = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
  padding-top: 25px;

  h2 {
    font-weight: 500;
  }

  @media screen and (max-width: 420px) {
  }
`;

export const UserDetailContainer = styled.ul`
  list-style: none;
  padding-top: 40px;
  @media screen and (max-width: 420px) {
  }
`;

export const UserDetailItem = styled.li`
  width: 340px;
  display: flex;
  justify-content: space-between;

  padding: 10px 0;

  @media screen and (max-width: 420px) {
    width: 80vw;
  }
`;

export const DetailItemName = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100px;

  img {
    padding-right: 20px;
  }

  @media screen and (max-width: 420px) {
  }
`;