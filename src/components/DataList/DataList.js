import { StyledDataList } from "./StyledDataList";
import { onValue, ref, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";

function DataList() {
  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setCredentials(data ? data.files : {});
    });
  }, []);

  const handleDelete = (index) => {
    const toRemove = Object.keys(credentials)[index];
    remove(ref(db, `/files/${toRemove}`));
  };
  return (
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
                    <Link to="/edit" state={data}>
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
  );
}

export default DataList;
