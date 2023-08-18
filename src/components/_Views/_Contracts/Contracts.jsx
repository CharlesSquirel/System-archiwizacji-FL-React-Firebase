import React, { useContext } from "react";
import Title from "../../Title/Title.jsx";
import AddFormContracts from "../../_AddForms/AddFormContracts/AddFormContracts.jsx";
import DataListContracts from "../../_DataLists/DataListContracts/DataListContracts.jsx";
import { Context } from "../../../Root";

const Contracts = () => {
  const context = useContext(Context)
  const { isAddFormContractsOpen } = context;
  return (
    <>
      <Title text="Rejestr umów FL" />
      {isAddFormContractsOpen && <AddFormContracts />}
      <DataListContracts />
    </>
  );
};

export default Contracts;
