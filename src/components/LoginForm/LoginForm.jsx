import React, { useState } from "react";
import { StyledAddButton, StyledInputBox, StyledInput } from "../AddForm/StyledAddForm";
import { StyledLoginForm } from "./StyledLoginForm";
import Title from "../Title/Title";
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Title />
      <StyledLoginForm onSubmit={handleOnSubmit}>
        <StyledInputBox>
          <label>Login lub hasło</label>
          <StyledInput onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="Login lub email" autoComplete="off" />
        </StyledInputBox>
        <StyledInputBox>
          <label>Hasło</label>
          <StyledInput onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="hasło" autoComplete="off" />
        </StyledInputBox>
        <StyledAddButton type="submit">Zaloguj</StyledAddButton>
      </StyledLoginForm>
    </>
  );
};

export default LoginForm;
