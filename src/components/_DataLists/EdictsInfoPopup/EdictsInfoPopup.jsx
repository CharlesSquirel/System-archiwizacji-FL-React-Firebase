import React from "react";
import styled from "styled-components";

const StyledInfoPopup = styled.div`
  position: absolute;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  padding: 10px;
  background-color: var(--white);
  color: var(--black);
  border: 1px solid var(--primary);
  border-radius: 10px;
  text-align: left;
  span {
    font-weight: 600;
    font-size: 19px;
  }
  li {
    font-size: 17px;
    font-weight: 400;
  }
`;

const EdictsInfoPopup = () => {
  return (
    <StyledInfoPopup>
      <ul>
        <li>
          <span>DA</span> – Dział Artystyczny
        </li>
        <li>
          <span>DT</span> – Dział Techniczny
        </li>
        <li>
          <span>DK</span> – Dział Księgowy
        </li>
        <li>
          <span>K</span> – Kasa
        </li>
        <li>
          <span>S</span> – Sekretariat
        </li>
      </ul>
    </StyledInfoPopup>
  );
};

export default EdictsInfoPopup;
