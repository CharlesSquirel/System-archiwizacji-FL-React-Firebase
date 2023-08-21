import styled from "styled-components";
import { StyledInputBox } from "../GlobalStyle/GlobalComponents";

export const StyledLoginForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 536px;
  padding: 20px 0;
  color: var(--black);
  border-radius: 10px;
  background-color: var(--white);
  -webkit-box-shadow: 0px 0px 28px -12px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 28px -12px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 28px -12px rgba(255, 255, 255, 1);
  .icon {
    position: absolute;
    bottom: 12px;
    left: 10px;
    color: var(--primary);
  }
  input {
    padding-left: 38px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 100%;
`;

export const StyledLoginLabel = styled.label`
  
`;

export const StyledLoginInputBox = styled(StyledInputBox)`
  position: relative;
  align-items: center;
  min-height: 0;
  gap: 5px;
  ::after {
    content: "";
    position: absolute;
    bottom: 10px;
    left: 32px;
    height: 20px;
    width: 2px;
    background-color: #a9a9a9;
  }
`;

export const Container = styled.main`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 430px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 536px;
  margin-right: 20px;
`;
export const LogoImg = styled.img`
  width: 120px;
  height: 120px;
`;
