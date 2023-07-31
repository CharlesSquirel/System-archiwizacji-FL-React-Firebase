import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Root";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Banner from "../Banner/Banner";
import Title from "../Title/Title";
import { StyledLoginForm, LoginContainer, StyledLoginLabel, StyledLoginInputBox } from "./StyledLoginForm";
import { StyledButton, StyledInput } from "../GlobalStyle/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

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
      }, 8000);
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
        navigate("/archive");
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
      {errorBaner && <Banner text={login.error} error={login.error} />}
      <StyledLoginForm onSubmit={handleOnSubmit}>
        <StyledLoginInputBox>
          <StyledLoginLabel>Email</StyledLoginLabel>
          <StyledInput onChange={(e) => setLogin({ ...login, email: e.target.value })} type="text" name="email" placeholder="Email" autoComplete="off" />
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </StyledLoginInputBox>
        <StyledLoginInputBox>
          <StyledLoginLabel>Hasło</StyledLoginLabel>
          <StyledInput onChange={(e) => setLogin({ ...login, password: e.target.value })} type="password" name="password" placeholder="Hasło" autoComplete="off" />
          <FontAwesomeIcon className="icon" icon={faLock} />
        </StyledLoginInputBox>
        <StyledButton type="submit">Zaloguj</StyledButton>
      </StyledLoginForm>
    </LoginContainer>
  );
};

export default LoginForm;
