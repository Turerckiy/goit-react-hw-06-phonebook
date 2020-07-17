import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";

import ContactList from "../Contacts/ContactList";
import { onFilterContact, onClearArray } from "../redux/actions/actions";

const initialState = {
  filter: "",
};

class FindedContact extends Component {
  state = initialState;
  handleChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };
  async componentDidUpdate(prevProps, prevState) {
    const filteredClients = await this.userSelector(
      this.props.clients,
      this.state.filter
    );
    if (prevState.filter !== this.state.filter && this.state.filter === "") {
      console.log('this.state.filter === ""', this.state.filter === "");
      return this.props.onClearArray();
    }
    if (prevState.filter === this.state.filter) return;
    this.props.filterContact(filteredClients);
    // this.setState((state) => ({ ...state, filteredClients }));
  }

  userSelector = (clients, filter) => {
    const { appReducer } = clients;
    return appReducer.filter((client) =>
      client.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    return (
      <>
        <input
          type="text"
          placeholder={"Enter name to Saerch..."}
          value={this.state.filter}
          onChange={this.handleChange}
        />
        <div>
          <ContactList />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    clients: state.appReducer,
  };
};

const mapDispatchToProps = (dispath) => ({
  filterContact: (arr) => dispath(onFilterContact(arr)),
  onClearArray: () => dispath(onClearArray()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FindedContact);
