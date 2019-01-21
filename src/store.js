import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import api from "./lib/api";
import setAuthorizationToken from "./utils/setAuthorizationToken";

const defaultInitialState = {
  studentList: []
};

export const store = createStore(
  reducer,
  defaultInitialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware.withExtraArgument(api)))

);
if (localStorage.jwtToken) {
  console.log(localStorage.jwtToken);
  setAuthorizationToken(localStorage.jwtToken);
}