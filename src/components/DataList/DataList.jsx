import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { StyledDataList, StyledTable, StyledTableHeader, StyledCell, StyledButtonBox, StyledButtonEdit, StyledButtonDelete } from "./StyledDataList";
import { useEffect, useState } from "react";
import { ref, remove } from "firebase/database";
import { Link } from "react-router-dom";
import { db, readfromDB } from "../../utils/firebase";
import { sortCredentials } from "../../utils/sortingFunc";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Sygnatura</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>Opis</TableCell>
                <TableCell>Tagi</TableCell>
                <TableCell>Akcje</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(credentials).map((data, index) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>{data.signature}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>{data.description}</TableCell>
                  <TableCell>{data.tags}</TableCell>
                  <TableCell>
                    <StyledButtonBox>
                      <StyledButtonEdit>
                        <Link to="/edit" state={{ data, index, credentials }}>
                          Edytuj
                        </Link>
                      </StyledButtonEdit>
                      <StyledButtonDelete onClick={() => handleDelete(index)}>Usuń</StyledButtonDelete>
                    </StyledButtonBox>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledDataList>
    </>
  );
}

export default DataList;
