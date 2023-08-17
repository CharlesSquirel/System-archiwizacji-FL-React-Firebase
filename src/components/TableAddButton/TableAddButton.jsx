import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Context } from "@root";


const StyledTableAddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: var(--primary);
  width: 170px;
  height: 30px;
  color: var(--white);
  border-radius: 8px;
  cursor: pointer;
`;

const TableAddButton = ({ text, type }) => {
  const context = useContext(Context);
  const { setIsAddFormContractsOpen, setIsAddFormEdictsOpen, setIsAddFormRecordsOpen, setIsAddFormArchiveOpen } = context;
  const settingFunc =
    type === "addContract"
      ? setIsAddFormContractsOpen
      : type === "addEdicts"
      ? setIsAddFormEdictsOpen
      : type === "addRecord"
      ? setIsAddFormRecordsOpen
      : type === "addArchive"
      ? setIsAddFormArchiveOpen
      : "";
  return (
    <StyledTableAddButton onClick={() => settingFunc(true)}>
      <FontAwesomeIcon icon={faPlus} />
      <p>{text}</p>
    </StyledTableAddButton>
  );
};

export default TableAddButton;
