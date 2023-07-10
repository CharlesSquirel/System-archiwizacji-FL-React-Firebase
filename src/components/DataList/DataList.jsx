import React, { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { StyledDataList, StyledButtonBox, StyledButtonEdit, StyledButtonDelete, StyledCell, StyledTableHeader, StyledTable, StyledRow } from "./StyledDataList";
import { ref, remove } from "firebase/database";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { Context } from "../../Root";
import { setBaner } from "../../utils/setBaner";

function DataList() {
  const context = useContext(Context);
  const { credentials, setDeleteBaner } = context;
  const handleDelete = (index) => {
    // obsługa kasowania wpisu
    const confirm = window.confirm("Czy na pewno chcesz to usunąć?");
    if (confirm) {
      const toRemove = Object.keys(credentials)[index];
      remove(ref(db, `/files/${toRemove}`));
      setBaner(setDeleteBaner);
    }
  };

  return (
    <>
      <SearchBar />
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
                      <Link to="/edit" state={{ data, index }}>
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
