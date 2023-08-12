export const sortCredentials = (obj, setState, value) => {
  let sortedObj = Object.entries(obj);
  switch (value) {
    case "dateAsc":
      sortedObj.sort(([key1, value1], [key2, value2]) => value1.date.localeCompare(value2.date));
      break;
    case "dateDesc":
      sortedObj.sort(([key1, value1], [key2, value2]) => value2.date.localeCompare(value1.date));
      break;
    case "signAsc":
      sortedObj.sort(([key1, value1], [key2, value2]) => value1.signature.localeCompare(value2.signature));
      break;
    case "signDesc":
      sortedObj.sort(([key1, value1], [key2, value2]) => value2.signature.localeCompare(value1.signature));
      break;
    default:
      break;
  }
  sortedObj = Object.fromEntries(sortedObj);
  setState(sortedObj);
};

export const sortCredentialsEdicts = (obj, setState, value) => {
  let sortedObj = Object.entries(obj);
  switch (value) {
    case "dateAsc":
      sortedObj.sort(([key1, value1], [key2, value2]) => value1.date.localeCompare(value2.date));
      break;
    case "dateDesc":
      sortedObj.sort(([key1, value1], [key2, value2]) => value2.date.localeCompare(value1.date));
      break;
    case "signAsc":
      sortedObj.sort(([key1, value1], [key2, value2]) => value1.number.localeCompare(value2.number));
      break;
    case "signDesc":
      sortedObj.sort(([key1, value1], [key2, value2]) => value2.number.localeCompare(value1.number));
      break;
    default:
      break;
  }
  sortedObj = Object.fromEntries(sortedObj);
  setState(sortedObj);
};
