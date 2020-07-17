import { combineReducers } from "redux";
// import { addContactReduser } from "./redusers";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  appReducer,
//   addContactReduser,
});

export default rootReducer;
