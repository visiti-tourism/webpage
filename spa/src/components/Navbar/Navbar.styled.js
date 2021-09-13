import styled from "styled-components";
import {Link} from "react-router-dom";
import {colors, fontSizes} from "../../constants/Styles";
import {Container} from "../../App.styled";

export const Nav = styled.nav`
  background: ${({beige}) => (beige ? colors.COLOR_BEIGE : colors.COLOR_WHITE)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 85px;
  ${Container};

  h2 {
    display: none;
  }

  @media screen and (max-width: 420px) {
    h2 {
      display: inline;
    }
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 420px) {
    display: block;
    position: absolute;
    top: 14px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: ${fontSizes.font19};
    color: ${colors.TEXT_PRIMARY};
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding:0;
  
  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 60px;
    left: ${({click}) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${colors.COLOR_PRIMARY_100};
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    margin: 0;
    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`

  @media screen and (max-width: 420px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.25rem 1.5rem;
  height: 100%;
  width: 100%;

  &:hover {
    color: ${colors.TEXT_PRIMARY};
    text-decoration: none;
  }

  &:active {
    color: ${colors.TEXT_PRIMARY};
    text-decoration: none;
  }

  &:focus {
    color: ${colors.TEXT_PRIMARY};
    text-decoration: none;
  }

  @media screen and (max-width: 420px) {
    box-sizing: border-box;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    
    &:hover {
      color: ${colors.COLOR_PRIMARY_100};
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 4px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }

`;
