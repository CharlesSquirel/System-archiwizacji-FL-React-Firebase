import React, { useContext, useState } from "react";
import { Context } from "../../../Root";
import { setBaner } from "../../../utils/setBaner";
import { ref, remove } from "firebase/database";
import { Link } from "react-router-dom";
import { db } from "../../../utils/firebase";
import { StyledDataList, StyledButtonBox, StyledCell, StyledTableHeader, StyledTable, StyledRow, StyledDataButton } from "../StyledDataList.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import TableHead from "../DataListArchive/TableHead/TableHead";
import SanitizedHTML from "react-sanitized-html";
import RecordsInfoPopup from "../RecordsInfoPopup/RecordsInfoPopup";

function DataListRecord() {
  const context = useContext(Context);
  const { credentialsRecord, setDeleteBaner } = context;
  const [isInfoActive, setIsInfoActive] = useState(false);

  const handleInfoPopup = () => {
    setIsInfoActive(!isInfoActive);
  };
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
      <StyledDataList>
        <TableHead type="records" btnText="Dodaj pozycję" />
        <StyledTable>
          <thead>
            <StyledTableHeader>
              <th>Data</th>
              <th>Tytuł</th>
              <th>
                Typ <FontAwesomeIcon className="icon-info" icon={faCircleInfo} onMouseEnter={handleInfoPopup} onMouseLeave={handleInfoPopup}></FontAwesomeIcon>
                {isInfoActive && <RecordsInfoPopup />}
              </th>
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
                <StyledCell>
                  <SanitizedHTML html={data.musicians} />
                </StyledCell>
                <StyledCell>
                  <SanitizedHTML html={data.music} />
                </StyledCell>
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
