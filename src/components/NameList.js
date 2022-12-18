import React from "react";
import { connect } from "react-redux";

const NameList = ({ names }) => {
  console.log("names:", names);
  return (
    <div>
      <ul>
        {names.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state:", state);
  return { names: state.name };
};

export default connect(mapStateToProps)(NameList);
