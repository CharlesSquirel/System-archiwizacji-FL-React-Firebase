import styled from "styled-components";

export const StyledDataList = styled.main`
  width: 80%;
  border-radius: 10px;
  .btn-edit,
  .btn-delete {
  }
  .btn-delete {
  }
  .btn {
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  background-color: var(--gray);
`;
export const StyledTableHeader = styled.tr`
  font-size: 20px;
  font-weight: 500;
  height: 36px;
`;
export const StyledCell = styled.tr`
  height: 50px;
  font-size: 18px;
  border-bottom: 1px solid var(--primary);
  & th {
    font-weight: 400;
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
