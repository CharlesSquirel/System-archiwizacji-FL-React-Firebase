import styled from "styled-components";

export const StyledSearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const StyledSearchBarLabel = styled.label`
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
