import React, { useContext } from "react";
import Title from "../../Title/Title.jsx";
import AddFormRecord from "../../_AddForms/AddFormRecord/AddFormRecord.jsx";
import DataListRecord from "../../_DataLists/DataListRecord/DataListRecord.jsx";
import { Context } from "../../../Root.js";

const Record = () => {
  const context = useContext(Context)
  const { isAddFormRecordsOpen } = context;
  return (
    <>
      <Title text="Rejestr koncertów" />
      {isAddFormRecordsOpen && <AddFormRecord />}
      <DataListRecord />
    </>
  );
};

export default Record;
