import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../../Root";

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

const TableAddButton = ({ btnText, type }) => {
  const context = useContext(Context);
  const { setIsAddFormContractsOpen, setIsAddFormEdictsOpen, setIsAddFormRecordsOpen, setIsAddFormArchiveOpen } = context;
  const settingFunc =
    type === "contracts"
      ? setIsAddFormContractsOpen
      : type === "edicts"
      ? setIsAddFormEdictsOpen
      : type === "records"
      ? setIsAddFormRecordsOpen
      : type === "archive"
      ? setIsAddFormArchiveOpen
      : "";
  return (
    <StyledTableAddButton onClick={() => settingFunc(true)}>
      <FontAwesomeIcon icon={faPlus} />
      <p>{btnText}</p>
    </StyledTableAddButton>
  );
};

export default TableAddButton;
