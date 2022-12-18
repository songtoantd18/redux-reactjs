import React from "react";
import NameList from "./components/NameList";
import AddTodo from "./containers/AddTodo";

const App = () => {
  return (
    <div>
      <AddTodo />
      <hr />
      <NameList />
    </div>
  );
};

export default App;
