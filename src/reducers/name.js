const name = (state = [], action) => {
  console.log("action:", action);
  switch (action.type) {
    case "ADD_NAME":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          time: action.time,
          isEdit: false,
        },
      ];
    case "DELETE_NAME":
      return state.filter((todo) => todo.id !== action.id);
    case "CHANGE_STATUS":
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, isEdit: !todo.isEdit }
          : { ...todo, isEdit: todo.isEdit ? !todo.isEdit : todo.isEdit };
      });
    case "CHANGE_CONTENT":
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, isEdit: !todo.isEdit, text: action.text }
          : todo;
      });
    case "EDIT_ITEM":
      const { id } = action;
      const indexTask = state.findIndex((item) => item.id === id);
      state[indexTask].isEdit = true;
      return [...state];
    // console.log("indexTask:", indexTask);
    // if (indexTask === -1) return state;
    // const todos = state;

    // console.log("action:", action);
    // return state;

    case "UN_DELETE_TODO":
      return state.map((todo) => {
        return todo.id === action.id ? { ...todo, isEdit: !todo.isEdit } : todo;
      });
    default:
      return state;
  }
};
export default name;
