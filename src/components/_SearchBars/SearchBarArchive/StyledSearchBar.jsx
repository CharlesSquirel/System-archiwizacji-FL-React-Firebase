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
  color: var(--white);
  font-size: 22px;
`;
export const StyledSearchBarInput = styled.input`
  width: 50%;
  height: 40px;
  padding-left: 8px;
  border-radius: 5px;
  border: 1px solid var(--primary);
  font-size: 18px;
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
