import React, { useState } from "react";
import { connect } from "react-redux";
import { handleDelete } from "../action";
import { editTodo } from "./../action/index";

const NameList = ({ names, handleDelete, editTodo, id }) => {
  console.log("id:", id);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = (id) => {
    console.log("id:", id);
    setIsEdit(false);
    // editTodo({
    //   id,
    //   data: { id, text: value },
    // });
  };
  return (
    <div>
      <ul>
        {names.map((item) => {
          return (
            <li key={item.id}>
              {isEdit ? (
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              ) : (
                item.text
              )}
              {isEdit ? (
                <button onClick={handleSubmit}>submit</button>
              ) : (
                <button onClick={() => setIsEdit(true)}>Edit</button>
              )}

              <button onClick={() => handleDelete(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state:", state);
  return { names: state.name };
};
const mapDispatchToProps = (dispatch) => ({
  // dispatchDeleteName: (id) => dispatch(handleDelete(id)),
  handleDelete: (id) => dispatch(handleDelete(id)),
  editTodo: (id, text) => dispatch(editTodo(id, text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NameList);
