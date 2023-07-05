import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { StyledDataList } from "./StyledDataList";
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
        <table className="table">
          <tbody>
            <tr className="table-header-box">
              <th>Sygnatura</th>
              <th>Data</th>
              <th>Opis</th>
              <th>Tagi</th>
              <th>Akcje</th>
            </tr>
            {Object.values(credentials).map((data, index) => (
              <tr className="verse-box" key={index}>
                <td>{data.signature}</td>
                <td>{data.date}</td>
                <td>{data.description}</td>
                <td>{data.tags}</td>
                <td>
                  <div className="btn-box">
                    <button className="btn btn-edit">
                      <Link to="/edit" state={{ data, index, credentials }}>
                        Edytuj
                      </Link>
                    </button>
                    <button className="btn btn-delete" onClick={() => handleDelete(index)}>
                      Usuń
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </StyledDataList>
    </>
  );
}

export default DataList;
