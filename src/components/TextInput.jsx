import React from "react";
import { StyledInputBox, StyledInput, ErrorMessage } from "./GlobalStyle/GlobalComponents.jsx";

const TextInput = ({ formik, credential, label, placeholder }) => {
  const { touched, errors } = formik;
  return (
    <StyledInputBox>
      <label htmlFor={credential}>{label}</label>
      <StyledInput id={credential} name={credential} className="input" placeholder={placeholder} autoComplete="off" {...formik.getFieldProps({ credential })}></StyledInput>
      {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
    </StyledInputBox>
  );
};

export default TextInput;
