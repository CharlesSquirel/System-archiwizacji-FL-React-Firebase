import React, { useState, useEffect, useRef } from "react";
import { StyledSearchBarWrapper, StyledSearchBarLabel, StyledSearchBarInput } from "./StyledSearchBar";
import { readfromDB } from "../../utils/firebase";

const SearchBar = ({setCredentials }) => {
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
      <StyledSearchBarLabel htmlFor="search">Wyszukaj</StyledSearchBarLabel>
      <StyledSearchBarInput onChange={handleOnChange} name="search" id="search" value={query} type="text" placeholder="Wyszukaj" autoComplete="off" />
    </StyledSearchBarWrapper>
  );
};

export default SearchBar;
