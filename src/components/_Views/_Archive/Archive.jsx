import AddFormArchive from "../../_AddForms/AddFormArchive/AddFormArchive";
import DataListArchive from "../../_DataLists/DataListArchive/DataListArchive";
import Title from "../../Title/Title";

function Archive() {
  return (
    <>
      <Title text={"System archiwizacji FL"} />
      <AddFormArchive />
      <DataListArchive />
    </>
  );
}

export default Archive;
