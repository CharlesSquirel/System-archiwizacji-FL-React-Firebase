import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  position: absolute;
  top: 204px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 77%;
  color: var(--black);
  background-color: var(--white);
  padding: 15px;
  border-radius: 20px;
  z-index: 1;
  .icon {
    font-size: 20px;
    color: var(--white);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  border-radius: 8px;
  font-weight: 600;
  font-size: 22px;
  background: var(--primary);
  color: var(--white);
`;

export const StyledAddButton = styled(StyledButton)`
  background-color: green;
  ::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -4px;
    width: 260px;
    height: 40px;
    border-radius: 12px;
    background-color: var(--btn-shadow);
    z-index: -1;
  }
  :hover::after {
    bottom: 0;
  }
  :hover {
    bottom: -2px;
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
  justify-content: center;
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
  right: 30px;
  top: 10px;
  cursor: pointer;
`;

export const StyledTableHead = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
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

export const StyledTableHeadBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  .search-icon {
    position: absolute;
    right: 200px;
    top: 9px;
  }
`;

export const StyledInputRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const StyledSelectRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const StyledSelectRecordsBox = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const StyledCheckboxBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const StyledCheckboxLabel = styled.label`
  font-size: 15px;
  font-weight: 500;
`;

export const StyledCheckbox = styled.input`
  width: 16px;
  height: 16px;
`;

export const StyledDoubleCheckboxes = styled.div`
  display: flex;
  gap: 10px;
  width: 407px;
`;

export const StyledInfoPopup = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  padding: 10px;
  background-color: var(--white);
  color: var(--black);
  border: 1px solid var(--primary);
  border-radius: 10px;
  text-align: left;
  span {
    font-weight: 600;
    font-size: 19px;
  }
  li {
    font-size: 17px;
    font-weight: 400;
  }
`;
