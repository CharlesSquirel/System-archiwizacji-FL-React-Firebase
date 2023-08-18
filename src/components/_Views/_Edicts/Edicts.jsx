import React, { useContext } from "react";
import Title from "../../Title/Title.jsx";
import AddFormEdicts from "../../_AddForms/AddFormEdicts/AddFormEdicts.jsx";
import DataListEdicts from "../../_DataLists/DataListEdicts/DataListEdicts.jsx";
import { Context } from "../../../Root";

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
