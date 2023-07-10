import React, { useContext, useState, useEffect } from "react";
import Title from "../Title/Title";
import { StyledLoginForm, LoginContainer, StyledLoginLabel, StyledLoginInputBox } from "./StyledLoginForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { StyledButton, StyledInput } from "../GlobalStyle/GlobalComponents";
import { Context } from "../../Root";
import Banner from "../Banner/Banner";

const LoginForm = () => {
  const [errorBaner, setErrorBaner] = useState(false);
  const context = useContext(Context);
  const { logoutBaner, setIsLogged, setLogoutBaner } = context;
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    error: "",
  });

  useEffect(() => {
    if (logoutBaner) {
      setTimeout(() => {
        setLogoutBaner(false);
      }, 10000);
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
        setErrorBaner(false);
      })
      .catch(() => {
        setLogin({ ...login, error: "Nieprawidłowy email lub hasło" });

        setErrorBaner(true);
      });
  };

  return (
    <LoginContainer>
      <Title />
      {logoutBaner && <Banner text="Zostałeś poprawnie wylogowany!" />}
      {errorBaner && <Banner text={login.error} error={login.error}/>}
      <StyledLoginForm onSubmit={handleOnSubmit}>
        <StyledLoginInputBox>
          <StyledLoginLabel>Email</StyledLoginLabel>
          <StyledInput onChange={(e) => setLogin({ ...login, email: e.target.value })} type="text" name="email" placeholder="Email" autoComplete="off" />
        </StyledLoginInputBox>
        <StyledLoginInputBox>
          <StyledLoginLabel>Hasło</StyledLoginLabel>
          <StyledInput onChange={(e) => setLogin({ ...login, password: e.target.value })} type="password" name="password" placeholder="Hasło" autoComplete="off" />
        </StyledLoginInputBox>
        <StyledButton type="submit">Zaloguj</StyledButton>
      </StyledLoginForm>
    </LoginContainer>
  );
};

export default LoginForm;
