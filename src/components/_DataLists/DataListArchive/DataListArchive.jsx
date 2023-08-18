import React, { useContext } from "react";
import { Context } from "../../../Root";
import { setBaner } from "../../../utils/setBaner";
import { ref, remove } from "firebase/database";
import { Link } from "react-router-dom";
import { db } from "../../../utils/firebase";
import SearchBar from "../../_SearchBars/SearchBarArchive/SearchBarArchive.jsx";
import { StyledDataList, StyledButtonBox, StyledCell, StyledTableHeader, StyledTable, StyledRow, StyledDataButton } from "./StyledDataList.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import TableAddButton from "../../TableAddButton/TableAddButton";
import SearchBarContracts from "../../_SearchBars/SearchBarContracts/SearchBarContracts";
import { StyledTableHead } from "../../GlobalStyle/GlobalComponents";

function DataListArchive() {
  const context = useContext(Context);
  const { credentialsArchive, setDeleteBaner } = context;
  const handleDelete = (index) => {
    // obsługa kasowania wpisu
    const confirm = window.confirm("Czy na pewno chcesz to usunąć?");
    if (confirm) {
      const toRemove = Object.keys(credentialsArchive)[index];
      remove(ref(db, `/files/archive/${toRemove}`));
      setBaner(setDeleteBaner);
    }
  };

  if (!credentialsArchive) {
    return <div>Loading...</div>; // Możesz wyświetlić komunikat "Loading..." lub dowolny inny komponent w trakcie ładowania danych
  }

  return (
    <>
      <StyledDataList>
        <StyledTableHead>
          <SearchBarContracts />
          <TableAddButton text="Dodaj pozycję" type="addArchive" />
        </StyledTableHead>
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
            {Object.values(credentialsArchive).map((data, index) => (
              <StyledRow key={index}>
                <StyledCell>{data.signature}</StyledCell>
                <StyledCell>{data.date}</StyledCell>
                <StyledCell>{data.description}</StyledCell>
                <StyledCell>{data.tags}</StyledCell>
                <StyledCell>
                  <StyledButtonBox>
                    <StyledDataButton>
                      <Link to="/editarchive" state={{ data, index }}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </Link>
                    </StyledDataButton>
                    <StyledDataButton onClick={() => handleDelete(index)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </StyledDataButton>
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

export default DataListArchive;
