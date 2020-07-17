import { combineReducers } from "redux";

import types from "./../actions/actionTipes";
const initialState = [
  { id: "323423r", name: "Rosie Simpson", phone: "459-12-56" },
  { id: "iwrwe2", name: "Hermione Kline", phone: "443-89-12" },
  { id: "ir43d-3", name: "Eden Clements", phone: "645-17-79" },
  { id: "idwer-4", name: "Annie Copeland", phone: "227-91-26" },
];

const appReducer = (state = [...initialState], actions) => {
  // const appReducer = (state = [...initialState], actions) => {
  // console.log("actionsappReducer", actions);
  switch (actions.type) {
    case types.ADD_CONTACT:
      return [...state, actions.payload.contact];

    case types.DELETE_CONTACT:
      const filtered = state.filter((contact) => {
        return contact.id !== actions.payload;
      });
      return filtered;
    default:
      return state;
  }
};

//filter
const filteredReducer = (state = [], actions) => {
  // console.log("actionfilteredReducer", actions.payload);

  switch (actions.type) {
    case types.FILTER_CONTACT:
      console.log("object", actions.payload);
      return actions.payload;

    case types.DELETE_CONTACT:
      const filtered = state.filter((contact) => {
        return contact.id !== actions.payload;
      });
      return filtered;

    case types.CLEAR_ARRAY:
      return [];

    default:
      return state;
  }
};

export default combineReducers({ appReducer, filteredReducer });
