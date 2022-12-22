const name = (state = [], action) => {
  console.log("state:", state);
  switch (action.type) {
    case "ADD_NAME":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "DELETE_NAME":
      console.log("state:", state);
      console.log("2:", 2);
      return state.filter((item) => item.id !== action.id);
    // case "EDIT_NAME":
    //   console.log("1:", 1);
    //   return state.find((item) => {
    //       return item.id > 2;
    //   });

    default:
      return state;
  }
};
export default name;
