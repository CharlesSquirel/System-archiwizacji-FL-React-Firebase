import styled from "styled-components";

export const StyledDataList = styled.main`
  width: 80%;
  border-radius: 10px;
  padding-bottom: 20px;
`;
export const StyledTable = styled.table`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
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
    height: 3px;
    background-color: var(--primary);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
export const StyledCell = styled.tr`
  position: relative;
  font-size: 18px;
  td {
    height: auto;
    max-width: 300px;
    overflow: hidden;
    font-weight: 400;
    :not(:last-child) {
      border-right: 1px solid black;
    }
  }
  :after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--black);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
export const StyledButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
export const StyledButtonEdit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 5px;
  width: 68px;
  height: 28px;
  padding: 5px;
  border-radius: 5px;
  background: var(--primary);
  color: var(--white);
  font-weight: 600;
  font-size: 15px;
`;
export const StyledButtonDelete = styled(StyledButtonEdit)`
  margin-left: 5px;
`;
