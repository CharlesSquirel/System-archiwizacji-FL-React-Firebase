import React from "react";
import styled from "styled-components";

const BannerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => (props.error ? "var(--primary)" : "green")};
`;
const BanerText = styled.p`
  font-weight: 600;
  color: var(--white);
`;
const Banner = ({ text, error }) => {
  return (
    <BannerBox text={text} error={error}>
      <BanerText>{text}</BanerText>
    </BannerBox>
  );
};

export default Banner;
