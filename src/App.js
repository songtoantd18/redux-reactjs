import React from "react";
import { createStore } from "redux";

const App = () => {
  var initialState = {
    status: false,
    sort: {
      by: "name",
      value: "1",
    },
  };
  var myReducer = (state = initialState, action) => {
    if (action.type === "TOGGLE_STATUS") {
      state.status = !state.status;
      return state;
    }
    if (action.type === "SORT") {
      var { by, value } = action.sort;
      var { status } = state;
      return {
        status: status,
        sort: {
          by: by,
          value: value,
        },
      };
    }
    return state;
  };
  const store = createStore(myReducer);
  console.log("default:", store.getState());

  var action = { type: "TOGGLE_STATUS" };
  store.dispatch(action);
  console.log("toggle-status:", store.getState());
  ///////
  var sortAction = {
    type: "SORT",
    sort: {
      by: "ok",
      value: 2,
      ok: "1321313",
    },
  };
  store.dispatch(sortAction);
  console.log("sort:", store.getState());

  return <div></div>;
};

export default App;
