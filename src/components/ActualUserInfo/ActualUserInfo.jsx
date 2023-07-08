import React, { useContext } from "react";
import { UserInfoWrapper, UserInfoText, LogoutButton } from "./StyledActualUserInfo";
import { Context } from "../../Root";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
