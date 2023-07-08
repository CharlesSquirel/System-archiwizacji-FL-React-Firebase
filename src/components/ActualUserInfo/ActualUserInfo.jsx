import React, { useContext } from "react";
import { UserInfoWrapper, UserInfoText, LogoutButton } from "./StyledActualUserInfo";
import { Context } from "../../Root";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ActualUserInfo = () => {
  const context = useContext(Context);
  const user = context.actualUser;
  const setIsLogged = context.setIsLogged;
  const setLogoutBaner = context.setLogoutBaner;
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
      <UserInfoText>{user}</UserInfoText>
      <LogoutButton onClick={logoutUser}>Wyloguj</LogoutButton>
    </UserInfoWrapper>
  );
};

export default ActualUserInfo;
