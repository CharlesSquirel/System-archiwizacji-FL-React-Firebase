import styled from "styled-components";

export const StyledSearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
export const StyledLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
export const StyledSearchBarInput = styled.input`
  width: 50%;
`;

export const StyledCheckboxWrapper = styled.div`
display: flex;
gap: 15px;
color: white;
p {
  font-size: 22px;
}
div:nth-of-type(2) {
  position: relative;
::after {
  content: "";
  background-color: white;
  width: 2px;
  height: 40px;
  position: absolute;
  right: -10px;
}
}
`
export const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  label {
    font-size: 18px;
  }
  input {
    width: 30px;
    height: 30px;
  }
`
