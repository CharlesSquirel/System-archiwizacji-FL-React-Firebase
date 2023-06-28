import { StyledDataList } from "./StyledDataList";
import axios from "axios";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";


function DataList() {
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setCredentials(data ? Object.values(data.files) : [])
      console.log(credentials)
    });
  }, []);

  const handleDelete = () => {
    // await axios.delete(`http://localhost:3000/data/${id}`)
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
          {credentials.map((data) => (
            <tr className="verse-box" key={data.id}>
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
                  <button className="btn btn-delete" onClick={() => handleDelete(data.id)}>
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
