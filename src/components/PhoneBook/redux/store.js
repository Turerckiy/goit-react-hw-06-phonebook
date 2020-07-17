import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import {
  persistStore,
  persistReducer,
} from "redux-persist"; /* save to localSTORE */
import storage from "redux-persist/lib/storage"; /* save to localSTORE */

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const persistConfig = {
  key: "root",
  storage,
  //   blacklist: ["todo/id"],
};

export const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
); /* save to localSTORE */
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
); /* save to localSTORE */
export const persistor = persistStore(store); /* save to localSTORE */

// console.log("store.getState()", store.getState());
