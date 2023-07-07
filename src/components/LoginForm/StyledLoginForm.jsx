import styled from "styled-components";
import { StyledAddForm } from "../AddForm/StyledAddForm";

export const StyledLoginForm = styled.form`
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: auto;
  color: var(--black);
  border-radius: 10px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  div {
    align-items: center;
  }
  div:first-of-type {
    padding-top: 20px;
  }
  button {
    margin-bottom: 20px;
  }
`;
