import React, { useContext } from "react";
import Title from "@Title";
import AddFormContracts from "@AddFormContracts";
import DataListContracts from "@DataListContracts";
import { Context } from "@root";

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
