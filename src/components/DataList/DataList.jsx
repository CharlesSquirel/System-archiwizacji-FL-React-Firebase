import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { StyledDataList, StyledTable, StyledTableHeader, StyledCell, StyledButtonBox, StyledButtonEdit, StyledButtonDelete } from "./StyledDataList";
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
    const toRemove = Object.keys(credentials)[index];
    remove(ref(db, `/files/${toRemove}`));
  };

  return (
    <>
      <SearchBar setCredentials={setCredentials} credentials={credentials} />
      <StyledDataList>
        <StyledTable>
          <tbody>
            <StyledTableHeader>
              <th>Sygnatura</th>
              <th>Data</th>
              <th>Opis</th>
              <th>Tagi</th>
              <th>Akcje</th>
            </StyledTableHeader>
            {Object.values(credentials).map((data, index) => (
              <StyledCell key={index}>
                <td>{data.signature}</td>
                <td>{data.date}</td>
                <td>{data.description}</td>
                <td>{data.tags}</td>
                <td>
                  <StyledButtonBox>
                    <StyledButtonEdit>
                      <Link to="/edit" state={{ data, index, credentials }}>
                        Edytuj
                      </Link>
                    </StyledButtonEdit>
                    <StyledButtonDelete onClick={() => handleDelete(index)}>
                      Usuń
                    </StyledButtonDelete>
                  </StyledButtonBox>
                </td>
              </StyledCell>
            ))}
          </tbody>
        </StyledTable>
      </StyledDataList>
    </>
  );
}

export default DataList;
