import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";
import { Provider } from "react-redux";
import { store, persistor } from "./components/PhoneBook/redux/store";
import App from "./components/PhoneBook/App";
import { PersistGate } from "redux-persist/integration/react";
// console.log('persistor', persistor.getState())
console.log('store.getState(', store.getState())
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
