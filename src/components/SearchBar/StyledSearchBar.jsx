import styled from "styled-components";

export const StyledSearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;

`;
export const StyledLabel = styled.label`
  color: var(--white);
  font-size: 22px;
`;
export const StyledSearchBarInput = styled.input`
  height: 36px;
  padding-left: 8px;
  border-radius: 5px;
  border: 1px solid var(--primary);
  font-size: 18px;
  transition: width 0.3s ease-in-out;
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: var(--white);
`;
export const StyledSelectInput = styled.select`
  width: 300px;
  height: 50px;
  font-size: 18px;
`;
