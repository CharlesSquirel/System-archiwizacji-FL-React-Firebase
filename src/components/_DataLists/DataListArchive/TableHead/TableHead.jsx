import React, { useContext, useState } from "react";
import { StyledTableHead, StyledTableHeadBox } from "../../../GlobalStyle/GlobalComponents";
import SearchBar from "../../../SearchBar/SearchBar";
import TableAddButton from "../../TableAddButton/TableAddButton";
import SortDataInput from "../../SortDataInput/SortDataInput";
import { Context } from "../../../../Root";

const TableHead = ({  btnText, type }) => {
  const context = useContext(Context);
  const { credentialsArchive, setCredentialsArchive, credentialsContracts, setCredentialsContracts, credentialsEdicts, credentialsRecord, setCredentialsEdicts, setCredentialsRecord } = context;
  const [sortOrder, setSortOrder] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const credentials = type === "archive" ? credentialsArchive : type === "contracts" ? credentialsContracts : type==="edicts" ? credentialsEdicts : credentialsRecord;
  const settingFunc = type === "archive" ? setCredentialsArchive : type === "contracts" ? setCredentialsContracts : type==="edicts" ? setCredentialsEdicts : setCredentialsRecord;
  return (
    <StyledTableHead>
      <SortDataInput setSortOrder={setSortOrder} isSortOpen={isSortOpen} setIsSortOpen={setIsSortOpen} type={type}/>
      <StyledTableHeadBox>
        <SearchBar
          sortOrder={sortOrder}
          credentials={credentials}
          settingFunc={settingFunc}
          type={type}
        />
        <TableAddButton btnText={btnText} type={type} />
      </StyledTableHeadBox>
    </StyledTableHead>
  );
};

export default TableHead;
