import React, { useState } from "react";
import { connect } from "react-redux";
import { handleDelete } from "../action";
import { editTodo } from "./../action/index";

const NameList = ({ names, handleDelete, editTodo, id }) => {
  return (
    <div>
      <ul>
        {names.map((item) => {
          return (
            <li key={item.id}>
              {item.text}

              <button onClick={() => handleDelete(item.id)}>X</button>
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
});
export default connect(mapStateToProps, mapDispatchToProps)(NameList);
