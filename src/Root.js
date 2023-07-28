import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { readfromArchive, getActualUser } from "./utils/firebase";
import { sortCredentials } from "./utils/sortingFunc";
import EditFormArchive from "./components/EditForm/EditFormArchive";
import LoginForm from "./components/LoginForm/LoginForm";
import Header from "./components/Header/Header";
import Contracts from "./components/_Views/_Contracts/Contracts";
import Archive from "./components/_Views/_Archive/Archive";
import Edicts from "./components/_Views/_Edicts/Edicts";

export const Context = React.createContext();

function Root() {
  const [actualUser, setActualUser] = useState("");
  const [logoutBaner, setLogoutBaner] = useState(false);
  const [addBaner, setAddBaner] = useState(false);
  const [deleteBaner, setDeleteBaner] = useState(false);
  const [editBaner, setEditBaner] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [credentials, setCredentials] = useState({});

  const getLogInfo = () => {
    const storedIsLogged = localStorage.getItem("isLogged");
    if (storedIsLogged === "true") {
      setIsLogged(true);
    }
  };
  useEffect(() => {
    readfromArchive(setCredentials);
    // domyślne sortowanie listy chronologicznie
    sortCredentials(credentials, setCredentials, "dateAsc");
    getLogInfo();
    getActualUser(setActualUser);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Context.Provider
        value={{
          credentials,
          setCredentials,
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
            </Route>
            <Route path="/editarchive" element={<EditFormArchive />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default Root;
