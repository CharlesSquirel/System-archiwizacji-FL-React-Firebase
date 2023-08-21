import styled from "styled-components";

export const StyledDataList = styled.main`
  position: relative;
  width: 77%;
  padding-bottom: 20px;
`;
export const StyledTable = styled.table`
  width: 100%;
  padding: 15px;
  border-radius: 0 0 10px 10px;
  text-align: center;
  background-color: var(--gray);
`;
export const StyledTableHeader = styled.tr`
  position: relative;
  font-size: 20px;
  font-weight: 500;
  height: 36px;
  ::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--primary);
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .icon-info {
    width: 15px;
    height: 15px;
    margin-bottom: 2px;
    cursor: pointer;
    color: var(--primary);
  }
  & th:nth-of-type(4) {
    position: relative;
  }
`;

export const StyledRow = styled.tr`
  position: relative;
  font-size: 18px;

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    border-bottom: 1px dotted var(--primary);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  td:nth-child(3),
  td:nth-child(4) {
    width: 450px;
  }
`;

export const StyledCell = styled.td`
  max-width: 300px;
  overflow: hidden;
  font-weight: 400;
  position: relative;
  height: auto;
  overflow-wrap: break-word;

  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const StyledButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 5px;
`;

export const StyledDataButton = styled.button`
  position: relative;
  display: grid;
  place-items: center;
  width: 35px;
  height: 32px;
  padding: 5px;
  border-radius: 5px;
  background: var(--primary);
  color: var(--white);
  font-weight: 600;
  font-size: 15px;
`;
