import React, { useState, useEffect, useContext } from "react";
import { StyledSearchBarWrapper, StyledLabel, StyledSearchBarInput, StyledSelectWrapper, StyledSelectInput } from "@StyledSearchBar";
import { readFromDb } from "@firebase";
import { sortCredentials } from "@sortingFunc";
import { Context } from "@root";

const SearchBarRecord = () => {
  const context = useContext(Context);
  const { credentialsRecord, setCredentialsRecord } = context;
  const [setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // wymuszanie rerenderingu dla poprawnego funkcjonowania select
  useEffect(() => {
    sortCredentials(credentialsRecord, setCredentialsRecord, sortOrder);
  }, [sortOrder]);

  // obsługa wyszukiwania
  const handleOnChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setQuery(inputValue);

    if (inputValue === "") {
      readFromDb("records", setCredentialsRecord);
    } else {
      readFromDb("records", (data) => {
        const filteredCredentials = Object.entries(data).filter(([key, value]) => {
          for (const prop in value) {
            const propValue = value[prop];

            if (typeof propValue === "string" && propValue.toLowerCase().includes(inputValue)) {
              return true;
            }

            if (typeof propValue === "object") {
              for (const nestedProp in propValue) {
                const nestedPropValue = propValue[nestedProp];

                if (nestedPropValue === true && nestedProp.toLowerCase().includes(inputValue)) {
                  return true;
                }
              }
            }
          }
          return false;
        });
        const filteredCredentialsObject = Object.fromEntries(filteredCredentials);
        setCredentialsRecord(filteredCredentialsObject);
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
      <StyledSearchBarInput onChange={handleOnChange} name="search" id="search" type="text" placeholder="Wyszukaj" autoComplete="off" />
      <StyledSelectWrapper>
        <StyledLabel htmlFor="select">Sortuj według</StyledLabel>
        <StyledSelectInput id="select" name="select" onChange={handleOnSelect}>
          <option value="default">--Wybierz opcję--</option>
          {/* Wg daty wznosząco */}
          <option value="dateAsc">Wg daty rosnąco</option>
          {/* Wg daty opadająco */}
          <option value="dateDesc">Wg daty malejąco</option>
        </StyledSelectInput>
      </StyledSelectWrapper>
    </StyledSearchBarWrapper>
  );
};

export default SearchBarRecord;
