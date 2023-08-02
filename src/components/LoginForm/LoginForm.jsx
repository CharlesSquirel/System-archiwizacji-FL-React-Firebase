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
import logoFL from "../../assets/logo.FL.svg";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 430px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 536px;
  margin-right: 20px;
`;
const LogoImg = styled.img`
  width: 120px;
  height: 120px;
`;

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
  }, [logoutBaner]);

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
    <Container>
      <TitleBox>
        <LogoImg src={logoFL} alt="logo" />
        <Title text="System dokumentacji FL" />
      </TitleBox>
      {logoutBaner && <Banner text="Zostałeś poprawnie wylogowany!" />}
      {errorBaner && <Banner text={login.error} error={login.error} />}
      <LoginContainer>
        <Title />
        <StyledLoginForm onSubmit={handleOnSubmit}>
          <StyledLoginInputBox>
            <StyledLoginLabel>Email</StyledLoginLabel>
            <StyledInput
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
            />
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
          </StyledLoginInputBox>
          <StyledLoginInputBox>
            <StyledLoginLabel>Hasło</StyledLoginLabel>
            <StyledInput
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              type="password"
              name="password"
              placeholder="Hasło"
              autoComplete="off"
            />
            <FontAwesomeIcon className="icon" icon={faLock} />
          </StyledLoginInputBox>
          <StyledButton type="submit">Zaloguj</StyledButton>
        </StyledLoginForm>
      </LoginContainer>
    </Container>
  );
};

export default LoginForm;
