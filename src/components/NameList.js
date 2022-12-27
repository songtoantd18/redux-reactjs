import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  handleDelete,
  changeContentTodo,
  changeStatusTodo,
  unDeleteTodo,
  editItem,
} from "../action";

const NameList = ({
  names,
  handleDelete,
  changeStatusTodo,
  changeContentTodo,
  editItem,
}) => {
  const [newText, setNewText] = useState([""]);
  const [vidu, setVidu] = useState(false);
  const [editName, setEditName] = useState({
    currentId: "",
    isEditName: false,
  });
  const handleEdit = () => {
    return;
  };

  return (
    <div>
      <ul>
        {names.map((item) => {
          return (
            <li key={item.id}>
              //////////////////////////////////////////
              {/* {item.id === editName.currentId &&
                editName.isEditName === true} ? <input />:{item.id} */}
              {item.id === editName.currentId &&
              editName.isEditName === true ? (
                <input />
              ) : (
                item.text
              )}
              <button
                onClick={(e) =>
                  setEditName({
                    currentId: item.id,
                    isEditName: true,
                  })
                }
              >
                edit new
              </button>
              ///////////////////////////////////////////
              {item.text}
              <button onClick={() => handleDelete(item.id)}>X</button>
              {item.isEdit ? <input /> : item.text}
              <button onClick={() => editItem(item.id)}>vidu</button>
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
  editItem: (id, text) => dispatch(editItem(id, text)),

  // changeContentTodo: (id) => dispatch(changeStatusTodo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NameList);
