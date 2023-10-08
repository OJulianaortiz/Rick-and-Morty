import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/reducer";

import thunkMiddleware from "redux-thunk";

const composerEnhacer = window._REDUX_DEVTOOLS_EXTENSION_ || compose;

const store = createStore(
  rootReducer,
  composerEnhacer(applyMiddleware(thunkMiddleware))
);

export default store;
