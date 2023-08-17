import React from "react";
import Title from "@Title";
import AddFormRecord from "@AddFormRecord";
import DataListRecord from "@DataListRecord";

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
