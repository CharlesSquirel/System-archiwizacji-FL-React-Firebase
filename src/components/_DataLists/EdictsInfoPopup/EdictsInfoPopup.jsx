import React from "react";
import { StyledInfoPopup } from "../../GlobalStyle/GlobalComponents";

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
