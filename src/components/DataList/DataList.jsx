import { StyledDataList } from "./StyledDataList";
import {  ref, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, readfromDB } from "../../utils/firebase";
import SearchBar from "../SearchBar/SearchBar";



function DataList() {
  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    readfromDB(setCredentials);
  }, []);

  const handleDelete = (index) => {
    const toRemove = Object.keys(credentials)[index];
    remove(ref(db, `/files/${toRemove}`));
  };
  return (
    <>
      <SearchBar setCredentials={setCredentials} />
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
