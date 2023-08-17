import React, { useContext } from "react";
import { Context } from "@root";
import { ref, remove } from "firebase/database";
import { db } from "@firebase";
import { setBaner } from "@setBaner";
import {
  StyledButtonBox,
  StyledCell,
  StyledDataButton,
  StyledDataList,
  StyledRow,
  StyledTable,
  StyledTableHeader,
} from "../DataListArchive/StyledDataList";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import SearchBarContracts from "../../_SearchBars/SearchBarContracts/SearchBarContracts";
import styled from "styled-components";
import TableAddButton from "../../TableAddButton/TableAddButton";


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
  const { credentialsContracts, setDeleteBaner} = context;
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
        <TableAddButton text="Dodaj umowę" type="addContract"/>
      </StyledTableHead>
      <StyledTable>
        <thead>
          <StyledTableHeader>
            <th>Sygnatura</th>
            <th>Data</th>
            <th>Podmiot</th>
            <th>Kwota</th>
            <th>Rodzaj</th>
            <th>Osoba odpowiedzialna</th>
            <th>Uwagi</th>
            <th>Akcje</th>
          </StyledTableHeader>
        </thead>
        <tbody>
          {Object.values(credentialsContracts).map((data, index) => (
            <StyledRow key={index}>
              <StyledCell>{data.signature}</StyledCell>
              <StyledCell>{data.date}</StyledCell>
              <StyledCell>{data.contractor}</StyledCell>
              <StyledCell>{(+data.price).toFixed(2) + " zł"}</StyledCell>
              <StyledCell>{data.type}</StyledCell>
              <StyledCell>{data.person_in_charge}</StyledCell>
              <StyledCell>{data.description}</StyledCell>
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
