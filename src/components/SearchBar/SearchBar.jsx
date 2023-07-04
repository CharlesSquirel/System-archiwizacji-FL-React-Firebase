import React, { useState, useEffect, useRef } from "react";
import { StyledSearchBarWrapper, StyledLabel, StyledSearchBarInput, StyledCheckboxWrapper, StyledCheckBox } from "./StyledSearchBar";
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
      <StyledLabel htmlFor="search">Wyszukaj</StyledLabel>
      <StyledSearchBarInput onChange={handleOnChange} name="search" id="search" value={query} type="text" placeholder="Wyszukaj" autoComplete="off" />
      <StyledCheckboxWrapper>
        <p>Sortuj według:</p>
        <StyledCheckBox>
            <label htmlFor="signaturecheckbox">sygnatury</label>
            <input id="signaturecheckbox" type="checkbox" />
        </StyledCheckBox>
        <StyledCheckBox>
            <label htmlFor="datecheckbox">daty</label>
            <input id="datecheckbox" type="checkbox" />
        </StyledCheckBox>
        <StyledCheckBox>
            <label htmlFor="ascendcheckbox">rosnąco</label>
            <input id="ascendcheckbox" type="checkbox" />
        </StyledCheckBox>
        <StyledCheckBox>
            <label htmlFor="descendcheckbox">malejąco</label>
            <input id="descendcheckbox" type="checkbox" />
        </StyledCheckBox>
      </StyledCheckboxWrapper>
    </StyledSearchBarWrapper>
  );
};

export default SearchBar;
