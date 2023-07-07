import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { StyledDataList, StyledButtonBox, StyledButtonEdit, StyledButtonDelete, StyledCell, StyledTableHeader, StyledTable, StyledRow } from "./StyledDataList";
import { useEffect, useState } from "react";
import { ref, remove } from "firebase/database";
import { Link } from "react-router-dom";
import { db, readfromDB } from "../../utils/firebase";
import { sortCredentials } from "../../utils/sortingFunc";

function DataList() {
  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    readfromDB(setCredentials);
    // domyślne sortowanie listy chronologicznie
    sortCredentials(credentials, setCredentials, "dateAsc");
  }, []);

  const handleDelete = (index) => {
    // obsługa kasowania wpisu
    const confirm = window.confirm("Czy na pewno chcesz to usunąć?");
    if (confirm) {
      const toRemove = Object.keys(credentials)[index];
      remove(ref(db, `/files/${toRemove}`));
    }
  };

  return (
    <>
      <SearchBar setCredentials={setCredentials} credentials={credentials} />
      <StyledDataList>
        <StyledTable>
          <thead>
            <StyledTableHeader>
              <th>Sygnatura</th>
              <th>Data</th>
              <th>Opis</th>
              <th>Tagi</th>
              <th>Akcje</th>
            </StyledTableHeader>
          </thead>
          <tbody>
            {Object.values(credentials).map((data, index) => (
              <StyledRow key={index}>
                <StyledCell>{data.signature}</StyledCell>
                <StyledCell>{data.date}</StyledCell>
                <StyledCell>{data.description}</StyledCell>
                <StyledCell>{data.tags}</StyledCell>
                <StyledCell>
                  <StyledButtonBox>
                    <StyledButtonEdit>
                      <Link to="/edit" state={{ data, index, credentials }}>
                        Edytuj
                      </Link>
                    </StyledButtonEdit>
                    <StyledButtonDelete onClick={() => handleDelete(index)}>Usuń</StyledButtonDelete>
                  </StyledButtonBox>
                </StyledCell>
              </StyledRow>
            ))}
          </tbody>
        </StyledTable>
      </StyledDataList>
    </>
  );
}

export default DataList;
