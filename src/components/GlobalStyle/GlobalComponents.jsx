import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  position: absolute;
  top: 155px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 85%;
  color: var(--black);
  background-color: var(--white);
  padding: 20px;
  border-radius: 20px;
  z-index: 1;
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
`;

export const StyledAddButton = styled(StyledButton)`
  ::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -6px;
    width: 260px;
    height: 40px;
    border-radius: 12px;
    background-color: var(--btn-shadow);
    z-index: -1;
  }
  :hover::after {
    bottom: -3px;
  }
  :hover {
    bottom: -3px;
  }
`;

export const StyledLoginButton = styled(StyledButton)`
  ::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -6px;
    width: 260px;
    height: 40px;
    border-radius: 12px;
    background-color: var(--btn-shadow);
    z-index: -1;
  }
  :hover::after {
    bottom: -3px;
  }
  :hover {
    bottom: -3px;
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

export const StyledSelectRecords = styled.select`
  width: 260px;
  height: 40px;
  padding-left: 8px;
  border: 1px solid var(--primary);
  font-size: 18px;
`;

export const StyledExitIcon = styled.div`
  position: absolute;
  right: 50px;
  top: 10px;
  cursor: pointer;
`;

export const StyledTableHead = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 65px;
  background-color: var(--gray);
  border-radius: 10px 10px 0 0;
  border-bottom: 3px solid var(--primary);
  padding: 30px 30px 30px 50px;
`;

export const StyledSelectPopup = styled.div`
  position: absolute;
  left: 0;
  bottom: -152px;
  width: 244px;
  height: 152px;
  background-color: white;
  z-index: 1;
  border-radius: 10px;
  padding: 10px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  li {
    cursor: pointer;
    padding: 5px;
    :hover {
      color: var(--white);
      background-color: var(--primary);
      border-radius: 10px;
    }
  }
`;

export const StyledSortBox = styled.div`
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items: center;
  label {
    color: var(--black);
    font-size: 18px;
  }
`;
