import React from "react";
import { StyledInfoPopup } from "../../GlobalStyle/GlobalComponents";

const RecordsInfoPopup = () => {
  return (
    <StyledInfoPopup>
      <ul>
        <li>
          <span>AU</span> – audycja umuzykalniająca
        </li>
        <li>
          <span>KS</span> – koncert symfoniczny
        </li>
        <li>
          <span>KK</span> – koncert kameralny
        </li>
        <li>
          <span>R</span> – recital
        </li>
      </ul>
    </StyledInfoPopup>
  );
};

export default RecordsInfoPopup;
