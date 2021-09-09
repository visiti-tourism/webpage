import styled from "styled-components";

export const FindTourWrapper = styled.div`
  height: 80px;
  width: 465px;
  margin: 50px auto 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 420px) {
    flex-direction: column;
    width: 85%;
    height: 200px;
    margin: 0 auto 20px;
    img {
      width: 15%;
    }
  }
`;

export const Text = styled.div`
  margin: 0 15px;
  text-align: center;
  width: 270px;
  @media only screen and (max-width: 420px) {
    width: 85%;
  }
`;
