import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditForm from "./components/EditForm/EditForm";

function Root() {
  return (
    <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/edit" element={<EditForm />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default Root;
