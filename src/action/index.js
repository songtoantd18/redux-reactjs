let nextNameId = 0;

export const addName = (text) => {
  return {
    // type: "ADD_NAME",
    // id: nextNameId++,
    // isEdit: false,
    // text,

    type: "ADD_NAME",
    id: nextNameId++,
    // time: time,
    isEdit: false,
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
export const changeContentTodo = (id, text) => ({
  type: "CHANGE_CONTENT",
  isEdit: false,
  id,
  text,
});

export const changeStatusTodo = (id) => ({
  type: "CHANGE_STATUS",
  isEdit: true,
  id,
});
export const unDeleteTodo = (id) => ({
  type: "UN_DELETE_TODO",
  id,
});
