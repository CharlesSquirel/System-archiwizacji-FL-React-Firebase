import React, { useContext } from "react";
import { Context } from "../../../Root";
import { StyledButtonBox, StyledButtonDelete, StyledButtonEdit, StyledCell, StyledDataList, StyledRow, StyledTable, StyledTableHeader } from "../DataListArchive/StyledDataList";
import { Link } from "react-router-dom";
import { ref, remove } from "firebase/database";
import { db } from "../../../utils/firebase";
import { setBaner } from "../../../utils/setBaner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EdictsInfoPopup from "../../EdictsInfoPopup/EdictsInfoPopup";

const DataListEdicts = () => {
  const context = useContext(Context);
  const { credentialsEdicts, setDeleteBaner } = context;
  const [isInfoActive, setIsInfoActive] = useState(false);
  const handleDelete = (index) => {
    // obsługa kasowania wpisu
    const confirm = window.confirm("Czy na pewno chcesz to usunąć?");
    if (confirm) {
      const toRemove = Object.keys(credentialsEdicts)[index];
      remove(ref(db, `/files/edicts/${toRemove}`));
      setBaner(setDeleteBaner);
    }
  };
  const handleInfoPopup = () => {
    setIsInfoActive(!isInfoActive);
  };
  return (
    <StyledDataList>
      <StyledTable>
        <thead>
          <StyledTableHeader>
            <th>Sygnatura</th>
            <th>Data</th>
            <th>Tytuł</th>
            <th>
              Adresaci <FontAwesomeIcon className="icon-info" icon={faCircleInfo} onMouseEnter={handleInfoPopup} onMouseLeave={handleInfoPopup}></FontAwesomeIcon> {isInfoActive && <EdictsInfoPopup />}
            </th>
            <th>Akcje</th>
          </StyledTableHeader>
        </thead>
        <tbody>
          {Object.values(credentialsEdicts).map((data, index) => (
            <StyledRow key={index}>
              <StyledCell>{data.number}</StyledCell>
              <StyledCell>{data.date}</StyledCell>
              <StyledCell>{data.title}</StyledCell>
              <StyledCell>
                {Object.entries(data.toWhom)
                  .filter((whom) => whom.includes(true))
                  .map((whom) => whom[0])
                  .join(", ")
                  .concat(", S")
                  .toUpperCase()}
              </StyledCell>
              <StyledCell>
                <StyledButtonBox>
                  <StyledButtonEdit>
                    <Link to="/editarchive" state={{ data, index }}>
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
  );
};

export default DataListEdicts;
