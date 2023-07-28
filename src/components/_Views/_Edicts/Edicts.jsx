import React from "react";
import Title from "../../Title/Title";
import AddFormEdicts from "../../AddFormEdicts/AddFormEdicts";
import DataListEdicts from "../../DataListEdicts/DataListEdicts";

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
