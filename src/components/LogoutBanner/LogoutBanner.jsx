import React from "react";
import styled from "styled-components";

const LoginBannerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => (props.text === "Zostałeś poprawnie wylogowany!" ? "green" : "var(--primary)")};
`;
const LoginText = styled.p`
  font-weight: 600;
  color: var(--white);
`;
const LoginBanner = ({ text }) => {
  return (
    <LoginBannerBox text={text}>
      <LoginText>{text}</LoginText>
    </LoginBannerBox>
  );
};

export default LoginBanner;
