import React from "react";
import Title from "@Title";
import AddFormEdicts from "@AddFormEdicts";
import DataListEdicts from "@DataListEdicts";

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
