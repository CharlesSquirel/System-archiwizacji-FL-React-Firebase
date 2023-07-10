import React from "react";
import styled from "styled-components";

const BannerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => (props.text === "Zostałeś poprawnie wylogowany!" ? "green" : "var(--primary)")};
`;
const BanerText = styled.p`
  font-weight: 600;
  color: var(--white);
`;
const Banner = ({ text }) => {
  return (
    <BannerBox text={text}>
      <BanerText>{text}</BanerText>
    </BannerBox>
  );
};

export default Banner;
