import React, { useState, useEffect, useContext } from "react";
import { StyledSearchBarWrapper, StyledLabel, StyledSearchBarInput, StyledSelectWrapper, StyledSelectInput } from "../SearchBarArchive/StyledSearchBar.jsx";
import { readFromDb } from "../../../utils/firebase";
import { sortCredentials } from "../../../utils/sortingFunc";
import { Context } from "../../../Root";

const SearchBarContracts = () => {
  const context = useContext(Context);
  const { credentialsContracts, setCredentialsContracts } = context;
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");

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

  // obsługa selecta
  const handleOnSelect = (e) => {
    const value = e.target.value;
    setSortOrder(value);
  };
  return (
    <StyledSearchBarWrapper>
      <StyledLabel htmlFor="search">Wyszukaj</StyledLabel>
      <StyledSearchBarInput onChange={handleOnChange} name="search" id="search" value={query} type="text" placeholder="Wyszukaj" autoComplete="off" />
      <StyledSelectWrapper>
        <StyledLabel htmlFor="select">Sortuj według</StyledLabel>
        <StyledSelectInput id="select" name="select" onChange={handleOnSelect}>
          <option value="default">--Wybierz opcję--</option>
          {/* Wg daty wznosząco */}
          <option value="dateAsc">Wg daty rosnąco</option>
          {/* Wg daty opadająco */}
          <option value="dateDesc">Wg daty malejąco</option>
          {/* Wg sygnatury wznosząco */}
          <option value="signAsc">Wg sygnatury rosnąco</option>
          {/* Wg sygnatury opadająco */}
          <option value="signDesc">Wg sygnatury malejąco</option>
        </StyledSelectInput>
      </StyledSelectWrapper>
    </StyledSearchBarWrapper>
  );
};

export default SearchBarContracts;
