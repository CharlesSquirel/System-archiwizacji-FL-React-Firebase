import React, { useState, useEffect, useContext } from "react";
import {
  StyledSearchBarWrapper,
  StyledLabel,
  StyledSearchBarInput,
  StyledSelectWrapper,
  StyledSelectInput,
} from "../SearchBarArchive/StyledSearchBar.jsx";
import { readFromDb } from "../../../utils/firebase";
import { sortCredentials } from "../../../utils/sortingFunc";
import { Context } from "../../../Root";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledSelectPopup = styled.div`
  position: absolute;
  left: 0;
  bottom: -200px;
  width: 200px;
  height: 200px;
  background-color: white;
  z-index: 1;
`;



const SearchBarContracts = () => {
  const context = useContext(Context);
  const { credentialsContracts, setCredentialsContracts } = context;
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);

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
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <StyledLabel style={{ color: "black" }} htmlFor="select">
          Sortuj według
        </StyledLabel>
        <FontAwesomeIcon icon={faSort} id="select" onClick={() => setIsSortOpen(!isSortOpen)} />
      </div>
      {isSortOpen && (
        <StyledSelectPopup>
          <ul>
            <li
              onClick={(e) => {
                setSortOrder("dateAsc");
                setIsSortOpen(!isSortOpen);
              }}
            >
              Wg daty rosnąco
            </li>
            <li onClick={(e) => setSortOrder("dateDesc")}>Wg daty malejąc</li>
            <li onClick={(e) => setSortOrder("signAsc")}>Wg sygnatury rosnąco</li>
            <li onClick={(e) => setSortOrder("signDesc")}>Wg sygnatury malejąco</li>
          </ul>
        </StyledSelectPopup>
      )}
      <StyledSearchBarInput onChange={handleOnChange} name="search" id="search" value={query} type="text" placeholder="Wyszukaj" autoComplete="off" />
    </StyledSearchBarWrapper>
  );
};

export default SearchBarContracts;
