import React from "react";
import { connect } from "react-redux";
import { delComponent } from "../redux/actions/actions";

const BntFormDelete = ({ contacts, id, onDelComponent }) => {
  return (
    <button
      style={{ margin: 10, width: 50, height: 25, border: "2px dotted white" }}
      onClick={() => onDelComponent(contacts, id)}
    >
      Delete
    </button>
  );
};
const mapStateToProps = (state) => ({contacts: state.appReducer});

export default connect(mapStateToProps, {onDelComponent: delComponent})(BntFormDelete);
