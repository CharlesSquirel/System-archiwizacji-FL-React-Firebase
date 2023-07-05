import styled from "styled-components";

export const StyledAddForm = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  color: var(--white);
  .icon {
    font-size: 20px;
    color: var(--white);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
export const StyledAddButton = styled.button`
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
`;

export const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 106px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
