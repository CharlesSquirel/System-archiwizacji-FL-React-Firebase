import React from "react";
import Title from "../../Title/Title.jsx";
import AddFormRecord from "../../_AddForms/AddFormRecord/AddFormRecord.jsx";
import DataListRecord from "../../_DataLists/DataListRecord/DataListRecord.jsx";

const Record = () => {
  return (
    <>
      <Title text="Rejestr koncertów" />
      <AddFormRecord />
      <DataListRecord />
    </>
  );
};

export default Record;
