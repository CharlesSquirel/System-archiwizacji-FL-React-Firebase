import React, { useState } from "react";
import { StyledSearchBarWrapper, StyledLabel, StyledSearchBarInput, StyledSelectWrapper, StyledSelectInput } from "./StyledSearchBar";
import { readfromDB } from "../../utils/firebase";

const SearchBar = ({ setCredentials }) => {
  const [query, setQuery] = useState("");
  const [originalCredentials, setOriginalCredentials] = useState({});
  const handleOnChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setQuery(inputValue);
    if (inputValue === "") {
      readfromDB(setCredentials);
    } else {
      readfromDB(setOriginalCredentials);
      const filteredCredentials = Object.entries(originalCredentials).filter(([key, value]) => {
        for (const prop in value) {
          if (value[prop].toLowerCase().includes(inputValue)) {
            return true;
          }
        }
        return false;
      });
      const filteredCredentialsObject = Object.fromEntries(filteredCredentials);
      setCredentials(filteredCredentialsObject);
    }
  };
  return (
    <StyledSearchBarWrapper>
      <StyledLabel htmlFor="search">Wyszukaj</StyledLabel>
      <StyledSearchBarInput onChange={handleOnChange} name="search" id="search" value={query} type="text" placeholder="Wyszukaj" autoComplete="off" />
      <StyledSelectWrapper>
        <StyledLabel htmlFor="select">Sortuj według</StyledLabel>
        <StyledSelectInput id="select" name="select">
          <option value="default" disabled>
            --Wybierz opcję--
          </option>
          <option value="dateAsc">Wg daty rosnąco</option>
          <option value="dateDesc">Wg daty malejąco</option>
          <option value="signAsc">Wg sygnatury rosnąco</option>
          <option value="signDesc">Wg sygnatury malejąco</option>
        </StyledSelectInput>
      </StyledSelectWrapper>
    </StyledSearchBarWrapper>
  );
};

export default SearchBar;
