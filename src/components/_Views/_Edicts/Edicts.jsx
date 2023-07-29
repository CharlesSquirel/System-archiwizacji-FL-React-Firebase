import React from "react";
import Title from "../../Title/Title";
import AddFormEdicts from "../../_AddForms/AddFormEdicts/AddFormEdicts.jsx";
import DataListEdicts from "../../_DataLists/DataListEdicts/DataListEdicts";

const Edicts = () => {
  return (
    <>
      <Title text="Rejestr zarządzeń FL" />
      <AddFormEdicts />
      <DataListEdicts />
    </>
  );
};

export default Edicts;
