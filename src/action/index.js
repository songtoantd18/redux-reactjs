let nexNameId = 0;

export const addName = (text) => {
  console.log("text:", text);
  return {
    type: "ADD_NAME",
    id: nexNameId++,
    text,
  };
};
export const handleEdit = (id) => {
  console.log("id:", "DAY LA EDIT");
  return {
    type: "EDIT_NAME",
    id,
  };
};
export const handleDelete = (id) => {
  return {
    type: "DELETE_NAME",
    id,
  };
};
