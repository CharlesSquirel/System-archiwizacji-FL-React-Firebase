import styled from "styled-components";

export const StyledFormWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 123px;
  color: var(--white);
  .icon {
    font-size: 20px;
    color: var(--white);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const StyledButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 5px;
  width: 260px;
  height: 40px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 22px;
  background: var(--primary);
  color: var(--white);
  ::after {
    content: "";
    position: absolute;
    left: 10px;
    bottom: -10px;
    width: 260px;
    height: 40px;
    border-radius: 5px;
    background-color: yellow;
    z-index: -1;
  }
`;

export const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 77px;
`;

export const StyledInput = styled.input`
  width: 260px;
  height: 40px;
  padding-left: 8px;
  border-radius: 5px;
  border: 1px solid var(--primary);
  font-size: 18px;
`;

export const ErrorMessage = styled.p`
  font-weight: 500;
  color: var(--error);
`;
