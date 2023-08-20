import React, { useState, useEffect, useContext } from "react";
import { StyledSearchBarWrapper, StyledLabel, StyledSearchBarInput } from "../StyledSearchBar.jsx";
import { readFromDb } from "../../../utils/firebase";
import { sortCredentials } from "../../../utils/sortingFunc";
import { Context } from "../../../Root";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faSearch } from "@fortawesome/free-solid-svg-icons";
import { StyledSelectPopup, StyledSortBox } from "../../GlobalStyle/GlobalComponents.jsx";

const SearchBarContracts = () => {
  const context = useContext(Context);
  const { credentialsContracts, setCredentialsContracts } = context;
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [searchBarWidth, setSearchBarWidth] = useState("20%");

  const handleOnClick = (e) => {
    const sortOrder = e.target.classList.value;
    setSortOrder(sortOrder);
    setIsSortOpen(false);
  };

  const handleOnClickPopup = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleSearchWidthBlur = () => {
    setSearchBarWidth("20%");
  };

  const handleSearchWidthClick = () => {
    setSearchBarWidth("40%");
  };

  // wymuszanie rerenderingu dla poprawnego funkcjonowania select
  useEffect(() => {
    sortCredentials(credentialsContracts, setCredentialsContracts, sortOrder);
  }, [sortOrder]);

  // obsługa wyszukiwania
  const handleOnChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setQuery(inputValue);

    if (inputValue === "") {
      readFromDb("contracts", setCredentialsContracts);
    } else {
      readFromDb("contracts", (data) => {
        const filteredCredentials = Object.entries(data).filter(([key, value]) => {
          for (const prop in value) {
            if (value[prop].toLowerCase().includes(inputValue)) {
              return true;
            }
          }
          return false;
        });
        const filteredCredentialsObject = Object.fromEntries(filteredCredentials);
        setCredentialsContracts(filteredCredentialsObject);
      });
    }
  };
  return (
    <StyledSearchBarWrapper>
      <StyledSortBox>
        <StyledLabel htmlFor="select">Sortuj</StyledLabel>
        <FontAwesomeIcon icon={faSort} id="select" onClick={handleOnClickPopup} />
      </StyledSortBox>
      {isSortOpen && (
        <StyledSelectPopup>
          <ul>
            <li className="dateAsc" onClick={handleOnClick}>
              Wg daty rosnąco
            </li>
            <li className="dateDesc" onClick={handleOnClick}>
              Wg daty malejąc
            </li>
            <li className="signAsc" onClick={handleOnClick}>
              Wg sygnatury rosnąco
            </li>
            <li className="signDesc" onClick={handleOnClick}>
              Wg sygnatury malejąco
            </li>
          </ul>
        </StyledSelectPopup>
      )}
      <StyledSearchBarInput
        style={{ width: searchBarWidth }}
        onClick={handleSearchWidthClick}
        onBlur={handleSearchWidthBlur}
        onChange={handleOnChange}
        name="search"
        id="search"
        value={query}
        type="text"
        placeholder="Wyszukaj"
        autoComplete="off"
      />
      {searchBarWidth === "20%" && <FontAwesomeIcon className="search-icon" icon={faSearch} />}
    </StyledSearchBarWrapper>
  );
};

export default SearchBarContracts;
