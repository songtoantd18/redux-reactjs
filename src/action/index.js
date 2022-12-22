let nextNameId = 0;

export const addName = (text) => {
  return {
    type: "ADD_NAME",
    id: nextNameId++,
    text,
  };
};
export const handleDelete = (id) => {
  return {
    type: "DELETE_NAME",
    id,
  };
};
export function editTodo(id, text) {
  return {
    type: "EDIT_TODO",
    id,
    text,
  };
}
