import React from "react";
import { UserInfoWrapper, UserInfoText, LogoutButton } from "./StyledActualUserInfo";

const ActualUserInfo = () => {
  return (
    <UserInfoWrapper>
      <UserInfoText>Aktualny user</UserInfoText>
      <LogoutButton>Wyloguj</LogoutButton>
    </UserInfoWrapper>
  );
};

export default ActualUserInfo;
