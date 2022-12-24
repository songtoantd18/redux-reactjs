import React, { useState } from "react";
import { connect } from "react-redux";
import {
  handleDelete,
  changeContentTodo,
  changeStatusTodo,
  unDeleteTodo,
} from "../action";

const NameList = ({
  names,
  handleDelete,
  changeStatusTodo,
  changeContentTodo,
}) => {
  const [newText, setNewText] = useState([""]);
  const [vidu, setVidu] = useState(false);
  return (
    <div>
      <ul>
        {names.map((item) => {
          return (
            <li key={item.id}>
              {item.text}
              <button onClick={() => handleDelete(item.id)}>X</button>

              {vidu ? <input /> : item.text}
              <button onClick={() => setVidu(true)}>vidu</button>

              {item.isEdit ? (
                <form>
                  <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("newText:", newText);
                      changeContentTodo(item.id, newText);
                    }}
                  >
                    Submit
                  </button>
                  <button onClick={() => unDeleteTodo(item.id)}>Cancel</button>
                </form>
              ) : (
                <button
                  onClick={() => {
                    changeStatusTodo(item.id);
                    setNewText(item.text);
                  }}
                >
                  Edit
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { names: state.name };
};
const mapDispatchToProps = (dispatch) => ({
  // dispatchDeleteName: (id) => dispatch(handleDelete(id)),
  handleDelete: (id) => dispatch(handleDelete(id)),
  changeStatusTodo: (id) => dispatch(changeStatusTodo(id)),
  changeContentTodo: (id, text) => dispatch(changeContentTodo(id, text)),
  unDeleteTodo: (id) => dispatch(unDeleteTodo(id)),

  // changeContentTodo: (id) => dispatch(changeStatusTodo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NameList);
