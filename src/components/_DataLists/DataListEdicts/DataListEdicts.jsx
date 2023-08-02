import React, { useContext } from "react";
import { Context } from "../../../Root";
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
import { ref, remove } from "firebase/database";
import { db, storage } from "../../../utils/firebase";
import { setBaner } from "../../../utils/setBaner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faDownload, faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EdictsInfoPopup from "../../EdictsInfoPopup/EdictsInfoPopup";
import { deleteObject, getDownloadURL, ref as storageRef } from "firebase/storage";



const DataListEdicts = () => {
  const context = useContext(Context);
  const { credentialsEdicts, setDeleteBaner } = context;
  const [isInfoActive, setIsInfoActive] = useState(false);
  const deleteFile = (fileName) => {
    const fileRef = storageRef(storage, `edicts/${fileName}`)
    deleteObject(fileRef).then(() => {
      console.log("deleted")
    }).catch((error) => {
      throw error
    });
  }
  const handleDelete = (fileName, index) => {
    // obsługa kasowania wpisu
    const confirm = window.confirm("Czy na pewno chcesz to usunąć?");
    if (confirm) {
      const toRemove = Object.keys(credentialsEdicts)[index];
      remove(ref(db, `/files/edicts/${toRemove}`));
      setBaner(setDeleteBaner);
      deleteFile(fileName)
    }
  };
  const handleInfoPopup = () => {
    setIsInfoActive(!isInfoActive);
  };

  const handleDownload = (fileName) => {
    getDownloadURL(storageRef(storage, `edicts/${fileName}`))
      .then((url) => {
        return fetch(url);
      })
      .then((response) => response.blob())
      .then((blob) => {
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = fileName;
        downloadLink.click();
      })
      .catch((error) => {
        console.error("Błąd pobierania pliku:", error);
      });
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
              Adresaci{" "}
              <FontAwesomeIcon
                className="icon-info"
                icon={faCircleInfo}
                onMouseEnter={handleInfoPopup}
                onMouseLeave={handleInfoPopup}
              ></FontAwesomeIcon>{" "}
              {isInfoActive && <EdictsInfoPopup />}
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
                  <StyledDataButton>
                    <Link to="/editarchive" state={{ data, index }}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Link>
                  </StyledDataButton>
                  <StyledDataButton onClick={() => handleDelete(data.file, index)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </StyledDataButton>
                  <StyledDataButton onClick={() => handleDownload(data.number)}>
                    <FontAwesomeIcon icon={faDownload} />
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

export default DataListEdicts;
