import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { theme } from "./components/GlobalStyle/theme";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditForm from "./components/EditForm/EditForm";

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/edit" element={<EditForm />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default Root;
