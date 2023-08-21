import React, { useContext } from "react";
import { Context } from "../../../Root";
import { ref, remove } from "firebase/database";
import { db } from "../../../utils/firebase";
import { setBaner } from "../../../utils/setBaner";
import { StyledButtonBox, StyledCell, StyledDataButton, StyledDataList, StyledRow, StyledTable, StyledTableHeader } from "../StyledDataList";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import TableHead from "../DataListArchive/TableHead/TableHead";

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
      <TableHead btnType="addContract" btnText="Dodaj umowę" searchBarType="contracts"/>
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
