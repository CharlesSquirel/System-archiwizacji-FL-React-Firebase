import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ActualUserInfo from "../ActualUserInfo/ActualUserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faFileSignature, faFile, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

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
  .icon {
    margin-right: 5px;
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLinks>
            <li>
              <Link to="/archive">
                <FontAwesomeIcon className="icon" icon={faBoxArchive}></FontAwesomeIcon>Archiwum
              </Link>
            </li>
            <li>
              <Link to="/contracts">
                <FontAwesomeIcon className="icon" icon={faFileSignature}></FontAwesomeIcon>Rejestr umów
              </Link>
            </li>
            <li>
              <Link to="/edicts">
                <FontAwesomeIcon className="icon" icon={faFile}></FontAwesomeIcon>Rejestr zarządzeń
              </Link>
            </li>
            <li>
              <Link to="/archive">
                <FontAwesomeIcon className="icon" icon={faCalendarDays}></FontAwesomeIcon>Rejestr koncertów
              </Link>
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
