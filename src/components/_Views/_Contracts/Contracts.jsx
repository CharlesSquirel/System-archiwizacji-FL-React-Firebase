import React from "react";
import Title from "../../Title/Title";
import AddFormContracts from "../../AddFormContracts/AddFormContracts";
import DataListContracts from "../../DataListContracts/DataListContracts";

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
