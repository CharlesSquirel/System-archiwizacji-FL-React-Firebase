import React, { useState } from "react";
import { StyledAddButton, StyledInputBox, StyledInput, ErrorMessage } from "../AddForm/StyledAddForm";
import { StyledLoginForm } from "./StyledLoginForm";
import Title from "../Title/Title";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setIsLogged}) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    error: ""
  })

  const handleOnSubmit = (e) => {
    const {email, password} = login;
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLogged(true);
        localStorage.setItem("isLogged", "true");
        navigate("/main");
      })
      .catch(() => {
        setLogin({...login, error: "Nieprawidłowy email lub hasło"})
      });
  };

  return (
    <>
      <Title />
      <StyledLoginForm onSubmit={handleOnSubmit}>
        <StyledInputBox>
          <label>Login lub hasło</label>
          <StyledInput onChange={(e) => setLogin({...login, email:e.target.value})} type="text" name="email" placeholder="Login lub email" autoComplete="off" />
        </StyledInputBox>
        <StyledInputBox>
          <label>Hasło</label>
          <StyledInput onChange={(e) => setLogin({...login, password:e.target.value})} type="password" name="password" placeholder="hasło" autoComplete="off" />
        </StyledInputBox>
        {login.error && <ErrorMessage>{login.error}</ErrorMessage>}
        <StyledAddButton type="submit">Zaloguj</StyledAddButton>
      </StyledLoginForm>
    </>
  );
};

export default LoginForm;
