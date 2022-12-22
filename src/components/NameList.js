import React from "react";
import { connect } from "react-redux";
import { handleDelete, handleEdit } from "./../action/index";

const NameList = ({ handleDelete, handleEdit, names }) => {
  const [newName, setNewName] = useState("");
  return (
    <div>
      {names.map((item) => {
        return (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)}>delete</button>
            <button onClick={() => handleEdit(item.id)}>edit</button>
          </li>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    names: state.name,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleDelete: (id) => dispatch(handleDelete(id)),
  handleEdit: (id) => dispatch(handleEdit(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NameList);
