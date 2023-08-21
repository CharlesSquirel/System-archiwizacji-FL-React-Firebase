import { StyledSelectPopup, StyledSortBox } from "../../GlobalStyle/GlobalComponents";
import { StyledLabel } from "../../_SearchBars/StyledSearchBar";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const SortDataInput = ({ setIsSortOpen, isSortOpen, setSortOrder }) => {
  const handleOnClickPopup = () => {
    setIsSortOpen(!isSortOpen);
  };
  const handleOnClick = (e) => {
    const sortOrder = e.target.classList.value;
    setSortOrder(sortOrder);
    setIsSortOpen(false);
  };
  return (
    <>
      <StyledSortBox onClick={handleOnClickPopup}>
        <StyledLabel htmlFor="select">Sortuj</StyledLabel>
        <FontAwesomeIcon icon={faSort} id="select" />
      </StyledSortBox>
      {isSortOpen && (
        <StyledSelectPopup>
          <ul>
            <li className="dateAsc" onClick={handleOnClick}>
              Wg daty rosnąco
            </li>
            <li className="dateDesc" onClick={handleOnClick}>
              Wg daty malejąco
            </li>
            <li className="signAsc" onClick={handleOnClick}>
              Wg sygnatury rosnąco
            </li>
            <li className="signDescc" onClick={handleOnClick}>
              Wg sygnatury malejąco
            </li>
          </ul>
        </StyledSelectPopup>
      )}
    </>
  );
};

export default SortDataInput;
