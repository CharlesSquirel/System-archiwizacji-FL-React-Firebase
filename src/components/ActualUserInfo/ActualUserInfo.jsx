import React, { useContext } from "react";
import styled from "styled-components";
import { StyledButton } from "../GlobalStyle/GlobalComponents";
import { Context } from "../../Root";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserInfoWrapper = styled.div`
  display: flex;
  gap: 8px;
  color: var(--white);
`;
const UserInfoText = styled.p`
  text-shadow: var(--primary-text-shadow);
`;
const LogoutButton = styled(StyledButton)`
  width: 100px;
  height: auto;
  font-size: 16px;
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
      <LogoutButton onClick={logoutUser}>Wyloguj</LogoutButton>
    </UserInfoWrapper>
  );
};

export default ActualUserInfo;
