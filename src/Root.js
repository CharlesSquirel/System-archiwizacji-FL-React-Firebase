import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { getActualUser, readFromDb } from "./utils/firebase";
import { sortCredentials } from "./utils/sortingFunc";
import EditFormArchive from "./components/_EditForms/EditFormArchive/EditFormArchive";
import LoginForm from "./components/LoginForm/LoginForm";
import Header from "./components/Header/Header";
import Contracts from "./components/_Views/_Contracts/Contracts";
import Archive from "./components/_Views/_Archive/Archive";
import Edicts from "./components/_Views/_Edicts/Edicts";
import Record from "./components/_Views/_Record/Record";

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

  const getLogInfo = () => {
    const storedIsLogged = localStorage.getItem("isLogged");
    if (storedIsLogged === "true") {
      setIsLogged(true);
    }
  };
  useEffect(() => {
    readFromDb("archive", setCredentialsArchive)
    // domyślne sortowanie listy chronologicznie
    sortCredentials(credentialsArchive, setCredentialsArchive, "dateAsc");
    getLogInfo();
    getActualUser(setActualUser);
  }, []);

  useEffect(() => {
    readFromDb("edicts", setCredentialsEdicts)
  }, []);

  useEffect(() => {
    readFromDb("contracts", setCredentialsContracts)
  }, []);

  return (
    <>
      <GlobalStyle />
      <Context.Provider
        value={{
          credentialsArchive,
          setCredentialsArchive,
          credentialsEdicts,
          setCredentialsEdicts,
          credentialsContracts,
          setCredentialsContracts,
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
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default Root;
