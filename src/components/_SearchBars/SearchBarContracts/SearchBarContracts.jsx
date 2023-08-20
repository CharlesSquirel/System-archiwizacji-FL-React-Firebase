import React, { useState, useEffect, useContext } from "react";
import { StyledSearchBarWrapper, StyledSearchBarInput } from "../StyledSearchBar.jsx";
import { readFromDb } from "../../../utils/firebase";
import { sortCredentials } from "../../../utils/sortingFunc";
import { Context } from "../../../Root";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SortDataInput from "../../_DataLists/SortDataInput/SortDataInput";

const SearchBarContracts = () => {
  const context = useContext(Context);
  const { credentialsContracts, setCredentialsContracts } = context;
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [searchBarWidth, setSearchBarWidth] = useState("20%");

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
      <SortDataInput setIsSortOpen={setIsSortOpen} isSortOpen={isSortOpen} setSortOrder={setSortOrder} />
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
