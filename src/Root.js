import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditForm from "./components/EditForm/EditForm";
import LoginForm from "./components/LoginForm/LoginForm";
import React, { useState, useEffect } from "react";
import { readfromDB } from "./utils/firebase";
import { sortCredentials } from "./utils/sortingFunc";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const Context = React.createContext();

const getActualUser = (func) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      func(user.email);
    }
  });
};

function Root() {
  const [actualUser, setActualUser] = useState("");
  const [logoutBaner, setLogoutBaner] = useState(false);
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
      <Context.Provider value={{ credentials, setCredentials, actualUser, setIsLogged, logoutBaner, setLogoutBaner }}>
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
