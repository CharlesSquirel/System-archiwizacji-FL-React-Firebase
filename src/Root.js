import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { readfromDB, getActualUser } from "./utils/firebase";
import { sortCredentials } from "./utils/sortingFunc";
import Main from "./components/Main/Main";
import EditForm from "./components/EditForm/EditForm";
import LoginForm from "./components/LoginForm/LoginForm";

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
    readfromDB(setCredentials);
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
          setEditBaner
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm setIsLogged={setIsLogged} />} />
            {isLogged && <Route path="/main" element={<Main />} />}
            <Route path="/edit" element={<EditForm />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default Root;
