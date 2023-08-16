import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ActualUserInfo from "../ActualUserInfo/ActualUserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faFileSignature, faFile, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import logoFL from "../../assets/logo.FL.svg";

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
    /* transition: width 0.3s ease-out; */
    width: 240px;
    span {
      display: block;
    }
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
    span {
      display: none;
    }
    /* ::after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      background-color: var(--btn-shadow);
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 15px;
    } */
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
              <Link to="/archive" data-text="Archiwum">
                <FontAwesomeIcon className="icon" icon={faBoxArchive}></FontAwesomeIcon>
                <span>Archiwum</span>
              </Link>
            </li>
            <li>
              <Link to="/contracts" data-text="Rejestr umów">
                <FontAwesomeIcon className="icon" icon={faFileSignature}></FontAwesomeIcon>
                <span>Rejestr umów</span>
              </Link>
            </li>
            <li>
              <Link to="/edicts" data-text="Rejestr zarządzeń">
                <FontAwesomeIcon className="icon" icon={faFile}></FontAwesomeIcon>
                <span>Rejestr zarządzeń</span>
              </Link>
            </li>
            <li>
              <Link to="/record" data-text="Rejestr koncertów">
                <FontAwesomeIcon className="icon" icon={faCalendarDays}></FontAwesomeIcon>
                <span>Rejestr koncertów</span>
              </Link>
            </li>
          </StyledNavLinks>
        </StyledNav>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Header;
