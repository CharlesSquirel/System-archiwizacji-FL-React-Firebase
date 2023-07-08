import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditForm from "./components/EditForm/EditForm";
import LoginForm from "./components/LoginForm/LoginForm";
import React, { useState, useEffect } from "react";
import { readfromDB } from "./utils/firebase";
import { sortCredentials } from "./utils/sortingFunc";
export const Context = React.createContext();

function Root() {
  const [isLogged, setIsLogged] = useState(false);
  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    readfromDB(setCredentials);
    // domyślne sortowanie listy chronologicznie
    sortCredentials(credentials, setCredentials, "dateAsc");
  }, []);

  useEffect(() => {
    const storedIsLogged = localStorage.getItem("isLogged");
    if (storedIsLogged === "true") {
      setIsLogged(true);
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <Context.Provider value={{ credentials, setCredentials }}>
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
