import styled from "styled-components";

export const StyledLoginForm = styled.form`
  flex-direction: column;
  width: 30%;
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

export const LoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 100%;
  height: 370px;
`;
