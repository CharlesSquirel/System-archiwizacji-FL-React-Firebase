import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditForm from "./components/EditForm/EditForm";
import LoginForm from "./components/LoginForm/LoginForm";
import { useState, useEffect } from "react";

function Root() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const storedIsLogged = localStorage.getItem("isLogged");
    if (storedIsLogged === "true") {
      setIsLogged(true);
    }
  }, []);
  return (
    <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm setIsLogged={setIsLogged}/>}/>
            {isLogged && <Route path="/main" element={<Main />} />}
            <Route path="/edit" element={<EditForm />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default Root;
