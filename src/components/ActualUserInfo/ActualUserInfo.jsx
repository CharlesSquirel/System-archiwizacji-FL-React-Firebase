import React, { useContext } from "react";
import styled from "styled-components";
import { StyledButton } from "../GlobalStyle/GlobalComponents";
import { Context } from "../../Root";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const UserInfoWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--white);
`;
const UserInfoText = styled.p`
  text-shadow: var(--primary-text-shadow);
`;
const LogoutButton = styled(StyledButton)`
  width: 115px;
  height: 35px;
  font-size: 16px;
  padding: 5px;
  position: relative;
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--btn-shadow);
    position: absolute;
    bottom: -3px;
    z-index: -1;
    border-radius: 10px;
  }
  :hover::after {
    bottom: -1px;
  }
  :hover {
    bottom: -1px;
  }
`;

const ActualUserInfo = () => {
  const context = useContext(Context);
  const { actualUser, setIsLogged, setLogoutBaner } = context;
  const navigate = useNavigate();
  const logoutUser = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setIsLogged(false);
        navigate("/");
        setLogoutBaner(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <UserInfoWrapper>
      <UserInfoText>{actualUser}</UserInfoText>
      <LogoutButton onClick={logoutUser}>
        <FontAwesomeIcon icon={faRightFromBracket} /> Wyloguj
      </LogoutButton>
    </UserInfoWrapper>
  );
};

export default ActualUserInfo;
