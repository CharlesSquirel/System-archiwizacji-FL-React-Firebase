import React from "react";
import Title from "../../Title/Title";
import AddFormContracts from "../../_AddForms/AddFormContracts/AddFormContracts";
import DataListContracts from "../../_DataLists/DataListContracts/DataListContracts";

const Contracts = () => {
  return (
    <>
      <Title text="Rejestr umów FL" />
      <AddFormContracts />
      <DataListContracts />
    </>
  );
};

export default Contracts;
