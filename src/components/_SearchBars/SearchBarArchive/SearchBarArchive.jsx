import React, { useState, useEffect, useContext } from "react";
import { StyledSearchBarWrapper, StyledLabel, StyledSearchBarInput } from "./StyledSearchBar.jsx";
import { readFromDb } from "../../../utils/firebase";
import { sortCredentials } from "../../../utils/sortingFunc";
import { Context } from "../../../Root";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { StyledSelectPopup, StyledSortBox } from "../../GlobalStyle/GlobalComponents.jsx";

const SearchBarArchive = () => {
  const context = useContext(Context);
  const { credentialsArchive, setCredentialsArchive } = context;
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);

  // wymuszanie rerenderingu dla poprawnego funkcjonowania select
  useEffect(() => {
    sortCredentials(credentialsArchive, setCredentialsArchive, sortOrder);
  }, [sortOrder]);

  const handleOnClickPopup = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleOnClick = (e) => {
    const sortOrder = e.target.classList.value
    setSortOrder(sortOrder);
    setIsSortOpen(false);
  };

  // obsługa wyszukiwania
  const handleOnChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setQuery(inputValue);

    if (inputValue === "") {
      readFromDb("archive", setCredentialsArchive);
    } else {
      readFromDb("archive", (data) => {
        const filteredCredentials = Object.entries(data).filter(([key, value]) => {
          for (const prop in value) {
            if (value[prop].toLowerCase().includes(inputValue)) {
              return true;
            }
          }
          return false;
        });
        const filteredCredentialsObject = Object.fromEntries(filteredCredentials);
        setCredentialsArchive(filteredCredentialsObject);
      });
    }
  };
  return (
    <StyledSearchBarWrapper>
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
      <StyledSearchBarInput onChange={handleOnChange} name="search" id="search" value={query} type="text" placeholder="Wyszukaj" autoComplete="off" />
    </StyledSearchBarWrapper>
  );
};

export default SearchBarArchive;
