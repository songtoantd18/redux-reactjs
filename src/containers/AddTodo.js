import React, { useState } from "react";
import { addName } from "./../action/index";
import { connect } from "react-redux";

const AddTodo = ({ dispatchAddName }) => {
  const [name, setName] = useState("");
  return (
    <div>
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatchAddName(name);
            setName("");
          }}
        >
          add name
        </button>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  dispatchAddName: (text) => dispatch(addName(text)),
});

export default connect(() => {}, mapDispatchToProps)(AddTodo);
