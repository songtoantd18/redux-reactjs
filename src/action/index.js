let nextNameId = 0;

export const addName = (text) => {
  return {
    type: "ADD_NAME",
    id: nextNameId++,
    text,
  };
};
export const handleDelete = (id) => {
  console.log("id:", id);
  return {
    type: "DELETE_NAME",
    id,
  };
};
export const editTodo = (id, text) => ({
  type: "EDIT_TODO",
  id,
  text,
});
