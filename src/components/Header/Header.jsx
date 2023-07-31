import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ActualUserInfo from "../ActualUserInfo/ActualUserInfo";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 100vw;
  padding: 30px 40px;
`;

const StyledNav = styled.nav``;
const StyledNavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  li a {
    width: 100px;
    height: 50px;
    border-radius: 10px;
    padding: 8px;
    background-color: var(--primary);
    color: var(--white);
    font-weight: 500;
    :hover {
      opacity: 0.85;
    }
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLinks>
            <li>
              <Link to="/archive">Archiwum</Link>
            </li>
            <li>
              <Link to="/contracts">Rejestr umów</Link>
            </li>
            <li>
              <Link to="/edicts">Rejestr zarządzeń</Link>
            </li>
            <li>
              <Link to="/archive">Rejestr koncertów</Link>
            </li>
          </StyledNavLinks>
        </StyledNav>
        <ActualUserInfo />
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Header;
