import React from "react";
import { connect } from "react-redux";
import { handleDelete } from "../action";

const NameList = ({ names, handleDelete }) => {
  console.log("names:", names);
  return (
    <div>
      <ul>
        {names.map((item) => {
          return (
            <li key={item.id}>
              {item.text}
              <button onClick={() => handleDelete(item.id)}>X</button>
              <button>Edit</button>
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
});
export default connect(mapStateToProps, mapDispatchToProps)(NameList);
