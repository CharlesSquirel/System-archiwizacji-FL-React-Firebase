import React from "react";
import Title from "../../Title/Title";
import AddFormRecord from "../../_AddForms/AddFormRecord/AddFormRecord";
import DataListRecord from "../../_DataLists/DataListRecord/DataListRecord";

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
