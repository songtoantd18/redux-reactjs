const name = (state = [], action) => {
  switch (action.type) {
    case "ADD_NAME":
      console.log("{state,action}:", { state, action });
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
    case "DELETE_NAME":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      const { id, data } = action.payload;
      const indexTask = state.findIndex((item) => item.id === id);
      if (indexTask === -1) return state;
      const todos = state;
      todos[indexTask] = data;
      return todos;
    case "MARK_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, marked: !todo.marked } : todo
      );

    case "MARK_ALL":
      const areAllMarked = state.every((todo) => todo.marked);
      return state.map((todo) => ({ ...todo, marked: !areAllMarked }));

    case "CLEAR_MARKED":
      return state.filter((todo) => todo.marked === false);

    default:
      return state;
  }
};
export default name;
