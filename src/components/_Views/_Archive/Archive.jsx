import AddFormArchive from "../../AddFormArchive/AddFormArchive";
import DataListArchive from "../../DataList/DataList";
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
