import React from "react";
import NameList from "./components/NameList";
import AddName from "./containers/AddName";

const App = () => {
  return (
    <div>
      <AddName />
      <NameList />
    </div>
  );
};

export default App;
