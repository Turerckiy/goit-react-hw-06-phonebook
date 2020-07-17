import React, { Component } from "react";
import { connect } from "react-redux";
import shortID from "shortid";

// import sytles from "./Phonebook.module.css";
import config from "../config.json";
import { InputForm } from "./InputForm";
import { BntFormSubmit } from "../Buttons/BntFormSubmit";
import { addContact } from "../redux/actions/actions.js";
// const {} = sytles;
const initialState = {
  name: "",
  phone: "",
  password: "",
  gender: "",
  id: "",
};

class SearchForm extends Component {
  state = { ...initialState };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  contactsVerification = (clients, client1) => {
    return clients.some((client) => client.name === client1.name);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const client = {
      ...this.state,
      date: new Date().toDateString(),
      id: shortID(),
    };
    this.props.addContact(client);

    // if (this.state.name !== "" && this.state.phone !== "") {
    //   if (!this.contactsVerification(this.props.clients, client)) {
    //     this.props.addContact(client);
    //     console.log('this.props.clients', this.props.clients)
    //   }
    // }
    // this.resetForm();
    this.setState(initialState);
  };
  // resetForm = () => {
  //   this.setState(
  //     {
  //       name: "",
  //       password: "",
  //       gender: "",
  //       phone: "",
  //     },
  //     () => console.log(this.state)
  //   );
  // };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ width: 300, border: "2px dotted white" }}
      >
        <InputForm
          handleChange={this.handleChange}
          value={this.state.name}
          config={config.inputName}
        />
        <InputForm
          handleChange={this.handleChange}
          value={this.state.phone}
          config={config.inputPhone}
        />
        <label>
          <select
            style={{
              width: 280,
              border: "2px dotted white",
              backgroundColor: "grey",
            }}
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <BntFormSubmit />
      </form>
    );
  }
}
const mapDispatchToProps = (dispath) => {
  return {
    addContact: (client) => dispath(addContact(client)),
};}

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {clients: state.appReducer.clients, // filter: state.appReducer.filter,};}
}}
// const mapDispatchToProps = (dispath) => ({
//   addContact: (client) => dispath(addContact(client)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
