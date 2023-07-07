import React from "react";
import { StyledAddButton, StyledInputBox, StyledInput } from "../AddForm/StyledAddForm";
import { StyledLoginForm } from "./StyledLoginForm";
import Title from "../Title/Title";

const LoginForm = () => {
  return (
    <>
      <Title />
      <StyledLoginForm>
        <StyledInputBox>
          <label>Login lub hasło</label>
          <StyledInput type="text" placeholder="Login lub email" />
        </StyledInputBox>
        <StyledInputBox>
          <label>Hasło</label>
          <StyledInput type="password" placeholder="hasło" />
        </StyledInputBox>
        <StyledAddButton>Zaloguj</StyledAddButton>
      </StyledLoginForm>
    </>
  );
};

export default LoginForm;
