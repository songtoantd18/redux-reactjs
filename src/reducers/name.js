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
    default:
      return state;
  }
};
export default name;
