import React from "react";
import styled from "styled-components";

const BannerBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${(props) => (props.baner === "login_page" ? "120px" : "-51px")};
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => (props.error ? "var(--primary)" : "green")};
  z-index: 1;
`;
const BanerText = styled.p`
  font-weight: 600;
  color: var(--white);
`;
const Banner = ({ text, error, baner }) => {
  return (
    <BannerBox baner={baner} text={text} error={error}>
      <BanerText>{text}</BanerText>
    </BannerBox>
  );
};

export default Banner;
