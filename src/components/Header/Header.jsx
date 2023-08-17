import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ActualUserInfo from "@ActualUserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faFileSignature, faFile, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import logoFL from "../../_assets/logo.svg";

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100px;
  height: 100vh;
  background-color: var(--primary);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px 0 0 0px;
  z-index: 1;
  :hover {
    transition: width 0.3s ease-out;
    width: 240px;
    span {
      display: block;
    }
  }
  .active::after {
    content: "";
    width: 32px;
    height: 2px;
    background-color: var(--white);
    position: absolute;
    bottom: 0;
    left: 7px;
  }
  li a:not(.active) {
    opacity: 0.7
  }
`;

const StyledLogoMenu = styled.img`
  width: 100px;
  height: 100px;
`;
const StyledNav = styled.nav``;
const StyledNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 23px;
  gap: 30px;
  li a {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    border-radius: 10px;
    padding: 8px;
    color: var(--white);
    font-weight: 500;
    width: 208px;
    :hover {
      opacity: 1;
    }
    span {
      display: none;
    }
  }
  .icon {
    margin-right: 5px;
    font-size: 32px;
  }
`;

const Header = () => {
  return (
    <>
      <ActualUserInfo />
      <StyledHeader>
        <StyledLogoMenu src={logoFL} alt="logo" />
        <StyledNav>
          <StyledNavLinks>
            <li>
              <NavLink to="/archive" data-text="Archiwum">
                <FontAwesomeIcon className="icon" icon={faBoxArchive}></FontAwesomeIcon>
                <span>Archiwum</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contracts" data-text="Rejestr umów">
                <FontAwesomeIcon className="icon" icon={faFileSignature}></FontAwesomeIcon>
                <span>Rejestr umów</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/edicts" data-text="Rejestr zarządzeń">
                <FontAwesomeIcon className="icon" icon={faFile}></FontAwesomeIcon>
                <span>Rejestr zarządzeń</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/record" data-text="Rejestr koncertów">
                <FontAwesomeIcon className="icon" icon={faCalendarDays}></FontAwesomeIcon>
                <span>Rejestr koncertów</span>
              </NavLink>
            </li>
          </StyledNavLinks>
        </StyledNav>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Header;
