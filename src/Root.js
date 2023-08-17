import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "@GlobalStyle";
import { getActualUser, readFromDb } from "@firebase";
import { sortCredentials } from "@sortingFunc";
import EditFormArchive from "@EditFormArchive";
import LoginForm from "@LoginForm";
import Header from "@Header";
import Contracts from "@Contracts";
import Archive from "@Archive";
import Edicts from "@Edicts";
import Record from "@Record";
import EditFormEdicts from "@EditFormEdicts";
import EditFormContracts from "@EditFormContracts";
import EditFormRecord from "@EditFormRecord";

export const Context = React.createContext();

function Root() {
  const [actualUser, setActualUser] = useState("");
  const [logoutBaner, setLogoutBaner] = useState(false);
  const [addBaner, setAddBaner] = useState(false);
  const [deleteBaner, setDeleteBaner] = useState(false);
  const [editBaner, setEditBaner] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [credentialsArchive, setCredentialsArchive] = useState({});
  const [credentialsEdicts, setCredentialsEdicts] = useState({});
  const [credentialsContracts, setCredentialsContracts] = useState({});
  const [credentialsRecord, setCredentialsRecord] = useState({});
  const [file, setFile] = useState(null);
  const [isAddFormContractsOpen, setIsAddFormContractsOpen] = useState(false);
  const [isAddFormArchiveOpen, setIsAddFormArchiveOpen] = useState(false);
  const [isAddFormEdictsOpen, setIsAddFormEdictsOpen] = useState(false);
  const [isAddFormRecordsOpen, setIsAddFormRecordsOpen] = useState(false);

  const start = () => {
    readFromDb("archive", setCredentialsArchive);
    // domyślne sortowanie listy chronologicznie
    sortCredentials(credentialsArchive, setCredentialsArchive, "dateAsc");
    getLogInfo();
    getActualUser(setActualUser);
  };

  const getLogInfo = () => {
    const storedIsLogged = localStorage.getItem("isLogged");
    if (storedIsLogged === "true") {
      setIsLogged(true);
    }
  };
  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    readFromDb("edicts", setCredentialsEdicts);
  }, []);

  useEffect(() => {
    readFromDb("contracts", setCredentialsContracts);
  }, []);

  useEffect(() => {
    readFromDb("records", setCredentialsRecord);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Context.Provider
        value={{
          file,
          setFile,
          start,
          credentialsArchive,
          setCredentialsArchive,
          credentialsEdicts,
          setCredentialsEdicts,
          credentialsContracts,
          setCredentialsContracts,
          credentialsRecord,
          setCredentialsRecord,
          actualUser,
          setIsLogged,
          logoutBaner,
          setLogoutBaner,
          addBaner,
          setAddBaner,
          deleteBaner,
          setDeleteBaner,
          editBaner,
          setEditBaner,
          isAddFormContractsOpen,
          setIsAddFormContractsOpen,
          isAddFormArchiveOpen,
          setIsAddFormArchiveOpen,
          isAddFormEdictsOpen,
          setIsAddFormEdictsOpen,
          isAddFormRecordsOpen,
          setIsAddFormRecordsOpen,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm setIsLogged={setIsLogged} />} />
            <Route element={<Header />}>
              {isLogged && <Route path="/archive" element={<Archive />} />}
              {isLogged && <Route path="/contracts" element={<Contracts />} />}
              {isLogged && <Route path="/edicts" element={<Edicts />} />}
              {isLogged && <Route path="/record" element={<Record />} />}
            </Route>
            <Route path="/editarchive" element={<EditFormArchive />} />
            <Route path="/editcontracts" element={<EditFormContracts />} />
            <Route path="/editedicts" element={<EditFormEdicts />} />
            <Route path="/editrecord" element={<EditFormRecord />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default Root;
