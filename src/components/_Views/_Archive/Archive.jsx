import { useContext } from "react";
import AddFormArchive from "../../_AddForms/AddFormArchive/AddFormArchive.jsx";
import DataListArchive from "../../_DataLists/DataListArchive/DataListArchive.jsx";
import Title from "../../Title/Title.jsx";
import { Context } from "../../../Root.js";

function Archive() {
  const context = useContext(Context)
  const { isAddFormArchiveOpen } = context;
  return (
    <>
      <Title text={"System archiwizacji FL"} />
      {isAddFormArchiveOpen && <AddFormArchive />}
      <DataListArchive />
    </>
  );
}

export default Archive;
