import styled from "styled-components"

export const MainContainer = styled.div`
  padding-top: 75px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;