import React, { useContext, useState } from "react";
import { StyledTableHead, StyledTableHeadBox } from "../../../GlobalStyle/GlobalComponents";
import SearchBarArchive from "../../../_SearchBars/SearchBarArchive/SearchBarArchive";
import TableAddButton from "../../TableAddButton/TableAddButton";
import SortDataInput from "../../SortDataInput/SortDataInput";
import { Context } from "../../../../Root";

const TableHead = ({ btnType, btnText, searchBarType }) => {
  const context = useContext(Context);
  const { credentialsArchive, setCredentialsArchive, credentialsContracts, setCredentialsContracts } = context;
  const [sortOrder, setSortOrder] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);
  return (
    <StyledTableHead>
      <SortDataInput setSortOrder={setSortOrder} isSortOpen={isSortOpen} setIsSortOpen={setIsSortOpen} />
      <StyledTableHeadBox>
        <SearchBarArchive
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          credentials={searchBarType === "archive" ? credentialsArchive : credentialsContracts}
          settingFunc={searchBarType === "archive" ? setCredentialsArchive : setCredentialsContracts}
          searchBarType={searchBarType}
        />
        <TableAddButton text={btnText} type={btnType} />
      </StyledTableHeadBox>
    </StyledTableHead>
  );
};

export default TableHead;
