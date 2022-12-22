import React, { useState } from "react";
import { addName } from "../action";
import { connect } from "react-redux";
const AddName = ({ dispatchAddName }) => {
  const [name, setName] = useState("song toan");
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

export default connect(() => {}, mapDispatchToProps)(AddName);
