import React, { useContext } from "react";
import Title from "@Title";
import AddFormEdicts from "@AddFormEdicts";
import DataListEdicts from "@DataListEdicts";
import { Context } from "@root";

const Edicts = () => {
  const context = useContext(Context)
  const { isAddFormEdictsOpen } = context;
  return (
    <>
      <Title text="Rejestr zarządzeń FL" />
      {isAddFormEdictsOpen && <AddFormEdicts />}
      <DataListEdicts />
    </>
  );
};

export default Edicts;
