import React from "react";
import styled from "styled-components";

const LogoutBannerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-radius: 10px;
  background: green;
`;
const LogoutText = styled.p`
  color: var(--white);
`;

const LogoutBanner = () => {
  return (
    <LogoutBannerBox>
      <LogoutText>Zostałeś poprawnie wylogowany!</LogoutText>
    </LogoutBannerBox>
  );
};

export default LogoutBanner;
