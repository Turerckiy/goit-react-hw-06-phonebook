import types from "./actionTipes";

export const addContact = (contact) => {
  return {
    type: types.ADD_CONTACT,
    payload: {
      contact,
    },
  };
};

export const delComponent = (contacts, id) => {
  return {
    type: types.DELETE_CONTACT,
    payload: id,
  };
};

export const onFilterContact = (filterContact) => {
  console.log("filterContact", filterContact);
  return {
    type: types.FILTER_CONTACT,

    payload: filterContact,
  };
};
export const onClearArray = () => {

  return {
    type: types.CLEAR_ARRAY,
  };
};
