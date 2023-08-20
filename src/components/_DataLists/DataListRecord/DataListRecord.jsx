import React, { useContext } from "react";
import { Context } from "../../../Root";
import { setBaner } from "../../../utils/setBaner";
import { ref, remove } from "firebase/database";
import { Link } from "react-router-dom";
import { db } from "../../../utils/firebase";
import { StyledDataList, StyledButtonBox, StyledCell, StyledTableHeader, StyledTable, StyledRow, StyledDataButton } from "../StyledDataList.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import SearchBarRecord from "../../_SearchBars/SearchBarRecords/SearchBarRecords.jsx";

function DataListRecord() {
  const context = useContext(Context);
  const { credentialsRecord, setDeleteBaner } = context;
  const handleDelete = (index) => {
    // obsługa kasowania wpisu
    const confirm = window.confirm("Czy na pewno chcesz to usunąć?");
    if (confirm) {
      const toRemove = Object.keys(credentialsRecord)[index];
      remove(ref(db, `/files/records/${toRemove}`));
      setBaner(setDeleteBaner);
    }
  };

  if (!credentialsRecord) {
    return <div>Loading...</div>; // Możesz wyświetlić komunikat "Loading..." lub dowolny inny komponent w trakcie ładowania danych
  }

  return (
    <>
      <SearchBarRecord />
      <StyledDataList>
        <StyledTable>
          <thead>
            <StyledTableHeader>
              <th>Data</th>
              <th>Tytuł</th>
              <th>Typ</th>
              <th>Obsada</th>
              <th>Program</th>
              <th>Uwagi</th>
              <th>Akcje</th>
            </StyledTableHeader>
          </thead>
          <tbody>
            {Object.values(credentialsRecord).map((data, index) => (
              <StyledRow key={index}>
                <StyledCell>{data.date}</StyledCell>
                <StyledCell>{data.title}</StyledCell>
                <StyledCell>{data.type === "koncert symfoniczny" ? "KS" : data.type === "koncert kameralny" ? "KK" : data.type === "recital" ? "R" : "AU"}</StyledCell>
                <StyledCell>{data.musicians}</StyledCell>
                <StyledCell>{data.music}</StyledCell>
                <StyledCell>{data.description}</StyledCell>
                <StyledCell>
                  <StyledButtonBox>
                    <StyledDataButton>
                      <Link to="/editrecord" state={{ data, index }}>
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

export default DataListRecord;
