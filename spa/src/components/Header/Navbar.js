import React, { useState, useEffect } from "react";
import { Button } from "../Buttons/Button.styled";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavItemBtn,
  MobileIcon,
  NavLinks,
  NavBtnLink,
} from "./Navbar.styled";

function Navbar({bgColor}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <Nav beige={bgColor}>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <img src="images\logo-mono-text.svg" alt="visiti logo" />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/" onClick={closeMobileMenu}>
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/tours" onClick={closeMobileMenu}>
                Find tour
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/for-agencies" onClick={closeMobileMenu}>
                For Agencies
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact-us" onClick={closeMobileMenu}>
                Contact us
              </NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/sign-up">
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/sign-up">
                  <Button onClick={closeMobileMenu} fontBig primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
