import AddFormArchive from "@AddFormArchive";
import DataListArchive from "@DataListArchive";
import Title from "@Title";

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
