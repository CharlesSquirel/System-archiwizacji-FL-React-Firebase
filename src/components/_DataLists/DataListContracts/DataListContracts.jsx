import React, { useContext } from "react";
import { Context } from "../../../Root";
import { ref, remove } from "firebase/database";
import { db } from "../../../utils/firebase";
import { setBaner } from "../../../utils/setBaner";
import { StyledButtonBox, StyledCell, StyledDataButton, StyledDataList, StyledRow, StyledTable, StyledTableHeader } from "../DataListArchive/StyledDataList";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import SearchBarContracts from "../../_SearchBars/SearchBarContracts/SearchBarContracts";
import styled from "styled-components";

const StyledTableHead = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 65px;
  background-color: var(--gray);
  border-radius: 10px 10px 0 0;
  border-bottom: 3px solid var(--primary);
  padding: 20px;
`;

const DataListContracts = () => {
  const context = useContext(Context);
  const { credentialsContracts, setDeleteBaner } = context;
  const handleDelete = (index) => {
    // obsługa kasowania wpisu
    const confirm = window.confirm("Czy na pewno chcesz to usunąć?");
    if (confirm) {
      const toRemove = Object.keys(credentialsContracts)[index];
      remove(ref(db, `/files/contracts/${toRemove}`));
      setBaner(setDeleteBaner);
    }
  };
  return (
    <StyledDataList>
      <StyledTableHead>
        <SearchBarContracts />
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
          {Object.values(credentialsContracts).map((data, index) => (
            <StyledRow key={index}>
              <StyledCell>{data.signature}</StyledCell>
              <StyledCell>{data.date}</StyledCell>
              <StyledCell>{data.description}</StyledCell>
              <StyledCell>{data.tags}</StyledCell>
              <StyledCell>
                <StyledButtonBox>
                  <StyledDataButton>
                    <Link to="/editcontracts" state={{ data, index }}>
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
  );
};

export default DataListContracts;
