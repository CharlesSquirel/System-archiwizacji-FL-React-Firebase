import React, { useContext, useState, useEffect } from "react";
import Title from "../Title/Title";
import { StyledLoginForm, LoginContainer } from "./StyledLoginForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { StyledButton, StyledInputBox, StyledInput, ErrorMessage } from "../GlobalStyle/GlobalComponents";
import { Context } from "../../Root";
import LogoutBanner from "../LogoutBanner/LogoutBanner";

const LoginForm = () => {
  const context = useContext(Context);
  const { logoutBaner, setIsLogged, setLogoutBaner } = context;
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    error: "",
  });

  useEffect(() => {
    console.log(logoutBaner);
    if (logoutBaner) {
      setTimeout(() => {
        setLogoutBaner(false);
      }, 5000);
    }
  }, []);

  const handleOnSubmit = (e) => {
    const { email, password } = login;
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLogged(true);
        localStorage.setItem("isLogged", "true");
        navigate("/main");
      })
      .catch(() => {
        setLogin({ ...login, error: "Nieprawidłowy email lub hasło" });
      });
  };

  return (
    <LoginContainer>
      <Title />
      {logoutBaner && <LogoutBanner />}
      <StyledLoginForm onSubmit={handleOnSubmit}>
        <StyledInputBox>
          <label>Login lub hasło</label>
          <StyledInput onChange={(e) => setLogin({ ...login, email: e.target.value })} type="text" name="email" placeholder="Login lub email" autoComplete="off" />
        </StyledInputBox>
        <StyledInputBox>
          <label>Hasło</label>
          <StyledInput onChange={(e) => setLogin({ ...login, password: e.target.value })} type="password" name="password" placeholder="hasło" autoComplete="off" />
        </StyledInputBox>
        {login.error && <ErrorMessage>{login.error}</ErrorMessage>}
        <StyledButton type="submit">Zaloguj</StyledButton>
      </StyledLoginForm>
    </LoginContainer>
  );
};

export default LoginForm;
