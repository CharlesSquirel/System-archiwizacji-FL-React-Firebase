import React from "react";
import styled from "styled-components";

const LogoutBannerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 30px;
  border-radius: 10px;
  background: green;
`;
const LogoutText = styled.p`
  font-weight: 600;
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
