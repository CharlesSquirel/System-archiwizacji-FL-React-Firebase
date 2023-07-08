import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  color: var(--black);
  border-radius: 10px;
  background-color: var(--white);
  -webkit-box-shadow: 0px 0px 28px -12px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 28px -12px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 28px -12px rgba(255, 255, 255, 1);
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
