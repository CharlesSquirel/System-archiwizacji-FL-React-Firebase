import React, { useState, useEffect, useRef } from "react";
import { StyledSearchBarInput } from "../StyledSearchBar";
import { readFromDb } from "../../../utils/firebase";
import { sortCredentials } from "../../../utils/sortingFunc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBarArchive = ({ sortOrder, settingFunc, credentials, searchBarType }) => {
  const [query, setQuery] = useState("");
  const [searchBarWidth, setSearchBarWidth] = useState("200px");
  const searchBarRef = useRef(null);

  // wymuszanie rerenderingu dla poprawnego funkcjonowania select
  useEffect(() => {
    sortCredentials(credentials, settingFunc, sortOrder);
  }, [sortOrder]);

  const handleSearchWidthBlur = () => {
    setSearchBarWidth("200px");
  };

  const handleSearchWidthClick = () => {
    setSearchBarWidth("350px");
  };

  // obsługa wyszukiwania
  const handleOnChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setQuery(inputValue);

    if (inputValue === "") {
      readFromDb(searchBarType, settingFunc);
    } else {
      readFromDb(searchBarType, (data) => {
        const filteredCredentials = Object.entries(data).filter(([key, value]) => {
          for (const prop in value) {
            if (value[prop].toLowerCase().includes(inputValue)) {
              return true;
            }
          }
          return false;
        });
        const filteredCredentialsObject = Object.fromEntries(filteredCredentials);
        settingFunc(filteredCredentialsObject);
      });
    }
  };
  return (
    <>
      <StyledSearchBarInput
        style={{ width: searchBarWidth }}
        ref={searchBarRef}
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
      {searchBarWidth === "200px" && <FontAwesomeIcon className="search-icon" icon={faSearch} />}
    </>
  );
};

export default SearchBarArchive;
